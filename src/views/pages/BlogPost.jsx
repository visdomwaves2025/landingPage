import React, { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { getPostBySlug } from "@/config/data/blogPosts";
import { blogImages } from "@/config/images";
import PageHero from "@/components/PageHero";
import { FiClock, FiTag, FiArrowLeft, FiShare2 } from "react-icons/fi";

export default function BlogPostPage() {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            if (slug) {
                const fetchedPost = await getPostBySlug(slug);
                setPost(fetchedPost || null);
            }
            setLoading(false);
        };
        fetchPost();
    }, [slug]);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    if (!post) {
        return <Navigate to="/404" replace />;
    }

    const getPostImage = (category) => {
        const key = category?.toLowerCase().split(" ")[0];
        return blogImages[key] || blogImages.ai; // Return full image object
    };

    return (
        <div className="min-h-screen bg-white">
            <PageHero
                title={post.title}
                description={
                    <span className="flex items-center justify-center gap-2">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                            {post.category}
                        </span>
                        {post.featured && (
                            <span className="px-3 py-1 bg-yellow-400/90 text-yellow-900 rounded-full text-sm font-semibold">
                                Featured
                            </span>
                        )}
                    </span>
                }
                image={getPostImage(post.category)}
                className="pt-40 pb-32"
            />

            {/* Back to Blog Link */}
            <section className="bg-neutral-50 border-b border-neutral-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <Link
                        to="/blog"
                        className="inline-flex items-center text-primary-blue hover:text-primary-navy font-semibold group"
                    >
                        <FiArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Blog
                    </Link>
                </div>
            </section>

            {/* Article Header */}
            <article className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Excerpt */}
                    <p className="text-2xl font-light text-neutral-600 mb-8 leading-relaxed italic border-l-4 border-primary-blue pl-6">
                        {post.excerpt}
                    </p>

                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-6 text-neutral-600 mb-8 pb-8 border-b border-neutral-200">
                        <div className="flex items-center space-x-2">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-purple rounded-full flex items-center justify-center">
                                <span className="text-white font-bold">
                                    {post.author.split(" ").map((n) => n[0]).join("")}
                                </span>
                            </div>
                            <div>
                                <div className="font-semibold text-neutral-800">{post.author}</div>
                                <div className="text-sm text-neutral-500">{post.authorRole}</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-1">
                            <FiClock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                        </div>
                        <div className="text-neutral-500">
                            {new Date(post.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </div>
                        <button className="ml-auto flex items-center space-x-2 px-4 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors">
                            <FiShare2 className="w-4 h-4" />
                            <span>Share</span>
                        </button>
                    </div>

                    {/* Article Content */}
                    <div className="prose prose-lg max-w-none">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: post.content
                                    .split("\n")
                                    .map((line) => {
                                        // Convert markdown-style headers
                                        if (line.startsWith("# ")) {
                                            return `<h1 class="text-4xl font-heading font-bold text-primary-navy mb-6 mt-12">${line.substring(2)}</h1>`;
                                        }
                                        if (line.startsWith("## ")) {
                                            return `<h2 class="text-3xl font-heading font-bold text-primary-navy mb-4 mt-10">${line.substring(3)}</h2>`;
                                        }
                                        if (line.startsWith("### ")) {
                                            return `<h3 class="text-2xl font-heading font-semibold text-primary-blue mb-3 mt-8">${line.substring(4)}</h3>`;
                                        }
                                        // Convert markdown lists
                                        if (line.startsWith("- ")) {
                                            return `<li class="text-neutral-700 mb-2">${line.substring(2)}</li>`;
                                        }
                                        // Convert bold text
                                        const boldText = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                                        // Regular paragraphs
                                        if (line.trim() && !line.startsWith("<")) {
                                            return `<p class="text-neutral-700 mb-4 leading-relaxed">${boldText}</p>`;
                                        }
                                        return line;
                                    })
                                    .join("\n"),
                            }}
                        />
                    </div>

                    {/* Tags */}
                    <div className="mt-12 pt-8 border-t border-neutral-200">
                        <h4 className="text-lg font-heading font-semibold text-neutral-800 mb-4">
                            Tags
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <Link
                                    key={tag}
                                    to={`/blog?tag=${tag}`}
                                    className="inline-flex items-center space-x-2 px-4 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-full text-sm text-neutral-700 transition-colors"
                                >
                                    <FiTag className="w-3 h-3" />
                                    <span>{tag}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </article>

            {/* Author Bio */}
            <section className="bg-neutral-50 py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="card">
                        <div className="flex items-start space-x-4">
                            <div className="w-20 h-20 bg-gradient-to-br from-primary-blue to-primary-purple rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-2xl font-bold text-white">
                                    {post.author.split(" ").map((n) => n[0]).join("")}
                                </span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-heading-lg font-heading text-primary-navy mb-1">
                                    {post.author}
                                </h3>
                                <p className="text-primary-blue font-semibold mb-3">{post.authorRole}</p>
                                <p className="text-neutral-600">
                                    {post.author} is a technology expert at VisdomWaves Innovations with over 10
                                    years of experience in digital transformation and enterprise solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Posts CTA */}
            <section className="py-20 bg-primary-blue text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-display-sm font-heading mb-6">
                        Explore More Insights
                    </h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
                        Discover more articles on technology, innovation, and digital transformation
                    </p>
                    <Link
                        to="/blog"
                        className="btn-primary bg-white text-primary-blue hover:bg-neutral-100 inline-block"
                    >
                        View All Articles
                    </Link>
                </div>
            </section>
        </div>
    );
}
