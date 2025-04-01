import path from "path";
import express from "express";
import fs from "fs";
import { createWindowFromHtml, renderToString } from "../hydrate";

const app = express();

try {
  const html = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
  const PORT = process.env.PORT || 8090;

  app.get("/", async (req, res) => {
    try {
      const win = createWindowFromHtml(html, Math.random().toString(36).substring(7));
      const document = win.document;

      const result = await renderToString(document, {
        serializeShadowRoot: 'scoped',
      });

      res.send(`<!doctype html>${result.html}`);
    } catch (err) {
      console.error('Error handling request:', err);
      res.status(500).send('Internal Server Error');
    }
  });

  app.use(express.static(path.join(__dirname, "../dist")));

  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log(`Open your browser and visit http://localhost:${PORT}`);
    console.log(`Server started on ${new Date().toLocaleString()}`);
  }).on('error', (err) => {
    console.error('Server error:', err);
  });
} catch (err) {
  console.error('Error starting server:', err);
}


