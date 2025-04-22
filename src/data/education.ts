interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const  education: Education[] = [
    // {
    //     title: "General English",
    //     startDate: "2024-09-01",
    //     endDate: "",
    //     school: "University Name",
    //     location: "United States",
    //     description: "Developed and maintained web applications using React, NodeJs, and MongoDB.",
    //     currentUni: true,
    // },
    {
        title: "Bachelor of Petroleum Engineer",
        startDate: "2017-08",
        endDate: "2024-07",
        school: "Universidad Mayor de San Andres",
        location: "Bolivia",
        description: "Ingeniería de perforación, optimización de procesos con Machine Learning.",
        currentUni: false,
    }
];

export default education;