import React from 'react';

export const SectionWrapper = ({ id, className = '', children, title, subtitle }) => {
  return (
    <section id={id} className={`py-24 md:py-32 scroll-mt-20 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        {(title || subtitle) && (
          <div className="max-w-3xl mb-16">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-slate-600 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
