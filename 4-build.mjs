// Rebuilds the embedded frontend and Chrome extension zip inside worker.js.
// Usage: node build.mjs   (needs `zip` on PATH)
import fs from "fs";
import zlib from "zlib";
import { execSync } from "child_process";
const html = fs.readFileSync("index.html");
const htmlB64 = zlib.gzipSync(html, { level: 9 }).toString("base64");
fs.rmSync("/tmp/rf-ext.zip", { force: true });
execSync("cd extension && zip -qr -X /tmp/rf-ext.zip .");
const extB64 = fs.readFileSync("/tmp/rf-ext.zip").toString("base64");
let w = fs.readFileSync("worker.js", "utf8");
w = w.replace(/const HTML_B64 =\n  "[^"]*";/, 'const HTML_B64 =\n  "' + htmlB64 + '";');
w = w.replace(/const EXT_ZIP_B64 = "[^"]*";/, 'const EXT_ZIP_B64 = "' + extB64 + '";');
fs.writeFileSync("worker.js", w);
console.log("html", html.length, "gz-b64", htmlB64.length, "ext-b64", extB64.length);
