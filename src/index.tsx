import { Hono } from 'hono'
import { jsx } from 'hono/jsx'

const app = new Hono()

app.get('/', (c) =>
  c.html(
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>The Real Objects</title>
        <style>{`
          body { font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; margin: 0; padding: 40px; }
          .wrap { max-width: 860px; margin: 0 auto; }
          h1 { margin: 0 0 8px 0; }
          p { margin: 8px 0 24px 0; line-height: 1.6; }
          .badge { display:inline-block; padding:6px 10px; border:1px solid #ddd; border-radius:8px; font-size:12px; }
        `}</style>
      </head>
      <body>
        <div class="wrap">
          <span class="badge">Cloudflare Pages · Vite · Hono</span>
          <h1>It works 🎉</h1>
          <p>This is the entry served from <code>src/index.tsx</code>.</p>
        </div>
      </body>
    </html>
  )
)

export default app
