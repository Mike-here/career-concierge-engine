---
name: pii-sanitization
description: Rules for scrubbing and masking sensitive personal data down to standard corporate-safe tokens.
version: 1.0.0
---

## When to Use
Mandatory execution step immediately preceding any final file export, workspace caching, or external pipeline delivery of an optimization draft.

## Data Masking Rules
- Look for numerical phone syntax strings matching `XXX-XXX-XXXX` and systematically overwrite with `[REDACTED FOR PRIVACY]`.
- Scan file headers for local physical addresses or regional indicators and replace with generic geographic placeholders.
- Ensure authentication flags or raw credential placeholders are stripped or flagged as critical violations if detected in code comments or script context blocks.
