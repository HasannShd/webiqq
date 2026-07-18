# WebiQQ Industry Showcases

Five isolated, independently deployable concept websites for the WebiQQ portfolio. These directories do not import from or modify the main WebiQQ application.

| Directory | Concept brand | Suggested domain |
| --- | --- | --- |
| `construction/` | Northline Contracting | `northline.webiqq.com` |
| `real-estate/` | Serein Properties | `serein.webiqq.com` |
| `cafe-restaurant/` | Ember & Grain | `embergrain.webiqq.com` |
| `design-studio/` | Atelier Nūr | `ateliernur.webiqq.com` |
| `beauty-salon/` | Maison Luma | `maisonluma.webiqq.com` |

Each concept is intentionally labeled as a fictional WebiQQ showcase in its footer. Replace the suggested canonical URL only after its matching deployment exists.

## Local preview

Run a static server from this directory:

```bash
python3 -m http.server 4173
```

Then open `/construction/`, `/real-estate/`, `/cafe-restaurant/`, `/design-studio/`, or `/beauty-salon/`.

Open `/` for the shareable WebiQQ Concept Collection homepage linking all five showcases.

## Deployment

Each niche directory is self-contained (`index.html`, `styles.css`, `script.js`) and can be deployed as its own Vercel project with the directory selected as the project root. No build command is required.
