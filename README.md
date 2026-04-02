# ShiftC — Site web

Cabinet CRM & IA | Experts Salesforce & Dynamics 365

## Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Resend** (envoi des formulaires)

## Démarrage local

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Structure

```
app/
  page.tsx          ← Page unique (toutes les sections)
  layout.tsx        ← Layout racine + SEO
  globals.css       ← Fonts + animations globales
  api/
    contact/        ← API envoi formulaire prospect
    candidature/    ← API envoi candidature

components/
  Nav.tsx           ← Navigation sticky avec scroll
  sections/
    Hero.tsx        ← Section 1 — Above the fold
    Stats.tsx       ← Barre de stats
    Enjeux.tsx      ← Section 2 — Accordéon 5 enjeux
    Approche.tsx    ← Section 3 — 4 convictions
    Offres.tsx      ← Section 4 — 5 offres
    Realisations.tsx← Section 5 — 6 cas + carousel clients
    APropos.tsx     ← Section 6 — Chiffres + ADN + clients
    Rejoindre.tsx   ← Section 7 — Témoignages + candidature
    Contact.tsx     ← Section 8 — Formulaire prospect

public/
  images/
    hero-delta.jpg  ← Photo hero (Manu Alesanco / Unsplash)
```

## Variables d'environnement

Créer un fichier `.env.local` :

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=contact@shiftc.fr
```

## Déploiement Vercel

1. Pousser sur GitHub
2. Importer le repo sur vercel.com
3. Ajouter les variables d'environnement dans le dashboard Vercel
4. Deploy automatique à chaque push

## Image hero

Placer la photo dans `public/images/hero-delta.jpg`.
Crédit : © Manu Alesanco · Unsplash
