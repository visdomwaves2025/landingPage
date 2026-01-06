export const services = [
    {
        slug: "ai-machine-learning",
        title: "AI & Machine Learning",
        description:
            "Transform your business with intelligent algorithms and predictive analytics. We build custom AI solutions that automate processes, uncover insights, and drive innovation.",
        icon: "brain",
        tagline: "Unlock the Power of Intelligent Innovation",
        overview: {
            title: "Accelerate Your Business with AI",
            content: "Artificial Intelligence is no longer just a buzzword—it's a strategic necessity. Our AI & Machine Learning services empower your organization to harness data-driven insights, automate complex workflows, and create personalized customer experiences. From predictive modeling to generative AI, we build scalable solutions that drive tangible business value."
        },
        features: [
            {
                title: "Predictive Analytics & Forecasting",
                description: "Leverage historical data to predict future trends and behaviors with high accuracy."
            },
            {
                title: "Natural Language Processing (NLP)",
                description: "Enable machines to understand, interpret, and generate human language."
            },
            {
                title: "Computer Vision & Image Recognition",
                description: "Automate visual tasks like inspection, facial recognition, and object detection."
            },
            {
                title: "Recommendation Systems",
                description: "Personalize user experiences by suggesting relevant products or content."
            },
            {
                title: "Process Automation (RPA)",
                description: "Streamline repetitive tasks and workflows to increase operational efficiency."
            },
            {
                title: "Generative AI Solutions",
                description: "Create new content, designs, and code using advanced generative models."
            },
        ],
        process: [
            {
                step: "01",
                title: "Discovery & Strategy",
                description:
                    "We analyze your data infrastructure and business goals to identify high-impact AI opportunities.",
                deliverables: ["Strategy Roadmap", "Feasibility Report", "ROI Analysis"],
            },
            {
                step: "02",
                title: "Data Preparation",
                description:
                    "Cleaning, structuring, and augmenting your data to ensure high-quality model training.",
                deliverables: ["Cleaned Dataset", "Data Pipeline", "Data Quality Report"],
            },
            {
                step: "03",
                title: "Model Development",
                description:
                    "Building and training custom machine learning models tailored to your specific use cases.",
                deliverables: ["Trained Model", "Validation Metrics", "Model Documentation"],
            },
            {
                step: "04",
                title: "Deployment & MLOps",
                description:
                    "Seamless integration into your existing systems with robust monitoring and maintenance pipelines.",
                deliverables: ["Deployed API", "Monitoring Dashboard", "Maintenance Plan"],
            },
        ],
        pricing: {
            startingAt: "$5,000",
            model: "Project-based or Retainer",
            description: "Custom quotes based on complexity and data volume",
        },
        faqs: [
            {
                question: "How long does an AI project take?",
                answer:
                    "Typical projects range from 4-12 weeks for a MVP, depending on data readiness and complexity.",
            },
            {
                question: "Do I need a lot of data?",
                answer:
                    "Not necessarily. We can start with small datasets and use transfer learning or synthetic data generation techniques.",
            },
            {
                question: "Is my data secure?",
                answer:
                    "Absolutely. We follow strict security protocols and can deploy models on-premise or in your private cloud.",
            },
        ],
        caseStudy: {
            industry: "Finance",
            client: "FinTech Corp",
            challenge: "High rate of fraudulent transactions costing millions annually.",
            solution: "Implemented real-time fraud detection model using deep learning.",
            results: ["95% reduction in fraud", "$2M annual savings", "Sub-second detection latency"],
        },
        technologies: ["TensorFlow", "PyTorch", "OpenAI", "Scikit-learn", "Python", "AWS SageMaker"],
    },
    {
        slug: "digital-transformation",
        title: "Digital Transformation",
        description:
            "Modernize your legacy systems and embrace digital-first workflows. We help organizations navigate the complex journey of digital adoption to improve efficiency and agility.",
        icon: "rocket",
        tagline: "Reimagine Your Business for the Digital Age",
        overview: {
            title: "Strategic Digital Evolution",
            content: "Digital transformation is about more than just technology—it's about evolving your business culture and operations. We guide you through every step of this journey, modernizing legacy systems and implementing digital-first workflows that enhance agility, improve customer engagement, and streamline operations for sustainable growth."
        },
        features: [
            {
                title: "Legacy System Modernization",
                description: "Upgrade outdated systems to modern, scalable architectures without data loss."
            },
            {
                title: "Cloud Migration Strategy",
                description: "Seamlessly move your infrastructure and applications to the cloud."
            },
            {
                title: "Digital Workflow Automation",
                description: "Digitize manual processes to improve speed, accuracy, and collaboration."
            },
            {
                title: "Enterprise Architecture Design",
                description: "Build a robust and scalable technical foundation for your enterprise."
            },
            {
                title: "Technology Stack Optimization",
                description: "Select and optimize the right tools and technologies for your business needs."
            },
            {
                title: "Change Management Consulting",
                description: "Guide your organization through the cultural shifts of digital transformation."
            },
        ],
        process: [
            {
                step: "01",
                title: "Assessment",
                description: "Comprehensive audit of current systems, processes, and digital maturity.",
                deliverables: ["Audit Report", "Gap Analysis", "Maturity Scorecard"],
            },
            {
                step: "02",
                title: "Roadmap Design",
                description: "Creating a phased strategic plan for digital adoption and modernization.",
                deliverables: ["Transformation Roadmap", "Technology Selection", "Budget Plan"],
            },
            {
                step: "03",
                title: "Implementation",
                description: "Executing the transformation with minimal disruption to ongoing operations.",
                deliverables: ["System Integration", "Process Documentation", "Migration Status"],
            },
            {
                step: "04",
                title: "Training & Adoption",
                description: "Empowering your team with the skills and tools to thrive in the new digital environment.",
                deliverables: ["Training Materials", "User Guides", "Adoption Metrics"],
            },
        ],
        pricing: {
            startingAt: "$10,000",
            model: "Consulting Retainer",
            description: "Strategic partnership for long-term success",
        },
        faqs: [
            {
                question: "What is digital transformation?",
                answer:
                    "It's the integration of digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers.",
            },
            {
                question: "Will this disrupt my business?",
                answer:
                    "We plan carefully to minimize disruption, often running parallel systems during transition phases.",
            },
            {
                question: "How do we measure success?",
                answer:
                    "We define clear KPIs upfront, such as efficiency gains, cost reductions, and customer satisfaction scores.",
            },
        ],
        caseStudy: {
            industry: "Logistics",
            client: "Global Logistics Provider",
            challenge: "Manual paper-based processes slowing down supply chain operations.",
            solution: "End-to-end digitization of supply chain management and tracking.",
            results: ["40% increase in operational efficiency", "Real-time shipment visibility", "Paperless workflow"],
        },
        technologies: ["Azure", "AWS", "Docker", "Kubernetes", "Microservices", "Salesforce"],
    },
    {
        slug: "web-development",
        title: "Web & App Development",
        description:
            "Build scalable, high-performance web and mobile applications. From responsive websites to complex enterprise platforms, we deliver exceptional user experiences.",
        icon: "code",
        tagline: "Building Digital Experiences That Matter",
        overview: {
            title: "Enterprise-Grade Web Solutions",
            content: "In today's digital-first world, your web presence is your storefront. We specialize in building robust, scalable, and high-performance web applications that engage users and drive conversions. Utilizing modern frameworks and best practices, we deliver secure and responsive solutions tailored to your unique business requirements."
        },
        features: [
            {
                title: "Full-Stack Web Development",
                description: "End-to-end development of robust and scalable web applications."
            },
            {
                title: "Progressive Web Apps (PWA)",
                description: "Deliver app-like experiences on the web with offline capabilities."
            },
            {
                title: "E-commerce Solutions",
                description: "Build secure and high-converting online stores."
            },
            {
                title: "SaaS Platform Development",
                description: "Create multi-tenant software-as-a-service platforms."
            },
            {
                title: "API Design & Integration",
                description: "Develop and integrate RESTful and GraphQL APIs for seamless connectivity."
            },
            {
                title: "Performance Optimization",
                description: "Speed up your website to improve user experience and SEO rankings."
            },
        ],
        process: [
            {
                step: "01",
                title: "UX/UI Design",
                description: "Creating intuitive, accessible, and visually stunning interfaces.",
                deliverables: ["Wireframes", "High-fidelity Mockups", "Interactive Prototypes"],
            },
            {
                step: "02",
                title: "Agile Development",
                description: "Iterative coding sprints with regular demos and feedback loops.",
                deliverables: ["Sprint Backlog", "Working Code", "Sprint Review"],
            },
            {
                step: "03",
                title: "Quality Assurance",
                description: "Rigorous testing for functionality, performance, security, and accessibility.",
                deliverables: ["Test Plan", "Bug Reports", "Performance Audit"],
            },
            {
                step: "04",
                title: "Launch & Support",
                description: "Smooth deployment and ongoing maintenance to ensure peak performance.",
                deliverables: ["Deployment Checklist", "User Manual", "Support SLA"],
            },
        ],
        pricing: {
            startingAt: "$3,000",
            model: "Project-based",
            description: "Fixed price or time & materials options",
        },
        faqs: [
            {
                question: "What technologies do you use?",
                answer:
                    "We specialize in modern stacks like React, Next.js, Node.js, and Python, but choose the best tool for the job.",
            },
            {
                question: "Do you provide hosting?",
                answer:
                    "We can set up and manage hosting on cloud platforms like AWS, Vercel, or Azure, or hand it off to your team.",
            },
            {
                question: "Is the code mine?",
                answer: "Yes, once the project is paid for, you own 100% of the intellectual property and source code.",
            },
        ],
        caseStudy: {
            industry: "Retail",
            client: "E-commerce Retailer",
            challenge: "Slow, outdated website causing high cart abandonment rates.",
            solution: "Rebuilt headless commerce platform with Next.js and Shopify.",
            results: ["3x faster load times", "45% increase in conversion rate", "Improved SEO rankings"],
        },
        technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    },
    {
        slug: "mobile-app-development",
        title: "Mobile App Development",
        description:
            "Create native and cross-platform mobile applications that engage users. We build intuitive, feature-rich apps for iOS and Android devices.",
        icon: "smartphone",
        tagline: "Mobile Solutions for a Connected World",
        overview: {
            title: "Native & Cross-Platform Excellence",
            content: "Reach your customers wherever they are with powerful mobile applications. Whether you need a high-performance native app or a versatile cross-platform solution, our team crafts intuitive mobile experiences that combine stunning design with flawless functionality, ensuring high user retention and engagement."
        },
        features: [
            {
                title: "iOS & Android Development",
                description: "Native mobile applications tailored for Apple and Android ecosystems."
            },
            {
                title: "Cross-Platform Solutions",
                description: "Cost-effective apps using React Native or Flutter for both platforms."
            },
            {
                title: "App Store Optimization (ASO)",
                description: "Improve your app's visibility and downloads in app stores."
            },
            {
                title: "Mobile UI/UX Design",
                description: "Create intuitive and engaging mobile user interfaces."
            },
            {
                title: "Push Notification Systems",
                description: "Engage users with timely and relevant alerts and updates."
            },
            {
                title: "Offline Functionality",
                description: "Ensure your app works seamlessly even without internet connection."
            },
        ],
        process: [
            {
                step: "01",
                title: "Concept & Strategy",
                description: "Defining the app's core value proposition and target audience.",
                deliverables: ["Product Canvas", "User Personas", "Feature List"],
            },
            {
                step: "02",
                title: "Prototyping",
                description: "Interactive wireframes to validate user flow and design concepts.",
                deliverables: ["Clickable Prototype", "User Flow Diagram", "Design System"],
            },
            {
                step: "03",
                title: "Development",
                description: "Building the app using robust frameworks and native capabilities.",
                deliverables: ["App Builds (iOS/Android)", "API Documentation", "Source Code"],
            },
            {
                step: "04",
                title: "Testing & Submission",
                description: "Beta testing and handling the complex app store submission process.",
                deliverables: ["TestFlight Build", "App Store Listing", "Approval Confirmation"],
            },
        ],
        pricing: {
            startingAt: "$8,000",
            model: "Project-based",
            description: "Depends on platform and feature set",
        },
        faqs: [
            {
                question: "Native or Cross-platform?",
                answer:
                    "Cross-platform (React Native) is usually best for cost/speed, while Native is better for high-performance gaming or hardware access.",
            },
            {
                question: "How do you handle updates?",
                answer:
                    "We can set up continuous deployment pipelines or manage updates on a retainer basis.",
            },
            {
                question: "Can you help with marketing?",
                answer:
                    "We focus on development but can implement analytics and ASO best practices to support your marketing efforts.",
            },
        ],
        caseStudy: {
            industry: "Healthcare",
            client: "HealthTech Startup",
            challenge: "Need for a patient engagement app with secure messaging and appointment booking.",
            solution: "Developed HIPAA-compliant React Native app for iOS and Android.",
            results: ["50k+ downloads in 3 months", "4.8 star rating", "Reduced no-show rates by 30%"],
        },
        technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "GraphQL"],
    },
    {
        slug: "cloud-computing",
        title: "Cloud Computing",
        description:
            "Leverage the power of the cloud for scalability, security, and cost-efficiency. We help you design, migrate, and manage cloud infrastructure.",
        icon: "cloud",
        tagline: "Scalable Infrastructure for Modern Business",
        overview: {
            title: "Secure & Scalable Cloud Solutions",
            content: "The cloud is the backbone of modern enterprise infrastructure. We help you leverage its full potential through strategic migration, architecture design, and management. Our cloud solutions ensure your applications are secure, scalable, and cost-efficient, allowing you to focus on innovation rather than infrastructure maintenance."
        },
        features: [
            {
                title: "Cloud Architecture Design",
                description: "Design secure and scalable cloud infrastructure tailored to your needs."
            },
            {
                title: "Serverless Computing",
                description: "Run applications without managing servers for greater agility."
            },
            {
                title: "Database Management",
                description: "Optimize and manage your cloud databases for performance and reliability."
            },
            {
                title: "DevOps & CI/CD",
                description: "Automate deployment pipelines for faster and more reliable releases."
            },
            {
                title: "Security & Compliance",
                description: "Ensure your cloud environment meets industry security standards."
            },
            {
                title: "Cost Optimization",
                description: "Analyze and reduce your cloud spending without compromising performance."
            },
        ],
        process: [
            {
                step: "01",
                title: "Cloud Readiness Assessment",
                description: "Evaluating your applications and data for cloud suitability.",
                deliverables: ["Readiness Report", "Migration Strategy", "TCO Analysis"],
            },
            {
                step: "02",
                title: "Migration Planning",
                description: "Developing a strategy to move workloads with minimal downtime.",
                deliverables: ["Migration Plan", "Risk Assessment", "Rollback Strategy"],
            },
            {
                step: "03",
                title: "Infrastructure Setup",
                description: "Provisioning secure, scalable cloud environments using IaC.",
                deliverables: ["Terraform/CloudFormation Scripts", "Network Diagram", "Security Config"],
            },
            {
                step: "04",
                title: "Optimization",
                description: "Continuous monitoring and tuning for performance and cost.",
                deliverables: ["Performance Report", "Cost Optimization Plan", "Monitoring Alerts"],
            },
        ],
        pricing: {
            startingAt: "$4,000",
            model: "Project or Monthly Managed",
            description: "Tailored to infrastructure size",
        },
        faqs: [
            {
                question: "Which cloud provider is best?",
                answer:
                    "It depends on your specific needs. We work with AWS, Azure, and Google Cloud and can recommend the best fit.",
            },
            {
                question: "Is the cloud expensive?",
                answer:
                    "If managed correctly, it's often cheaper than on-premise. We focus heavily on cost optimization strategies.",
            },
            {
                question: "What about security?",
                answer:
                    "Cloud providers offer enterprise-grade security. We configure it correctly to ensure your data is protected.",
            },
        ],
        caseStudy: {
            industry: "Technology",
            client: "SaaS Platform",
            challenge: "Frequent downtime and inability to handle traffic spikes.",
            solution: "Migrated to AWS serverless architecture with auto-scaling.",
            results: ["99.99% uptime", "Zero maintenance overhead", "50% reduction in hosting costs"],
        },
        technologies: ["AWS", "Azure", "Google Cloud", "Terraform", "Docker", "Kubernetes"],
    },
];

export function getAllServices() {
    return services;
}

export function getServiceBySlug(slug) {
    return services.find((service) => service.slug === slug);
}

export function getFeaturedServices() {
    return services.slice(0, 3);
}
