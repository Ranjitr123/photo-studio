export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
  startingPrice: number;
  popular?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: "wedding" | "pre-wedding" | "drone" | "portrait" | "traditional" | "events";
  image: string;
  location: string;
  date: string;
  camera: string;
  lens: string;
  aperture: string;
  shutterSpeed: string;
  iso: string;
  featured?: boolean;
}

export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice: number;
  popular?: boolean;
  badge?: string;
  deliverables: string[];
  team: string;
  duration: string;
  coverage: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  eventType: string;
  review: string;
  rating: number;
  image: string;
  date: string;
}

export interface StudioGear {
  name: string;
  category: "Camera" | "Cinema" | "Drone" | "Lens" | "Lighting" | "Audio";
  description: string;
  badge: string;
  image: string;
}

export const STUDIO_INFO = {
  name: "Bhagabati Photo Studio",
  tagline: "Nirakarpur's Premier Wedding & Cinematic Photo Studio",
  shortAddress: "College Square, Nirakarpur, Khordha, Odisha - 752019",
  fullAddress: "Bhagabati Photo Studio & Digital Color Lab, Near College Square Main Market, Nirakarpur, District Khordha, Odisha 752019, India",
  phone1: "+91 83289 64681",
  phone2: "+91 82496 70159",
  whatsapp: "918328964681",
  email: "bhagabatistudio.nirakarpur@gmail.com",
  openingHours: "Mon - Sun: 8:00 AM - 9:30 PM",
  experienceYears: 15,
  eventsCaptured: "2,800+",
  happyClients: "5,000+",
  googleRating: 4.9,
  reviewsCount: 340,
};

