# FGCOG Duck Run 2 — Website Project Briefing

## Church overview

**Full name**: Full Gospel Church of God – Duck Run 2  
**Abbreviation**: FGCOG  
**Location**: Duck Run 2, Cayo District, Belize  (<https://maps.app.goo.gl/vCCnfgUzC3SFZ5gM8>)  
**Denomination**: Full Gospel Church of God (FGCOG) — a Pentecostal denomination with a significant national presence in Belize  
**Pastor**: Ismael Rodriguez (lead pastor, initiator of this website project)  
**National body**: Full Gospel Church of God Belize (Facebook: facebook.com/fgcogbz, headquartered in Belmopan)
**Language**: Primarily Spanish with English as secondary laguage.


### Denomination context
FGCOG has multiple congregations across Belize — Belmopan, Santa Elena, Orange Walk, San Pedro, San Jose, Santa Familia (Cayo District), and others. The denomination is active, Spanish-language-leaning, and Pentecostal in character (emphasis on evangelism, discipleship, baptism, Holy Spirit). The Duck Run 2 congregation currently has **no web presence whatsoever** — no website, no Google listing, no Facebook page found. This is a greenfield project.

Duck Run 2 is a village of ~455 residents in the Cayo District, south of Spanish Lookout.

---

## Website project

### Reference project
A comparable church website was previously built for Spanish Lookout EMMC:  
**Repo**: https://github.com/SpanishLookoutEMMC/website  
**Hosting**: Cloudflare Pages  
**Domain**: spanishlookoutemmc.com (registered on Cloudflare)

Use this as the structural and technical reference.

### This project's repo

**Repo**: https://github.com/DuckRun2FGCOG/website

### Hosting

use github pages. with a preview for each pull request. 

### Domain

Not yet registered. Suggested pattern: `fgcogduckrun2.com` or similar — confirm with Pastor Ismael.

### Language

Default language is Spanish but English is also supported -> Multilingual

## Open questions (to resolve with Pastor Ismael)

These were not yet answered at the time of the first meeting:

- **Exact brand color**: confirm the navy hex, or any official brand guidelines from national FGCOG
- **Site display name**: "FGCOG Duck Run 2" vs "Full Gospel Church of God – Duck Run 2" vs another preferred form
- **Service times and schedule**
- **Tagline or mission statement** (the Santa Elena congregation uses: "Center of restoration for a hurt world")
- **Domain name**: what domain should be registered?
- **Handover**: who should eventually own the GitHub repo and Cloudflare account? Does Ismael or anyone in the congregation have (or want) a GitHub account?
- **Contact information**: phone, email, physical address for the site
- **Photos**: any existing photos of the congregation, building, or events

---

## Technical notes

- The developer (Carlos, GitHub: happyherp) is a Java/Spring/Maven/Docker engineer with meaningful frontend experience; familiar with static site workflows and Cloudflare Pages from the EMMC project
- Keep the stack simple and static (no backend required) — same as EMMC