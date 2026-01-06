import React from "react";
import { Link } from "react-router-dom";
import {
    FiMapPin,
    FiBriefcase,
    FiDollarSign,
    FiUsers,
    FiTrendingUp,
    FiHeart,
    FiAward,
    FiZap,
    FiArrowRight,
} from "react-icons/fi";

const jobPostings = [
    {
        id: "senior-ai-engineer",
        title: "Senior AI/ML Engineer",
        department: "Engineering",
        location: "Hyderabad, India",
        type: "Full-time",
        experience: "5+ years",
        salary: "₹40-60 LPA",
        description:
            "Lead the development of cutting-edge AI and machine learning solutions for our enterprise clients. Work with state-of-the-art technologies and solve complex problems.",
        responsibilities: [
            "Design and implement machine learning models for production systems",
            "Lead technical design discussions and architecture reviews",
            "Mentor junior engineers and contribute to team growth",
            "Collaborate with product teams to define AI-driven features",
            "Optimize model performance and deployment pipelines",
        ],
        requirements: [
            "5+ years of experience in ML/AI development",
            "Strong proficiency in Python, TensorFlow, and PyTorch",
            "Experience deploying models to production at scale",
            "Deep understanding of ML algorithms and best practices",
            "Bachelor's degree in Computer Science or related field",
        ],
        niceToHave: [
            "PhD in Machine Learning or related field",
            "Experience with MLOps and model monitoring",
            "Published research in top-tier conferences",
            "Cloud platform certifications (AWS/Azure/GCP)",
        ],
    },
    {
        id: "fullstack-developer",
        title: "Full Stack Developer",
        department: "Engineering",
        location: "Hyderabad, India",
        type: "Full-time",
        experience: "3+ years",
        salary: "₹25-40 LPA",
        description:
            "Build modern web applications using React, Node.js, and cloud technologies. Join a collaborative team delivering high-quality solutions to clients across industries.",
        responsibilities: [
            "Develop and maintain full-stack web applications",
            "Write clean, maintainable code with comprehensive tests",
            "Collaborate with designers to implement pixel-perfect UIs",
            "Participate in code reviews and architectural decisions",
            "Contribute to DevOps and deployment processes",
        ],
        requirements: [
            "3+ years of full-stack development experience",
            "Proficiency in React, Next.js, and TypeScript",
            "Strong backend skills with Node.js or Python",
            "Experience with SQL and NoSQL databases",
            "Understanding of RESTful APIs and GraphQL",
        ],
        niceToHave: [
            "Experience with microservices architecture",
            "Knowledge of Docker and Kubernetes",
            "AWS or Azure cloud experience",
            "Contribution to open-source projects",
        ],
    },
    {
        id: "ui-ux-designer",
        title: "Senior UI/UX Designer",
        department: "Design",
        location: "Hyderabad, India",
        type: "Full-time",
        experience: "4+ years",
        salary: "₹20-35 LPA",
        description:
            "Create beautiful, intuitive user experiences for web and mobile applications. Lead design projects from concept to delivery.",
        responsibilities: [
            "Lead end-to-end design process for web and mobile products",
            "Create wireframes, prototypes, and high-fidelity designs",
            "Conduct user research and usability testing",
            "Maintain and evolve design systems",
            "Collaborate closely with engineering and product teams",
        ],
        requirements: [
            "4+ years of UI/UX design experience",
            "Expert proficiency in Figma and Adobe Creative Suite",
            "Strong portfolio demonstrating design process and outcomes",
            "Understanding of responsive design and accessibility",
            "Excellent communication and presentation skills",
        ],
        niceToHave: [
            "Experience with design systems at scale",
            "Motion design and prototyping skills",
            "Front-end development knowledge (HTML/CSS/JS)",
            "Experience in SaaS or B2B product design",
        ],
    },
    {
        id: "digital-transformation-consultant",
        title: "Digital Transformation Consultant",
        department: "Consulting",
        location: "Hyderabad, India (Travel within India required)",
        type: "Full-time",
        experience: "6+ years",
        salary: "₹35-50 LPA",
        description:
            "Guide enterprises through their digital transformation journeys. Develop strategies, lead implementations, and drive measurable business outcomes.",
        responsibilities: [
            "Assess client digital maturity and identify opportunities",
            "Develop comprehensive transformation roadmaps",
            "Lead implementation of digital initiatives",
            "Manage stakeholder relationships and change management",
            "Deliver executive presentations and business case development",
        ],
        requirements: [
            "6+ years in digital transformation or management consulting",
            "Proven track record of successful transformation projects",
            "Strong business acumen and strategic thinking",
            "Excellent communication and stakeholder management",
            "Willingness to travel within India (30-50%)",
        ],
        niceToHave: [
            "MBA or advanced degree",
            "Industry certifications (PMP, Agile, TOGAF)",
            "Experience in specific verticals (Healthcare, Education, etc.)",
            "Technical background in software development",
        ],
    },
    {
        id: "devops-engineer",
        title: "DevOps Engineer",
        department: "Engineering",
        location: "Hyderabad, India",
        type: "Full-time",
        experience: "3+ years",
        salary: "₹25-42 LPA",
        description:
            "Build and maintain infrastructure and deployment pipelines for our client projects. Champion DevOps best practices and automation.",
        responsibilities: [
            "Design and implement CI/CD pipelines",
            "Manage cloud infrastructure (AWS/Azure/GCP)",
            "Automate deployment and infrastructure provisioning",
            "Monitor system performance and troubleshoot issues",
            "Implement security best practices and compliance requirements",
        ],
        requirements: [
            "3+ years of DevOps or SRE experience",
            "Proficiency in Infrastructure as Code (Terraform, CloudFormation)",
            "Strong scripting skills (Python, Bash)",
            "Experience with containerization (Docker, Kubernetes)",
            "Knowledge of monitoring and logging tools",
        ],
        niceToHave: [
            "AWS/Azure/GCP certifications",
            "Experience with service mesh (Istio, Linkerd)",
            "Security certifications (CISSP, Security+)",
            "Experience with GitOps workflows",
        ],
    },
    {
        id: "business-development",
        title: "Business Development Manager",
        department: "Sales",
        location: "Hyderabad, India",
        type: "Full-time",
        experience: "5+ years",
        salary: "₹20-35 LPA + Performance Bonus",
        description:
            "Drive new business acquisition and build strategic partnerships. Help us grow by identifying opportunities and closing deals in technology consulting.",
        responsibilities: [
            "Identify and qualify new business opportunities",
            "Build and maintain relationships with C-level executives",
            "Lead the full sales cycle from prospect to close",
            "Collaborate with delivery teams on proposals and scoping",
            "Achieve and exceed quarterly revenue targets",
        ],
        requirements: [
            "5+ years in B2B technology sales or business development",
            "Proven track record of meeting/exceeding quotas",
            "Experience selling consulting or professional services",
            "Strong understanding of enterprise technology landscape",
            "Excellent negotiation and presentation skills",
        ],
        niceToHave: [
            "Existing network in target industries",
            "Experience with CRM systems (Salesforce, HubSpot)",
            "Background in technology or engineering",
            "MBA or relevant certifications",
        ],
    },
];

