import { z } from 'zod'

/**
 * Contact form validation schema
 */
export const contactFormSchema = z.object({
    firstName: z
        .string()
        .min(1, 'First name is required')
        .max(50, 'First name must be less than 50 characters')
        .regex(/^[a-zA-Z\s'-]+$/, 'First name can only contain letters, spaces, hyphens, and apostrophes'),

    lastName: z
        .string()
        .min(1, 'Last name is required')
        .max(50, 'Last name must be less than 50 characters')
        .regex(/^[a-zA-Z\s'-]+$/, 'Last name can only contain letters, spaces, hyphens, and apostrophes'),

    email: z
        .string()
        .email('Please enter a valid email address')
        .toLowerCase()
        .max(100, 'Email must be less than 100 characters'),

    phone: z
        .string()
        .optional()
        .refine(
            (val) => !val || /^[\d\s\-+()]+$/.test(val),
            'Please enter a valid phone number'
        ),

    company: z
        .string()
        .max(100, 'Company name must be less than 100 characters')
        .optional(),

    service: z
        .string()
        .max(100, 'Service must be less than 100 characters')
        .optional(),

    message: z
        .string()
        .min(10, 'Message must be at least 10 characters')
        .max(5000, 'Message must be less than 5000 characters'),
})

/**
 * Newsletter subscription validation schema
 */
export const newsletterSchema = z.object({
    email: z
        .string()
        .email('Please enter a valid email address')
        .toLowerCase()
        .max(100, 'Email must be less than 100 characters'),
})

/**
 * Sanitize HTML content to prevent XSS
 */
export function sanitizeHtml(text) {
    return text
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;')
}

/**
 * Validate and sanitize contact form data
 */
export function validateContactForm(data) {
    const result = contactFormSchema.safeParse(data)

    if (!result.success) {
        const errors = result.error.issues.map((err) => ({
            field: err.path.join('.'),
            message: err.message,
        }))
        return { success: false, errors }
    }

    // Sanitize the message to prevent XSS
    const sanitizedData = {
        ...result.data,
        message: sanitizeHtml(result.data.message),
        company: result.data.company ? sanitizeHtml(result.data.company) : undefined,
    }

    return { success: true, data: sanitizedData }
}

/**
 * Validate newsletter subscription
 */
export function validateNewsletter(data) {
    const result = newsletterSchema.safeParse(data)

    if (!result.success) {
        const errors = result.error.issues.map((err) => ({
            field: err.path.join('.'),
            message: err.message,
        }))
        return { success: false, errors }
    }

    return { success: true, data: result.data }
}
