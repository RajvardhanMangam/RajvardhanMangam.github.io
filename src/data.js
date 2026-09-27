export const profile = {
  name: "Rajvardhan Mangam",
  navName: "Mangam Rajvardhan",
  id: "CS25M107",
  role: "M.Tech, Computer Science & Engineering",
  institute: "Indian Institute of Technology, Tirupati",
  email: "cs25m107@iittp.ac.in",
  linkedin: "https://www.linkedin.com/in/yamaraja/",
  github: "https://github.com/RajvardhanMangam",
  location: "Tirupati, Andhra Pradesh, IN",
  coordinates: "13.6288°N / 79.4192°E",
};

export const education = [
  {
    range: "2025 — 2027",
    degree: "M.Tech, Computer Science & Engineering",
    institute: "Indian Institute of Technology, Tirupati",
  },
  {
    range: "2020 — 2024",
    degree: "B.Tech, Chemical Engineering",
    institute: "JNTUK University College of Engineering, Kakinada",
  },
  {
    range: "2020",
    degree: "Intermediate Public Examination",
    institute: "BIEAP Board",
  },
  {
    range: "2018",
    degree: "Secondary School Certificate",
    institute: "BSEAP Board",
  },
];

export const skillGroups = [
  {
    label: "Languages",
    coord: "01",
    blurb: "Core languages for systems, scripting, and research code.",
    items: ["C++", "Python", "Rust", "Java", "JavaScript", "C"],
  },
  {
    label: "Deep Learning",
    coord: "02",
    blurb: "Model architectures and training techniques used across projects.",
    items: ["CNNs", "LSTMs", "NAFNet", "Transformers", "Transfer Learning", "PyTorch"],
  },
  {
    label: "AI & ML Systems",
    coord: "03",
    blurb: "Applied ML surfaces — from vision to language to inference.",
    items: ["Computer Vision", "Semantic Segmentation", "NLP", "LLMs", "Prompt Engineering", "ONNX Runtime"],
  },
  {
    label: "Geospatial",
    coord: "04",
    blurb: "Tools for working with satellite and remote-sensing data.",
    items: ["Remote Sensing", "GIS", "Rasterio", "GDAL", "GeoTIFF Processing", "Geospatial Analytics"],
  },
  {
    label: "Systems & Hardware",
    coord: "05",
    blurb: "Low-level and infrastructure work beyond the application layer.",
    items: ["Linux", "ChampSim", "Hardware Prefetching", "Docker", "Asynchronous Processing", "Microservices"],
  },
  {
    label: "Web & Backend",
    coord: "06",
    blurb: "The stack behind every project's dashboards and APIs.",
    items: ["FastAPI", "React.js", "Node.js", "Express.js", "REST APIs", "MongoDB"],
  },
];

export const projects = [
  {
    index: "01",
    name: "TradBot Lite",
    period: "Jan — Jul '26",
    tag: "Systematic Trading",
    summary:
      "A high-frequency, rule-based trading engine written in Rust for execution speed, with a Python layer for research and signal design against the Binance API.",
    points: [
      "Rust execution core handling real-time market data with low-latency order logic.",
      "Backtesting framework built in Pandas and NumPy to validate strategies against historical data before capital is at risk.",
      "Full pipeline from data ingestion to signal generation, portfolio management, and trade execution.",
    ],
    stack: ["Rust", "Python", "Binance API", "Pandas", "NumPy"],
    link: "https://github.com/RajvardhanMangam/Trading-bot",
  },
  {
    index: "02",
    name: "Vyom",
    period: "2026",
    tag: "3D Reconstruction",
    summary:
      "Reconstructs navigable 3D scenes from raw drone footage — turning a flight path into a spatial model that can be measured, viewed, and analyzed after the fact.",
    points: [
      "Frame extraction and pose estimation pipeline built for aerial, unstructured video.",
      "Dense reconstruction tuned for outdoor, large-scale scenes rather than tabletop objects.",
      "Designed as a foundation for downstream survey and inspection use cases.",
    ],
    stack: ["Python", "Computer Vision", "3D Reconstruction", "Drone Imagery"],
    link: profile.github,
  },
  {
    index: "03",
    name: "Geo-Spatial Segmentation",
    period: "Jan — Jul '26",
    tag: "Remote Sensing",
    summary:
      "An end-to-end platform for pixel-level land-cover and infrastructure classification across multi-gigabyte GeoTIFF datasets, from raw imagery to served predictions.",
    points: [
      "Transformer-based pipeline using SegFormer and Hugging Face Transformers for segmentation.",
      "Inference optimized through ONNX Runtime for large-scale remote sensing workloads.",
      "Scalable microservices backend on FastAPI, Docker, Redis, and Celery for async task handling.",
    ],
    stack: ["PyTorch", "SegFormer", "ONNX Runtime", "FastAPI", "Docker", "GeoTIFF"],
    link: "https://github.com/RajvardhanMangam/Geo-Spatial-Segmentation",
  },
  {
    index: "04",
    name: "SUDHA",
    period: "2026",
    tag: "Applied ML",
    summary:
      "A focused applied-ML system built to take a specific real-world workflow from manual and slow to automated and reliable.",
    points: [
      "Modeling and pipeline work grounded in a concrete operational use case.",
      "Built with an emphasis on reliability over novelty for its intended workflow.",
    ],
    stack: ["Python", "Machine Learning"],
    link: profile.github,
  },
  {
    index: "05",
    name: "Janvaani",
    period: "Jan — Jul '26",
    tag: "Civic Technology",
    summary:
      "An AI-powered grievance management platform that automates complaint registration and resolution routing for citizens and administrators alike.",
    points: [
      "LLM integration for automatic classification and information extraction from complaints.",
      "Role-based dashboards and REST APIs across React.js, Node.js, Express.js, and MongoDB.",
      "Prompt-engineered response generation for recurring grievance categories.",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "LLMs"],
    link: "https://github.com/Gurudeep306/Janvaani",
  },
  {
    index: "06",
    name: "Ecothereum",
    period: "2025",
    tag: "Public Choice Award",
    summary:
      "A climate-resilience proposal pairing sustainable-development thinking with an AI-driven decision layer — recognized with the Public Choice Award.",
    points: [
      "Proposed framework for climate resilience and sustainable development.",
      "Presented and evaluated among participants from multiple countries.",
    ],
    stack: ["Applied AI", "Sustainability", "Systems Design"],
    link: profile.github,
  },
];

export const achievements = [
  {
    title: "International Winner — Climate Change Ideathon 2025",
    detail:
      "Won the Public Choice Award for Ecothereum, an AI-driven climate-resilience proposal, among participants from multiple countries.",
  },
  {
    title: "Prize Winner — GeoIntel Hackathon, TIH IIT Tirupati",
    detail:
      "Awarded a prize for building AI-driven geospatial intelligence solutions using satellite imagery and remote sensing data, at a hackathon conducted by the Technology Innovation Hub at IIT Tirupati.",
  },
];

export const internship = {
  company: "Coromandel International Limited",
  role: "Project Trainee",
  period: "Jan '24 — May '24",
  detail:
    "Collaborated with engineers and operators to understand boiler operations in a large-scale manufacturing plant. Worked across process monitoring, safety compliance, and utility management.",
};
