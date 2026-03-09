# Icons
For icons, make sure to check ./windows98-icons or ./src/assets to find the appropriate pixelated Windows9X one. Never use emojis.

# Components
Do not create individual component README files
Always create css modules

# Design Tokens
All hardcoded values must use CSS variables from `src/styles/index.css`. Never add component-specific tokens to the theme.

Token naming conventions:
- **Spacing** — multiplier × 2px base: `--space-N` (e.g. `--space-4` = 8px). Half-steps for off-grid values: `--space-4-5` = 9px
- **Sizes** — multiplier × 2px base: `--size-N` (e.g. `--size-8` = 16px). Same half-step rule applies
- **Typography** — t-shirt sizing: `--font-size-sm`, `--font-weight-bold`, `--line-height-tight`, `--letter-spacing-wide`
- **Borders** — `--border-1` (1px), `--border-2` (2px)
- **Colors** — `--win95-*` prefix

Box-shadow pixel offsets (e.g. `inset 1px 1px 0`) stay hardcoded.

# Commits
Follow conventional commits rules
Use one line commit messages
Don't include agent as co-author