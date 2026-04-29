import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Code } from 'lucide-react';

export const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col h-full group">

      <div className="flex-1">
        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[var(--color-highlight)] transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-600 mb-6 leading-relaxed">
          {project.shortDescription}
        </p>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">Tools Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, index) => (
              <span key={index} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-sm font-medium">
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">Key Insights</h4>
          <ul className="space-y-2">
            {project.keyInsights.map((insight, index) => (
              <li key={index} className="flex items-start text-slate-600 text-sm">
                <span className="mr-2 mt-1 w-1.5 h-1.5 bg-[var(--color-highlight)] rounded-full flex-shrink-0"></span>
                <span>{insight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-4 pt-6 border-t border-slate-100 mt-auto">
        <Link
          to={`/project/${project.id}`}
          className="inline-flex items-center justify-center px-5 py-2.5 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors flex-1"
        >
          View Details
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>

        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-2.5 text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-colors"
            title="GitHub Repository"
          >
            <Code className="w-5 h-5" />
          </a>
        )}

        {project.liveLink && project.liveLink !== "#" && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-2.5 text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-colors"
            title="Live Dashboard"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
};