const benefits = [
    {
        icon: <FiDollarSign className="w-8 h-8" />,
        title: "Competitive Compensation",
        description: "Top market salaries, equity options, and performance bonuses",
    },
    {
        icon: <FiHeart className="w-8 h-8" />,
        title: "Health & Wellness",
        description: "Comprehensive health insurance, wellness programs, and mental health support",
    },
    {
        icon: <FiZap className="w-8 h-8" />,
        title: "Flexible Work",
        description: "Remote-first culture with flexible hours and work-life balance",
    },
    {
        icon: <FiTrendingUp className="w-8 h-8" />,
        title: "Career Growth",
        description: "Learning budget, conference attendance, and clear career progression",
    },
    {
        icon: <FiUsers className="w-8 h-8" />,
        title: "Collaborative Culture",
        description: "Inclusive environment where everyone's voice matters",
    },
    {
        icon: <FiAward className="w-8 h-8" />,
        title: "Cutting-Edge Projects",
        description: "Work on innovative projects with latest technologies",
    },
];

const values = [
    {
        title: "Innovation First",
        description: "We embrace new technologies and challenge the status quo",
    },
    {
        title: "Client Success",
        description: "Our success is measured by the value we deliver to clients",
    },
    {
        title: "Continuous Learning",
        description: "We invest in our team's growth and development",
    },
    {
        title: "Diversity & Inclusion",
        description: "We believe diverse teams build better solutions",
    },
];

