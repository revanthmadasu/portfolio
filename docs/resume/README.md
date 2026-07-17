# Resume source of truth

Raw résumé content, split by section, kept in the repo so a future session can
rebuild context cheaply — read only the relevant split instead of re-extracting
the DOCX and re-reading every `src/data` file.

- **Source DOCX:** `~/Desktop/job-search-2026/Revanth_Madasu_Resume_Contracting.docx`
  (lives outside the repo; this folder is the committed mirror, minus PII).
- **PII policy:** phone number is intentionally omitted — the portfolio never
  renders it. Email + LinkedIn + GitHub are already public on the site.

## These files are the source; `src/data/*` is the derived, rendered output

| Section split          | Rendered into                     |
| ---------------------- | --------------------------------- |
| `summary.md`           | `src/data/profile.ts` (summary, stats, highlights) |
| `experience.md`        | `src/data/experience.ts`          |
| `skills.md`            | `src/data/skills.ts`              |
| `education.md`         | (not currently rendered)          |

When the résumé changes: update the relevant split here, then re-derive the
matching `src/data` file. Skill icons resolve from `src/assets/img/skill-icons/`
by lowercased `iconKey`.
