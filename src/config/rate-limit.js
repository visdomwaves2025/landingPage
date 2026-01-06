/**
 * Simple in-memory rate limiter for API routes
 *
 * For production, consider using:
 * - Upstash Rate Limit (serverless-friendly)
 * - Redis-based rate limiting
 * - Edge middleware with Vercel/Cloudflare
 */

const store = new Map()

/**
 * Check if a request should be rate limited
 */
export function rateLimit(config) {
    const { identifier, limit, windowMs } = config
    const now = Date.now()

    // Clean up expired entries periodically
    if (Math.random() < 0.01) {
        for (const [key, value] of store.entries()) {
            if (now > value.resetTime) {
                store.delete(key)
            }
        }
    }

    // Get or create rate limit entry
    let entry = store.get(identifier)

    // Reset if window has passed
    if (!entry || now > entry.resetTime) {
        entry = {
            count: 0,
            resetTime: now + windowMs,
        }
        store.set(identifier, entry)
    }

    // Increment request count
    entry.count++

    // Check if limit exceeded
    const success = entry.count <= limit
    const remaining = Math.max(0, limit - entry.count)

    return {
        success,
        limit,
        remaining,
        reset: entry.resetTime,
    }
}

/**
 * Get client IP address from request
 */
export function getClientIp(request) {
    // Check various headers for the real IP
    const headers = request.headers

    return (
        headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
        headers.get('x-real-ip') ||
        headers.get('cf-connecting-ip') || // Cloudflare
        headers.get('true-client-ip') || // Cloudflare Enterprise
        headers.get('x-client-ip') ||
        'unknown'
    )
}

/**
 * Create a rate limiter middleware for API routes
 */
export function createRateLimiter(limit = 10, windowMs = 60000) {
    return async (request) => {
        const identifier = getClientIp(request)
        return rateLimit({ identifier, limit, windowMs })
    }
}
