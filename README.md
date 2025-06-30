# SPFx Hero Web Part

Bring a hero section to your SharePoint pages.

Quick, hands-on starter kit.

## Who this is for

- You need a bold intro section on SharePoint.
- You use SPFx with React and Fluent UI.
- You want a ready-to-go web part.

## What you get

- Boilerplate SPFx solution
- React component for hero layout
- Fluent UI styling
- Build and deploy scripts

## Prerequisites

- Node.js v14 LTS
- Yeoman, Gulp CLI
- @microsoft/generator-sharepoint
- SharePoint Online tenant

## Setup steps

1. Clone the repo
   ```bash
   git clone https://github.com/your-org/spfx-hero-webpart.git
   cd spfx-hero-webpart

2. Clone the repo
   ```bash
   npm install

3. Trust dev certificate
   ```bash
   gulp trust-dev-cert
   
4. Start local workbench
   ```bash
   gulp serve
   
Open your tenant workbench URL in the browser.

## Project Layout
spfx-hero-webpart/
├── config
└── src/webparts/hero/
    ├── HeroWebPart.ts            # Renders React component
    ├── HeroWebPart.manifest.json
    └── components/
        ├── Hero.tsx              # UI logic
        └── IHeroProps.ts         # Prop types

##Build and deploy
    npm run build
    npm run bundle --ship
    npm run package-solution --ship

Upload the generated .sppkg file from sharepoint/solution to your App Catalog.

## Call to Action

Raise your SharePoint pages to hero status. Get in touch:
- Visit: https://digitalmacgyver.com
- Email: scottellis@digitalmacgyver.com

Questions? Ideas? Let’s make it yours!
   
