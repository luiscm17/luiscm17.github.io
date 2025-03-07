interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "Python",
    description: "ML development for drilling optimization using scikit-learn and XGBoost",
    icon: "python"
  },
  {
    name: "Azure AI",
    description: "Certified solutions for predictive maintenance in oilfield operations",
    icon: "azure"
  },
  {
    name: "Power BI",
    description: "Creation of dashboards for monitoring fuel control and operational metrics in hydrocarbon projects",
    icon: "powerbi"
  },
  {
    name: "Tableau",
    description: "Integrated data visualization and operational trend analysis",
    icon: "tableau"
  }
];

export default hardSkills;