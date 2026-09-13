# Website Steffi Hamann — freie Rednerin

Eine schnelle, statische Website ohne Baukasten und ohne laufende Kosten:
reine HTML-Dateien, ein Stylesheet, ein kleines Skript. Keine Cookies, keine
externen Dienste, Schriften liegen lokal — dadurch ist kein Cookie-Banner nötig.

---

## Was ist wo?

| Datei / Ordner | Das steckt drin |
|---|---|
| `index.html` | Startseite |
| `trauungen.html` · `trauerfeiern.html` · `willkommensfeste.html` | Die drei Anlass-Seiten |
| `ueber-mich.html` | Über mich |
| `blog.html` | Übersicht aller Blogbeiträge |
| `blog/…html` | Ein Blogbeitrag pro Datei |
| `kontakt.html` | Kontaktseite mit Anfrageformular |
| `impressum.html` · `datenschutz.html` | Rechtliches (Pflicht in Deutschland) |
| `bilder/` | **Hier kommen deine Fotos rein** — siehe `bilder/LIESMICH.txt` |
| `css/style.css` | Farben, Schriften, Abstände — für alle Seiten |
| `js/main.js` | Mobiles Menü und Kontaktformular |
| `fonts/` | Die Schriften (Cormorant Garamond, Karla, JetBrains Mono) |

---

## Fotos einfügen

