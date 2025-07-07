type Industry = 
  | "Finance" 
  | "Cryptocurrency" 
  | "Media" 
  | "Personal Branding" 
  | "FinTech" 
  | "Education" 
  | "Competitive Programming" 
  | "eCommerce" 
  | "Fashion" 
  | "Social Media";

type Technology = 
  | "React" 
  | "Node.js" 
  | "WebSockets" 
  | "MongoDB" 
  | "Redis" 
  | "Binance API" 
  | "Next.js" 
  | "Vercel" 
  | "Markdown" 
  | "Tailwind CSS" 
  | "React Native" 
  | "Express" 
  | "JWT" 
  | "LeetCode API" 
  | "Redux" 
  | "Razorpay" 
  | "Socket.IO" 
  | "Cloudinary";

type Role = "Full Stack" | "Design";

interface Project {
  heading: string;
  info: string;
  industry: Industry[];
  technologyUsed: Technology[];
  role: Role[];
  challenges: string[];
  solutions: string[];
}

export interface Projects {
  cryptex: Project;
  techUnplugged: Project;
  digitalWallet: Project;
  contestHunt: Project;
  manaraAlAman: Project;
  boo: Project;
}
export const projectsData:Projects = {
    cryptex: {
      heading: "Cryptex",
      info: " My crypto trading platform is engineered for high throughput, low latency, and horizontal scalability. It uses an API gateway-like architecture to decouple client interactions from the trading engine, which handles core operations like order matching, balance updates (via Lua scripting for atomicity), and real-time event distribution through Redis (pub/sub, lists, hashsets). Market data is persisted in TimescaleDB for efficient time-series querying, and WebSocket streams provide millisecond-level updates to clients. The system is fully unit tested for core reliability and performance consistency.",
      industry: ["Finance", "Cryptocurrency"],
      technologyUsed: ["React", "Node.js", "WebSockets", "MongoDB", "Redis", "Binance API"],
      role: ["Full Stack", "Design"],
      challenges: [
        "Ensuring real-time trading updates",
        "Managing order matching efficiently",
        "Handling wallet transactions securely"
      ],
      solutions: [
        "Used WebSockets for live market feed",
        "Implemented a Redis-backed matching engine",
        "Integrated wallet encryption and JWT-based auth"
      ]
    },
    techUnplugged: {
      heading: "Tech Unplugged",
      info: "A minimalist blog site hosted on serverless infrastructure.",
      industry: ["Media", "Personal Branding"],
      technologyUsed: ["Next.js", "Vercel", "Markdown", "Tailwind CSS"],
      role: ["Full Stack", "Design"],
      challenges: [
        "Fast rendering of blog content",
        "Scalable serverless hosting"
      ],
      solutions: [
        "Used SSG in Next.js for fast loads",
        "Deployed on Vercel with GitHub CI/CD"
      ]
    },
    digitalWallet: {
      heading: "Digital Wallet",
      info: "A secure digital wallet for storing and sending virtual money.",
      industry: ["Finance", "FinTech"],
      technologyUsed: ["React Native", "Node.js", "Express", "JWT", "MongoDB"],
      role: ["Full Stack", "Design"],
      challenges: [
        "Secure money transfer",
        "User authentication and authorization"
      ],
      solutions: [
        "Implemented OTP and 2FA",
        "Used JWT and hashed PIN for auth"
      ]
    },
    contestHunt: {
      heading: "ContestHunt",
      info: "Aggregates upcoming coding contests and community solutions.",
      industry: ["Education", "Competitive Programming"],
      technologyUsed: ["React", "Express", "LeetCode API", "MongoDB"],
      role: ["Full Stack", "Design"],
      challenges: [
        "Scraping contest data from multiple sources",
        "Plagiarism detection in solutions"
      ],
      solutions: [
        "Used Puppeteer + Cron jobs",
        "Implemented solution hashing + diff checker"
      ]
    },
    manaraAlAman: {
      heading: "Manara-Al-aman",
      info: "An eCommerce platform for traditional clothing with custom filters.",
      industry: ["eCommerce", "Fashion"],
      technologyUsed: ["React", "Redux", "Node.js", "MongoDB", "Razorpay"],
      role: ["Full Stack", "Design"],
      challenges: [
        "Integrating payment gateway",
        "Creating dynamic product filters"
      ],
      solutions: [
        "Used Razorpay for checkout",
        "Implemented filter-based search and sort logic"
      ]
    },
    boo: {
      heading: "BOO",
      info: "A community platform for sharing content, likes, and comments.",
      industry: ["Social Media"],
      technologyUsed: ["React", "Node.js", "Socket.IO", "MongoDB", "Cloudinary"],
      role: ["Full Stack", "Design"],
      challenges: [
        "Real-time comment system",
        "Image uploads and CDN integration"
      ],
      solutions: [
        "Used Socket.IO for live comments",
        "Integrated Cloudinary for image uploads"
      ]
    }
  };
  