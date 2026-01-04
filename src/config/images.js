/**
 * Curated high-quality images for VisdomWaves website
 * Using local assets for consistency and performance
 */

/**
 * Hero and banner images
 */
export const heroImages = {
    home: {
        url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&q=80', // Keeping generic for now as no specific home hero found
        alt: 'Digital technology and global connectivity',
    },
    about: {
        url: '/images/about-story.png',
        alt: 'Team collaboration and innovation',
    },
    services: {
        url: '/images/services-process.png',
        alt: 'Professional services and consulting',
    },
    contact: {
        url: '/images/contact-map.png',
        alt: 'Get in touch with our team',
    },
    blog: {
        url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&h=1080&fit=crop&q=80',
        alt: 'Insights and knowledge sharing',
    },
    careers: {
        url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&h=1080&fit=crop&q=80',
        alt: 'Join our growing team',
    },
    products: {
        url: '/images/products-hero.png',
        alt: 'Innovative product solutions',
    },
    industries: {
        url: '/images/solutions/generic-dashboard.png',
        alt: 'Industries we serve',
    },
    work: {
        url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&q=80',
        alt: 'Our work and capabilities'
    }
};

/**
 * Service-specific images
 */
export const serviceImages = {
    aiMachineLearning: {
        url: '/images/solutions/generic-ai.png',
        alt: 'Artificial Intelligence and Machine Learning',
    },
    digitalTransformation: {
        url: '/images/solutions/consulting-analytics.png',
        alt: 'Digital transformation and analytics',
    },
    webDevelopment: {
        url: '/images/solutions/generic-dashboard.png',
        alt: 'Web application development',
    },
    mobileDevelopment: {
        url: '/images/solutions/generic-mobile.png',
        alt: 'Mobile app development',
    },
    cloudComputing: {
        url: '/images/solutions/generic-cloud.png',
        alt: 'Cloud computing infrastructure',
    }
};

/**
 * Industry-specific images
 */
export const industryImages = {
    healthcare: {
        url: '/images/solutions/healthcare-telemed.png',
        alt: 'Healthcare technology and innovation',
    },
    education: {
        url: '/images/solutions/education-lms.png',
        alt: 'Educational technology and learning',
    },
    technology: {
        url: '/images/solutions/tech-devops.png',
        alt: 'Technology and innovation',
    },
    construction: {
        url: '/images/solutions/construction-bim.png',
        alt: 'Construction and infrastructure',
    },
    consulting: {
        url: '/images/solutions/consulting-analytics.png',
        alt: 'Business consulting and strategy',
    },
    templeProjects: {
        url: '/images/solutions/temple-digital.png',
        alt: 'Temple architecture and management',
    }
};

/**
 * Product-specific images
 */
export const productImages = {
    edtechPlatform: {
        url: '/images/products/edtech-hero.png',
        alt: 'Educational technology platform',
    },
    homeAutomation: {
        url: '/images/products/smarthome-hero.png',
        alt: 'Smart home automation',
    },
    templeManagement: {
        url: '/images/products/temple-hero.png',
        alt: 'Temple management system',
    }
};

/**
 * Team and office images
 */
export const teamImages = {
    office: {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop&q=80',
        alt: 'Modern office workspace',
    },
    collaboration: {
        url: '/images/about-story.png',
        alt: 'Team collaboration',
    },
    meeting: {
        url: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=800&fit=crop&q=80',
        alt: 'Team meeting and planning',
    },
    coding: {
        url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop&q=80',
        alt: 'Software development',
    }
};

/**
 * Blog post placeholder images by category
 */
export const blogImages = {
    ai: {
        url: '/images/solutions/generic-ai.png',
        alt: 'Artificial Intelligence',
    },
    healthcare: {
        url: '/images/solutions/healthcare-telemed.png',
        alt: 'Healthcare and medical technology',
    },
    education: {
        url: '/images/solutions/education-lms.png',
        alt: 'Education and learning',
    },
    construction: {
        url: '/images/solutions/construction-bim.png',
        alt: 'Construction and IoT',
    },
    webdev: {
        url: '/images/solutions/generic-dashboard.png',
        alt: 'Web development',
    }
};

/**
 * Generic background images for various sections
 */
export const backgroundImages = {
    abstractTech: {
        url: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&h=1080&fit=crop&q=80',
        alt: 'Abstract technology background',
    },
    network: {
        url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=1080&fit=crop&q=80',
        alt: 'Network and connectivity',
    },
    dataVisualization: {
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&q=80',
        alt: 'Data visualization and analytics',
    }
};

/**
 * Helper function to get optimized image URL
 */
export function getOptimizedImageUrl(baseUrl, width = 1200, height = 800, quality = 80) {
    // If it's already an optimized Unsplash URL, return as is
    if (baseUrl.includes('w=') && baseUrl.includes('h=')) {
        return baseUrl;
    }
    // For local images, return as is
    if (baseUrl.startsWith('/')) {
        return baseUrl;
    }

    // Add Unsplash optimization parameters
    return `${baseUrl}${baseUrl.includes('?') ? '&' : '?'}w=${width}&h=${height}&fit=crop&q=${quality}`;
}
