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
  | "Postgres"
  | "Timescaledb"
  |  "Websockets"
  | "Redis" 
  | "Binance API" 
  | "Next.js" 
  | "Vercel" 
  | "Markdown" 
  | "Cloudflare"
  | "S3"
  |"PostgresJson"
  | "Tailwind CSS" 
  | "React Native" 
  | "Express" 
  | "JWT" 
  | "LeetCode API" 
  |"Hono"
  | "Redux" 
  | "Razorpay" 
  | "Socket.IO"
  | "lightweight charts" 
  | "Cloudinary";

type Role = "Full Stack" | "Design";

export interface Project {
  heading: string;
  info: string;
  industry: Industry[];
  technologyUsed: Technology[];
  role: Role[];
  challenges: string[];
  solutions: string[];
  githubLink:string
  images:string[]
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
      technologyUsed: ["Next.js", "Node.js", "WebSockets", "MongoDB", "Redis", "Express", "Postgres","Timescaledb","lightweight charts"],
      role: ["Full Stack", "Design"],
      challenges: [
        "Ensuring real-time trading updates",
        "Managing order matching efficiently",
        "Handling wallet transactions securely",
        "Atomicity it Redis transaction",
        "Syncing Redis to PostgresDb and timescaleDb"
      ],
      solutions: [
        "Used WebSockets for live market feed",
        "Implemented a Redis-backed matching engine",
        "Integrated wallet encryption and JWT-based auth",
        "Used Lua script to maintain atomicity",
        "Used timescaledb to get the stats effeciently on graph"
      ],
      githubLink:"https://github.com/ShivanshCharak/Cryptex",
      images:[
        "https://res.cloudinary.com/dnvjiudhd/image/upload/v1751993219/Screenshot_from_2025-07-08_22-07-43_fxfqwy.png",
        "https://res.cloudinary.com/dnvjiudhd/image/upload/v1751993219/Screenshot_from_2025-07-08_22-07-31_rea6br.png",
        "https://res.cloudinary.com/dnvjiudhd/image/upload/v1752813657/Screenshot_from_2025-07-18_10-07-23_lh2sqo.png",
      ]
    },
    techUnplugged: {
      heading: "Tech Unplugged",
      info: "A minimalist blog site hosted on serverless cloudflare infrastructure.",
      industry: ["Media", "Personal Branding"],
      technologyUsed: ["React", "Hono","Vercel", "Markdown", "Tailwind CSS", "Cloudflare","Cloudinary","S3", 'PostgresJson',],
      role: ["Full Stack", "Design"],
      challenges: [
        "Fast rendering of blog content",
        "Scalable serverless hosting",
        "Inetgrating services which includes connection over TCP"
      ],
      solutions: [
        "Used SSG in Next.js for fast loads",
        "Deployed on Vercel with GitHub CI/CD"
      ],
      githubLink:"https://github.com/ShivanshCharak/Tech-Unplugged",
      images:[
      "https://res.cloudinary.com/dnvjiudhd/image/upload/v1752813726/Screenshot_from_2025-07-18_09-39-00_xxkqso.png",
      "https://res.cloudinary.com/dnvjiudhd/image/upload/v1752813725/Screenshot_from_2025-07-18_09-38-23_gxzrsc.png",
      "https://res.cloudinary.com/dnvjiudhd/image/upload/v1752813724/Screenshot_from_2025-07-16_19-31-58_qfpnfa.png"
    ]
    },
    digitalWallet: {
      heading: "Digital Wallet",
      info: "A secure digital wallet for storing and sending virtual money.",
      industry: ["Finance", "FinTech"],
      technologyUsed: ["React", "Node.js", "Express", "JWT", "MongoDB"],
      role: ["Full Stack", "Design"],
      challenges: [
        "Secure money transfer",
        "User authentication and authorization"
      ],
      images:[
        "https://res.cloudinary.com/dnvjiudhd/image/upload/v1751993219/Screenshot_from_2025-07-08_22-04-04_qxjmde.png",
        
        "https://res.cloudinary.com/dnvjiudhd/image/upload/v1751993219/Screenshot_from_2025-07-08_22-03-33_jyxfwy.png",
      ],
      githubLink:"",
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
      images:[
        "https://res.cloudinary.com/dnvjiudhd/image/upload/v1752813902/Screenshot_from_2025-07-15_14-49-50_mmx8cr.png",
        "https://res.cloudinary.com/dnvjiudhd/image/upload/v1752813902/Screenshot_from_2025-07-15_15-07-07_j7tvjb.png",
        "https://res.cloudinary.com/dnvjiudhd/image/upload/v1752814333/31bda327-b133-43bb-bf4c-d952cd72c442.png",
      ],
      githubLink:"https://github.com/ShivanshCharak/tle-eleiminators",
      solutions: [
        "Used Leetcode, Codechef's api to extract the link",
        "Used Youtube webhook to get the link of the latest solution",
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
      githubLink:"https://github.com/ShivanshCharak/manara-al-aman",
      images:[
        "https://res.cloudinary.com/dnvjiudhd/image/upload/v1751993219/Screenshot_from_2025-07-08_22-04-04_qxjmde.png",
        "https://res.cloudinary.com/dnvjiudhd/image/upload/v1751993219/Screenshot_from_2025-07-08_22-03-33_jyxfwy.png",
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
      githubLink:"https://github.com/ShivanshCharak/Boo",
      images:[
        "https://res.cloudinary.com/dnvjiudhd/image/upload/v1751993219/Screenshot_from_2025-07-08_22-04-04_qxjmde.png",
        "https://res.cloudinary.com/dnvjiudhd/image/upload/v1751993219/Screenshot_from_2025-07-08_22-03-33_jyxfwy.png",
      ],
      solutions: [
        "Used Socket.IO for live comments",
        "Integrated Cloudinary for image uploads"
      ]
    }
  };
  