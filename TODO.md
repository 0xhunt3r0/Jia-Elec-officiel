# TODO — FAQ content (Questions fréquentes)

Goal: Add the French "Questions fréquentes" content to the FAQ section.

- [x] 1. Append the 4 French FAQ entries to `FAQS` in `lib/site.ts` (Intervenez-vous à Marrakech ? / Le devis est-il gratuit ? / Combien coûte une intervention ? / Faites-vous les rénovations électriques ?).
- [x] 2. Update FAQ section title → "Questions fréquentes" and subtitle → "Services électriques à Guéliz, la Médina, Palmeraie et dans tout Marrakech." in `components/home/sections.tsx`.
- [x] 3. Verify with `tsc --noEmit` — no new errors from these changes (only unrelated pre-existing errors in `quote-cta.tsx` / `quote-multistep.tsx`).

---

# TODO — Language unification to French + theme toggle + content edits

- [x] 1. **Language unification (FR)** — translate shared data in `lib/site.ts` (SITE, NAV, SERVICE_MENU, SERVICE_LINKS, FEATURE_BAR, TRUST_POINTS, WHY_US, PRICING, JOB_TYPES, + other visible arrays), `app/layout.tsx` title/OG, `app/actions/quote.ts` errors, `components/ui/project-button.tsx` default label. *(Verified in project: all French.)*
- [x] 2. **Dark/Light mode toggle** — create `components/theme-toggle.tsx`, add `html.light` overrides in `app/globals.css`, wire into header (desktop + mobile), add no-flash script in `app/layout.tsx`. *(Verified: theme-toggle.tsx exists, `html.light` block at globals.css:64, wired in site-header.tsx.)*
- [x] 3. **Add Chrifia** to `AREAS` in `lib/site.ts` (not HOME_AREAS). *(Verified: lib/site.ts:266.)*
- [x] 4. **Remove "Pas de frais de déplacement"** from `FEATURE_BAR` (main page badge bar). *(Verified: FEATURE_BAR now has 5 items, none mention it. Note: still present in TRUST_POINTS, PRICING, FAQ and /services description — left intentionally.)*
- [x] 5. **Replace "Pourquoi nous choisir"** with new "Pourquoi Jia Elec ?" data + big clean redesign of `WhyUs` in `components/home/sections.tsx`. *(Verified: WHY_US = Rapide / Sécurité aux normes (NF C 15-100) / Prix clairs.)*
- [x] 6. **Remove QuoteCta** ("Parlons de votre quartier / Lancer mon projet") — delete orphaned `components/quote-cta.tsx`. *(Verified: file deleted, no references remain.)*
- [x] 7. Verify with `pnpm build`. *(Verified: ✓ Compiled successfully, 11/11 static pages.)*

---

# TODO — Pulsing "electric glow" effect on quote buttons

Goal: Make the green quote buttons look like they have a soft electrical glow that
pulses ON/OFF like a small LED/light, and apply the same effect to the header button.

- [x] 1. Add `.electric-button` / `.led` styles + `electric-glow` / `led-blink` keyframes to `app/globals.css` (brand green `#89bb2a`).
- [x] 2. Apply the effect to the CTA button "Demander un devis gratuit" in `components/cta-buttons.tsx`.
- [x] 3. Apply the same effect to the header button "Demander un devis" in `components/site-header.tsx`.
- [x] 4. Verify with `tsc --noEmit` — no new errors from these changes (only unrelated pre-existing errors in `quote-cta.tsx` / `quote-multistep.tsx`).

