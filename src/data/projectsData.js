export const featuredProjects = [
  {
    slug: "agrotech",
    title: "Agrotech",
    oneLiner:
      "AI-enabled smart farming platform with IoT telemetry, crop insights, and field workflows.",
    problem:
      "Farm decision-making is often fragmented across weather data, soil conditions, and manual observations, which slows response and reduces planning accuracy.",
    approach:
      "Built a full-stack system combining a React frontend, FastAPI services, and analytics-backed advisory flows, with live IoT sensor integration for operational context.",
    solution:
      "Delivered a deployable farming product featuring real-time NPK and environmental monitoring, chart-based trend views, and guided recommendations for day-to-day farm operations.",
    tech: [
      "React",
      "FastAPI",
      "ML/DL",
      "IoT Integration",
      "Chart.js",
      "LangGraph",
    ],
    previewImage:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=80",
    demoUrl: "https://agro-tech-roan.vercel.app/login",
    repoUrl: "https://github.com/ArnavKarwa07/Agrotech",
    outcomes: [
      "Unified farm monitoring and advisory into a single interface.",
      "Enabled faster action on live soil and environmental signals.",
      "Strengthened practical AI + IoT product engineering skills.",
    ],
    learnings: [
      "Operational products need low-friction workflows over flashy complexity.",
      "Realtime telemetry is most useful when paired with clear decision prompts.",
    ],
  },
  {
    slug: "prompt-master",
    title: "Prompt Master",
    oneLiner:
      "Multi-agent prompt reviewer that improves LLM prompt clarity, structure, and output reliability.",
    problem:
      "Prompt quality is inconsistent for most users, causing unstable responses and weak LLM outcomes.",
    approach:
      "Implemented a supervisor-style multi-agent flow that routes prompts through focused review and optimization stages before final scoring and rewrite output.",
    solution:
      "Shipped a working web app with FastAPI + Next.js that audits prompt quality and suggests targeted improvements for stronger downstream model responses.",
    tech: ["FastAPI", "Next.js", "LangGraph", "Groq API", "Prompt Engineering"],
    previewImage:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80",
    demoUrl: "https://prompt-master-sepia.vercel.app/",
    repoUrl: "https://github.com/ArnavKarwa07/Prompt-Master",
    outcomes: [
      "Improved prompt consistency through structured feedback loops.",
      "Made advanced prompting easier for non-expert users.",
      "Validated multi-agent orchestration for a focused SaaS use case.",
    ],
    learnings: [
      "Prompt feedback works best when tied to explicit dimensions and examples.",
      "Agent routing logic must stay explainable to build trust.",
    ],
  },
  {
    slug: "automated-eda",
    title: "Automated EDA",
    oneLiner:
      "Automated exploratory data analysis platform with guided workflow and smart visual reports.",
    problem:
      "Early-stage dataset analysis is repetitive and often inconsistent, slowing experimentation and model iteration.",
    approach:
      "Designed a step-by-step pipeline for upload, optional cleaning/transformation, and dashboard generation with both AI-assisted and manual analysis modes.",
    solution:
      "Built and deployed a FastAPI + React system that generates statistical summaries, diagnostic visuals, and report-ready outputs from raw CSV data.",
    tech: ["FastAPI", "React", "Pandas", "Scikit-learn", "Plotly", "LangGraph"],
    previewImage:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80",
    demoUrl: "https://auto-eda-pink.vercel.app/",
    repoUrl: "https://github.com/ArnavKarwa07/Automated_EDA",
    outcomes: [
      "Reduced repetitive pre-modeling EDA work with a reusable pipeline.",
      "Standardized first-pass insight generation across datasets.",
      "Improved analysis velocity for experimentation workflows.",
    ],
    learnings: [
      "Automation should accelerate analysts, not hide critical data quality checks.",
      "Visualization defaults matter heavily for first-impression insight quality.",
    ],
  },
  {
    slug: "nyayalens-ai",
    title: "NyayaLens AI",
    oneLiner:
      "RAG-powered Indian legal analysis platform for clause Q&A, conflict checks, and summaries.",
    problem:
      "Indian legal documents are dense, cross-referential, and amendment-heavy, making manual interpretation and comparison slow.",
    approach:
      "Built a legal-document RAG workflow with context-aware chat, citation-backed retrieval, and cross-document reasoning focused on Indian legislative structures.",
    solution:
      "Delivered an MVP with Next.js + FastAPI that supports structured legal summaries, clause-level querying, conflict detection, and version/amendment tracking.",
    tech: [
      "Next.js",
      "FastAPI",
      "RAG",
      "LangGraph",
      "Transformers",
      "spaCy",
      "Vector DB",
    ],
    previewImage:
      "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=1400&q=80",
    demoUrl: "",
    repoUrl: "https://github.com/ArnavKarwa07/Nyaya-AI",
    outcomes: [
      "Enabled faster legal interpretation with context-grounded AI answers.",
      "Added cross-act contradiction checks for policy/legal review use cases.",
      "Established a domain-specific RAG architecture for Indian legal text.",
    ],
    learnings: [
      "Legal AI must optimize for traceability, not only response fluency.",
      "Domain-specific structure modeling improves retrieval relevance significantly.",
    ],
  },
  {
    slug: "dynamic-finance-agent",
    title: "Dynamic Personal Finance Agent",
    oneLiner:
      "AI-driven finance assistant for tracking spending, budgeting, and adaptive financial planning.",
    problem:
      "Most personal finance apps are static and fail to adapt recommendations as user behavior changes.",
    approach:
      "Engineered a LangGraph-based workflow that combines expense tracking, financial APIs, and conversational guidance for progressive financial decision support.",
    solution:
      "Built a React + FastAPI system with Groq-powered reasoning that automates routine tracking and surfaces actionable insights for personal finance tasks.",
    tech: [
      "React",
      "FastAPI",
      "LangGraph",
      "Groq API",
      "Pandas",
      "Finance APIs",
    ],
    previewImage:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1400&q=80",
    demoUrl: "",
    repoUrl: "https://github.com/ArnavKarwa07/Dynamic-Personal-Finance-Agent",
    outcomes: [
      "Improved visibility into recurring spending patterns.",
      "Automated repeated finance operations into guided workflows.",
      "Demonstrated practical agentic AI in a consumer productivity domain.",
    ],
    learnings: [
      "Financial guidance UX depends on conservative, transparent recommendations.",
      "Workflow state design is critical for reliable multi-step agent behavior.",
    ],
  },
];

