import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getAllProducts } from "@/lib/data/products";
import { FiArrowRight, FiCheck, FiCpu, FiBarChart2, FiBook, FiEdit, FiVideo, FiSmartphone, FiHome, FiZap, FiShield, FiWind, FiMic, FiActivity, FiDollarSign, FiCalendar, FiUsers, FiBookmark, FiPackage, FiGlobe, FiTool, FiStar } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Products | VisdomWaves Ready-Made Solutions",
  description:
    "Explore our ready-made software products: EdTech Platform, Home Automation Suite, and Temple Management System. Proven solutions for immediate deployment.",
  openGraph: {
    title: "VisdomWaves Products",
    description: "Proven software solutions ready to deploy",
  },
};

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-navy to-primary-blue pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-display-lg text-white mb-6 animate-fade-up">
                Ready-Made <span className="text-brand-vibrantTeal">Products</span>
              </h1>
              <p className="text-heading-lg text-white/90 max-w-3xl mx-auto animate-fade-up">
                Proven solutions designed for immediate deployment. No development time, just
                results.
              </p>
            </div>
          </div>
        </section>

        {/* Our Live Products Section */}
        <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-display-md font-heading text-primary-navy mb-4">
                Our Live <span className="text-primary-blue">Products</span>
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Enterprise-ready solutions deployed and trusted by organizations worldwide
              </p>
            </div>

            {/* Products Cards */}
            <div className="space-y-8">
              {products.map((product, idx) => (
                <div
                  key={product.slug}
                  className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-neutral-100"
                >
                  {/* Gradient Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-blue via-brand-vibrantTeal to-purple-500"></div>

                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                    {/* Left Side - Product Info */}
                    <div className="lg:col-span-2 p-8 lg:p-10 bg-gradient-to-br from-primary-navy to-primary-blue text-white">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <div className="w-12 h-12 bg-gradient-to-br from-white/30 to-white/10 rounded-lg flex items-center justify-center">
                            {getIconComponent(product.features[0]?.icon || 'package')}
                          </div>
                        </div>
                        <div>
                          <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold mb-2">
                            {product.category}
                          </div>
                          <div className="flex items-center gap-2">
                            <FiCheck className="w-4 h-4 text-brand-vibrantTeal" />
                            <span className="text-sm text-brand-vibrantTeal font-medium">Live & Operational</span>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-3xl font-heading font-bold mb-4">
                        {product.name}
                      </h3>
                      <p className="text-white/90 leading-relaxed mb-8">
                        {product.description}
                      </p>

                      {/* Key Highlights */}
                      <div className="space-y-3 mb-8">
                        {product.benefits.slice(0, 3).map((benefit, benefitIdx) => (
                          <div key={benefitIdx} className="flex items-start gap-3">
                            <div className="w-5 h-5 mt-0.5 bg-brand-vibrantTeal/20 rounded-full flex items-center justify-center flex-shrink-0">
                              <FiCheck className="w-3 h-3 text-brand-vibrantTeal" />
                            </div>
                            <span className="text-sm text-white/90">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          href={`/products/${product.slug}`}
                          className="group/btn px-6 py-3 bg-white text-primary-blue rounded-xl font-semibold hover:bg-brand-vibrantTeal hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                        >
                          <FiZap className="w-4 h-4" />
                          Launch Live Demo
                        </Link>
                        <Link
                          href={`/products/${product.slug}`}
                          className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 border border-white/20"
                        >
                          View Full Details
                        </Link>
                      </div>
                    </div>

                    {/* Right Side - Features & Demo */}
                    <div className="lg:col-span-3 p-8 lg:p-10">
                      {/* Try It Live Section */}
                      <div className="mb-8">
                        <h4 className="text-xl font-heading font-bold text-primary-navy mb-6">
                          Try It Live
                        </h4>
                        <div className="bg-gradient-to-br from-primary-blue to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden">
                          {/* Background Pattern */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                              backgroundSize: '24px 24px'
                            }}></div>
                          </div>

                          <div className="relative z-10">
                            <p className="text-white/90 mb-6 leading-relaxed">
                              Experience our {product.category} platform firsthand. See the interface, explore features, and understand the user experience we deliver.
                            </p>

                            {/* Progress Bar */}
                            <div className="bg-white/10 rounded-full p-1 mb-6">
                              <div className="flex items-center justify-between text-xs font-semibold mb-2 px-2">
                                <span>Development</span>
                                <span>100%</span>
                              </div>
                              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                                <div className="h-full w-full bg-gradient-to-r from-brand-vibrantTeal to-white rounded-full"></div>
                              </div>
                            </div>

                            <Link
                              href={`/products/${product.slug}`}
                              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-blue rounded-xl font-semibold hover:shadow-xl transition-all duration-300 group/demo"
                            >
                              <FiZap className="w-5 h-5 group-hover/demo:rotate-12 transition-transform" />
                              Launch Live Demo
                              <FiArrowRight className="w-5 h-5 group-hover/demo:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Key Features Grid */}
                      <div>
                        <h4 className="text-xl font-heading font-bold text-primary-navy mb-6">
                          Key Features
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          {product.features.slice(0, 6).map((feature, featureIdx) => (
                            <div
                              key={featureIdx}
                              className="group/feature p-4 bg-neutral-50 rounded-xl hover:bg-primary-blue/5 hover:shadow-md transition-all duration-300 border border-transparent hover:border-primary-blue/20"
                            >
                              <div className="w-10 h-10 mb-3 bg-primary-blue/10 rounded-lg flex items-center justify-center group-hover/feature:bg-primary-blue/20 transition-colors">
                                {getIconComponent(feature.icon)}
                              </div>
                              <h5 className="font-semibold text-primary-navy mb-1 text-sm">
                                {feature.title}
                              </h5>
                              <p className="text-xs text-neutral-600 line-clamp-2">
                                {feature.description}
                              </p>
                            </div>
                          ))}
                        </div>
                        {product.features.length > 6 && (
                          <p className="text-primary-blue mt-4 font-semibold text-sm flex items-center gap-2">
                            <FiPackage className="w-4 h-4" />
                            + {product.features.length - 6} more features included
                          </p>
                        )}
                      </div>
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
              Don't See What You Need?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
              We also build custom solutions tailored to your specific requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="btn-primary bg-white text-primary-blue hover:bg-neutral-100"
              >
                Explore Custom Services
              </Link>
              <Link
                href="/contact"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary-blue"
              >
                Discuss Your Project
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// Helper function to get icon component for icon names
function getIconComponent(iconName: string) {
  const iconMap: Record<string, React.ReactNode> = {
    brain: <FiCpu className="w-6 h-6 text-primary-blue" />,
    chart: <FiBarChart2 className="w-6 h-6 text-primary-blue" />,
    building: <FiBook className="w-6 h-6 text-primary-blue" />,
    edit: <FiEdit className="w-6 h-6 text-primary-blue" />,
    video: <FiVideo className="w-6 h-6 text-primary-blue" />,
    mobile: <FiSmartphone className="w-6 h-6 text-primary-blue" />,
    home: <FiHome className="w-6 h-6 text-primary-blue" />,
    zap: <FiZap className="w-6 h-6 text-primary-blue" />,
    shield: <FiShield className="w-6 h-6 text-primary-blue" />,
    wand: <FiTool className="w-6 h-6 text-primary-blue" />,
    mic: <FiMic className="w-6 h-6 text-primary-blue" />,
    activity: <FiActivity className="w-6 h-6 text-primary-blue" />,
    dollar: <FiDollarSign className="w-6 h-6 text-primary-blue" />,
    calendar: <FiCalendar className="w-6 h-6 text-primary-blue" />,
    users: <FiUsers className="w-6 h-6 text-primary-blue" />,
    bookmark: <FiBookmark className="w-6 h-6 text-primary-blue" />,
    package: <FiPackage className="w-6 h-6 text-primary-blue" />,
    globe: <FiGlobe className="w-6 h-6 text-primary-blue" />,
  };
  return iconMap[iconName] || <FiStar className="w-6 h-6 text-primary-blue" />;
}