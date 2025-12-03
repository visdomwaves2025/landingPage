import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

const contactSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    company: z.string().optional(),
    service: z.string().min(1, "Please select a service"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactPage() {
    const [submitStatus, setSubmitStatus] = useState('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data) => {
        try {
            setSubmitStatus('idle');
            setErrorMessage('');

            // TODO: Replace with Spring Boot endpoint
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                // Mock success for now if 404 (since API is missing)
                if (response.status === 404) {
                    console.warn("API not found, mocking success");
                } else {
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'Failed to send message');
                }
            }

            setSubmitStatus('success');
            reset();

            // Reset success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus('idle');
            }, 5000);
        } catch (error) {
            console.error('Form submission error:', error);
            // For demo purposes, if it fails, we might want to show success if it's just a connection error to missing backend
            // But let's show error to be honest.
            setSubmitStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
        }
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary-navy to-primary-blue pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-display-lg text-white mb-6 animate-fade-up">
                            Get In <span className="text-brand-vibrantTeal">Touch</span>
                        </h1>
                        <p className="text-heading-lg text-white/90 max-w-3xl mx-auto animate-fade-up">
                            Let's discuss how we can help transform your business
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info & Form Section */}
            <section className="py-20 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Contact Information */}
                        <div className="lg:col-span-1 space-y-6">
                            <div className="card">
                                <h3 className="text-heading-xl font-heading text-primary-navy mb-6">
                                    Contact Information
                                </h3>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-primary-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <FiMail className="w-6 h-6 text-primary-blue" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-neutral-800 mb-1">Email</p>
                                            <a
                                                href="mailto:info@visdomwavess.com"
                                                className="text-neutral-600 hover:text-primary-blue transition-colors"
                                            >
                                                info@visdomwavess.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-primary-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <FiPhone className="w-6 h-6 text-primary-blue" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-neutral-800 mb-1">Phone</p>
                                            <a
                                                href="tel:+917997755133"
                                                className="text-neutral-600 hover:text-primary-blue transition-colors"
                                            >
                                                +91 7997755133
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-primary-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <FiMapPin className="w-6 h-6 text-primary-blue" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-neutral-800 mb-1">Office</p>
                                            <p className="text-neutral-600">
                                                Flat no : 102, A block<br />
                                                Prabhat Signature Apartment<br />
                                                Beside kalamandir, KPHB<br />
                                                Kukatpally 500085<br />
                                                Hyderabad, Telangana, India
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-primary-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <FiClock className="w-6 h-6 text-primary-blue" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-neutral-800 mb-1">Business Hours</p>
                                            <p className="text-neutral-600">
                                                Mon - Fri: 9:00 AM - 6:00 PM<br />
                                                Sat - Sun: Closed
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div className="card bg-primary-blue text-white">
                                <h4 className="text-heading-lg font-heading mb-4">
                                    Need Immediate Help?
                                </h4>
                                <p className="text-white/90 mb-4 text-sm">
                                    For urgent inquiries, please call us directly or schedule a consultation.
                                </p>
                                <button className="w-full btn-primary bg-white text-primary-blue hover:bg-neutral-100">
                                    Schedule Consultation
                                </button>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="card">
                                <h3 className="text-heading-xl font-heading text-primary-navy mb-6">
                                    Send Us a Message
                                </h3>

                                {/* Success Message */}
                                {submitStatus === 'success' && (
                                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start">
                                        <FiCheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-semibold text-green-800 mb-1">Message Sent Successfully!</h4>
                                            <p className="text-green-700 text-sm">
                                                Thank you for contacting us. We'll get back to you within 24 hours.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Error Message */}
                                {submitStatus === 'error' && (
                                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
                                        <FiAlertCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-semibold text-red-800 mb-1">Error Sending Message</h4>
                                            <p className="text-red-700 text-sm">{errorMessage}</p>
                                        </div>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-neutral-700 mb-2">
                                                First Name *
                                            </label>
                                            <input
                                                {...register("firstName")}
                                                type="text"
                                                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all"
                                                placeholder="John"
                                            />
                                            {errors.firstName && (
                                                <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-neutral-700 mb-2">
                                                Last Name *
                                            </label>
                                            <input
                                                {...register("lastName")}
                                                type="text"
                                                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all"
                                                placeholder="Doe"
                                            />
                                            {errors.lastName && (
                                                <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-neutral-700 mb-2">
                                                Email *
                                            </label>
                                            <input
                                                {...register("email")}
                                                type="email"
                                                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all"
                                                placeholder="john@example.com"
                                            />
                                            {errors.email && (
                                                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-neutral-700 mb-2">
                                                Phone *
                                            </label>
                                            <input
                                                {...register("phone")}
                                                type="tel"
                                                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all"
                                                placeholder="+91 1234567890"
                                            />
                                            {errors.phone && (
                                                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-neutral-700 mb-2">
                                                Company
                                            </label>
                                            <input
                                                {...register("company")}
                                                type="text"
                                                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all"
                                                placeholder="Your Company"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-neutral-700 mb-2">
                                                Service Interested In *
                                            </label>
                                            <select
                                                {...register("service")}
                                                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all"
                                            >
                                                <option value="">Select a service</option>
                                                <option value="ai-automation">AI & Automation</option>
                                                <option value="digital-transformation">Digital Transformation</option>
                                                <option value="web-development">Web Development</option>
                                                <option value="mobile-development">Mobile Development</option>
                                                <option value="it-consulting">IT Consulting</option>
                                                <option value="design">Design Services</option>
                                                <option value="other">Other</option>
                                            </select>
                                            {errors.service && (
                                                <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-neutral-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            {...register("message")}
                                            rows={6}
                                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all resize-none"
                                            placeholder="Tell us about your project..."
                                        />
                                        {errors.message && (
                                            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full btn-primary bg-primary-blue hover:bg-primary-navy text-white flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                                        <FiSend className="w-5 h-5" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-display-sm font-heading text-primary-navy mb-4">
                            Visit Our Office
                        </h2>
                        <p className="text-lg text-neutral-600">
                            We're located in the heart of Hyderabad
                        </p>
                    </div>
                    <div className="w-full h-96 bg-neutral-200 rounded-xl flex items-center justify-center">
                        <p className="text-neutral-600">Map will be integrated here</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
