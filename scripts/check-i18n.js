#!/usr/bin/env node
"use strict";

const path = require("path");
const i18n = require(path.join(__dirname, "../src/_data/i18n.js"));

// Sections that must match between locales (locale-specific metadata is excluded)
const CONTENT_SECTIONS = ["nav", "home", "about", "visit", "gallery", "contact", "footer"];

function getKeyPaths(value, prefix) {
  if (value === null || value === undefined) {
    return [prefix];
  }
  if (Array.isArray(value)) {
    if (value.length === 0) return [prefix + "[]"];
    // For arrays of objects, check all elements; for arrays of primitives, just record the leaf
    if (typeof value[0] === "object" && value[0] !== null) {
      const paths = [];
      for (let i = 0; i < value.length; i++) {
        paths.push(...getKeyPaths(value[i], `${prefix}[${i}]`));
      }
      return paths;
    }
    return [prefix + "[]"];
  }
  if (typeof value === "object") {
    const paths = [];
    for (const key of Object.keys(value)) {
      paths.push(...getKeyPaths(value[key], prefix ? `${prefix}.${key}` : key));
    }
    return paths;
  }
  return [prefix];
}

function checkSection(esVal, enVal, sectionName) {
  const esPaths = new Set(getKeyPaths(esVal, sectionName));
  const enPaths = new Set(getKeyPaths(enVal, sectionName));

  const errors = [];
  for (const p of esPaths) {
    if (!enPaths.has(p)) errors.push(`  MISSING in en: ${p}`);
  }
  for (const p of enPaths) {
    if (!esPaths.has(p)) errors.push(`  EXTRA   in en: ${p}`);
  }
  return errors;
}

const es = i18n.find((l) => l.code === "es");
const en = i18n.find((l) => l.code === "en");

if (!es) { console.error("check-i18n: no 'es' locale found in i18n.js"); process.exit(1); }
if (!en) { console.error("check-i18n: no 'en' locale found in i18n.js"); process.exit(1); }

let allErrors = [];
for (const section of CONTENT_SECTIONS) {
  const errors = checkSection(es[section], en[section], section);
  allErrors = allErrors.concat(errors);
}

if (allErrors.length > 0) {
  console.error("i18n mismatch:");
  allErrors.forEach((e) => console.error(e));
  console.error(`\n${allErrors.length} error(s). Fix before building.`);
  process.exit(1);
}

console.log("i18n OK — es and en are consistent.");
