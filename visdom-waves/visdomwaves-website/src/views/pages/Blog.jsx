import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPosts } from "@/config/data/blogPosts";
import { FiClock, FiUser, FiTag, FiArrowRight } from "react-icons/fi";

export default function BlogPage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            const allPosts = await getAllPosts();
            setPosts(allPosts);
            setLoading(false);
        };
        fetchPosts();
    }, []);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary-navy to-primary-blue pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-display-lg text-white mb-6 animate-fade-up">
                            Insights & <span className="text-brand-vibrantTeal">Articles</span>
                        </h1>
                        <p className="text-heading-lg text-white/90 max-w-3xl mx-auto animate-fade-up">
                            Thought leadership, industry insights, and technical guides from our experts
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-20 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <article
                                key={post.slug}
                                className="card group hover:shadow-2xl transition-all cursor-pointer"
                            >
                                {/* Category Badge */}
                                <div className="mb-4">
                                    <span className="px-3 py-1 bg-primary-blue/10 text-primary-blue rounded-full text-sm font-semibold">
                                        {post.category}
                                    </span>
                                    {post.featured && (
                                        <span className="ml-2 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">
                                            Featured
                                        </span>
                                    )}
                                </div>

                                {/* Title */}
                                <h3 className="text-heading-lg font-heading text-primary-navy mb-3 group-hover:text-primary-blue transition-colors line-clamp-2">
                                    {post.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-neutral-600 mb-4 line-clamp-3">{post.excerpt}</p>

                                {/* Meta Information */}
                                <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 mb-4">
                                    <div className="flex items-center space-x-1">
                                        <FiUser className="w-4 h-4" />
                                        <span>{post.author}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <FiClock className="w-4 h-4" />
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {post.tags.slice(0, 3).map((tag) => (
                                        <span
                                            key={tag}
                                            className="flex items-center space-x-1 text-xs text-neutral-600"
                                        >
                                            <FiTag className="w-3 h-3" />
                                            <span>{tag}</span>
                                        </span>
                                    ))}
                                </div>

                                {/* Read More Link */}
                                <Link
                                    to={`/blog/${post.slug}`}
                                    className="inline-flex items-center text-primary-blue hover:text-primary-navy font-semibold group-hover:underline"
                                >
                                    Read Article
                                    <FiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-20 bg-primary-blue text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-display-sm font-heading mb-6">
                        Stay Updated with Our Latest Insights
                    </h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
                        Subscribe to our newsletter for weekly tech insights and industry trends
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-lg text-neutral-800 focus:outline-none focus:ring-2 focus:ring-white"
                        />
                        <button className="btn-primary bg-white text-primary-blue hover:bg-neutral-100 whitespace-nowrap">
                            Subscribe Now
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
