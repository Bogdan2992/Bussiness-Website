# DIRLOSAN website

Static responsive website for DIRLOSAN Engineering and Simulation.

## Included

- Transparent PNG logo used in the header and footer, with no white backing plate in dark mode.
- Light/dark mode toggle with browser persistence.
- English, Romanian and German language switching with browser persistence.
- Denser, higher-contrast interactive hero mesh and CFD-inspired streamlines.
- Rebuilt product/CAD sketch visual using SVG so it scales cleanly.
- Rebuilt consulting graph visual using SVG.
- Service preview changes only from its own viewport wheel interaction, direct service selection, or a 12-second auto-cycle while visible.
- Expanded CFD preview with velocity vectors, pressure fields, wake vortices and denser streamlines.
- Scroll-driven “What we do” capability cloud with 18 engineering capabilities derived from the supplied CV.
- General budget estimator with CAD/design starting at €20/hour and simulation starting at €45/hour, hour slider, complexity factors and separate CAD/simulation visuals.
- FEA mesh canvas visualization.
- Navigation sections for Services, What we do, Process, Projects, Testimonials, Industries, Estimate, About, FAQ and Contact.
- Text-only project category cards; no client or project imagery is included.
- Client testimonial cards with project names omitted and clearly disclosed privacy pseudonyms.
- Engineering background/tooling section based on the supplied CV.
- Responsive mobile navigation and reduced-motion accessibility support.
- Firefox-safe startup sequence and animation throttling. Expensive canvas work pauses when the tab is hidden.
- Contact form opens the visitor's email app with a pre-filled message to `dirlosan@bdengineering.com`.

## Files

- `index.html` — page structure and content
- `styles.css` — layout, themes, responsive rules and animation
- `script.js` — interactions, translations, canvas visuals and theme handling
- `assets/dirlosan-logo-transparent.png` — transparent logo used by the site

## Run locally

Serve the folder instead of double-clicking `index.html`.

Windows:

```bash
py -m http.server 8000 --bind 0.0.0.0
```

macOS / Linux:

```bash
python3 -m http.server 8000 --bind 0.0.0.0
```

Then open `http://localhost:8000` on the host PC. Other devices on the same network can use the host PC's LAN IP, for example `http://192.168.1.42:8000`.

## Contact form

Because this is a static site, the form cannot silently send mail by itself. Submitting the form opens the visitor's configured email client with the recipient, subject and message pre-filled for `dirlosan@bdengineering.com`. For direct server-side delivery without opening an email app, connect the form to a backend or form service before production launch.

## 2026-09 capability-story update

The "What we do" section is now organised as a three-chapter scroll story instead of a random capability cloud: Design & document, Simulate & validate, and Automate & integrate. Each chapter reveals six floating capabilities in sequence.

The Projects section remains entirely text-only. It now contains eight portfolio-derived case-study summaries and no client/project imagery.

## September 2026 — Who we are + contact button fix
- Added a responsive "Who we are" section using the supplied portrait of Bogdan-Ioan Dîrloșan.
- Biography and credentials are grounded in the supplied CV: mechanical design, CFD/FEA, robotics/automation, B.Sc. Robotics, completed M.Sc. Artificial Intelligence, and the listed engineering toolchain.
- Added EN / RO / DE translations for the new section and navigation item.
- Fixed the contact form CSS so label typography no longer overrides the "Send enquiry" button text.

## September 2026 — credentials update
- Updated the profile to show the M.Sc. in Artificial Intelligence as completed.
- Added Computer Vision certification from Udacity.
- Added CAD certification without naming the issuing institution.
- Added a podium result from a Sonaca factory-management competition without stating the placing.
