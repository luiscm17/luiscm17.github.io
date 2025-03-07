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
        title: "Operations Assistant",
        startDate: "2023-04-01",
        endDate: "2023-09-01",
        company: "National Hydrocarbons Agency (ANH)",
        location: "Bolivia",
        description: "Technical operations support for Bolivia's fuel monitoring systems.",
        goals: [
            "Managed B-SISA system operations for vehicle registration and fuel control",
            "Conducted field inspections at service stations for regulatory compliance",
            "Optimized database management processes for fuel supervision"
        ],
        currentJob: false,
    },
    {
        title: "Research Assistant",
        startDate: "2022-07-01",
        endDate: "2022-12-01",
        company: "National Hydrocarbons Agency (ANH)",
        location: "Bolivia",
        description: "Petroleum engineering research and data analysis initiatives.",
        goals: [
            "Developed Python-based well production optimization tools",
            "Implemented ML models for drilling parameter analysis",
            "Awarded 1st place for innovative petroleum engineering solution"
        ],
        currentJob: false,
    },
    {
        title: "Gas Installation Project Technician",
        startDate: "2022-02-01",
        endDate: "2022-06-01",
        company: "VIMAVI Constructora",
        location: "Bolivia",
        description: "Residential gas installation projects management.",
        goals: [
            "Designed AutoCAD blueprints meeting YPFB Redes standards",
            "Reduced project delivery time by 60% through process optimization",
            "Coordinated logistics for simultaneous installation projects"
        ],
        currentJob: false,
    },
    {
        title: "Safety Supervision Assistant",
        startDate: "2021-10-01",
        endDate: "2021-12-01",
        company: "Oil Well Drilling",
        location: "Bolivia",
        description: "Gas network construction quality control.",
        goals: [
            "Supervised HDPE welding operations for secondary gas networks",
            "Completed critical infrastructure project in 3-month timeframe",
            "Managed equipment logistics for field operations"
        ],
        currentJob: false,
    }
];
export default workExperience;