/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience: WorkExperience[] = [
    {
        title: "Gas Installation Project Technician",
        startDate: "2025-01-01",
        endDate: undefined,  // or "Present" – use undefined for current
        company: "VIMAVI Constructora",
        location: "La Paz, Bolivia",
        description: "Technical design and cost estimation for residential and commercial gas installations (occasional projects post-graduation).",
        goals: [
            "Elaborated AutoCAD plans and cost estimates compliant with YPFB standards",
            "Optimized design workflows, achieving greater efficiency in technical deliverables",
            "Coordinated occasional gas installation projects"
        ],
        currentJob: true,
    },
    {
        title: "Freelance Consultant in Analytics and Automation",
        startDate: "2024-07-01",
        endDate: undefined,
        company: "Private Clients",
        location: "Remote",
        description: "Provided data analytics, automation, and technical consulting services while pursuing AI/ML certifications and personal projects.",
        goals: [
            "Implemented data cleaning, transformation, and automation pipelines in Power BI",
            "Standardized deliverables under confidentiality agreements and governance best practices",
            "Supported clients with technical analysis and process optimization (occasional)"
        ],
        currentJob: true,
    },
    {
        title: "Operations Assistant",
        startDate: "2023-04-01",
        endDate: "2023-09-01",
        company: "National Hydrocarbons Agency (ANH)",
        location: "La Paz, Bolivia",
        description: "Supported technical operations and regulatory compliance in Bolivia's hydrocarbon monitoring systems.",
        goals: [
            "Managed data and automated flows in the B-SISA fuel control system",
            "Conducted field inspections and verification of service station compliance",
            "Optimized database and reporting processes for fuel supervision"
        ],
        currentJob: false,
    },
    {
        title: "Research Assistant (Eurekarburos 2.0)",
        startDate: "2022-07-01",
        endDate: "2022-12-01",
        company: "National Hydrocarbons Agency (ANH)",
        location: "La Paz, Bolivia",
        description: "Conducted petroleum engineering research, software development, and data analysis for industry innovation.",
        goals: [
            "Developed Python-based predictive tools and data analysis for well production",
            "Implemented early ML models for drilling parameter optimization",
            "Awarded 1st place in Eurekarburos 2.0 for innovative predictive analysis solution"
        ],
        currentJob: false,
    },
    {
        title: "Gas Installation Project Technician",
        startDate: "2022-02-01",
        endDate: "2022-06-01",
        company: "VIMAVI Constructora",
        location: "La Paz, Bolivia",
        description: "Managed design and execution of natural gas installation projects.",
        goals: [
            "Designed AutoCAD blueprints and cost estimates for natural gas networks",
            "Reduced project delivery times by 60% through process improvements",
            "Coordinated logistics for multiple simultaneous installations"
        ],
        currentJob: false,
    },
    {
        title: "Safety Supervision Assistant (SMS)",
        startDate: "2021-10-01",
        endDate: "2021-12-01",
        company: "Oil Well Drilling",
        location: "El Alto, Bolivia",
        description: "Assisted in safety supervision and quality control during gas network and drilling operations.",
        goals: [
            "Supervised HDPE welding and civil works for secondary gas networks",
            "Ensured full compliance with technical and safety standards",
            "Managed equipment logistics and completed project in 3-month timeframe"
        ],
        currentJob: false,
    }
];
export default workExperience;