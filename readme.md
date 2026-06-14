# Victoria Melina — VJ Bluh
## Personal site — Astro + React + Tailwind + GSAP

### Setup

```bash
npm install
npm run dev
```

Abre http://localhost:4321

### Stack
- **Astro 4** — estructura, routing, páginas de proyecto
- **React 18** — islands interactivos (filtros, formulario)
- **Tailwind 3** — utility classes
- **GSAP 3** — animaciones
- **TypeScript** — tipado estricto

### Estructura
```
src/
├── components/
│   ├── Nav.astro         ✅ listo
│   └── Footer.astro      ✅ listo
├── layouts/
│   └── Base.astro        ✅ listo
├── pages/
│   └── index.astro       ✅ listo (shell)
└── styles/
    └── global.css        ✅ listo
```

### Pendiente (próximos buckets)
- [ ] Hero con canvas GSAP
- [ ] Sección Work + ProjectCard
- [ ] Filtros (React island)
- [ ] Sección About
- [ ] CV
- [ ] Formulario de contacto (React island)
- [ ] Páginas individuales de proyecto `/work/[slug]`
- [ ] Content collections para proyectos en Markdown

### Personalizar
- `Footer.astro` → reemplazá los href de redes sociales
- `Base.astro` → reemplazá og:image cuando tengas una
- `tailwind.config.mjs` → paleta de colores centralizada
