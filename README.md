# spfx-hero-webpart
Purpose •  Sample SPFx project with React and Fluent UI

This repo demonstrates a modern SharePoint hero web part built with the SharePoint Framework (SPFx), React, and Fluent UI.

Prerequisites
Node.js v14.x LTS
Yeoman (yo), Gulp CLI (gulp)
@microsoft/generator-sharepoint

Scaffold the Project
npm install -g yo gulp @microsoft/generator-sharepoint
mkdir spfx-hero-webpart && cd spfx-hero-webpart
yo @microsoft/sharepoint

spfx-hero-webpart/
│   README.md
│   package.json
│   tsconfig.json
│   gulpfile.js
│
└───src/
    └───webparts/
        └───hero/
            │ HeroWebPart.ts
            │ HeroWebPart.manifest.json
            │
            └───components/
                │ IHeroProps.ts
                │ Hero.tsx
