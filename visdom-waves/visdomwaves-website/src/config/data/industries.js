export const industries = {
    education: {
        slug: "education",
        name: "Education",
        tagline: "Transforming Learning Through Technology",
        description:
            "Empower educators and engage students with cutting-edge EdTech solutions. From K-12 schools to universities, we deliver platforms that enhance learning outcomes and streamline administrative processes.",
        challenges: [
            {
                title: "Limited Student Engagement",
                description:
                    "Traditional teaching methods struggle to capture and maintain student attention in the digital age.",
            },
            {
                title: "Administrative Inefficiency",
                description:
                    "Manual processes for enrollment, grading, and communication waste valuable time and resources.",
            },
            {
                title: "Lack of Personalization",
                description:
                    "One-size-fits-all approaches fail to address individual learning styles and paces.",
            },
            {
                title: "Data Management Complexity",
                description:
                    "Fragmented systems make it difficult to track student progress and make data-driven decisions.",
            },
        ],
        solutions: [
            {
                title: "Learning Management Systems (LMS)",
                description:
                    "Comprehensive platforms for course delivery, assessment, and student engagement.",
                features: [
                    "Interactive course content delivery",
                    "Automated grading and feedback",
                    "Discussion forums and collaboration tools",
                    "Progress tracking and analytics",
                    "Mobile-responsive design",
                ],
            },
            {
                title: "AI-Powered Adaptive Learning",
                description:
                    "Personalized learning paths that adapt to each student's needs and pace.",
                features: [
                    "Skill gap analysis and recommendations",
                    "Dynamic difficulty adjustment",
                    "Personalized content suggestions",
                    "Real-time performance insights",
                    "Predictive analytics for interventions",
                ],
            },
            {
                title: "Virtual Classroom Solutions",
                description: "Seamless online and hybrid learning experiences with real-time collaboration.",
                features: [
                    "Live video conferencing",
                    "Screen sharing and whiteboarding",
                    "Breakout rooms for group work",
                    "Recording and playback",
                    "Attendance tracking",
                ],
            },
            {
                title: "Student Information Systems (SIS)",
                description: "Centralized platforms for managing all aspects of student data and operations.",
                features: [
                    "Enrollment and registration",
                    "Grade management",
                    "Parent-teacher communication",
                    "Attendance tracking",
                    "Report card generation",
                ],
            },
        ],
        benefits: [
            { title: "Student Engagement", value: "+250%", description: "Increase in active participation" },
            { title: "Admin Time Saved", value: "40%", description: "Reduction in manual processes" },
            { title: "Learning Outcomes", value: "+35%", description: "Improvement in test scores" },
            { title: "Cost Efficiency", value: "30%", description: "Operational cost savings" },
        ],
        technologies: [
            "React",
            "Next.js",
            "Node.js",
            "MongoDB",
            "WebRTC",
            "TensorFlow",
            "AWS",
            "Socket.io",
        ],
        caseStudy: {
            client: "Global University System",
            challenge:
                "Needed to support 50,000+ students with personalized learning while maintaining high engagement.",
            solution:
                "Developed AI-powered EdTech platform with adaptive learning, real-time analytics, and seamless integrations.",
            results: [
                "250% increase in student engagement",
                "180% improvement in learning efficiency",
                "40% reduction in operational costs",
                "95% student satisfaction rate",
            ],
        },
    },
    healthcare: {
        slug: "healthcare",
        name: "Healthcare",
        tagline: "Advancing Patient Care Through Digital Innovation",
        description:
            "Transform healthcare delivery with HIPAA-compliant solutions that improve patient outcomes, streamline operations, and enhance provider efficiency.",
        challenges: [
            {
                title: "Fragmented Patient Data",
                description:
                    "Patient information scattered across multiple systems leads to inefficiencies and potential care gaps.",
            },
            {
                title: "Limited Access to Care",
                description: "Geographic and time constraints prevent patients from receiving timely medical attention.",
            },
            {
                title: "Operational Inefficiencies",
                description: "Manual scheduling, billing, and administrative tasks consume valuable staff time.",
            },
            {
                title: "Compliance Complexity",
                description: "Navigating HIPAA, data security, and regulatory requirements is challenging and costly.",
            },
        ],
        solutions: [
            {
                title: "Telemedicine Platforms",
                description: "Connect patients with healthcare providers through secure video consultations.",
                features: [
                    "HD video and audio consultations",
                    "E-prescriptions and digital prescriptions",
                    "Secure file sharing",
                    "Appointment scheduling",
                    "Insurance verification",
                ],
            },
            {
                title: "Electronic Medical Records (EMR)",
                description: "Centralized, secure patient data accessible to authorized providers.",
                features: [
                    "Patient history and demographics",
                    "Lab results and imaging integration",
                    "Clinical decision support",
                    "e-Prescribing",
                    "Interoperability with other systems",
                ],
            },
            {
                title: "Patient Engagement Apps",
                description: "Mobile applications that empower patients to manage their health actively.",
                features: [
                    "Appointment booking",
                    "Medication reminders",
                    "Health tracking and monitoring",
                    "Secure messaging with providers",
                    "Access to test results",
                ],
            },
            {
                title: "Healthcare Analytics",
                description: "Data-driven insights for improving outcomes and operational efficiency.",
                features: [
                    "Population health management",
                    "Predictive analytics",
                    "Quality metrics tracking",
                    "Revenue cycle analysis",
                    "Clinical performance dashboards",
                ],
            },
        ],
        benefits: [
            { title: "Patient Satisfaction", value: "+95%", description: "Improvement in satisfaction scores" },
            { title: "Operational Efficiency", value: "+60%", description: "Increase in staff productivity" },
            { title: "Care Access", value: "3x", description: "More patients served" },
            { title: "Cost Reduction", value: "35%", description: "Decrease in overhead" },
        ],
        technologies: [
            "React Native",
            "Node.js",
            "PostgreSQL",
            "WebRTC",
            "AWS",
            "HL7/FHIR",
            "TensorFlow",
            "Redis",
        ],
        caseStudy: {
            client: "Regional Medical Center",
            challenge:
                "Fragmented patient data across systems leading to inefficiencies and potential care gaps.",
            solution:
                "Implemented comprehensive telemedicine platform with integrated EMR and real-time patient monitoring.",
            results: [
                "95% increase in patient satisfaction",
                "160% improvement in operational efficiency",
                "85% revenue growth",
                "Zero HIPAA violations",
            ],
        },
    },
    technology: {
        slug: "technology",
        name: "Technology",
        tagline: "Empowering Tech Companies with Cutting-Edge Solutions",
        description:
            "Accelerate your product development, optimize infrastructure, and scale efficiently with our expertise in cloud, DevOps, and modern software engineering.",
        challenges: [
            {
                title: "Rapid Scaling Demands",
                description: "Infrastructure struggles to keep up with user growth and feature expansion.",
            },
            {
                title: "Technical Debt",
                description: "Legacy systems and quick fixes accumulate, slowing down development.",
            },
            {
                title: "Talent Shortage",
                description: "Finding and retaining skilled developers for specialized technologies is difficult.",
            },
            {
                title: "Security Vulnerabilities",
                description: "Increasing attack surfaces and compliance requirements demand constant vigilance.",
            },
        ],
        solutions: [
            {
                title: "Custom Software Development",
                description: "Build scalable, high-performance applications tailored to your business needs.",
                features: [
                    "Microservices architecture",
                    "API-first development",
                    "Test-driven development (TDD)",
                    "Continuous integration/deployment",
                    "Performance optimization",
                ],
            },
            {
                title: "Cloud Migration & Optimization",
                description: "Seamlessly transition to cloud infrastructure and optimize costs.",
                features: [
                    "AWS/Azure/GCP migration",
                    "Containerization with Docker",
                    "Kubernetes orchestration",
                    "Auto-scaling configuration",
                    "Cost optimization strategies",
                ],
            },
            {
                title: "DevOps & Automation",
                description: "Streamline development workflows and accelerate deployment cycles.",
                features: [
                    "CI/CD pipeline setup",
                    "Infrastructure as Code (IaC)",
                    "Monitoring and alerting",
                    "Automated testing",
                    "Security scanning",
                ],
            },
            {
                title: "Technical Architecture Consulting",
                description: "Design robust, scalable architectures that support long-term growth.",
                features: [
                    "System architecture design",
                    "Technology stack selection",
                    "Database optimization",
                    "API design and documentation",
                    "Security architecture",
                ],
            },
        ],
        benefits: [
            { title: "Deployment Speed", value: "10x", description: "Faster release cycles" },
            { title: "System Uptime", value: "99.9%", description: "Availability guarantee" },
            { title: "Development Velocity", value: "+150%", description: "Increased productivity" },
            { title: "Infrastructure Costs", value: "-45%", description: "Cloud cost optimization" },
        ],
        technologies: [
            "React",
            "Node.js",
            "Python",
            "Go",
            "Docker",
            "Kubernetes",
            "AWS",
            "Terraform",
            "PostgreSQL",
            "Redis",
        ],
        caseStudy: {
            client: "SaaS Startup Platform",
            challenge: "Rapid user growth causing infrastructure bottlenecks and increased downtime.",
            solution:
                "Migrated to microservices architecture on Kubernetes with automated scaling and monitoring.",
            results: [
                "99.9% system uptime achieved",
                "10x improvement in deployment frequency",
                "45% reduction in infrastructure costs",
                "150% increase in development velocity",
            ],
        },
    },
    construction: {
        slug: "construction",
        name: "Construction",
        tagline: "Building Smarter with Technology-Enabled Construction",
        description:
            "Modernize construction projects with IoT sensors, BIM integration, and real-time project management tools that reduce delays, improve safety, and optimize costs.",
        challenges: [
            {
                title: "Project Delays & Overruns",
                description: "Poor coordination and unforeseen issues lead to costly delays and budget overruns.",
            },
            {
                title: "Safety Concerns",
                description: "Construction sites face inherent safety risks that require constant monitoring.",
            },
            {
                title: "Equipment Inefficiency",
                description: "Lack of real-time equipment tracking leads to underutilization and theft.",
            },
            {
                title: "Manual Data Collection",
                description: "Time-consuming manual reporting reduces accuracy and delays decision-making.",
            },
        ],
        solutions: [
            {
                title: "BIM Integration Services",
                description: "Leverage Building Information Modeling for better planning and collaboration.",
                features: [
                    "3D modeling and visualization",
                    "Clash detection automation",
                    "Real-time collaboration",
                    "As-built documentation",
                    "Cost estimation integration",
                ],
            },
            {
                title: "IoT Smart Site Solutions",
                description: "Deploy sensors and connected devices for real-time project monitoring.",
                features: [
                    "Equipment tracking with GPS",
                    "Environmental monitoring",
                    "Worker safety wearables",
                    "Material inventory tracking",
                    "Energy consumption monitoring",
                ],
            },
            {
                title: "Project Management Software",
                description: "Centralized platforms for planning, tracking, and managing construction projects.",
                features: [
                    "Scheduling and Gantt charts",
                    "Budget tracking and forecasting",
                    "Document management",
                    "Mobile field access",
                    "Automated reporting",
                ],
            },
            {
                title: "Safety Compliance Systems",
                description: "Automated tools for maintaining safety standards and regulatory compliance.",
                features: [
                    "Incident reporting and tracking",
                    "Safety checklist automation",
                    "Compliance documentation",
                    "Training management",
                    "Real-time alerts",
                ],
            },
        ],
        benefits: [
            { title: "Project Delays", value: "-75%", description: "Reduction in timeline overruns" },
            { title: "Safety Incidents", value: "-90%", description: "Decrease in workplace accidents" },
            { title: "Cost Savings", value: "35%", description: "Budget optimization" },
            { title: "Equipment Utilization", value: "+45%", description: "Improved asset usage" },
        ],
        technologies: ["IoT Sensors", "LoRaWAN", "BIM 360", "Procore", "AWS IoT", "MongoDB", "React", "Node.js"],
        caseStudy: {
            client: "BuildTech Construction",
            challenge: "Manual project tracking and lack of real-time visibility causing delays and cost overruns.",
            solution: "Implemented IoT-enabled project management with BIM integration and automated reporting.",
            results: [
                "75% reduction in project delays",
                "90% decrease in safety incidents",
                "35% cost savings",
                "45% improvement in equipment utilization",
            ],
        },
    },
    "temple-projects": {
        slug: "temple-projects",
        name: "Temple Projects",
        tagline: "Preserving Heritage While Embracing Digital Innovation",
        description:
            "Respectfully digitize temple operations with solutions for donation management, visitor services, and cultural preservation that honor tradition while leveraging technology.",
        challenges: [
            {
                title: "Manual Donation Management",
                description: "Cash-based systems lack transparency and make tracking and reporting difficult.",
            },
            {
                title: "Visitor Management",
                description: "Large crowds and limited infrastructure create operational challenges.",
            },
            {
                title: "Heritage Documentation",
                description: "Valuable cultural artifacts and traditions risk being lost without proper digital preservation.",
            },
            {
                title: "Administrative Burden",
                description: "Manual processes for scheduling, accounting, and communication consume excessive time.",
            },
        ],
        solutions: [
            {
                title: "Digital Donation Management",
                description: "Secure, transparent platforms for accepting and managing donations.",
                features: [
                    "Multiple payment options (UPI, cards, net banking)",
                    "Automated receipt generation",
                    "Donor database management",
                    "Transparent accounting and reporting",
                    "Tax compliance features",
                ],
            },
            {
                title: "Visitor Experience Systems",
                description: "Enhance pilgrim experience with digital services and information.",
                features: [
                    "Online darshan booking",
                    "Virtual tours and live streaming",
                    "Digital information kiosks",
                    "Queue management systems",
                    "Mobile app for services",
                ],
            },
            {
                title: "Heritage Documentation",
                description: "Digitally preserve cultural artifacts, traditions, and historical records.",
                features: [
                    "3D scanning and modeling",
                    "Digital archiving",
                    "Multilingual content",
                    "Interactive exhibits",
                    "Educational resources",
                ],
            },
            {
                title: "Administrative Automation",
                description: "Streamline temple operations with integrated management systems.",
                features: [
                    "Event scheduling",
                    "Staff management",
                    "Inventory tracking",
                    "Financial reporting",
                    "Communication tools",
                ],
            },
        ],
        benefits: [
            { title: "Donation Transparency", value: "100%", description: "Complete accountability" },
            { title: "Visitor Satisfaction", value: "+85%", description: "Improved experience" },
            { title: "Admin Efficiency", value: "60%", description: "Time savings" },
            { title: "Digital Reach", value: "10x", description: "Global connectivity" },
        ],
        technologies: ["React Native", "Node.js", "MongoDB", "Stripe", "Razorpay", "AWS", "Firebase", "3D Scanning"],
        caseStudy: {
            client: "Heritage Temple Trust",
            challenge: "Manual donation tracking lacked transparency; needed to preserve cultural heritage digitally.",
            solution:
                "Implemented digital donation platform with heritage documentation and visitor management system.",
            results: [
                "100% donation transparency achieved",
                "85% increase in visitor satisfaction",
                "60% reduction in administrative time",
                "10x increase in global reach",
            ],
        },
    },
    consulting: {
        slug: "consulting",
        name: "Consulting",
        tagline: "Elevating Consulting Firms with Data-Driven Insights",
        description:
            "Empower consulting practices with business intelligence platforms, process automation, and collaboration tools that enhance client delivery and operational efficiency.",
        challenges: [
            {
                title: "Data Silos",
                description: "Information scattered across tools makes it difficult to derive actionable insights.",
            },
            {
                title: "Manual Reporting",
                description: "Time-consuming report generation reduces billable hours and consultant productivity.",
            },
            {
                title: "Client Collaboration",
                description: "Inefficient communication and document sharing slow down project progress.",
            },
            {
                title: "Knowledge Management",
                description: "Valuable expertise and best practices are trapped in individual consultant's minds.",
            },
        ],
        solutions: [
            {
                title: "Business Intelligence Platforms",
                description: "Unified dashboards and analytics for data-driven decision making.",
                features: [
                    "Real-time data visualization",
                    "Custom report builders",
                    "Predictive analytics",
                    "Multi-source data integration",
                    "KPI tracking dashboards",
                ],
            },
            {
                title: "Process Automation Tools",
                description: "Automate repetitive tasks to focus on high-value consulting work.",
                features: [
                    "Workflow automation",
                    "Document generation",
                    "Client onboarding",
                    "Invoicing and billing",
                    "Time tracking integration",
                ],
            },
            {
                title: "Collaboration Platforms",
                description: "Seamless tools for team and client collaboration.",
                features: [
                    "Secure document sharing",
                    "Virtual meeting rooms",
                    "Project workspaces",
                    "Real-time co-editing",
                    "Version control",
                ],
            },
            {
                title: "Knowledge Management Systems",
                description: "Capture, organize, and share institutional knowledge effectively.",
                features: [
                    "Centralized knowledge base",
                    "AI-powered search",
                    "Best practices repository",
                    "Case study library",
                    "Expert directories",
                ],
            },
        ],
        benefits: [
            { title: "Consultant Productivity", value: "+70%", description: "Increase in billable hours" },
            { title: "Report Generation", value: "-80%", description: "Faster insights delivery" },
            { title: "Client Satisfaction", value: "+65%", description: "Improved engagement" },
            { title: "Knowledge Reuse", value: "5x", description: "More efficient onboarding" },
        ],
        technologies: ["Power BI", "Tableau", "Python", "R", "MongoDB", "Elasticsearch", "React", "Node.js"],
        caseStudy: {
            client: "Strategy Consulting Group",
            challenge: "Manual reporting and data silos reducing consultant productivity and client satisfaction.",
            solution:
                "Built integrated BI platform with automated reporting, collaboration tools, and knowledge management.",
            results: [
                "70% increase in consultant productivity",
                "80% faster report generation",
                "65% improvement in client satisfaction",
                "5x improvement in knowledge reuse",
            ],
        },
    },
};

export function getIndustryBySlug(slug) {
    return industries[slug];
}

export function getAllIndustries() {
    return Object.values(industries);
}