## Session — Language unification to French + feature changes
- [x] 5. Translate remaining English pages: `services`, `contact`, `work`, `areas`, `not-found`, `installation`, `maintenance`, `switchboard`.
- [x] 6. Translate PROJECTS titles in `lib/site.ts` (Circuits de cuisine, Caméras de sécurité, Tableau d'atelier, Recâblage patrimonial, Aménagement de boutique).
- [x] 7. Translate `quote-form.tsx` (labels, placeholders, submit button, success state), `work-gallery.tsx`, `locations-grid.tsx`.
- [x] 8. Dark/light mode toggle (`components/theme-toggle.tsx` + `html.light` variables + no-flash script in `layout.tsx`), placed next to the language switcher.
- [x] 9. Add Chrifia to AREAS in `lib/site.ts`.
- [x] 10. Remove "Pas de frais de déplacement" from the homepage FEATURE_BAR.
- [x] 11. Replace "Pourquoi nous choisir" with new 3-card "Pourquoi Jia Elec ?" section (Rapide / Sécurité aux normes / Prix clairs).
- [x] 12. Remove the "Parlons de votre quartier / Lancer mon projet" QuoteCta card from all pages; delete `components/quote-cta.tsx`.
- [x] 13. Clean up junk files (`_fr.html`, `_t.html`, `fix_content.ps1`, build logs).
- [x] 14. Final verification: production build ✓ compiled, 11/11 static pages generated, no errors.

## Localization routing — completed

- [x] Locale-prefixed URLs: `/fr/`, `/en/`, and `/ar/`.
- [x] Unprefixed URLs redirect to the selected locale (default: French).
- [x] Language switching preserves the current nested page.
- [x] Document `lang`, `dir`, and the locale cookie stay synchronized.
- [x] French, English, and Arabic translation dictionaries are available for shared site content and quote forms.

## Known pre-existing notes — RESOLVED
- ~~`/devis` route missing while header linked to it~~ → **Resolved**: no `/devis` links remain anywhere in the codebase (header now uses `#quote` / `/contact`). The `app/devis/` folder no longer exists and nothing references it.

---

# RAPPORT — Session `1788604088350_3zp1h` (48 demandes) vs état actuel du projet

> Rapport uniquement — aucune modification du projet. Chaque point a été vérifié dans le code actuel.

## ✅ Demandes appliquées et toujours présentes dans le projet
- [x] 1. **Écran blanc corrigé** au démarrage du projet (projet compile et rend — build ✓ 11/11 pages).
- [x] 2. **Section « Nos récents projets électriques »** placée sous TrustedBrands — `app/page.tsx:38-39` (`<TrustedBrands />` puis `<Projects />`).
- [x] 3. **Espacement réduit** entre TrustedBrands et la galerie projets (Section paddings ajustés).
- [x] 4. **« Voir plus » multilingue** — `lib/i18n.tsx:184` `projects.seeMore: 'Voir plus'` (+ EN/AR).
- [x] 5. **« Voir plus » pointe vers /work** — lien présent dans le composant projets.
- [x] 6. **Ordre du header** : bouton langues → numéro de téléphone → « Demander un devis » — `components/site-header.tsx` (LanguageSwitcher, ThemeToggle, tel, electric-button).
- [x] 7. **Photos « Nos Services »** réduites + effet professionnel — `HOME_SERVICES` / `ServicesPreview`.
- [x] 8. **« Évaluez-nous sur Google »** remplace « Excellente 5.080+ avis » — `components/stars.tsx:38` (`t.common.rateUs`, i18n FR/EN/AR).
- [x] 9. **Hero** : sous-titre réduit sous « Jia Elec » + tagline en blanc, plus grande — `components/home/hero.tsx`.
- [x] 10. **Traduction de tous les textes de la home** par langue — `lib/i18n.tsx` (FR/EN/AR complets : hero, projects, services, areas, testimonials…).
- [x] 11. **Galerie shared-element (photo library)** intégrée — `components/ui/shared-element-gallery.tsx` existe et est utilisée.
- [x] 12. **Slider marques de confiance** (InfiniteSlider + ProgressiveBlur) — `components/ui/infinite-slider.tsx` + `progressive-blur.tsx` + `trusted-brands.tsx` ; flous progressifs gauche/droite, largeur réduite, espace en fin de boucle.
- [x] 13. **Logo WhatsApp `/public/whatsapp.png`** — fichier présent et utilisé dans `components/mobile-cta.tsx:40` (bouton flottant, visible et agrandi).
- [x] 14. **Effet d'animation React sur les points « Why choose us »** — appliqué puis remplacé par la nouvelle section « Pourquoi Jia Elec ? » (3 cartes animées).
- [x] 15. **Liste des secteurs en liste pro sans photos** — `components/locations-grid.tsx` + `HOME_AREAS` (13 quartiers en accueil, le reste sur /areas).
- [x] 16. **Boutons secteurs → lien Google Maps** (template carte API annulé comme demandé) — `locations-grid.tsx:19` aria-label « Ouvrir … sur Google Maps ».
- [x] 17. **Ligne « Tip: click any neighbourhood… » supprimée** — plus aucune occurrence dans le projet.
- [x] 18. **Page /about en français** (« À propos de Jia Elec », travail propre, etc.) — `app/about/page.tsx` tout en français.
- [x] 19. **Formulaire devis multistep (4 étapes)** — `components/quote-multistep.tsx` : étape profil (Particulier / Airbnb / Entreprise / Commerce / Conciergerie / Syndic via `q.profiles`), besoin + secteur + adresse, délai/surface/photos, **paiement** (« Précisez vos préférences pour la facturation », Espèces / Virement via `q.paymentMethods`), champ WhatsApp facultatif.
- [x] 20. **Erreur « Cannot access 'AREAS' before initialization » corrigée** — `SITE.areasList` n'existe plus dans `lib/site.ts` (aucune référence).
- [x] 21. **Erreur « CtaBand is not defined » corrigée** — `CtaBand` définie dans `components/home/sections.tsx:145` et utilisée proprement dans `app/page.tsx:42`.
- [x] 22. **« Tell us your neighbourhood » dupliqué** → doublon supprimé à l'époque ; depuis, le bloc QuoteCta a été **entièrement retiré du site** (décision ultérieure de l'utilisateur).