export const additionalProjects = [
  {
    slug: "multiplayer-server",
    title: "MultiPlayerServer",
    oneLiner:
      "Server-authoritative multiplayer game demo with Netty WebSockets, Protobuf messaging, and browser client rendering.",
    problem:
      "Realtime multiplayer games require deterministic synchronization and low-latency server authority to prevent state drift.",
    approach:
      "Implemented a Java 21 Netty backend using Protobuf packets and authoritative world snapshots, plus demo bots and a browser client for realtime testing.",
    solution:
      "Built an end-to-end multiplayer demo where lobby/session events and movement updates are synchronized from server state over WebSocket.",
    tech: ["Java 21", "Netty", "WebSocket", "Protocol Buffers", "Maven"],
    previewImage:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1400&q=80",
    demoUrl: "",
    repoUrl: "https://github.com/ArnavKarwa07/MultiPlayerServer",
    outcomes: [
      "Validated authoritative-state networking architecture.",
      "Integrated bot clients for repeatable gameplay simulations.",
      "Improved understanding of low-latency realtime protocols.",
    ],
    learnings: [
      "Server authority simplifies anti-cheat and state consistency.",
      "Protocol schema discipline is key for fast multiplayer iteration.",
    ],
  },
  {
    slug: "defectfill",
    title: "DefectFill",
    oneLiner:
      "Two-phase real-time anomaly detection pipeline for industrial inspection with synthetic defects and PatchCore scoring.",
    problem:
      "Industrial anomaly detection suffers from scarce defect samples and limited real-time deployable evaluation pipelines.",
    approach:
      "Combined synthetic defect generation with feature-based few-shot anomaly detection and heatmap localization, then exposed outputs in a live dashboard workflow.",
    solution:
      "Delivered a TensorFlow/Keras pipeline for MVTec AD using DINOv2 features, memory-bank nearest-neighbor scoring, and deployment-ready optimization hooks.",
    tech: ["TensorFlow", "Keras", "PatchCore", "DINOv2", "FastAPI", "Next.js"],
    previewImage:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=80",
    demoUrl: "",
    repoUrl: "https://github.com/ArnavKarwa07/DefectFill",
    outcomes: [
      "Enabled robust anomaly scoring under limited labeled-defect settings.",
      "Improved localization quality through multi-threshold heatmap design.",
      "Created a practical research-to-product anomaly pipeline skeleton.",
    ],
    learnings: [
      "Data synthesis quality directly affects downstream anomaly generalization.",
      "Inference optimization should be designed from day one for realtime targets.",
    ],
  },
  {
    slug: "stockpilot",
    title: "StockPilot",
    oneLiner:
      "Multi-tenant inventory platform with org-level isolation, four-tier RBAC, and realtime stock visibility.",
    problem:
      "Inventory systems often lack strict multi-tenant separation and granular role control for shared operations.",
    approach:
      "Built a full-stack workspace model with organization-scoped auth, role-driven permissions, and inventory CRUD flows across warehouse operations.",
    solution:
      "Implemented a Next.js + FastAPI platform supporting organization workspaces, invitation-based access, and live stock management workflows.",
    tech: [
      "Next.js",
      "FastAPI",
      "TypeScript",
      "RBAC",
      "Multi-Tenancy",
      "SQLite",
    ],
    previewImage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
    demoUrl: "",
    repoUrl:
      "https://github.com/ArnavKarwa07/Customizable_Inventory_Management_System",
    outcomes: [
      "Established strict org-based data isolation model.",
      "Implemented owner/admin/manager/staff permission boundaries.",
      "Improved visibility of distributed stock operations.",
    ],
    learnings: [
      "Authorization modeling must be treated as core product architecture.",
      "Multi-tenant UX should expose scope clearly to avoid operator mistakes.",
    ],
  },
  {
    slug: "face-recognition-system",
    title: "High Speed Face Recognition System",
    oneLiner:
      "Real-time face detection and identification system with FastAPI services and React-based interface.",
    problem:
      "Realtime biometric systems must balance recognition accuracy, inference speed, and user workflow reliability.",
    approach:
      "Implemented a dual-layer app with FastAPI backend services and React UI for enrollment, recognition, and management of identities.",
    solution:
      "Built a production-style pipeline using dlib/face_recognition and OpenCV, with API docs, webcam upload flows, and deployable service boundaries.",
    tech: ["FastAPI", "React", "OpenCV", "dlib", "SQLite", "Docker"],
    previewImage:
      "https://images.unsplash.com/photo-1581091215367-59ab6b9314e1?auto=format&fit=crop&w=1400&q=80",
    demoUrl: "",
    repoUrl: "https://github.com/ArnavKarwa07/High_Speed_Face_Recognition",
    outcomes: [
      "Delivered high-speed end-to-end recognition workflow.",
      "Supported both image upload and webcam capture paths.",
      "Improved practical understanding of realtime CV systems.",
    ],
    learnings: [
      "System latency depends on preprocessing and I/O as much as model choice.",
      "Face enrollment quality strongly drives recognition stability.",
    ],
  },
  {
    slug: "ai-course-recommendation-system",
    title: "AI Course Recommendation System",
    oneLiner:
      "AI-powered recommendation platform for personalized AI/tech learning pathways.",
    problem:
      "Learners and teams struggle to map skill gaps to relevant course pathways at scale.",
    approach:
      "Built a full-stack recommendation system that evaluates user profiles and skill signals to generate structured learning roadmaps.",
    solution:
      "Implemented a React + FastAPI application with recommendation logic, visualization, and profile-driven course suggestions.",
    tech: [
      "React",
      "FastAPI",
      "Recommendation System",
      "LangGraph",
      "MySQL",
      "D3",
    ],
    previewImage:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1400&q=80",
    demoUrl: "",
    repoUrl: "https://github.com/ArnavKarwa07/AI-Course-Recommendation-System",
    outcomes: [
      "Improved learning path relevance through profile-aware suggestions.",
      "Created roadmap-style output for clearer progression planning.",
      "Extended recommendation workflows into practical edtech UX.",
    ],
    learnings: [
      "Recommendation quality improves when explanation is shown with ranking.",
      "Learning systems need balance between personalization and curriculum structure.",
    ],
  },
  {
    slug: "real-estate-price-predictor",
    title: "Real Estate Price Predictor",
    oneLiner:
      "ML workflow for housing price estimation using location and property feature engineering.",
    problem:
      "Property pricing varies heavily by locality and feature interactions, making manual estimation unreliable.",
    approach:
      "Prepared city-focused housing and environmental datasets, then ran preprocessing and model experiments to improve price prediction quality.",
    solution:
      "Built a notebook-driven prediction pipeline with structured preprocessing assets for real-estate valuation experiments.",
    tech: ["Python", "Pandas", "Scikit-learn", "Jupyter", "Data Preprocessing"],
    previewImage:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
    demoUrl: "",
    repoUrl: "https://github.com/ArnavKarwa07/RealEstatePredictor",
    outcomes: [
      "Created reusable preprocessing flows for housing datasets.",
      "Improved modeling readiness through cleaned and transformed features.",
      "Strengthened end-to-end applied ML pipeline practice.",
    ],
    learnings: [
      "Data curation quality dominates model quality in tabular ML projects.",
      "Location encodings and outlier handling are critical for price models.",
    ],
  },
  {
    slug: "stock-market-predictor",
    title: "Stock Market Predictor",
    oneLiner:
      "Machine-learning stock trend system using sequence modeling and sentiment-aware features.",
    problem:
      "Stock movements are noisy and non-stationary, making short-horizon forecasting difficult.",
    approach:
      "Built a 7-day prediction workflow using TensorFlow/Keras models with technical indicators, live market data ingestion, and sentiment components.",
    solution:
      "Implemented a Python pipeline with yfinance retrieval, feature engineering, model training artifacts, and interactive prediction scripts.",
    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "yfinance",
      "Sentiment Analysis",
      "LSTM",
    ],
    previewImage:
      "https://images.unsplash.com/photo-1560221328-12fe60f83ab8?auto=format&fit=crop&w=1400&q=80",
    demoUrl: "",
    repoUrl: "https://github.com/ArnavKarwa07/Stock-Market-Predictor",
    outcomes: [
      "Built repeatable short-horizon stock prediction experiments.",
      "Integrated sentiment and time-series inputs into one workflow.",
      "Improved understanding of uncertainty in financial ML.",
    ],
    learnings: [
      "Backtesting discipline is essential before trusting headline accuracy.",
      "Financial prediction should communicate confidence, not only direction.",
    ],
  },
  {
    slug: "handwritten-number-identifier",
    title: "Handwritten Number Identifier",
    oneLiner:
      "Digit recognition model for classifying handwritten numbers through an image ML workflow.",
    problem:
      "Reliable handwritten digit classification requires robust preprocessing and model tuning.",
    approach:
      "Built a notebook-based computer vision flow to train and validate handwritten digit recognition.",
    solution:
      "Delivered an image-classification prototype for handwritten number identification and experimentation.",
    tech: ["Python", "Jupyter", "Computer Vision", "Image Classification"],
    previewImage:
      "https://images.unsplash.com/photo-1509099836639-18ba02e2e1ba?auto=format&fit=crop&w=1400&q=80",
    demoUrl: "",
    repoUrl: "https://github.com/ArnavKarwa07/Handwritten_Number_Identifier",
    outcomes: [
      "Built a complete handwritten digit classification workflow.",
      "Improved preprocessing and model-evaluation fundamentals.",
      "Validated practical CV pipeline assembly from dataset to prediction.",
    ],
    learnings: [
      "Input normalization and consistent preprocessing are critical in CV tasks.",
      "Baseline models are useful for quickly identifying data-quality issues.",
    ],
  },
  {
    slug: "pharmacy-management-system",
    title: "Pharmacy Management System",
    oneLiner:
      "Desktop pharmacy management app for customer, inventory, and order/billing operations.",
    problem:
      "Small pharmacy operations need structured record keeping for products, customers, and orders.",
    approach:
      "Built a Tkinter-based interface connected to MySQL for login, role-aware views, product updates, stock tracking, and order management.",
    solution:
      "Implemented a database-backed management workflow with admin/user access patterns and inventory-focused operations.",
    tech: ["Python", "Tkinter", "MySQL", "SQL"],
    previewImage:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80",
    demoUrl: "",
    repoUrl: "https://github.com/ArnavKarwa07/Pharmacy-Management-system",
    outcomes: [
      "Centralized pharmacy data and transaction flows in one UI.",
      "Supported stock-level visibility and low-stock reporting.",
      "Improved hands-on database-integrated desktop development skills.",
    ],
    learnings: [
      "Role-specific flows reduce operational mistakes in management systems.",
      "Simple interfaces can be highly effective when data design is clear.",
    ],
  },
  {
    slug: "restaurant-ttmm",
    title: "Restaurant TTMM",
    oneLiner:
      "Restaurant operations website covering menu browsing, ordering flow, and payment handling screens.",
    problem:
      "Restaurant operations often rely on disconnected menu and ordering processes.",
    approach:
      "Developed a multi-page web-based restaurant system with category-driven menus, order scripts, and backend order persistence endpoints.",
    solution:
      "Built a complete restaurant workflow prototype using HTML/CSS/JS with PHP-based order capture and menu/customer flow support.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "Web UI"],
    previewImage:
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1400&q=80",
    demoUrl: "",
    repoUrl: "https://github.com/ArnavKarwa07/RESTAURANT-TTMM",
    outcomes: [
      "Organized menu and ordering interactions into a cohesive flow.",
      "Implemented backend order-save endpoints for operational continuity.",
      "Strengthened practical full-stack web fundamentals.",
    ],
    learnings: [
      "Clear information architecture is central to menu-heavy products.",
      "Operational systems benefit from explicit user journey design.",
    ],
  },
  {
    slug: "amazon-smartphone-data-analysis",
    title: "Amazon Smartphone Data Analysis",
    oneLiner:
      "Dataset analysis of smartphone listings to uncover pricing, ratings, and brand-level patterns.",
    problem:
      "Raw e-commerce product listings hide useful competitive and pricing insights.",
    approach:
      "Analyzed structured smartphone listing data in notebooks to identify trends across price ranges, user ratings, and brand segments.",
    solution:
      "Created a data-analysis workflow that surfaces market behavior and comparison-ready metrics from Amazon smartphone data.",
    tech: ["Python", "Jupyter", "Pandas", "Matplotlib", "Data Analysis"],
    previewImage:
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1400&q=80",
    demoUrl: "",
    repoUrl: "https://github.com/ArnavKarwa07/Amazon_Smartphone_Data_Analysis",
    outcomes: [
      "Identified pricing and rating patterns across smartphone brands.",
      "Built repeatable notebook-based market analysis flow.",
      "Improved storytelling through data-backed trend reporting.",
    ],
    learnings: [
      "Data cleaning quality heavily affects business-facing insight validity.",
      "Simple visuals can communicate market structure effectively.",
    ],
  },
];

export const allProjects = [...featuredProjects, ...additionalProjects];

export function getProjectBySlug(slug) {
  return allProjects.find((project) => project.slug === slug);
}
