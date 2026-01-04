import React, { useState, useEffect, Suspense } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiSearch, FiUser, FiChevronDown } from "react-icons/fi";

// Lazy load Search component
const Search = React.lazy(() => import("@/views/ui/Search"));

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // Throttled scroll handler for better performance
    useEffect(() => {
        let rafId = null;

        const handleScroll = () => {
            if (rafId !== null) return;

            rafId = requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                const shouldBeScrolled = scrollY > 100;

                if (shouldBeScrolled !== isScrolled) {
                    setIsScrolled(shouldBeScrolled);
                }

                rafId = null;
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (rafId !== null) {
                cancelAnimationFrame(rafId);
            }
        };
    }, [isScrolled]);

    const navigationItems = [
        { label: "INDUSTRIES", href: "/industries", hasMegaMenu: true },
        { label: "SERVICES", href: "/services", hasMegaMenu: true },
        { label: "PRODUCTS", href: "/products", hasMegaMenu: true },
        { label: "BLOG", href: "/blog", hasMegaMenu: true },
        { label: "ABOUT US", href: "/about", hasMegaMenu: true },
        { label: "CAREERS", href: "/careers", hasMegaMenu: false },
        { label: "CONTACT", href: "/contact", hasMegaMenu: false },
    ];

    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <>
            <div
                onMouseLeave={() => setActiveMenu(null)}
                className="relative"
            >
                <header
                    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHomePage
                        ? "bg-white/90 backdrop-blur-md shadow-sm h-16 border-b border-neutral-200"
                        : "bg-transparent h-20"
                        }`}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                        <div className="flex items-center justify-between h-full">
                            {/* Logo */}
                            {/* Logo */}
                            <Link to="/" className="flex items-center space-x-2">
                                <img
                                    src="/logos/VW_WB.png"
                                    alt="VisdomWaves Logo"
                                    width={36}
                                    height={36}
                                    className="w-9 h-9"
                                />
                                <div className="text-2xl font-display font-bold">
                                    <span className="text-primary-navy">Visdom</span>
                                    <span className="text-primary-blue">Waves</span>
                                </div>
                            </Link>

                            {/* Desktop Navigation */}
                            <nav className="hidden lg:flex items-center space-x-8">
                                {navigationItems.map((item) => (
                                    <div
                                        key={item.label}
                                        className="relative group"
                                        onMouseEnter={() => item.hasMegaMenu && setActiveMenu(item.label)}
                                    >
                                        <Link
                                            to={item.href}
                                            className={`flex items-center text-sm font-semibold transition-colors tracking-wide ${isScrolled || activeMenu || !isHomePage ? "text-neutral-700 hover:text-primary-blue" : "text-white hover:text-primary-blue"}`}
                                        >
                                            {item.label}
                                            {item.hasMegaMenu && (
                                                <FiChevronDown className="ml-1 w-4 h-4" />
                                            )}
                                        </Link>
                                        {item.hasMegaMenu && (
                                            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                                        )}
                                    </div>
                                ))}
                            </nav>

                            {/* Right Actions */}
                            <div className="hidden lg:flex items-center space-x-4">
                                <button
                                    onClick={() => setIsSearchOpen(true)}
                                    className={`p-2 transition-colors ${isScrolled || !isHomePage ? "text-neutral-700 hover:text-primary-blue" : "text-white hover:text-primary-blue"}`}
                                    aria-label="Search"
                                >
                                    <FiSearch className="w-5 h-5" />
                                </button>
                                <Link to="/login" className={`flex items-center space-x-2 px-4 py-2 text-sm font-semibold transition-colors border rounded-lg ${isScrolled || !isHomePage ? "text-primary-navy border-neutral-200 hover:bg-neutral-50" : "text-white border-white/20 hover:bg-white/10"}`}>
                                    <FiUser className="w-4 h-4" />
                                    <span>CLIENT LOGIN</span>
                                </Link>
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                className="lg:hidden p-2 text-neutral-700"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? (
                                    <FiX className="w-6 h-6" />
                                ) : (
                                    <FiMenu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mega Menu Dropdown */}
                    {activeMenu && (
                        <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-neutral-100 shadow-2xl animate-fade-in text-primary-navy">
                            {activeMenu === "INDUSTRIES" && <IndustriesMegaMenu />}
                            {activeMenu === "SERVICES" && <ServicesMegaMenu />}
                            {activeMenu === "PRODUCTS" && <ProductsMegaMenu />}
                            {activeMenu === "BLOG" && <BlogMegaMenu />}
                            {activeMenu === "ABOUT US" && <AboutMegaMenu />}
                        </div>
                    )}
                </header>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-white lg:hidden overflow-y-auto animate-slideIn"
                    style={{ top: isScrolled ? "4rem" : "5rem" }}
                >
                    <div className="p-6 space-y-4">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.label}
                                to={item.href}
                                className="block text-lg font-semibold text-neutral-800 hover:text-primary-blue transition-colors py-3 border-b border-neutral-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <div className="pt-6 space-y-4">
                            <Link to="/login" className="block w-full px-4 py-3 bg-primary-blue text-white font-semibold rounded-lg hover:bg-primary-navy transition-colors text-center">
                                CLIENT LOGIN
                            </Link>
                            <div className="text-center text-sm text-neutral-600">
                                <p>Contact: +91 7997755133</p>
                                <p>Email: info@visdomwavess.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Search Overlay */}
            <Suspense fallback={null}>
                <Search isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
            </Suspense>
        </>
    );
};

// Industries Mega Menu Component
const IndustriesMegaMenu = () => {
    const industries = [
        {
            name: "Education",
            slug: "education",
            description: "Transforming education through innovative digital solutions",
        },
        {
            name: "Technology",
            slug: "technology",
            description: "Empowering tech companies with cutting-edge solutions",
        },
        {
            name: "Consulting",
            slug: "consulting",
            description: "Elevating consulting firms with data-driven insights",
        },
        {
            name: "Temple Projects",
            slug: "temple-projects",
            description: "Preserving heritage while embracing digital innovation",
        },
        {
            name: "Construction",
            slug: "construction",
            description: "Building smarter with technology-enabled construction",
        },
        {
            name: "Healthcare",
            slug: "healthcare",
            description: "Advancing healthcare through digital transformation",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h3 className="text-2xl font-heading font-bold text-primary-navy mb-8">
                INDUSTRIES WE SERVE
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industries.map((industry) => (
                    <Link
                        key={industry.name}
                        to={`/industries/${industry.slug}`}
                        className="card hover:shadow-xl transition-all group"
                    >
                        <h4 className="text-lg font-heading font-semibold text-primary-blue group-hover:text-primary-navy mb-2">
                            {industry.name}
                        </h4>
                        <p className="text-sm text-neutral-600">{industry.description}</p>
                        <div className="mt-3 text-sm text-primary-blue group-hover:text-primary-navy font-semibold">
                            Learn More →
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

// Services Mega Menu Component
const ServicesMegaMenu = () => {
    const services = [
        { name: "AI & Machine Learning", slug: "ai-machine-learning", description: "Intelligent automation and ML solutions" },
        { name: "Digital Transformation", slug: "digital-transformation", description: "Modernize your business operations" },
        { name: "Web Development", slug: "web-development", description: "Enterprise-grade web applications" },
        { name: "Mobile App Development", slug: "mobile-app-development", description: "Native and cross-platform apps" },
        { name: "Cloud Computing", slug: "cloud-computing", description: "Scalable cloud infrastructure" },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h3 className="text-2xl font-heading font-bold text-primary-navy mb-8">
                TRANSFORM YOUR BUSINESS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {services.map((service) => (
                    <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className="card hover:shadow-xl transition-all group"
                    >
                        <h4 className="text-lg font-heading font-semibold text-primary-blue group-hover:text-primary-navy mb-2">
                            {service.name}
                        </h4>
                        <p className="text-sm text-neutral-600 mb-3">{service.description}</p>
                        <div className="text-sm text-primary-blue group-hover:text-primary-navy font-semibold">
                            Learn More →
                        </div>
                    </Link>
                ))}
            </div>
            <div className="mt-8 text-center">
                <Link
                    to="/services"
                    className="inline-block px-6 py-3 bg-primary-blue text-white font-semibold rounded-lg hover:bg-primary-navy transition-colors"
                >
                    View All Services
                </Link>
            </div>
        </div>
    );
};

// Products and Blog Mega Menus
const ProductsMegaMenu = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-2xl font-heading font-bold text-primary-navy mb-8">
            READY-MADE PRODUCTS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/products/edtech-platform" className="card hover:shadow-xl transition-all group">
                <h4 className="font-semibold text-primary-blue group-hover:text-primary-navy mb-2 text-lg">EdTech Platform</h4>
                <p className="text-sm text-neutral-600 mb-3">Complete learning management solution with analytics and engagement tools</p>
                <div className="text-sm text-primary-blue group-hover:text-primary-navy font-semibold">
                    View Details →
                </div>
            </Link>
            <Link to="/products/home-automation" className="card hover:shadow-xl transition-all group">
                <h4 className="font-semibold text-primary-blue group-hover:text-primary-navy mb-2 text-lg">Home Automation Suite</h4>
                <p className="text-sm text-neutral-600 mb-3">Smart home IoT platform for intelligent building control</p>
                <div className="text-sm text-primary-blue group-hover:text-primary-navy font-semibold">
                    View Details →
                </div>
            </Link>
            <Link to="/products/temple-management" className="card hover:shadow-xl transition-all group">
                <h4 className="font-semibold text-primary-blue group-hover:text-primary-navy mb-2 text-lg">Temple Management</h4>
                <p className="text-sm text-neutral-600 mb-3">Digital administration and donation management for temples</p>
                <div className="text-sm text-primary-blue group-hover:text-primary-navy font-semibold">
                    View Details →
                </div>
            </Link>
        </div>
        <div className="mt-8 text-center">
            <Link
                to="/products"
                className="inline-block px-6 py-3 bg-primary-blue text-white font-semibold rounded-lg hover:bg-primary-navy transition-colors"
            >
                View All Products
            </Link>
        </div>
    </div>
);

const BlogMegaMenu = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-2xl font-heading font-bold text-primary-navy mb-8">
            INSIGHTS & ARTICLES
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
                <h4 className="font-semibold text-primary-blue text-lg">Latest Articles</h4>
                <Link to="/blog/future-of-ai-in-business-2025" className="block p-4 border border-neutral-200 rounded-lg hover:border-primary-blue hover:shadow-md transition-all group">
                    <h5 className="font-semibold text-neutral-800 group-hover:text-primary-blue mb-1">The Future of AI in Business</h5>
                    <p className="text-sm text-neutral-600">Discover transformative AI trends for 2025</p>
                </Link>
                <Link to="/blog/digital-transformation-healthcare-guide" className="block p-4 border border-neutral-200 rounded-lg hover:border-primary-blue hover:shadow-md transition-all group">
                    <h5 className="font-semibold text-neutral-800 group-hover:text-primary-blue mb-1">Digital Healthcare Transformation</h5>
                    <p className="text-sm text-neutral-600">A comprehensive guide for healthcare organizations</p>
                </Link>
            </div>
            <div className="space-y-4">
                <h4 className="font-semibold text-primary-blue text-lg">Resources</h4>
                <Link to="/blog" className="block p-4 border border-neutral-200 rounded-lg hover:border-primary-blue hover:shadow-md transition-all group">
                    <h5 className="font-semibold text-neutral-800 group-hover:text-primary-blue mb-1">All Blog Posts</h5>
                    <p className="text-sm text-neutral-600">Browse our complete collection of insights</p>
                </Link>
                <Link to="/case-studies" className="block p-4 border border-neutral-200 rounded-lg hover:border-primary-blue hover:shadow-md transition-all group">
                    <h5 className="font-semibold text-neutral-800 group-hover:text-primary-blue mb-1">Case Studies</h5>
                    <p className="text-sm text-neutral-600">Real-world success stories from our clients</p>
                </Link>
            </div>
        </div>
        <div className="mt-8 text-center">
            <Link
                to="/blog"
                className="inline-block px-6 py-3 bg-primary-blue text-white font-semibold rounded-lg hover:bg-primary-navy transition-colors"
            >
                View All Articles
            </Link>
        </div>
    </div>
);

const AboutMegaMenu = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-2xl font-heading font-bold text-primary-navy mb-8">
            ABOUT VISDOMWAVES
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Link to="/about" className="card hover:shadow-xl transition-all group">
                <h4 className="font-semibold text-primary-blue group-hover:text-primary-navy mb-2">Company</h4>
                <p className="text-sm text-neutral-600 mb-3">Learn about our story, mission, and vision</p>
                <div className="text-sm text-primary-blue group-hover:text-primary-navy font-semibold">
                    Learn More →
                </div>
            </Link>
            <Link to="/careers" className="card hover:shadow-xl transition-all group">
                <h4 className="font-semibold text-primary-blue group-hover:text-primary-navy mb-2">Careers</h4>
                <p className="text-sm text-neutral-600 mb-3">Join our team and make an impact</p>
                <div className="text-sm text-primary-blue group-hover:text-primary-navy font-semibold">
                    View Openings →
                </div>
            </Link>
            <Link to="/case-studies" className="card hover:shadow-xl transition-all group">
                <h4 className="font-semibold text-primary-blue group-hover:text-primary-navy mb-2">Case Studies</h4>
                <p className="text-sm text-neutral-600 mb-3">Real-world success stories</p>
                <div className="text-sm text-primary-blue group-hover:text-primary-navy font-semibold">
                    Read More →
                </div>
            </Link>
            <Link to="/contact" className="card hover:shadow-xl transition-all group">
                <h4 className="font-semibold text-primary-blue group-hover:text-primary-navy mb-2">Contact Us</h4>
                <p className="text-sm text-neutral-600 mb-3">Get in touch with our team</p>
                <div className="text-sm text-primary-blue group-hover:text-primary-navy font-semibold">
                    Contact →
                </div>
            </Link>
        </div>
        <div className="mt-8 text-center">
            <Link
                to="/about"
                className="inline-block px-6 py-3 bg-primary-blue text-white font-semibold rounded-lg hover:bg-primary-navy transition-colors"
            >
                About VisdomWaves
            </Link>
        </div>
    </div>
);

export default Header;
