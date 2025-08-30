# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Hugo-based blog site titled "Hussar place" focused on recording exploration. The site has been migrated from Jekyll to Hugo while preserving all content and functionality.

## Development Commands

### Local Development
```bash
# Serve the site locally with drafts
npm run dev
# or directly with Hugo
hugo server -D

# Serve without drafts  
npm run serve
# or
hugo server
```

The site will be available at http://localhost:1313 when running locally.

### Building
```bash
# Build the site
npm run build
# or
hugo

# Clean build artifacts
npm run clean
```

## Architecture & Structure

### Key Directories
- `content/posts/` - Blog posts in Markdown format with YAML frontmatter
- `content/` - Static pages (about, etc.)
- `layouts/` - Hugo HTML templates
- `static/` - Static assets (images, CSS, JavaScript)
- `data/` - Data files for Hugo
- `config.yaml` - Hugo configuration

### Configuration
- `config.yaml` - Main Hugo configuration file
- Site uses Hugo's default Goldmark for Markdown processing
- Pagination is set to 6 posts per page
- Google Analytics and Disqus comments are configured
- Authors are defined in config under params.authors

### Content Creation
- Blog posts go in `content/posts/` following Hugo's content structure
- Posts support frontmatter including title, date, author, categories, tags, image, description
- Authors supported: "sal", "john", "paul"
- Use `draft: false` to publish posts

### Migration Notes
- Jekyll frontmatter has been converted to Hugo format
- Image paths changed from `assets/images/` to `images/` (via static directory)
- Jekyll's `site.baseurl` references removed for Hugo compatibility
- Date format in frontmatter uses Hugo's expected format

### Hugo Features
- Built-in taxonomy support for categories and tags
- Fast build times and live reload during development
- Markdown with HTML support enabled via `unsafe: true`
- Syntax highlighting with GitHub style