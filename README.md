# Portafolio Ángel Lillo (Astro)

## Ejecutar local
```bash
cd astro-portafolio
npm install
npm run dev
```

## Build producción
```bash
npm run build
npm run preview
```

## CV en PDF (por idioma y formato)
- Profesional ES: `public/CV-Angel-Lillo-HUMAN-ES.pdf`
- ATS ES: `public/CV-Angel-Lillo-ATS-ES.pdf`
- Professional EN: `public/CV-Angel-Lillo-HUMAN-EN.pdf`
- ATS EN: `public/CV-Angel-Lillo-ATS-EN.pdf`

Regenerar PDFs desde Markdown fuente:
```bash
python3 scripts/generate_cv_pdf.py
```

## Estructura importante
- `src/pages/index.astro` → versión Español
- `src/pages/en/index.astro` → versión English
- `src/data/portfolio.ts` → contenido principal ES
- `src/data/portfolio-en.ts` → contenido principal EN
- `cv-source/CV-Angel-Lillo-*.md` → fuentes CV
- `public/CV-Angel-Lillo-*.pdf` → CV descargables
- `scripts/generate_cv_pdf.py` → generador PDF (requiere `reportlab`)
- `src/styles/global.css` → estilos visuales
