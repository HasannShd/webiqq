# WebiQQ public backlink baseline

Audit date: 2026-07-17

This reproducible public-web baseline uses search discovery, source inspection, and live deployment checks. It is not a complete backlink count; that requires Google Search Console and analytics exports.

## Verified project links

| Project | Source repository | Live deployed bundle | Initial HTML | Destination |
| --- | --- | --- | --- | --- |
| Leading Trading Est. | Clickable branded link | Verified | Not present | `https://www.webiqq.com` |
| VIEL Gebäudeservice | Clickable branded link | Verified | Not present | `https://www.webiqq.com` |
| Peak Elite | Clickable branded link | Verified | Not present | `https://www.webiqq.com` |
| AlBourshaid | Clickable branded link | Verified | Not present | `https://www.webiqq.com` |

These are legitimate verified-project relationships. The branded wording is preferable to repeated commercial anchor text. The remaining technical improvement is to include each attribution in prerendered or server-rendered HTML, not only the hydrated JavaScript application.

## Other findings

- LTE also identifies WebiQQ in structured data, strengthening the parent-company relationship.
- Public search exposed a low-value Disqus profile; profile-link creation is not a priority.
- Unrelated companies use similar WebiQ/WebiQQ names outside the GCC. Consistent Bahrain/GCC entity citations will help disambiguate the brand.

## Data required for the complete audit

1. Search Console exports for top linking sites, linked pages, and linking text.
2. Analytics referral traffic and conversions for the previous 12 months.
3. Ownership status for Google Business Profile, Bing Places, Apple Business Connect, Clutch, and GoodFirms.
4. Exact public legal name, address/service area, and WebiQQ relationship to Leading Trading Est. for directory verification.

## Safety rules

- Reject paid dofollow placements, private blog networks, spun content, irrelevant multi-topic sites, and ranking guarantees.
- Prefer `WebiQQ`, an article title, or a plain URL as anchor text.
- Paid relationships must be disclosed and use `rel="sponsored"` or `nofollow` where appropriate.
- Do not disavow a weak link without evidence of manipulation or a manual-action risk.
