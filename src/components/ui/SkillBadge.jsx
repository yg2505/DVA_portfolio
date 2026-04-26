import React from 'react';

export const SkillBadge = ({ skill }) => {
  return (
    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white text-slate-700 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-200">
      {skill}
    </span>
  );
};
