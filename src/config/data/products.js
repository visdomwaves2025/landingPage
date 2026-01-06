export const products = [
    {
        slug: "edtech-platform",
        name: "EduWave - EdTech Platform",
        tagline: "Transform Education with AI-Powered Learning",
        description:
            "A comprehensive Learning Management System (LMS) designed for educational institutions, featuring AI-driven personalized learning paths, real-time analytics, and seamless integration with existing systems.",
        category: "Education Technology",
        heroImage: "/images/products/edtech-hero.png",
        showcaseImage: "/images/products/edtech-dashboard.png",
        features: [
            {
                title: "AI-Powered Personalization",
                description:
                    "Adaptive learning algorithms that customize content and pacing based on individual student performance and learning style.",
                icon: "brain",
            },
            {
                title: "Real-Time Analytics Dashboard",
                description:
                    "Comprehensive insights into student engagement, performance metrics, and learning outcomes with predictive analytics.",
                icon: "chart",
            },
            {
                title: "Multi-Institution Support",
                description:
                    "Scalable architecture supporting multiple schools, departments, and courses within a single unified platform.",
                icon: "building",
            },
            {
                title: "Interactive Content Creation",
                description:
                    "Built-in tools for creating engaging multimedia lessons, quizzes, assignments, and assessments with auto-grading.",
                icon: "edit",
            },
            {
                title: "Virtual Classroom Integration",
                description:
                    "Seamless video conferencing, breakout rooms, screen sharing, and collaborative whiteboards for live sessions.",
                icon: "video",
            },
            {
                title: "Mobile-First Design",
                description:
                    "Fully responsive platform with native iOS and Android apps for learning anywhere, anytime.",
                icon: "mobile",
            },
        ],
        benefits: [
            "Increase student engagement by 250% with personalized learning paths",
            "Reduce administrative workload by 60% through automation",
            "Improve learning outcomes with data-driven insights",
            "Scale effortlessly from 100 to 100,000+ students",
            "FERPA and GDPR compliant data security",
            "99.9% uptime SLA with 24/7 support",
        ],
        techStack: [
            "Next.js",
            "React",
            "Node.js",
            "PostgreSQL",
            "Redis",
            "AWS",
            "TensorFlow",
            "Python",
            "WebRTC",
            "GraphQL",
        ],
        pricing: [
            {
                tier: "Starter",
                price: "$299",
                period: "/month",
                description: "Perfect for small schools and tutoring centers",
                features: [
                    "Up to 500 students",
                    "5 administrators",
                    "Basic analytics",
                    "Email support",
                    "Mobile apps included",
                    "Community forum access",
                ],
                cta: "Start Free Trial",
            },
            {
                tier: "Professional",
                price: "$799",
                period: "/month",
                description: "Ideal for growing educational institutions",
                features: [
                    "Up to 5,000 students",
                    "Unlimited administrators",
                    "Advanced analytics & AI insights",
                    "Priority support (24/7)",
                    "Custom branding",
                    "API access",
                    "Single Sign-On (SSO)",
                    "Video conferencing (500 concurrent)",
                ],
                cta: "Schedule Demo",
                popular: true,
            },
            {
                tier: "Enterprise",
                price: "Custom",
                period: "pricing",
                description: "For universities and large institutions",
                features: [
                    "Unlimited students",
                    "Unlimited administrators",
                    "White-label solution",
                    "Dedicated account manager",
                    "Custom integrations",
                    "On-premise deployment option",
                    "SLA guarantees",
                    "Advanced security features",
                    "Custom development",
                ],
                cta: "Contact Sales",
            },
        ],
        caseStudy: {
            client: "Global University System",
            industry: "Higher Education",
            challenge:
                "Managing 50,000+ students across multiple campuses with a legacy LMS that couldn't scale or provide personalized learning experiences.",
            solution:
                "Implemented EduWave with AI-powered adaptive learning, integrated with existing student information systems, and deployed mobile apps for iOS and Android.",
            results: [
                "250% increase in student engagement within 6 months",
                "180% improvement in course completion rates",
                "40% reduction in administrative overhead",
                "95% student satisfaction rating",
            ],
        },
        demo: {
            available: true,
            type: "live",
            url: "https://visdom-wave-main-iu5j.vercel.app/",
        },
    },
    {
        slug: "home-automation",
        name: "SmartHome Pro - Home Automation Suite",
        tagline: "Intelligent Living for Modern Homes",
        description:
            "A complete IoT-based home automation platform that brings together lighting, climate, security, entertainment, and energy management into one intuitive system.",
        category: "IoT & Smart Home",
        heroImage: "/images/products/smarthome-hero.png",
        showcaseImage: "/images/products/smarthome-app.png",
        features: [
            {
                title: "Unified Control Hub",
                description:
                    "Control all smart devices from a single app - lights, thermostats, cameras, locks, and more with voice command support.",
                icon: "home",
            },
            {
                title: "AI Energy Optimization",
                description:
                    "Machine learning algorithms that learn your patterns and automatically optimize energy usage to reduce bills by up to 30%.",
                icon: "zap",
            },
            {
                title: "Advanced Security",
                description:
                    "Smart cameras with facial recognition, motion sensors, automated locks, and instant mobile alerts for complete peace of mind.",
                icon: "shield",
            },
            {
                title: "Scene Automation",
                description:
                    "Create custom scenes like 'Good Morning', 'Movie Time', or 'Away Mode' that control multiple devices with one tap.",
                icon: "wand",
            },
            {
                title: "Voice Assistant Integration",
                description:
                    "Works seamlessly with Alexa, Google Assistant, and Siri for hands-free control of your entire home.",
                icon: "mic",
            },
            {
                title: "Energy Monitoring",
                description:
                    "Real-time tracking of energy consumption by device and room with detailed analytics and cost projections.",
                icon: "activity",
            },
        ],
        benefits: [
            "Reduce energy costs by 25-35% with intelligent automation",
            "Enhance home security with 24/7 monitoring and alerts",
            "Control your home from anywhere in the world",
            "Increase property value by up to 5%",
            "Works with 200+ smart device brands",
            "Easy DIY installation with professional support available",
        ],
        techStack: [
            "React Native",
            "Node.js",
            "MQTT",
            "MongoDB",
            "AWS IoT Core",
            "TensorFlow Lite",
            "Zigbee",
            "Z-Wave",
            "Python",
            "Docker",
        ],
        pricing: [
            {
                tier: "Basic",
                price: "$49",
                period: "/month",
                description: "Essential automation for apartments and small homes",
                features: [
                    "Up to 15 devices",
                    "Basic automation rules",
                    "Mobile app access",
                    "Voice assistant integration",
                    "Email notifications",
                    "Community support",
                ],
                cta: "Get Started",
            },
            {
                tier: "Premium",
                price: "$99",
                period: "/month",
                description: "Complete smart home experience",
                features: [
                    "Unlimited devices",
                    "Advanced AI automation",
                    "Energy optimization",
                    "Security monitoring",
                    "Priority support",
                    "Custom scenes (unlimited)",
                    "Family sharing (5 users)",
                    "Third-party integrations",
                ],
                cta: "Try Free for 30 Days",
                popular: true,
            },
            {
                tier: "Professional",
                price: "$199",
                period: "/month",
                description: "For luxury homes and property managers",
                features: [
                    "Everything in Premium",
                    "Multi-property management",
                    "Professional installation",
                    "Custom integration development",
                    "Dedicated account manager",
                    "White-label option",
                    "API access",
                    "Advanced analytics",
                ],
                cta: "Schedule Consultation",
            },
        ],
        caseStudy: {
            client: "Luxury Residential Community",
            industry: "Real Estate",
            challenge:
                "Managing smart home systems across 120 luxury units with different device brands and inconsistent user experiences.",
            solution:
                "Deployed SmartHome Pro with unified control, centralized management dashboard for property managers, and personalized automation for each resident.",
            results: [
                "30% reduction in energy costs across the community",
                "85% resident satisfaction with smart home features",
                "90% decrease in maintenance calls related to automation issues",
                "Increased property values by 7%",
            ],
        },
        demo: {
            available: true,
            type: "sandbox",
            url: "/demo/home-automation",
        },
    },
    {
        slug: "temple-management",
        name: "DivineConnect - Temple Management System",
        tagline: "Digitizing Sacred Traditions with Respect",
        description:
            "A culturally-sensitive digital platform designed specifically for temples and religious institutions to manage donations, events, volunteers, and devotee engagement while preserving traditional values.",
        category: "Religious & Cultural",
        heroImage: "/images/products/temple-hero.png",
        showcaseImage: "/images/products/temple-dashboard.png",
        features: [
            {
                title: "Digital Donation Management",
                description:
                    "Secure online and offline donation tracking with automated receipts, tax documentation, and transparent fund allocation reporting.",
                icon: "dollar",
            },
            {
                title: "Event & Festival Planning",
                description:
                    "Comprehensive calendar management for festivals, poojas, and special events with automated notifications and volunteer coordination.",
                icon: "calendar",
            },
            {
                title: "Devotee Database",
                description:
                    "Centralized records of devotees, families, and their preferences with privacy-first architecture and GDPR compliance.",
                icon: "users",
            },
            {
                title: "Pooja Booking System",
                description:
                    "Online booking for special prayers, sevas, and rituals with automated scheduling and priest allocation.",
                icon: "bookmark",
            },
            {
                title: "Prasadam & Inventory",
                description:
                    "Track temple inventory, prasadam distribution, and supplies with automated reordering and vendor management.",
                icon: "package",
            },
            {
                title: "Multi-Language Support",
                description:
                    "Interface available in 15+ languages including Sanskrit, Hindi, Tamil, Telugu, and regional languages.",
                icon: "globe",
            },
        ],
        benefits: [
            "Increase donation transparency and trust with automated reporting",
            "Reduce administrative workload by 70% through digitization",
            "Engage global devotee community with online services",
            "Maintain detailed audit trails for regulatory compliance",
            "Streamline festival planning and volunteer coordination",
            "Preserve cultural heritage with digital archives",
        ],
        techStack: [
            "Next.js",
            "Node.js",
            "PostgreSQL",
            "Redis",
            "Stripe",
            "Razorpay",
            "AWS",
            "React Native",
            "TypeScript",
            "Docker",
        ],
        pricing: [
            {
                tier: "Community",
                price: "$199",
                period: "/month",
                description: "For small temples and community centers",
                features: [
                    "Up to 1,000 devotees",
                    "Donation management",
                    "Event calendar",
                    "Basic reporting",
                    "Mobile app",
                    "Email support",
                    "2 admin users",
                ],
                cta: "Start Free Trial",
            },
            {
                tier: "Temple",
                price: "$499",
                period: "/month",
                description: "For established temples and trusts",
                features: [
                    "Up to 10,000 devotees",
                    "Advanced donation tracking",
                    "Pooja booking system",
                    "Inventory management",
                    "Multi-language support",
                    "Priority support",
                    "Unlimited admin users",
                    "Custom reports",
                    "Payment gateway integration",
                ],
                cta: "Schedule Demo",
                popular: true,
            },
            {
                tier: "Heritage",
                price: "Custom",
                period: "pricing",
                description: "For large temple complexes and trusts",
                features: [
                    "Unlimited devotees",
                    "Multi-temple management",
                    "Custom workflows",
                    "Advanced analytics",
                    "Dedicated support",
                    "On-premise deployment",
                    "Custom integrations",
                    "White-label solution",
                    "Historical data migration",
                ],
                cta: "Contact Us",
            },
        ],
        caseStudy: {
            client: "Heritage Temple Trust",
            industry: "Religious Organization",
            challenge:
                "Manual donation tracking, lack of transparency in fund usage, and difficulty engaging younger devotee generation.",
            solution:
                "Implemented DivineConnect with online donation portal, automated reporting, mobile app for event updates, and digital archive of temple history.",
            results: [
                "200% increase in online donations within 6 months",
                "90% reduction in manual accounting errors",
                "150% growth in youth devotee engagement",
                "100% transparency in fund allocation reporting",
            ],
        },
        demo: {
            available: true,
            type: "video",
            url: "/demo/temple-management",
        },
    },
];

// Helper functions
export function getAllProducts() {
    return products;
}

export function getProductBySlug(slug) {
    return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts() {
    return products.slice(0, 3);
}

export function getProductsByCategory(category) {
    return products.filter((product) => product.category === category);
}
