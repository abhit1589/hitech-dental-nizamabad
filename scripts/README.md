# Launch Path Studio Generator Scripts

This directory contains automation scripts for the Launch Path Studio build pipeline.

## Scripts

### `generate-from-intake.mjs`

**Purpose:** Main site generator — reads intake JSON and produces a configured clinic website.

**Usage:**
```bash
node scripts/generate-from-intake.mjs path/to/intake.json
```

**What it does:**
1. Validates intake data against schema requirements
2. Generates/updates `js/clinic-config.js` from intake
3. Updates HTML files with new domain (if changed)
4. Updates WhatsApp configuration in `js/main.js`
5. Creates backup of existing config (`clinic-config.js.backup`)

**Requirements:**
- Node.js 14+
- Valid intake JSON (see `examples/sample-intake.json`)

**See [PIPELINE.md](../PIPELINE.md) for complete workflow.**

---

## Future Scripts (Planned)

### `extract-colors.sh`
Auto-extract brand colors from logo using ImageMagick.

### `validate-intake.mjs`
Standalone intake validator (without generation).

### `batch-generate.sh`
Process multiple intake files for bulk site generation.

---

## Development

**Testing changes:**
```bash
# Test with sample intake
node scripts/generate-from-intake.mjs examples/sample-intake.json

# Check generated config
cat js/clinic-config.js

# Restore backup if needed
mv js/clinic-config.js.backup js/clinic-config.js
```

**Adding new scripts:**
1. Create `.mjs` or `.sh` file in this directory
2. Add documentation to this README
3. Update PIPELINE.md if it changes the workflow
4. Test with sample data before production use
