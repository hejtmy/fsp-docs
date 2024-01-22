import { defineConfig } from 'astro/config';
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight(
      {
        title: 'Fake Scenes Presenter Documentation',
        sidebar: [
          {
            label: "Getting started",
            autogenerate: {directory: "getting-started"}
          },
          {
            label: "Component Library",
            autogenerate: {directory: "unreal"}
          },
          {
            label: "Data output",
            autogenerate: {directory: "data"}
          }
        ],
      },
    )
  ]
});