interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  // Ingeniería Petrolera
  {
    name: "Petrel",
    description: "Software for seismic interpretation, reservoir modeling, and geological analysis",
    icon: "/src/assets/petrel.png"
  },
  {
    name: "Aspen HYSYS",
    description: "Process simulation tool for designing and optimizing chemical and petroleum plants",
    icon: "/src/assets/hysys.png"
  },
  {
    name: "Pipesim",
    description: "Multiphase flow simulation for well and pipeline network design",
    icon: "/src/assets/pipesim.png"
  },
  {
    name: "Techlog",
    description: "Petrophysical analysis and well log interpretation software",
    icon: "/src/assets/techlog.png"
  },
  {
    name: "ECLIPSE",
    description: "Reservoir simulation for black-oil and compositional modeling",
    icon: "/src/assets/eclipse.png"
  },
  {
    name: "Landmark Compass",
    description: "Directional well planning and trajectory design tool",
    icon: "/src/assets/landmark-edt.png"
  },
  {
    name: "Landmark WellPlan",
    description: "Wellbore mechanical design and torque & drag analysis software",
    icon: "/src/assets/landmark-edt.png"
  },
  {
    name: "Landmark CasingWear",
    description: "Casing wear prediction and mitigation during drilling operations",
    icon: "/src/assets/landmark-edt.png"
  },
  {
    name: "AutoCAD",
    description: "2D/3D design and drafting for engineering drawings and installations",
    icon: "autocad-dark"
  },

  // Programación y Backend
  {
    name: "Python",
    description: "General-purpose language for data science, ML, and automation",
    icon: "python"
  },
  {
    name: "Java",
    description: "Object-oriented language for enterprise applications and backend systems",
    icon: "java"
  },
  {
    name: "Spring Boot",
    description: "Java framework for rapid development of production-ready REST APIs and microservices",
    icon: "springboot"
  },
  {
    name: "FastAPI",
    description: "Modern Python framework for building high-performance APIs",
    icon: "fastapi"
  },
  {
    name: "Docker",
    description: "Platform for developing, shipping, and running containerized applications",
    icon: "docker"
  },

  // Cloud y IA
  {
    name: "Azure AI",
    description: "Suite of AI services for vision, speech, language, and decision-making",
    icon: "azure"
  },
  {
    name: "Azure Machine Learning",
    description: "End-to-end platform to build, train, and deploy machine learning models",
    icon: "azure-ml"
  },
  {
    name: "Azure AI Foundry",
    description: "Environment for building, testing, and orchestrating AI agents and workflows",
    icon: "ai-studio"
  },
  {
    name: "Azure Cognitive Services",
    description: "Pre-built AI APIs for vision, speech, language, and knowledge extraction",
    icon: "cognitive-search"
  },
  {
    name: "OCI Generative AI",
    description: "Oracle services for generative models and large language applications",
    icon: "cib-oracle"
  },
  {
    name: "Microsoft Agent Framework",
    description: "Framework for creating and orchestrating multi-agent AI systems",
    icon: "/src/assets/agent-framework.png"
  },
  {
    name: "LangChain",
    description: "Framework for developing applications powered by large language models",
    icon: "langchain"
  },
  {
    name: "Bicep",
    description: "Declarative language for deploying Azure infrastructure as code",
    icon: "biceps"
  },

  // Datos y Visualización
  {
    name: "Power BI",
    description: "Business analytics tool for interactive dashboards and data visualization",
    icon: "power-bi-embedded"
  },
  {
    name: "Tableau",
    description: "Data visualization platform for exploratory analysis and interactive reports",
    icon: "tableau"
  },
  {
    name: "SQL / MySQL",
    description: "Relational database language and system for data storage and querying",
    icon: "sql"
  },

  // Vector DB y RAG
  {
    name: "ChromaDB",
    description: "Open-source vector database for embedding storage and similarity search",
    icon: "chroma"
  },
  {
    name: "Docling",
    description: "Document parsing library for extracting text, tables, and figures from PDFs",
    icon: "/src/assets/docling.png"
  },
  {
    name: "Azure AI Search",
    description: "Enterprise search service with vector and hybrid retrieval capabilities",
    icon: "cognitive-search"
  },

  // Frontend
  {
    name: "JavaScript / TypeScript",
    description: "Languages for dynamic web development and frontend logic",
    icon: "javascript"
  },
  {
    name: "Astro",
    description: "Static site builder for fast, content-focused websites",
    icon: "astro"
  },
  {
    name: "React",
    description: "JavaScript library for building interactive user interfaces",
    icon: "react"
  }
];

export default hardSkills;