export const SERVICES: Service[] = [
  {
    id: "wedding-photography",
    title: "Royal Wedding Photography",
    shortDesc: "Grandeur, emotion, and timeless rituals captured with cinema-grade precision.",
    description: "Every Odia wedding is steeped in rich traditions, vibrant colors, and heartfelt tears of joy. From the solemn Mahaprasad blessing and Vara Anukula to the lively Baarat and sentimental Bidai, our team captures each fleeting second in 4K UHD with artful lighting.",
    icon: "HeartHandshake",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Traditional & Candid Dual Photographers",
      "4K Ultra-HD Multi-Cam Video Coverage",
      "Traditional Odia Wedding Ritual Expertise",
      "Ultra-Luxurious Italian Velvet Albums",
      "Live YouTube/Webcast Streaming setup",
    ],
    startingPrice: 35000,
    popular: true,
  },
  {
    id: "pre-wedding-shoot",
    title: "Cinematic Pre-Wedding Shoots",
    shortDesc: "Romantic love stories filmed at scenic beaches, heritage temples & lush backdrops.",
    description: "Tell your love story through cinematic lenses. Whether you dream of a sunset shoot at Puri beach, the architectural majesty of Konark/Dhauli, Chilika Lake boat romance, or romantic forest glades near Nirakarpur & Khordha, we script and shoot bespoke couple films.",
    icon: "Camera",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Concept Scripting & Storyboarding",
      "Drone Aerial Cinematography",
      "Slow-Motion 120fps Romantic Highlights",
      "Multiple Outfit Changes & Props Included",
      "Reels & 60s Instagram Teasers",
    ],
    startingPrice: 20000,
    popular: true,
  },
  {
    id: "drone-videography",
    title: "4K Aerial Drone Cinematography",
    shortDesc: "Breathtaking bird's-eye views that give your wedding a true Bollywood movie feel.",
    description: "Equipped with DJI Mavic 3 Pro Cine multi-lens drones, we capture sweeping aerial shots of grand baarat processions, open-air mandaps, firework displays, and breathtaking scenic landscapes in stunning 4K 60fps.",
    icon: "Plane",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Licensed & Experienced Drone Pilots",
      "4K HDR 10-bit Color Profile",
      "Grand Baarat & Mandap Fly-throughs",
      "High Wind & Low Light Performance",
      "Raw Footage Delivery on SSD/Cloud",
    ],
    startingPrice: 12000,
  },
  {
    id: "candid-photography",
    title: "Candid & Emotional Moments",
    shortDesc: "Unposed, genuine laughter, tears, and spontaneous stolen glances.",
    description: "True magic happens in between the poses. Our candid specialists blend into the crowd with prime telephoto lenses to document genuine emotions, proud parents' tears, secret giggles of bridesmaids, and spontaneous dance floor madness.",
    icon: "Sparkles",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Unobtrusive documentary shooting style",
      "Sony G-Master f/1.2 & f/1.4 prime optics",
      "Emotional color tones & artistic black & whites",
      "Instant highlight edits for social media",
    ],
    startingPrice: 18000,
  },
  {
    id: "traditional-events",
    title: "Traditional Rituals & Puja",
    shortDesc: "Upanayana (Bratopanayana), Ring Ceremony, Reception, Birthday & Housewarming.",
    description: "Comprehensive coverage of sacred life milestones: sacred thread ceremonies (Bratopanayana), Ring Ceremonies (Nirbandha), 1st Birthdays, Annaprashan, Griha Pravesh, and college/cultural events in Nirakarpur and surrounding regions.",
    icon: "Flame",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Vedic Ritual Punctuality & Respect",
      "Full family group portraits with studio strobes",
      "Crystal-clear ceremony audio capture",
      "Fast 48-hour preview photo delivery",
    ],
    startingPrice: 15000,
  },
  {
    id: "studio-portrait-printing",
    title: "Studio Portraits & High-End Lab Printing",
    shortDesc: "Pro Headshots, Family Portraits, Instant Passport Photos & Canvera Albums.",
    description: "Visit our modern air-conditioned digital studio in Nirakarpur for high-end studio portraits, professional matte finish passport photos, laminated frame printing, custom coffee table photobooks, and heirloom restoration of old family photos.",
    icon: "Printer",
    image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Pro Studio Softbox & Rim Lighting Rig",
      "Instant 5-Minute Passport & Visa Photos",
      "Canvera / Karizma Signature Albums",
      "Old Damaged Photo Colorization & Restoration",
      "Custom Wooden & Glass Wall Photo Frames",
    ],
    startingPrice: 500,
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "port-1",
    title: "A Golden Heritage Wedding - Subhashree & Rakesh",
    category: "wedding",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
    location: "Puri Heritage Palace, Odisha",
    date: "Feb 2026",
    camera: "Sony Alpha 7 IV",
    lens: "FE 85mm f/1.4 GM",
    aperture: "f/1.8",
    shutterSpeed: "1/400s",
    iso: "100",
    featured: true,
  },
  {
    id: "port-2",
    title: "Chilika Sunset Romance - Ananya & Deepak",
    category: "pre-wedding",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    location: "Mangalajodi / Chilika Lake",
    date: "Jan 2026",
    camera: "Sony FX3 Cinema",
    lens: "FE 24-70mm f/2.8 GM II",
    aperture: "f/2.8",
    shutterSpeed: "1/1000s",
    iso: "160",
    featured: true,
  },
  {
    id: "port-3",
    title: "Grand Baarat Night Sky Aerial View",
    category: "drone",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80",
    location: "Nirakarpur Royal Mandap",
    date: "Dec 2025",
    camera: "DJI Mavic 3 Pro Cine",
    lens: "24mm Hasselblad Sensor",
    aperture: "f/2.8",
    shutterSpeed: "1/60s",
    iso: "400",
    featured: true,
  },
  {
    id: "port-4",
    title: "Pure Joy of Haldi & Sindoor Dan",
    category: "wedding",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80",
    location: "Khordha Mandap",
    date: "Nov 2025",
    camera: "Canon EOS R5",
    lens: "RF 50mm f/1.2 L USM",
    aperture: "f/1.4",
    shutterSpeed: "1/500s",
    iso: "200",
    featured: true,
  },
  {
    id: "port-5",
    title: "The Odissi & Bridal Elegance Portrait",
    category: "portrait",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
    location: "Bhagabati Studio Lab, Nirakarpur",
    date: "Jan 2026",
    camera: "Sony Alpha 7R V",
    lens: "FE 135mm f/1.8 GM",
    aperture: "f/2.0",
    shutterSpeed: "1/250s",
    iso: "100",
    featured: true,
  },
  {
    id: "port-6",
    title: "Sacred Bratopanayana Thread Ceremony",
    category: "traditional",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    location: "Nirakarpur Temple Road",
    date: "Feb 2026",
    camera: "Sony Alpha 7 IV",
    lens: "FE 35mm f/1.4 GM",
    aperture: "f/2.2",
    shutterSpeed: "1/320s",
    iso: "320",
    featured: false,
  },
  {
    id: "port-7",
    title: "Whispers in the Shoreline - Pre-Wedding Tale",
    category: "pre-wedding",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    location: "Golden Beach, Puri",
    date: "Jan 2026",
    camera: "Sony FX3 Cinema",
    lens: "FE 50mm f/1.2 GM",
    aperture: "f/1.4",
    shutterSpeed: "1/1200s",
    iso: "100",
    featured: false,
  },
  {
    id: "port-8",
    title: "The Royal Groom Crown & Turban Ritual",
    category: "portrait",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
    location: "Bhubaneswar Royale",
    date: "Dec 2025",
    camera: "Canon EOS R5",
    lens: "RF 85mm f/1.2 L",
    aperture: "f/1.6",
    shutterSpeed: "1/400s",
    iso: "160",
    featured: false,
  },
  {
    id: "port-9",
    title: "Aerial View of Sacred Temple Procession",
    category: "drone",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
    location: "Dhauli Shanti Stupa Valley",
    date: "Jan 2026",
    camera: "DJI Mavic 3 Pro",
    lens: "70mm Telephoto Drone Lens",
    aperture: "f/2.8",
    shutterSpeed: "1/2000s",
    iso: "100",
    featured: false,
  },
  {
    id: "port-10",
    title: "Festive Joy & Rangoli Celebrations",
    category: "events",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    location: "Jatni Festivities",
    date: "Dec 2025",
    camera: "Sony Alpha 7 IV",
    lens: "FE 24-70mm f/2.8 GM",
    aperture: "f/2.8",
    shutterSpeed: "1/250s",
    iso: "400",
    featured: false,
  },
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: "silver-traditional",
    name: "Silver Traditional",
    tagline: "Ideal for Engagements, Ring Ceremonies & Sacred Thread Rituals",
    price: 24999,
    originalPrice: 32000,
    deliverables: [
      "1 Senior Traditional Photographer",
      "1 Full HD Cinematic Videographer",
      "1 Premium 40-Page Glossy Photobook",
      "Full Edited Video (1.5 - 2 Hours)",
      "High-Resolution Edited Digital Photos (250+)",
      "Dedicated Pen Drive + Google Cloud Gallery Link",
    ],
    team: "2 Crew Members",
    duration: "Single Day / 1 Event (Up to 8 Hours)",
    coverage: ["Engagement / Ring Ceremony", "Bratopanayana", "Reception or Sangeet"],
  },
  {
    id: "golden-wedding",
    name: "Golden Royal Wedding",
    tagline: "Our Most Loved Package for Complete Wedding & Reception Extravaganza",
    price: 49999,
    originalPrice: 65000,
    popular: true,
    badge: "MOST POPULAR",
    deliverables: [
      "1 Candid Master Photographer (Sony A7IV)",
      "1 Traditional Event Photographer",
      "1 Cinema-Grade 4K Videographer",
      "1 4K Drone Aerial Pilot (DJI Mavic)",
      "2 Royal Italian Leather/Velvet Albums (60 Pages)",
      "3-4 Minute Cinematic Wedding Teaser Reel",
      "Full Wedding Documentary Film (60-90 Mins)",
      "500+ Retouched Master Digital Images",
      "Custom Engraved Wooden Box with Pen Drive",
    ],
    team: "4 Professional Specialists",
    duration: "2 Days (Haldi, Wedding & Grand Reception)",
    coverage: ["Haldi / Mehendi", "Baarat & Mandap Rituals", "Reception Banquet"],
  },
  {
    id: "diamond-cinematic-royale",
    name: "Diamond Royale VIP",
    tagline: "The Ultimate 360° Luxury Wedding + Pre-Wedding Mega Production",
    price: 89999,
    originalPrice: 120000,
    badge: "ULTIMATE LUXURY",
    deliverables: [
      "Full Pre-Wedding Cinematic Shoot at Beach/Heritage (1 Full Day)",
      "2 Candid Master Photographers (Prime f/1.2 Rig)",
      "2 Cinematic Film Directors (Sony FX3 Cinema Line)",
      "1 Pro Drone Cinematographer (DJI Mavic 3 Pro Cine)",
      "1 Traditional Group Photographer",
      "3 Ultra HD Canvera Signature Flush-Mount Albums",
      "Same-Day Edit (SDE) Teaser for Reception LED Wall",
      "5-7 Min 4K Cinematic Love Story Feature Film",
      "Unlimited Edited High-Res Photos on 1TB Portable SSD",
      "Live HD YouTube / Family Webcasting Setup",
    ],
    team: "6 Top-Tier Crew Members",
    duration: "3 Full Days + 1 Day Pre-Wedding Shoot",
    coverage: ["Pre-Wedding Shoot", "Haldi / Sangeet Night", "Grand Wedding Baarat", "Reception Gala"],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Dr. Priyadarshini & Er. Soumya Ranjan",
    location: "Nirakarpur / Bhubaneswar",
    eventType: "Grand Wedding & Pre-Wedding Film",
    review: "Choosing Bhagabati Photo Studio was the best decision for our wedding! The team arrived on time with top-class cameras and drones. The pre-wedding teaser in Puri looked like a Bollywood song. The album quality is breathtaking and every relative praised the photos!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    date: "February 2026",
  },
  {
    id: "test-2",
    name: "Er. Rajesh Pattanaik",
    location: "College Square, Nirakarpur",
    eventType: "Brother's Royal Wedding",
    review: "Bhagabati Studio is an institution in Nirakarpur. They have evolved so much with Sony FX3 cinematic cameras and drone flyovers. The candid emotional shots of my parents during the Kanyadaan brought tears to our eyes. Highly recommended for every family in Khordha & Puri.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    date: "January 2026",
  },
  {
    id: "test-3",
    name: "Monali Sahoo & Ashutosh Das",
    location: "Jatni / Khordha",
    eventType: "Engagement & Reception",
    review: "Super responsive team! They captured every small traditional detail of our Odia rituals with utmost care. The color grading is so rich and natural without over-filtering. Also the Canvera velvet photobook arrived within 10 days of selection!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    date: "December 2025",
  },
];