## ⚠️ Demandes non abouties / supplantées par des sessions ultérieures
- [x] 23. **« Remove this dev : Jia Elec offers a multi-layered service… »** — ✅ Fait : le bloc `CtaBand` (titre anglais + paragraphe + boutons) a été **supprimé** de `components/home/sections.tsx` ainsi que son utilisation et son import dans `app/page.tsx`.
- [x] 24. **« Tell us your neighbourhood visible sur les autres pages, multi-choix réservé à /devis »** — supplanté : le bloc a été retiré de tout le site et la page /devis supprimée (le formulaire multistep n'a plus de route dédiée).

## ✅ Suite — actions exécutées d'après les remarques
- [x] 25. **Fichier parasite `_fr3.html` (et `_fr2.html`) supprimés** de la racine du projet, ainsi que tous les logs de build temporaires.
- [x] 26. **Page `/devis` recréée** (`app/devis/page.tsx`) — utilise le composant `QuoteMultistep` (formulaire 4 étapes) avec `PageHero` « Demander un devis gratuit » et métadonnées FR. Le composant n'est plus orphelin.
- [x] 27. **Corrections rendues nécessaires par la restauration** :
  - `components/quote-multistep.tsx` : importait `AREAS_LIST` (inexistant) → remplacé par `AREAS` (+ `.name`) ; déstructurait `{ c }` du contexte i18n (inexistant) → remplacé par `{ t }` (`t.quoteForm`, `t.jobTypes`, `t.ui.callNow`).
  - `lib/i18n.tsx` : ajout du bloc `quoteForm` complet (steps, profiles, deadlines, paymentMethods, labels, boutons) + `jobTypes` + `ui.callNow` pour **FR / EN / AR** (type `SiteText` mis à jour).
- [x] 28. **Vérification finale** : `pnpm build` → ✓ Compiled successfully, **12/12 pages statiques** générées, `/devis` inclus.
- [x] 29. **Suppression du bloc « Obtenez un devis gratuit »** de la page d'accueil — section `Quote` retirée de `components/home/sections.tsx` (titre, paragraphe, coordonnées Téléphone/Horaires/Base, formulaire compact) + `<Quote />` et son import retirés de `app/page.tsx` + import `QuoteForm` devenu inutile nettoyé. Vérifié : `pnpm build` ✓ 12/12 pages.

---

# TODO — Professional design polish

Goal: Make the Jia Elec website feel more premium, trustworthy, and conversion-focused, with mobile as the primary surface.

## Critical fixes

- [ ] Fix the blocking build error: install or remove the missing `@radix-ui/react-checkbox` dependency used by the quote form.
- [ ] Run `pnpm build` after the fix and confirm all routes compile, including `/devis`.
- [ ] Verify that every primary CTA works on mobile: quote form, phone call, WhatsApp, contact links, and navigation.

## Brand and messaging

- [ ] Rewrite the hero headline with a clear local value proposition, such as: “Électricien agréé à Marrakech, disponible quand vous en avez besoin.”
- [ ] Add immediate trust proof below the hero CTA: Google rating, review count, years of experience, or completed projects.
- [ ] Keep the visible marketing copy consistently in French; review English labels such as “Our Process”, “Service Areas”, and “Recent electrical projects”.
- [ ] Make service descriptions benefit-led and specific instead of using only service names.

## Visual refinement

- [ ] Reduce the intensity and frequency of the electric glow animation on CTA buttons.
- [ ] Keep the LED effect subtle, slow, and accessible with `prefers-reduced-motion` support.
- [ ] Reduce the visual weight of the floating Instagram, Facebook, and WhatsApp icons in the hero.
- [ ] Keep the design system within 3–5 colors and use semantic theme tokens consistently.
- [ ] Review gray text on dark backgrounds and improve contrast where needed.
- [ ] Limit excessive uppercase text and improve readability for long labels.

## Trust and conversion

- [ ] Add a dedicated trust strip with relevant proof: insured, standards-compliant, transparent pricing, and response time.
- [ ] Improve testimonials with a customer name, neighborhood/city, and service completed where permission is available.
- [ ] Add a professional team/worksite image or a stronger “À propos” proof section.
- [ ] Make the service cards include a clear “Découvrir le service” action.
- [ ] Add legal/business information in the footer when available.

## Mobile and accessibility QA

- [ ] Audit the 300×568 mobile layout for clipped text, horizontal overflow, oversized hero content, and fixed CTA overlap.
- [ ] Ensure all interactive controls are at least 44×44px and have visible focus states.
- [ ] Add accessible labels to icon-only buttons and meaningful alt text to all images.
- [ ] Confirm keyboard navigation and form error messages are clear and placed next to the relevant fields.
- [ ] Test light mode and dark mode for contrast and consistency.
- [ ] Capture final mobile and desktop screenshots after the polish pass.
