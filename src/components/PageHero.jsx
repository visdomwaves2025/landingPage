import React from 'react';
import PropTypes from 'prop-types';

const PageHero = ({ title, description, image, className = '' }) => {
    return (
        <section className={`relative pt-32 pb-20 overflow-hidden ${className}`}>
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={image?.url}
                    alt={image?.alt || 'Page Header'}
                    className="object-cover w-full h-full"
                />
                {/* Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    <h1 className="text-display-lg text-white mb-6 animate-fade-up">
                        {title}
                    </h1>
                    {description && (
                        <p className="text-heading-lg text-white/90 max-w-3xl mx-auto animate-fade-up">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

PageHero.propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.string,
    image: PropTypes.shape({
        url: PropTypes.string,
        alt: PropTypes.string,
    }).isRequired,
    className: PropTypes.string,
};

export default PageHero;
