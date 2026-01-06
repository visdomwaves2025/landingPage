import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPosts } from "@/config/data/blogPosts";
import { heroImages, blogImages } from "@/config/images";
import PageHero from "@/components/PageHero";
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

    const getPostImage = (category) => {
        const key = category?.toLowerCase().split(" ")[0];
        return blogImages[key]?.url || blogImages.ai.url;
    };

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <PageHero
                title={
                    <>
                        Insights & <span className="text-brand-vibrantTeal">Articles</span>
                    </>
                }
                description="Thought leadership, industry insights, and technical guides from our experts"
                image={heroImages.blog}
            />

            {/* Blog Posts Grid */}
            <section className="py-20 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <Link
                                key={post.slug}
                                to={`/blog/${post.slug}`}
                                className="card group hover:shadow-2xl transition-all cursor-pointer overflow-hidden p-0 flex flex-col h-full"
                            >
                                {/* Post Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={getPostImage(post.category)}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-blue rounded-full text-xs font-bold shadow-sm">
                                            {post.category}
                                        </span>
                                        {post.featured && (
                                            <span className="px-3 py-1 bg-yellow-400 text-yellow-900 rounded-full text-xs font-bold shadow-sm">
                                                Featured
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-1">
                                    {/* Meta Information */}
                                    <div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
                                        <div className="flex items-center space-x-1">
                                            <FiClock className="w-3 h-3" />
                                            <span>{post.readTime}</span>
                                        </div>
                                        <span>•</span>
                                        <div className="flex items-center space-x-1">
                                            <FiUser className="w-3 h-3" />
                                            <span>{post.author}</span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-heading font-bold text-primary-navy mb-3 group-hover:text-primary-blue transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-neutral-600 mb-4 line-clamp-3 text-sm flex-1">{post.excerpt}</p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-neutral-100">
                                        {post.tags.slice(0, 3).map((tag) => (
                                            <span
                                                key={tag}
                                                className="flex items-center space-x-1 text-xs text-neutral-500 bg-neutral-100 px-2 py-1 rounded"
                                            >
                                                <FiTag className="w-3 h-3" />
                                                <span>{tag}</span>
                                            </span>
                                        ))}
                                    </div>

                                    {/* Read More Link */}
                                    <div className="mt-4 pt-2 text-primary-blue font-semibold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                                        Read Article
                                        <FiArrowRight className="ml-1 w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
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
