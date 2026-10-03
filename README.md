# JB CREATION — Site Web Officiel

## 📌 Présentation
JB CREATION est une agence de communication visuelle & digitale basée à Abidjan, en Côte d'Ivoire. Ce projet consiste à présenter l'agence, ses services, ses réalisations, ses offres et à convertir les visiteurs en demandes de devis via WhatsApp et un formulaire de contact.

## 🎯 Stack technique
- HTML5 / CSS3 (variables, Grid, Flexbox, animations)
- JavaScript natif (aucune dépendance externe)
- Google Fonts : Space Grotesk + Inter
- FormSubmit.co pour l'envoi des emails du formulaire

## ✨ Modifications V2 appliquées
- Responsive global mobile-first avec `clamp()` et protection anti-overflow horizontal
- Loader premium en typewriter avec citations et disparition fluide
- Menu mobile vertical plein écran avec overlay et bouton de fermeture
- Header et footer logotypes en couleur marque bleue avec fallback sur assets existants
- Logos partenaires en quinconce avec grille responsive et balises `<img>`
- Contrôle de la CTA header masquée sur mobile pour garder le menu plus propre
- Variables CSS centralisées pour les couleurs récurrentes (`--brand-color`, `--bg-dark`, etc.)

## 📁 Structure du projet
- /images
- /images/clients (placeholders si besoin)
- index.html
- merci.html
- README.md
- RAPPORT.md

## 🧩 Assets à fournir
- `images/header-logo.png` — logo bleu du header
- `images/footer-logo.png` — logo bleu du footer
- `images/logo-partner-01.svg` à `images/logo-partner-06.svg` — logos partenaires
- `images/loader-icon.png` — icône optionnelle du loader
- `images/portrait-femme-hero.png` ou visuel hero principal
- `images/*` pour les images du portfolio et des articles si l'on remplace les placeholders actuels

## 🚀 Installation & lancement
1. Cloner le projet sur votre ordinateur.
2. Ouvrir le fichier `index.html` directement dans le navigateur, ou bien lancer un serveur local :
   - `python -m http.server 8000`
   - puis ouvrir `http://localhost:8000`
3. Pour VS Code, utiliser l'extension Live Server si souhaité.

## 🖼️ Gestion des images
- Placer les images dans le dossier `/images`.
- Utiliser des fichiers JPG pour les photos et PNG/SVG pour les logos.
- Les images du portfolio sont optimisées pour un format 4:3.
- Pour les visuels manquants, le site applique un fond visuel de secours via CSS et fallback HTML.

## 🌍 Bilingue FR / EN
Le site contient un objet `I18N` en JavaScript avec les traductions FR/EN. Les éléments à traduire portent un attribut `data-i18n`. Le sélecteur FR/EN de la navbar mémorise la langue dans `localStorage` avec la clé `jbcrea-lang`.

## 📧 Formulaire de contact
- Solution utilisée : FormSubmit.co
- Configuration : modifier l'email dans l'attribut `action` du formulaire si besoin
- Premier envoi : validation obligatoire par email à l'adresse du destinataire
- Alternative possible : EmailJS ou backend Node/PHP pour une solution plus avancée

## 🎨 Charte graphique
- Couleurs principales :
  - #FAF6EF (crème chaud)
  - #0A0E17 (noir profond)
  - #E30613 (rouge JB CREA)
  - #1440D8 (bleu électrique)
- Typographies : Space Grotesk + Inter
- Rayons : 12px, 20px, 32px, 999px
- Ombres : légères, douces et premium

## 🎬 Animations
- Loader animé au chargement
- Reveal au scroll avec IntersectionObserver
- Marquee infini pour la section chiffres-clés
- Accordéon FAQ et blog dépliable
- Effet flottant sur les éléments du hero
- Hover sur cartes portfolio et services

## ✅ Checklist de déploiement
- [ ] Tester toutes les pages sur desktop
- [ ] Tester sur mobile (iOS + Android)
- [ ] Vérifier le formulaire de contact (envoi test)
- [ ] Vérifier le sélecteur FR/EN
- [ ] Vérifier le loader
- [ ] Vérifier le lien WhatsApp
- [ ] Optimiser les images (TinyPNG)
- [ ] Configurer le nom de domaine
- [ ] Activer HTTPS
- [ ] Mettre en place Google Analytics

## 🔧 Maintenance
- Modifier les textes dans l'objet `I18N` pour les traductions
- Ajouter un nouveau projet dans la section portfolio depuis le code HTML
- Ajouter un article dans le blog dépliable dans la section dédiée

## 📞 Contact
- JB CREATION
- Yopougon Andokoi, Abidjan – Côte d'Ivoire
- +225 05 85 94 58 07
- jbcreation439@gmail.com
