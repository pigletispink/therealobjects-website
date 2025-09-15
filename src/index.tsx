import { Hono } from 'hono'

const app = new Hono()

// Sağlık kontrolü
app.get('/__health', (c) => c.text('OK'))

// Ana sayfa
app.get('/', (c) =>
  c.html(
    '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>The Real Objects</title></head><body style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;margin:40px"><span style="padding:6px 10px;border:1px solid #ccc;border-radius:8px;font-size:12px;display:inline-block">Cloudflare Pages · Vite · Hono</span><h1 style="margin:12px 0">It works 🎉</h1><p>Served by <code>_worker.js</code> built from <code>src/index.tsx</code>.</p><p><a href="/__health">/__health</a></p></body></html>'
  )
)

export default app
