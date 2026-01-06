import React from "react";
import { Link } from "react-router-dom";
import { FiUsers, FiTarget, FiAward, FiTrendingUp } from "react-icons/fi";
import { heroImages, teamImages } from "@/config/images";
import PageHero from "@/components/PageHero";

export default function AboutPage() {
    return (
        <>
            <div className="min-h-screen">
                {/* Hero Section */}
                <PageHero
                    title={
                        <>
                            About <span className="text-brand-vibrantTeal">VisdomWaves</span>
                        </>
                    }
                    description="A fresh wave of innovation in technology consulting, launched in August 2025"
                    image={heroImages.about}
                />

                {/* Our Story */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                            <div>
                                <h2 className="text-display-sm font-heading text-primary-navy mb-6">
                                    Our Story
                                </h2>
                                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                                    Founded in August 2025, VisdomWaves was born from a vision to democratize access to cutting-edge
                                    technology solutions. We recognized that businesses of all sizes deserve world-class AI, digital
                                    transformation, and consulting services that are both innovative and accessible.
                                </p>
                                <p className="text-lg text-neutral-600 leading-relaxed">
                                    Our startup brings fresh perspectives to traditional challenges, combining deep technical expertise with an agile, client-first approach.
                                </p>
                            </div>
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary-blue to-primary-purple rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-xl">
                                    <img
                                        src="/images/about-story.png"
                                        alt="VisdomWaves Team Collaboration"
                                        className="w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="card border-l-4 border-primary-blue bg-neutral-50 hover:bg-white transition-colors">
                                <h3 className="text-heading-lg font-heading text-primary-navy mb-4">
                                    Our Mission
                                </h3>
                                <p className="text-neutral-600 leading-relaxed">
                                    To empower businesses with innovative technology solutions that drive real impact. We're on a
                                    mission to make AI, automation, and digital transformation accessible to organizations across
                                    education, healthcare, technology, and beyond—delivering results that matter from day one.
                                </p>
                            </div>
                            <div className="card border-l-4 border-primary-purple bg-neutral-50 hover:bg-white transition-colors">
                                <h3 className="text-heading-lg font-heading text-primary-navy mb-4">
                                    Our Vision
                                </h3>
                                <p className="text-neutral-600 leading-relaxed">
                                    To build a new generation of technology consulting—one that's nimble, innovative, and
                                    deeply committed to client success. We envision becoming the trusted partner for businesses
                                    ready to embrace the future, helping them navigate the rapidly evolving tech landscape.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-20 bg-primary-blue text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-display-sm font-heading mb-4">
                                Why Choose VisdomWaves
                            </h2>
                            <p className="text-lg text-white/80 max-w-2xl mx-auto">
                                Fresh thinking backed by deep expertise
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                            <div className="animate-fade-up">
                                <div className="text-5xl font-bold mb-2">6+</div>
                                <div className="text-white/80 text-lg">Industry Verticals</div>
                            </div>
                            <div className="animate-fade-up">
                                <div className="text-5xl font-bold mb-2">50+</div>
                                <div className="text-white/80 text-lg">Years Combined Experience</div>
                            </div>
                            <div className="animate-fade-up">
                                <div className="text-5xl font-bold mb-2">100%</div>
                                <div className="text-white/80 text-lg">Client-First Approach</div>
                            </div>
                            <div className="animate-fade-up">
                                <div className="text-5xl font-bold mb-2">24/7</div>
                                <div className="text-white/80 text-lg">Dedicated Support</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Values */}
                <section className="py-20 bg-neutral-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-display-sm font-heading text-primary-navy mb-4">
                                Our Core Values
                            </h2>
                            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                                The startup principles driving our journey
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    icon: <FiTarget className="w-12 h-12 text-primary-blue" />,
                                    title: "Innovation First",
                                    description: "Bold ideas and cutting-edge solutions that challenge the status quo"
                                },
                                {
                                    icon: <FiAward className="w-12 h-12 text-primary-blue" />,
                                    title: "Quality Obsessed",
                                    description: "Every line of code, every strategy—built with excellence in mind"
                                },
                                {
                                    icon: <FiUsers className="w-12 h-12 text-primary-blue" />,
                                    title: "Radical Transparency",
                                    description: "Open communication and honest partnerships from day one"
                                },
                                {
                                    icon: <FiTrendingUp className="w-12 h-12 text-primary-blue" />,
                                    title: "Agile & Adaptive",
                                    description: "Moving fast, learning faster, and evolving with every challenge"
                                }
                            ].map((value, idx) => (
                                <div key={idx} className="card text-center hover:shadow-2xl transition-shadow">
                                    <div className="flex justify-center mb-4">{value.icon}</div>
                                    <h3 className="text-heading-lg font-heading text-primary-navy mb-2">
                                        {value.title}
                                    </h3>
                                    <p className="text-neutral-600">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-display-sm font-heading text-primary-navy mb-4">
                                Leadership Team
                            </h2>
                            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                                Meet the visionaries building the future at VisdomWaves
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    name: "Srinivas Sivarathri",
                                    role: "CEO & Founder",
                                    description: "Entrepreneur and technology visionary with expertise in AI, digital transformation, and building scalable solutions",
                                    image: "/images/Srinivas sivaratri.jpeg"
                                },
                                {
                                    name: "Gopi Chand Vempati",
                                    role: "Head of Strategy",
                                    description: "Business strategist focused on digital transformation and driving client success across industries",
                                    image: "/images/Gopi.avif"
                                },
                                {
                                    name: "Vishwanath Chinthakindi",
                                    role: "Chief Information Security Officer",
                                    description: "Technical architect with deep expertise in cybersecurity, risk management, and compliance",
                                    image: "/images/viswantha.jpeg"
                                }
                            ].map((member, idx) => (
                                <div key={idx} className="card text-center group hover:scale-105 transition-transform">
                                    {/* Team Member Photo */}
                                    <div className="relative w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden border-4 border-neutral-200 group-hover:border-primary-blue transition-colors">
                                        <img
                                            src={member.image}
                                            alt={`${member.name} - ${member.role}`}
                                            className="object-cover w-full h-full"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-navy/30 to-transparent h-24"></div>
                                    </div>
                                    <h3 className="text-heading-lg font-heading text-primary-navy mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-primary-blue font-semibold mb-3">{member.role}</p>
                                    <p className="text-neutral-600 text-sm leading-relaxed">{member.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-primary-navy text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-display-sm font-heading mb-6">
                            Ready to Ride the Next Wave?
                        </h2>
                        <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
                            Whether you're looking to transform your business or join our growing team, we'd love to hear from you
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="btn-primary bg-brand-vibrantTeal hover:bg-primary-blue">
                                Let's Talk
                            </Link>
                            <Link to="/careers" className="btn-outline border-white text-white hover:bg-white hover:text-primary-navy">
                                Join Our Team
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
