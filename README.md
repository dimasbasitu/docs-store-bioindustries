# Bioindustries Webstore Documentation

Dokumentasi teknis untuk webstore [store.bioindustries.co.id](https://store.bioindustries.co.id) yang dibangun menggunakan WordPress dan WooCommerce.

Dokumentasi ini menggunakan **[Docusaurus](https://docusaurus.io/)** sebagai static site generator, dan di-*deploy* ke [Vercel](https://vercel.com).

## 📦 Struktur
- `docs/` → Isi dokumentasi dalam format Markdown
- `docusaurus.config.js` → Konfigurasi utama situs
- `sidebars.js` → Sidebar navigasi
- `src/` → Kustomisasi tampilan
- `build/` → Hasil build siap deploy (otomatis dibuat)

## 🚀 Jalankan secara lokal
```bash
npm install
npm run start
```

## 🔧 Build untuk deploy
```bash
npm run build
```
