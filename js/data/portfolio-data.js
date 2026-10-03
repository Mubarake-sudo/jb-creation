// Données des réalisations JB CREATION.
// Pour modifier un projet, change uniquement cette liste.
const PORTFOLIO_PROJECTS = [
  {
    id: "refonte-marque",
    titre: "Refonte de marque",
    titreEn: "Brand identity refresh",
    client: "AgroMeet",
    clientEn: "AgroMeet",
    secteur: "Agroalimentaire",
    secteurEn: "Food and agriculture",
    annee: "2024",
    tags: ["Identité visuelle", "Packaging", "Print"],
    cover: "images/refonte-marque.png",
    images: [
      "images/refonte-marque2.png",
      "images/refonte-marque3.jpeg",
      "images/refonte-marque5.jpeg",
      "images/refonte-marque6.jpeg",
      "images/refonte-marque7.jpeg",
      "images/refonte-marque8.jpeg",
      "images/refonte-marque10.png"
    ],
    description: {
      fr: [
        "AgroMeet souhaitait disposer d'une identité reconnaissable pour valoriser son positionnement autour de la consommation de produits naturels.",
        "Le travail décline le logo sur plusieurs supports du quotidien, du textile aux objets promotionnels, tout en conservant une signature cohérente.",
        "Cette nouvelle image donne à la marque une présence homogène sur ses supports imprimés et ses outils de communication."
      ],
      en: [
        "AgroMeet needed a recognisable identity to express its position around natural products.",
        "The work applies the logo across everyday items, from clothing to promotional objects, while keeping a consistent visual signature.",
        "The resulting system gives the brand a coherent presence across print and communication materials."
      ]
    },
    livrables: ["Logo", "Déclinaisons de marque", "Supports promotionnels", "Supports print"]
  },
  {
    id: "catalogue-produits",
    titre: "Catalogue produits",
    titreEn: "Product catalogue",
    client: "Startup",
    clientEn: "Startup",
    secteur: "Mode et distribution",
    secteurEn: "Fashion and retail",
    annee: "2024",
    tags: ["Catalogue", "Print", "Communication commerciale"],
    cover: "images/catalogue-produits.png",
    images: [
      "images/catalogue-produits1.jpeg",
      "images/catalogue-produits2.png",
      "images/catalogue-produits3.jpeg",
      "images/catalogue-produits7.png"
    ],
    description: {
      fr: [
        "Ce catalogue met en scène une sélection de vêtements et de produits avec des visuels conçus pour présenter rapidement l'offre.",
        "Les mises en page alternent photographies, accroches et informations commerciales afin de faciliter la lecture des collections.",
        "Le résultat constitue un support de présentation clair, utilisable en ligne comme lors des échanges avec les clients."
      ],
      en: [
        "This catalogue presents a selection of clothing and products through visuals designed to make the offer easy to scan.",
        "The layouts combine photography, headlines and commercial information to guide readers through the collection.",
        "The result is a clear presentation tool for online use and customer conversations."
      ]
    },
    livrables: ["Direction artistique", "Mise en page", "Visuels produits", "Support de présentation"]
  },
  {
    id: "campagne-social",
    titre: "Campagne réseaux sociaux",
    titreEn: "Social media campaign",
    client: "Glowin Network",
    clientEn: "Glowin Network",
    secteur: "Carrière et business",
    secteurEn: "Career and business",
    annee: "2026",
    tags: ["Digital", "Réseaux sociaux", "Événementiel"],
    cover: "images/campagne-social.png",
    images: [
      "images/campagne-social2.png",
      "images/campagne-social3.png",
      "images/campagne-social4.png",
      "images/campagne-social5.png",
      "images/campagne-social6.png",
      "images/campagne-social7.png",
      "images/catalogue-produits_bannière.png"
    ],
    description: {
      fr: [
        "Glowin Network avait besoin de visuels cohérents pour annoncer ses activités autour de la carrière, de l'entrepreneuriat et du networking.",
        "La campagne décline les informations de l'événement en formats complémentaires, avec une hiérarchie claire entre thème, intervenantes et informations pratiques.",
        "Les créations forment une série reconnaissable, adaptée à la diffusion sur les réseaux sociaux et à la promotion de l'événement."
      ],
      en: [
        "Glowin Network needed a consistent set of visuals to promote its career, business and networking activities.",
        "The campaign adapts event information into complementary formats, with a clear hierarchy for the theme, speakers and practical details.",
        "The resulting series is recognisable and suited to social media distribution and event promotion."
      ]
    },
    livrables: ["Concept visuel", "Visuels réseaux sociaux", "Affiche événementielle", "Déclinaisons de campagne"]
  },
  {
    id: "charte-graphique",
    titre: "Charte graphique",
    titreEn: "Brand guidelines",
    client: "Bintou Épice",
    clientEn: "Bintou Épice",
    secteur: "Agroalimentaire",
    secteurEn: "Food and agriculture",
    annee: "2024",
    tags: ["Identité visuelle", "Charte graphique", "Packaging"],
    cover: "images/charte-graphique.png",
    images: [
      "images/charte-graphique2.png",
      "images/charte-graphique3.png",
      "images/charte-graphique4.png",
      "images/charte-graphique5.png",
      "images/charte-graphique6.png",
      "images/charte-graphique7.png"
    ],
    description: {
      fr: [
        "Bintou Épice développe une identité autour de produits alimentaires et d'une signature visuelle forte, construite autour du nom de la marque.",
        "La charte rassemble les éléments de cette identité et montre leur application sur différents supports et mises en situation.",
        "Elle sert de repère pour assurer une présentation cohérente de la marque dans ses communications futures."
      ],
      en: [
        "Bintou Épice builds its identity around food products and a distinctive visual signature centred on the brand name.",
        "The guidelines bring the identity elements together and show how they work across different materials and mock-ups.",
        "They provide a reference for keeping the brand presentation consistent in future communications."
      ]
    },
    livrables: ["Logo", "Palette de couleurs", "Typographies", "Applications de marque"]
  },
  {
    id: "site-vitrine",
    titre: "Site vitrine",
    titreEn: "Showcase website",
    client: "JB CREATION",
    clientEn: "JB CREATION",
    secteur: "Web et services",
    secteurEn: "Web and services",
    annee: "2024",
    tags: ["Web", "Design responsive", "Communication digitale"],
    cover: "images/site-vitrine.png",
    images: ["images/site-vitrine1.png"],
    description: {
      fr: [
        "Ce visuel présente une offre de conception de sites web professionnels, avec une promesse centrée sur la clarté et l'adaptation aux activités des clients.",
        "La composition met en avant les usages clés, du site vitrine au commerce en ligne, ainsi que l'optimisation mobile.",
        "Le support invite les entreprises à découvrir une solution web conçue pour présenter leur activité et faciliter la prise de contact."
      ],
      en: [
        "This visual presents a professional website design offer focused on clarity and adapting to each client's business.",
        "The composition highlights key use cases, from showcase websites to online shops, as well as mobile optimisation.",
        "The material invites businesses to explore a web solution for presenting their activity and making it easier to get in touch."
      ]
    },
    livrables: ["Direction artistique", "Maquette web", "Présentation de l'offre"]
  },
  {
    id: "film-institutionnel",
    titre: "Film institutionnel",
    titreEn: "Institutional film",
    client: "JB CREATION",
    clientEn: "JB CREATION",
    secteur: "Communication audiovisuelle",
    secteurEn: "Audiovisual communication",
    annee: "2024",
    tags: ["Vidéo", "Production", "Communication"],
    cover: "images/film-institutionnel-poster.jpg",
    images: [],
    videos: [
      "videos/film-institutionnel.mp4",
      "videos/film-institutionnel2.mp4",
      "videos/film-institutionnel3.mp4"
    ],
    description: {
      fr: [
        "Cette série de films présente une approche de communication institutionnelle pensée pour faire connaître une marque et son activité.",
        "Les vidéos associent messages de marque et narration visuelle dans des formats adaptés à une diffusion numérique.",
        "Trois séquences sont réunies dans cette galerie pour donner un aperçu du travail audiovisuel réalisé."
      ],
      en: [
        "This film series presents an institutional communication approach designed to introduce a brand and its work.",
        "The videos combine brand messaging and visual storytelling in formats suited to digital distribution.",
        "Three clips are gathered here to showcase the audiovisual work."
      ]
    },
    livrables: ["Concept audiovisuel", "Production vidéo", "Montage", "Formats numériques"]
  },
  {
    id: "brunch-djimini",
    titre: "Brunch Djimini",
    titreEn: "Djimini Brunch",
    client: "Fédération Djimini pour le Développement Local",
    clientEn: "Djimini Federation for Local Development",
    secteur: "Événementiel et culture",
    secteurEn: "Events and culture",
    annee: "2026",
    tags: ["Événementiel", "Communication", "Print"],
    cover: "images/brunch.png",
    images: [],
    description: {
      fr: [
        "Le visuel annonce la première édition du Brunch Djimini, organisée autour du patrimoine, de la culture et de la gastronomie.",
        "La composition rassemble le thème de l'événement, les informations pratiques et les partenaires institutionnels dans une affiche dédiée.",
        "Cette création sert de support principal pour informer le public et promouvoir la rencontre."
      ],
      en: [
        "This visual promotes the first Djimini Brunch, centred on heritage, culture and food.",
        "The composition brings together the event theme, practical information and institutional partners in a dedicated poster.",
        "The artwork serves as the main communication piece to inform the public and promote the gathering."
      ]
    },
    livrables: ["Concept graphique", "Affiche événementielle", "Mise en page"]
  }
];
