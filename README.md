 # Quickfolio - Portfolio Landing Page

A modern, responsive portfolio landing page built with Next.js and deployed on Cloudflare Pages.

## Deployment Guide

### Prerequisites

1. Node.js 18 or later
2. npm (comes with Node.js)
3. A Cloudflare account
4. Wrangler CLI (Cloudflare's deployment tool)

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

### Deploying to Cloudflare Pages

1. **Install Wrangler CLI** (if not already installed)
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   wrangler login
   ```
   This will open your browser to authenticate with Cloudflare.

3. **Build the project**
   ```bash
   npm run build
   ```
   This will create a static export in the `out` directory.

4. **Deploy to Cloudflare Pages**
   ```bash
   npm run deploy
   ```
   This will deploy your site to `https://<project-name>.pages.dev`

### Configuration Files

- `next.config.mjs`: Configured for static export and optimized for Cloudflare Pages
- `wrangler.toml`: Contains Cloudflare-specific configuration

### Troubleshooting

If you encounter permission errors during build:
1. Close any programs that might be accessing the project directories
2. Run PowerShell as Administrator
3. Navigate to your project directory and try the build command again

If you get file size errors during deployment:
1. The project is configured to optimize bundle sizes for Cloudflare Pages' 25MB limit
2. If you still encounter issues, check the webpack configuration in `next.config.mjs`

### Custom Domain Setup

1. Go to the Cloudflare Pages dashboard
2. Select your project
3. Go to "Custom domains"
4. Click "Set up a custom domain"
5. Follow the instructions to add your domain

### Environment Variables

To add environment variables:
1. Go to the Cloudflare Pages dashboard
2. Select your project
3. Go to "Settings" > "Environment variables"
4. Add your variables for Production/Preview environments

## Project Structure

- `/app`: Next.js application routes and pages
- `/components`: React components
- `/styles`: CSS and styling files
- `/public`: Static assets
- `/out`: Production build output (generated after build)

## Support

For deployment issues:
- Check [Cloudflare Pages documentation](https://developers.cloudflare.com/pages)
- Visit [Next.js deployment documentation](https://nextjs.org/docs/deployment)
- Open an issue in this repository

## License

This project is licensed under the MIT License - see the LICENSE file for details