1. Foto verkleinern: längste Seite max. 2000 px, unter 300 KB. Kostenlos im Browser mit [squoosh.app](https://squoosh.app).
2. Foto **exakt** so benennen, wie es in `bilder/LIESMICH.txt` steht (z. B. `startseite-hero.jpg`). **JPG, PNG oder WebP** — alle drei gehen, die Seite findet die Datei automatisch. JPG ist für Fotos deutlich kleiner und lädt schneller; PNG nur für Logos/Grafiken.
3. In den Ordner `bilder/` legen. Fertig — die gestreifte Platzhalterfläche verschwindet von selbst.

Am Code musst du dafür nichts ändern.

---

## Texte ändern

Jede `.html`-Datei lässt sich mit einem einfachen Texteditor öffnen (Windows: Editor / Notepad, besser: [Notepad++](https://notepad-plus-plus.org) oder [VS Code](https://code.visualstudio.com), beides kostenlos).

- Text zwischen `>` und `<` ändern, den Rest unverändert lassen.
- Beispiel: `<h3>Freie Trauungen</h3>` → `<h3>Eure Trauung</h3>`
- Umlaute (ä, ö, ü, ß) und „Anführungszeichen“ kannst du direkt eintippen.
- Speichern, Datei im Browser neu laden, prüfen.

**Vor dem Veröffentlichen unbedingt ausfüllen** — alle Stellen, die auf der Seite **gelb markiert** sind (im Code: `<mark class="fuellen">…</mark>`):

- `ueber-mich.html` — dein Werdegang, seit wann, wie viele Zeremonien
- `impressum.html` — Adresse, Telefon, E-Mail, Umsatzsteuer-Angabe, Bildnachweise
- `datenschutz.html` — Adresse, Löschfrist, Stand
- `index.html` — die Kennzahlen „200+ Zeremonien“ und „8 Jahre Erfahrung“ sind Platzhalter
- `kontakt.html` — Telefonnummer und E-Mail-Adresse (**zweimal**: einmal sichtbar, einmal in `data-empfaenger="…"` — dorthin gehen die Anfragen)
- Alle Zitate unter „Stimmen“ sind erfundene Beispiele — durch echte ersetzen oder löschen

---

## Farben und Schrift ändern

Ganz oben in `css/style.css` unter `:root` stehen alle Farben mit Namen, z. B.:

```
--blau:  #3f5d6b;
--gelb:  #c9922e;
```

Einen Wert ändern → die ganze Website folgt.

---

## Neuen Blogbeitrag anlegen

1. Im Ordner `blog/` eine bestehende Datei kopieren, z. B. `heiraten-am-strand.html` → `mein-neuer-beitrag.html`
   (Kleinbuchstaben, Bindestriche statt Leerzeichen, keine Umlaute im Dateinamen).
2. In der Kopie ändern: `<title>`, `meta description`, Überschrift, Einleitung, Datum und den Text im Bereich `artikel-text`.
3. Foto nach `bilder/` legen und in der Datei den Bildnamen anpassen (`../bilder/mein-foto.jpg`).
4. In `blog.html` einen der `<article class="beitrag">`-Blöcke kopieren, ganz oben einfügen und Bild, Kategorie, Titel, Kurztext und Link anpassen.
5. Optional in `index.html` den ältesten der drei Blog-Kacheln durch den neuen ersetzen.

---

## Bei GitHub veröffentlichen (kostenlos)

Du brauchst nur einen Browser, kein Programm.

**Einmalig einrichten**

1. Konto anlegen auf [github.com](https://github.com) (kostenlos).
2. Oben rechts **+** → **New repository**.
   - Repository name: `steffi-hamann-website` (oder beliebig)
   - **Public** auswählen
   - **Create repository**
3. Auf der leeren Repository-Seite auf **uploading an existing file** klicken.
4. **Alle** Dateien und Ordner aus diesem `website`-Ordner in das Browserfenster ziehen
   (auch `.nojekyll`, `css`, `js`, `fonts`, `bilder`, `blog`). Unten **Commit changes**.
5. **Settings** (Reiter oben) → links **Pages** → unter *Build and deployment*:
   - Source: **Deploy from a branch**
   - Branch: **main**, Ordner **/ (root)** → **Save**
6. Nach ein bis zwei Minuten steht oben auf der Pages-Seite die Adresse, z. B.
   `https://DEIN-NAME.github.io/steffi-hamann-website/`

**Später etwas ändern**

- Text: Datei im Repository anklicken → Stift-Symbol (Edit) → ändern → **Commit changes**.
  Nach ca. einer Minute ist die Änderung online.
- Foto: Ordner `bilder` öffnen → **Add file** → **Upload files** → Foto reinziehen → **Commit changes**.
- Alternativ: Änderungen auf dem eigenen Rechner machen und die Datei über *Add file → Upload files* hochladen — gleiche Datei = wird ersetzt.

---

## Eigene Domain (z. B. steffi-hamann.de)

1. Domain kaufen, z. B. bei [INWX](https://www.inwx.de) oder [Netcup](https://www.netcup.de) — ca. 10–15 € pro Jahr.
2. Beim Domain-Anbieter in den DNS-Einstellungen anlegen:
   - `A`-Einträge für `@` auf `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME`-Eintrag für `www` auf `DEIN-NAME.github.io`
3. Bei GitHub: **Settings → Pages → Custom domain** → `steffi-hamann.de` eintragen → **Save**.
4. Haken bei **Enforce HTTPS** setzen (erscheint, sobald das Zertifikat da ist — kann bis zu 24 h dauern).

---

## Kontaktformular

Die Website hat keinen eigenen Server. Das Formular öffnet deshalb das E-Mail-Programm
der Besucher mit einer fertig ausgefüllten Nachricht an die Adresse aus
`data-empfaenger="…"` in `kontakt.html`. Das ist kostenlos und datenschutzfreundlich —
es fließen keine Daten über Dritte.

Falls du später ein „richtiges“ Formular willst, das ohne E-Mail-Programm sendet:
Dienste wie [Web3Forms](https://web3forms.com) oder [Formspree](https://formspree.io)
lassen sich mit wenigen Zeilen einbauen (dann Datenschutzerklärung ergänzen).

---

## Checkliste vor dem Livegang

- [ ] Alle gelb markierten Stellen ausgefüllt (siehe oben)
- [ ] Telefonnummer und E-Mail in `kontakt.html`, `impressum.html`, `datenschutz.html` stimmen
- [ ] Erfundene Zitate ersetzt oder entfernt
- [ ] Eigene Fotos in `bilder/` (mindestens Portrait und Startseiten-Foto)
- [ ] Bildnachweise im Impressum, falls du Stockfotos oder Fotografen-Bilder nutzt
- [ ] Alle Seiten einmal auf dem Handy angeschaut
