'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { FiAlertTriangle, FiHome, FiRefreshCw } from 'react-icons/fi'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100 px-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiAlertTriangle className="w-10 h-10 text-red-600" />
          </div>

          <h1 className="text-4xl font-heading font-bold text-primary-navy mb-4">
            Oops! Something went wrong
          </h1>

          <p className="text-lg text-neutral-600 mb-8">
            We encountered an unexpected error. Our team has been notified and we're working to fix it.
          </p>

          {process.env.NODE_ENV === 'development' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 text-left">
              <p className="text-sm font-mono text-red-800 break-all">
                {error.message}
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => reset()}
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-blue text-white font-semibold rounded-lg hover:bg-primary-navy transition-colors"
            >
              <FiRefreshCw className="mr-2" />
              Try Again
            </button>

            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-neutral-100 text-primary-navy font-semibold rounded-lg hover:bg-neutral-200 transition-colors"
            >
              <FiHome className="mr-2" />
              Go Home
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t border-neutral-200">
            <p className="text-sm text-neutral-500">
              Need help?{' '}
              <Link href="/contact" className="text-primary-blue hover:underline">
                Contact our support team
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
