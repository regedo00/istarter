# iStarter Website

Strategic Financial Advisory for Tech Companies

## Prerequisites

- [Hugo](https://gohugo.io/) (latest stable version)
- Git (for version control)

## Getting Started

1. Install Hugo:
   ```bash
   # On macOS with Homebrew
   brew install hugo
   
   # On Linux
   # Download from https://github.com/gohugoio/hugo/releases
   ```

2. Clone the repository:
   ```bash
   git clone <repository-url>
   cd istarter
   ```

3. Run the development server:
   ```bash
   hugo server
   ```

4. Open your browser and visit `http://localhost:1313`

## Building for Production

To build the static site:

```bash
hugo
```

The generated files will be in the `public/` directory.

## Deployment to GitHub Pages

1. Build the site:
   ```bash
   hugo
   ```

2. Commit and push the `public/` directory to the `gh-pages` branch, or use GitHub Actions for automatic deployment.

## Project Structure

```
istarter/
├── config.yaml          # Hugo configuration
├── content/             # Content files (Markdown)
│   ├── _index.md        # Homepage
│   ├── about/           # About page
│   └── services/        # Services page
├── layouts/             # HTML templates
│   ├── _default/        # Default templates
│   ├── about/           # About page template
│   ├── services/        # Services page template
│   ├── index.html       # Homepage template
│   └── partials/        # Reusable partials
└── static/              # Static assets (CSS, JS, images)
    ├── css/
    ├── js/
    └── istarter_new.png
```

## Customization

- Edit `config.yaml` to change site settings
- Modify templates in `layouts/` to change the structure
- Update content in `content/` (Markdown files)
- Customize styles in `static/css/styles.css`
- Modify JavaScript in `static/js/script.js`