export const STUDIO_GEARS: StudioGear[] = [
  {
    name: "Sony FX3 Cinema Line",
    category: "Cinema",
    description: "Full-frame 4K 120fps cinema camera for mesmerizing cinematic slow motion and low light warmth.",
    badge: "Cinema Master",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sony Alpha 7 IV & 7R V",
    category: "Camera",
    description: "61MP ultra-high resolution flagship cameras paired with AI real-time eye autofocus.",
    badge: "Ultra Resolution",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "DJI Mavic 3 Pro Cine",
    category: "Drone",
    description: "Triple-camera Hasselblad drone delivering 5.1K Apple ProRes aerial views of mandaps and baarats.",
    badge: "5.1K Aerial",
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sony G-Master Prime Lenses",
    category: "Lens",
    description: "24mm f/1.4, 50mm f/1.2, 85mm f/1.4 & 70-200mm f/2.8 GM II for dreamy creamy background bokeh.",
    badge: "f/1.2 Creamy Bokeh",
    image: "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Godox AD600 Pro & AD200 Strobes",
    category: "Lighting",
    description: "High-speed sync wireless outdoor and studio strobe setup for magazine-grade lighting.",
    badge: "Studio Light Rig",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "DJI RS3 Pro Gimbal & Rode Mic",
    category: "Cinema",
    description: "Carbon-fiber 3-axis stabilization and 32-bit float wireless audio microphones for crystal audio.",
    badge: "Pro Stabilization",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
  },
];

