import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiYoutube,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-navy text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center space-x-3">
              <Image
                src="/logos/VW_WB.png"
                alt="VisdomWaves Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <h3 className="text-2xl font-display font-bold">
                <span className="text-white">Visdom</span>
                <span className="text-brand-vibrantTeal">Waves</span>
              </h3>
            </div>
            <p className="text-neutral-300 mb-6">
              Transform your business with AI-driven solutions and digital transformation.
              Expert consulting for Education, Healthcare, Technology, and more.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FiMail className="w-5 h-5 text-brand-vibrantTeal" />
                <a
                  href="mailto:info@visdomwavess.com"
                  className="text-neutral-300 hover:text-brand-vibrantTeal transition-colors"
                >
                  info@visdomwavess.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="w-5 h-5 text-brand-vibrantTeal" />
                <a
                  href="tel:+917997755133"
                  className="text-neutral-300 hover:text-brand-vibrantTeal transition-colors"
                >
                  +91 7997755133
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <FiMapPin className="w-5 h-5 text-brand-vibrantTeal mt-1" />
                <span className="text-neutral-300">
                  Flat no : 102, A block Prabhat Signature Apartment<br />
                  Beside kalamandir, KPHB, kukatpally 500085<br />
                  Hyderabad, Telangana, India
                </span>
              </div>
            </div>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Industries</h4>
            <ul className="space-y-2">
              {["Education", "Technology", "Consulting", "Healthcare", "Construction", "Temple Projects"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/industries/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-neutral-300 hover:text-brand-vibrantTeal transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                { label: "AI & Automation", slug: "ai-machine-learning" },
                { label: "Digital Transformation", slug: "digital-transformation" },
                { label: "Web Development", slug: "web-development" },
                { label: "Mobile Apps", slug: "mobile-app-development" },
                { label: "IT Consulting", slug: null },
                { label: "Cloud Solutions", slug: "cloud-computing" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.slug ? `/services/${item.slug}` : "/services"}
                    className="text-neutral-300 hover:text-brand-vibrantTeal transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Careers", href: "/careers" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-neutral-300 hover:text-brand-vibrantTeal transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm mb-4 md:mb-0">
              © {currentYear} Visdom waves Innovations Private Limited. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-brand-vibrantTeal rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-brand-vibrantTeal rounded-full transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-brand-vibrantTeal rounded-full transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-brand-vibrantTeal rounded-full transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-brand-vibrantTeal rounded-full transition-colors"
                aria-label="YouTube"
              >
                <FiYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;