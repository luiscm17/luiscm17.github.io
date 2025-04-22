interface Certifications {
    name: string;
    description: string;
    icon: string;
    url: string;
}

const certifications: Certifications[] = [
    {
    name: "Azure AI Fundamentals - AI 900",
    description: "Understand AI concepts and related Microsoft Azure services",
    icon: "ai900",
    url: "https://learn.microsoft.com/api/credentials/share/es-es/LuisCM-5104/A4E4A6F04423AD01?sharingId=B0EAC1C6C48015B6"
    },
    {
    name: "Azure Data Scientist Associate - DP 100",
    description: "Design and implement data science solutions on Microsoft Azure",
    icon: "dp100",
    url: "https://learn.microsoft.com/api/credentials/share/es-es/LuisCM-5104/8AECA8B28E06CFE5?sharingId=B0EAC1C6C48015B6"

    },
    {
    name: "Github Fundamentals",
    description: "Validate core Git and GitHub skills for software development workflows",
    icon: "gh-fundamentals",
    url: "https://www.credly.com/badges/640d7090-c67e-495a-9087-565dab80cb61/linked_in_profile?trk=public_profile_see-credential"
    }
];

export default certifications;