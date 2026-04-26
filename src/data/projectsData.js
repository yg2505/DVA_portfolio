export const projectsData = [
  {
    id: "ecommerce-revenue-analytics",
    title: "E-commerce Revenue & Customer Analytics Dashboard",
    shortDescription: "Interactive Tableau dashboards analyzing e-commerce revenue distribution, customer behavior, and order trends to identify revenue leakage.",
    tools: ["Tableau", "Excel"],
    keyInsights: [
      "Identified revenue loss drivers through category-wise, city-level, and time-series analysis.",
      "Analyzed the relationship between customer ratings and order value to highlight revenue at risk."
    ],
    liveLink: "#",
    problemStatement: "The business needed visibility into revenue loss drivers and failure points to understand how customer experience impacts revenue and to make insights actionable for stakeholders.",
    datasetDescription: "Cleaned e-commerce dataset containing order details, customer ratings, product categories, and location data.",
    cleaningSteps: [
      "Performed Exploratory Data Analysis (EDA) on the dataset to prepare for dashboarding."
    ],
    dashboardScreenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    ],
    businessImpact: "Designed 3 interactive dashboards (Revenue Leakage, Customer Experience vs Revenue, Executive Overview) providing actionable insights and KPI summaries for stakeholders.",
  },
  {
    id: "loan-risk-analysis",
    title: "Loan Risk & Repayment Analysis Dashboard",
    shortDescription: "End-to-end data analysis and KPI-driven dashboard on ~50,000 loan records to track defaults, repayment, and risk exposure.",
    tools: ["Google Sheets", "Excel"],
    keyInsights: [
      "Identified strong correlation between higher interest rate/loan size bands and increased default risk.",
      "Discovered high-risk clusters (Very High interest + large loan size) contributing to concentrated default exposure."
    ],
    liveLink: "#",
    problemStatement: "Needed to analyze loan performance and risk to identify drivers of default and provide data-backed recommendations for lending strategies.",
    datasetDescription: "~50,000 raw loan records containing loan amounts, interest rates, repayment status, and borrower details.",
    cleaningSteps: [
      "Cleaned and standardized raw data by handling missing values, inconsistent formats, and loan status discrepancies.",
      "Performed feature engineering by creating interest rate bands and loan amount segments for structured risk segmentation."
    ],
    dashboardScreenshots: [
      
    ],
    businessImpact: "Derived recommendations to tighten approvals and implement risk-based lending, estimating that reducing high-risk exposure could lower overall default rates and improve portfolio performance.",
  }
];