export const FAQS = [
  {
    question: "Where is Bhagabati Photo Studio located?",
    answer: "We are located at Main Market Road, Near College Square, Nirakarpur, Khordha District, Odisha (PIN: 752019). We travel extensively across Nirakarpur, Khordha, Jatni, Puri, Bhubaneswar, and all across Odisha for destination shoots.",
  },
  {
    question: "How far in advance should we book for our wedding?",
    answer: "During the peak Odia wedding season (November to March, and May-July), our dates get reserved 3 to 6 months in advance. We recommend reaching out as soon as your wedding or engagement date is finalized to lock in your date with an advance deposit.",
  },
  {
    question: "How long does it take to deliver the photos, video, and album?",
    answer: "We provide a 50-photo Sneak Peek Teaser within 48 to 72 hours of the event so you can post on social media immediately! The complete set of edited digital photos is delivered within 15 days, cinematic teaser video in 20 days, and the printed luxury Canvera album within 2 to 3 weeks after you finalize your photo selections.",
  },
  {
    question: "Can we customize a package according to our budget?",
    answer: "Yes, absolutely! We understand every wedding and family ritual is unique. You can use our interactive package estimator or talk with us directly to customize camera count, drone requirements, album pages, and days of coverage.",
  },
  {
    question: "Do you offer passport photos, photo framing, and studio portraits?",
    answer: "Yes! At our physical studio lab in Nirakarpur, we offer instant 5-minute passport/visa photos, high-resolution family studio portraits, personalized wall frames, and digital color restoration for old, cherished photos.",
  },
  {
    question: "What is the payment schedule for wedding bookings?",
    answer: "We require a 20% advance token to block the date on our calendar, 60% on the days of the event shoot, and the remaining 20% upon delivery of the physical albums and final edited 4K master films.",
  },
];