export default function CareersPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary-navy via-primary-blue to-primary-purple pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-display-lg text-white mb-6 animate-fade-up">
                            Build the Future <span className="text-brand-vibrantTeal">With Us</span>
                        </h1>
                        <p className="text-heading-lg text-white/90 max-w-3xl mx-auto animate-fade-up">
                            Join an exciting startup journey transforming businesses through technology from Hyderabad
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-display-sm font-heading text-primary-navy mb-4">
                            Why Join VisdomWaves?
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            We invest in our people because they are our greatest asset
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="card text-center hover:scale-105 transition-transform">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-purple rounded-xl text-white mb-4">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-heading-lg font-heading text-primary-navy mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-neutral-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Culture & Values */}
            <section className="py-20 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-display-sm font-heading text-primary-navy mb-4">
                            Our Culture & Values
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            These principles guide how we work and grow together
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, idx) => (
                            <div key={idx} className="card hover:shadow-2xl transition-shadow">
                                <h3 className="text-heading-lg font-heading text-primary-navy mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-neutral-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-display-sm font-heading text-primary-navy mb-4">
                            Open Positions
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            Find your next career opportunity
                        </p>
                    </div>

                    <div className="space-y-6">
                        {jobPostings.map((job) => (
                            <div key={job.id} className="card hover:shadow-2xl transition-shadow">
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-3 mb-3">
                                            <span className="px-3 py-1 bg-primary-blue/10 text-primary-blue rounded-full text-sm font-semibold">
                                                {job.department}
                                            </span>
                                            <span className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm">
                                                {job.type}
                                            </span>
                                        </div>

                                        <h3 className="text-heading-xl font-heading text-primary-navy mb-3">
                                            {job.title}
                                        </h3>

                                        <div className="flex flex-wrap items-center gap-4 mb-4 text-neutral-600">
                                            <div className="flex items-center">
                                                <FiMapPin className="w-4 h-4 mr-2" />
                                                <span className="text-sm">{job.location}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <FiBriefcase className="w-4 h-4 mr-2" />
                                                <span className="text-sm">{job.experience}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <FiDollarSign className="w-4 h-4 mr-2" />
                                                <span className="text-sm">{job.salary}</span>
                                            </div>
                                        </div>

                                        <p className="text-neutral-700 mb-4">{job.description}</p>

                                        <div className="space-y-3">
                                            <div>
                                                <h4 className="font-semibold text-primary-navy mb-2">
                                                    Key Responsibilities
                                                </h4>
                                                <ul className="space-y-1">
                                                    {job.responsibilities.slice(0, 3).map((resp, idx) => (
                                                        <li key={idx} className="text-sm text-neutral-600 flex items-start">
                                                            <span className="text-primary-blue mr-2">•</span>
                                                            {resp}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:w-48 flex-shrink-0">
                                        <Link
                                            to={`/contact?subject=Application: ${job.title}`}
                                            className="btn-primary bg-primary-blue hover:bg-primary-navy text-white w-full text-center inline-flex items-center justify-center"
                                        >
                                            Apply Now
                                            <FiArrowRight className="ml-2" />
                                        </Link>
                                        <p className="text-xs text-neutral-500 text-center mt-2">
                                            View full details on application form
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary-blue text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-display-sm font-heading mb-6">
                        Don't See a Perfect Match?
                    </h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
                        We're always looking for talented people. Send us your resume and let's talk about
                        opportunities.
                    </p>
                    <Link
                        to="/contact?subject=General Application"
                        className="btn-primary bg-white text-primary-blue hover:bg-neutral-100 inline-flex items-center"
                    >
                        Get In Touch
                        <FiArrowRight className="ml-2" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
