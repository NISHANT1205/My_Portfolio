export type ProjectCategory = "Apps" | "Websites" | "Dashboards" | "Games";

export type Project = {
  title: string;
  slug: string;
  eyebrow: string;
  category: ProjectCategory;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  role: string;
  links?: { label: string; href: string }[];
  accent: string;
  visual: "mobile" | "browser" | "dashboard" | "game";
  featured: boolean;
  details?: { title: string; text: string }[];
  architecture?: string[];
};

export const projects: Project[] = [
  {
    title: "Vbike App",
    slug: "vbike-app",
    eyebrow: "Mobile commerce, connected",
    category: "Apps",
    description: "A full Flutter ecosystem for buying electric vehicles, managing connected bikes and accessing live ride intelligence.",
    longDescription: "Vbike is a production Flutter application that combines an EV storefront with connected-vehicle ownership. Customers can browse bikes, batteries and accessories, complete purchase journeys, and then register and monitor their own vehicle through live BMS and GPS data. The product connects commerce, IoT and post-purchase services in one mobile experience.",
    technologies: ["Flutter", "Dart", "Provider", "GetX", "REST APIs", "WebSockets", "Firebase", "Razorpay", "Maps"],
    features: ["EV catalog with bikes, batteries and accessories", "Wishlist, cart, checkout and Razorpay payments", "OTP-based authentication and profile management", "Pre-booking, test rides and dealer discovery", "QR-based bike registration and multi-bike management", "Live battery health, charge and estimated range", "Real-time GPS location, speed and ride status", "Route history and journey visualization", "Geofencing and safe-zone configuration", "Anti-theft lock state and connected controls", "IoT subscription plans and renewals", "Coins, referrals, rewards and redemption flows", "Push notifications and in-app update handling"],
    details: [
      { title: "Discover & buy", text: "A data-driven storefront presents EV models, specifications, offers, batteries and accessories. Customers can save products, manage their cart, locate dealers and move through booking or checkout flows." },
      { title: "Connect a bike", text: "Owners can add vehicles manually or scan a QR code. The app links each registered device to the customer account and loads its subscription and telemetry state." },
      { title: "Monitor live data", text: "REST APIs provide BMS and GPS history while device-specific WebSocket subscriptions update connected screens with live information such as battery state, location and movement." },
      { title: "Protect & understand", text: "Anti-theft state, safe-zone geofencing, route history and usage views turn raw device data into actions and information an owner can understand." },
    ],
    architecture: ["Provider and GetX state management", "Authenticated REST client with token refresh", "Device-specific Socket.IO subscriptions", "Firebase Cloud Messaging notifications", "Cached network imagery and local preferences", "Flutter Map with live GPS and route data"],
    role: "Senior Frontend Developer",
    accent: "#c8ff52",
    visual: "mobile",
    featured: true,
  },
  {
    title: "BMT India Tech",
    slug: "bmt-india-tech",
    eyebrow: "Electronics manufacturing, presented clearly",
    category: "Websites",
    description: "A responsive corporate website presenting BMT’s electronics manufacturing capabilities, products and OEM services.",
    longDescription: "BMT India Tech is a production corporate website for an electronics manufacturer serving OEMs. The experience brings product categories, manufacturing infrastructure, company information, catalogues and enquiry paths into one responsive web presence.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Responsive UI", "SEO"],
    features: ["Electronics product catalogue", "Category-based product discovery", "Manufacturing capability presentation", "Client and company information", "Downloadable catalogues", "Contact and quotation journeys", "Responsive navigation and layouts", "Structured public content and SEO"],
    role: "Website Developer",
    links: [{ label: "Visit website", href: "https://bmtindiatech.com" }],
    accent: "#30318b",
    visual: "browser",
    featured: true,
  },
  {
    title: "Dealer Management System",
    slug: "vbike-dealer-management-system",
    eyebrow: "Role-based ERP operations",
    category: "Dashboards",
    description: "A role-based dealer operations platform connecting inventory, orders, invoices, ledgers and customer workflows.",
    longDescription: "Vbike DMS is an enterprise dealer management system built for Super Stockists, Exclusive Dealers and Sub Dealers. Each role receives a tailored navigation structure and operational workspace, while live backend integrations bring inventory, purchases, sales, invoices, dealer networks and customer activity into one consistent interface.",
    technologies: ["React 18", "Vite", "React Router", "REST APIs", "Recharts", "Role-based UI"],
    features: ["Role-specific dashboards and navigation", "Live inventory overview and stock history", "Dealer onboarding, mapping and approval workflows", "Purchase order creation and history", "Incoming purchases and sales order management", "Manual sales and customer invoicing", "Dealer and customer ledger views", "Customer orders, enquiries and bookings", "Service bookings, test rides and complaints", "Bike lookup and QR scanning", "Searchable, filterable and paginated data tables", "Sales, purchase and weekly order analytics", "Query and support response workflows", "Secure session and protected application routes"],
    details: [
      { title: "Role-aware workspace", text: "Super Stockists, Exclusive Dealers and Sub Dealers see different navigation trees, actions and operational modules, keeping each workspace focused on the user’s responsibilities." },
      { title: "Inventory & dealer network", text: "Live ERP inventory, stock history, dealer onboarding, downstream dealer mapping and approval states provide a shared operational view across the distribution network." },
      { title: "Orders to invoices", text: "Purchase orders, incoming requests, manual sales, sale history and customer invoices are connected through structured forms, detailed views and printable invoice experiences." },
      { title: "Operational intelligence", text: "Dashboard metrics and Recharts visualizations transform purchases, sales and order activity into six-month trends, weekly volume and recent transaction views." },
    ],
    architecture: ["Config-driven role navigation and route generation", "Protected React Router application shell", "Parallel REST API data loading", "Reusable tables, forms, modals and charts", "Dealer-scoped backend requests", "Responsive hand-crafted CSS design system"],
    role: "Senior Frontend Developer",
    accent: "#a78bfa",
    visual: "dashboard",
    featured: true,
  },
  {
    title: "NishArc Studios",
    slug: "nisharc-studios",
    eyebrow: "Independent game studio platform",
    category: "Websites",
    description: "A complete game-studio platform for publishing titles, managing content and supporting players.",
    longDescription: "NishArc Studios is Nishant’s independent game-development and publishing platform. The public experience gives every released title a polished, searchable home, while a protected administration system manages games, artwork, categories, privacy policies, studio settings and player messages from one place.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Cloudinary", "Tailwind CSS", "Zod", "Vercel"],
    features: ["Database-driven game catalogue", "Individual game detail and related-title pages", "Play Store, trailer and support links", "Genre and platform discovery", "Protected administrator dashboard", "Game publishing and lifecycle statuses", "Cloudinary artwork and screenshot management", "Categories and global studio settings", "Per-game SEO, Open Graph and Twitter metadata", "Dynamic SoftwareApplication structured data", "Game-specific privacy policy publishing", "Contact and player-support inbox", "Legal, privacy, terms and cookie pages", "Dynamic sitemap and robots configuration"],
    details: [
      { title: "Publish the catalogue", text: "Each game is stored as structured content with artwork, screenshots, descriptions, features, genre, platform, release status, store links and related metadata. Published titles automatically power the public catalogue." },
      { title: "Give every game a home", text: "Dynamic game pages combine product artwork, availability, features, related titles, support paths and store links with game-specific metadata and SoftwareApplication structured data." },
      { title: "Manage the studio", text: "A protected admin area handles game creation, editing, publishing, categories, media uploads, site settings, legal content and incoming support messages without touching frontend code." },
      { title: "Stay release-ready", text: "MongoDB stores content and enquiries, Cloudinary delivers optimized media, Zod validates inputs, and dynamic sitemaps, robots rules and privacy pages keep the publishing workflow production-ready." },
    ],
    architecture: ["Next.js App Router with server-rendered public pages", "MongoDB and Mongoose content models", "Cloudinary media upload pipeline", "HTTP-only JWT administrator sessions", "Zod-validated API and form inputs", "On-demand path revalidation after content changes"],
    role: "Creator & Full Stack Developer",
    links: [{ label: "Visit website", href: "https://nisharcstudios.vercel.app" }],
    accent: "#52d9ff",
    visual: "game",
    featured: true,
  },
  {
    title: "Fruit Splash",
    slug: "fruit-splash",
    eyebrow: "A playful mobile experiment",
    category: "Games",
    description: "A bright, fast mobile game built as part of the growing NishArc game collection.",
    longDescription: "A mobile game project exploring playful interactions and accessible game loops. Public store links and additional production details can be added when available.",
    technologies: ["Mobile", "Game Development", "Play Console"],
    features: ["Mobile-first interaction", "Playful visual system", "Game-state logic"],
    role: "Game Developer",
    accent: "#ff4f9a",
    visual: "game",
    featured: false,
  },
  {
    title: "Flow Connect",
    slug: "flow-connect",
    eyebrow: "Logic in motion",
    category: "Games",
    description: "A compact puzzle-game concept focused on satisfying interaction and clear visual feedback.",
    longDescription: "A puzzle-oriented mobile game from Nishant’s collection. The portfolio intentionally limits claims until public product details and store links are available.",
    technologies: ["Mobile", "Game Development", "UI Design"],
    features: ["Puzzle mechanics", "Touch interaction", "Progressive challenge"],
    role: "Game Developer",
    accent: "#49e2b7",
    visual: "game",
    featured: false,
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
