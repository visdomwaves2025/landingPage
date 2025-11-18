import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://visdomwaves.com'
  const currentDate = new Date()

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/careers',
    '/services',
    '/products',
    '/blog',
    '/case-studies',
  ]

  // Industries
  const industries = [
    'education',
    'healthcare',
    'technology',
    'construction',
    'temple-projects',
    'consulting',
  ]

  // Services
  const services = [
    'ai-machine-learning',
    'digital-transformation',
    'web-development',
    'mobile-app-development',
    'cloud-computing',
  ]

  // Products
  const products = [
    'edtech-platform',
    'home-automation',
    'temple-management',
  ]

  // Blog posts (static for now - add dynamic fetching from Contentful if needed)
  const blogPosts = [
    'future-of-ai-in-business-2025',
    'digital-transformation-healthcare-guide',
    'modern-web-development-best-practices',
  ]

  return [
    // Static pages
    ...staticPages.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
    })),

    // Industry pages
    ...industries.map((industry) => ({
      url: `${baseUrl}/industries/${industry}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),

    // Service pages
    ...services.map((service) => ({
      url: `${baseUrl}/services/${service}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),

    // Product pages
    ...products.map((product) => ({
      url: `${baseUrl}/products/${product}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),

    // Blog posts
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
  ]
}
