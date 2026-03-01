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
    name: "Azure AI Engineer Associate - AI-102",
    description: "Design and implement an Azure AI solution using Azure AI services, Azure AI Search, and Azure Open AI.",
    icon: "dp100",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/LuisCM-5104/4B456D3937B14E90?sharingId=B0EAC1C6C48015B6"
    },
    {
    name: "Azure Data Scientist Associate - DP 100",
    description: "Design and implement data science solutions on Microsoft Azure",
    icon: "dp100",
    url: "https://learn.microsoft.com/api/credentials/share/es-es/LuisCM-5104/8AECA8B28E06CFE5?sharingId=B0EAC1C6C48015B6"

    },
    {
        name: "OCI 2025 Certified Data Science Professional",
        description: "Demonstrate expertise in data science using Oracle Cloud Infrastructure",
        icon: "/src/assets/OCI25DSOCP.png",
        url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=90414E07DF1CD6235153F12479983C3CCB54EA9E01F7864D4D27D2B81D21FB35"
    },
    {
        name: "OCI 2025 Certified Generative AI Professional",
        description: "Demonstrate expertise in generative AI using Oracle Cloud Infrastructure",
        icon: "/src/assets/OCI25GAIOCP.png",
        url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=32E75992B08FE6EB7D2280A7C5495C652AA45171EA74535D765727366F9208FF"
    },
    {
        name: "OCI 2025 Certified Foundations Associate",
        description: "Demonstrate foundational knowledge of Oracle Cloud Infrastructure",
        icon: "/src/assets/OCI25FNDCFAV1.png",
        url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=DF7E76A0A8DFE0C3298AA6D8A74088B00F9DC6D558B790B903680FDCB64B0C3E"
    },
    {
    name: "Github Fundamentals",
    description: "Validate core Git and GitHub skills for software development workflows",
    icon: "gh-fundamentals",
    url: "https://www.credly.com/badges/640d7090-c67e-495a-9087-565dab80cb61/linked_in_profile?trk=public_profile_see-credential"
    }
];

export default certifications;