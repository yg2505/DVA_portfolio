import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Code } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { Button } from '../components/ui/Button';

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Project not found</h2>
        <Link to="/">
          <Button variant="primary">Return Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">

        <Link to="/" className="inline-flex items-center text-slate-500 hover:text-slate-900 mb-12 transition-colors font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Link>
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Header Section */}
          <div className="p-8 md:p-12 border-b border-slate-100">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-3 mb-8">
              {project.tools.map((tool, index) => (
                <span key={index} className="px-4 py-1.5 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                  {tool}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap">
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className="gap-2">
                    <Code className="w-4 h-4" />
                    View Source Code
                  </Button>
                </a>
              )}
            </div>
          </div>

          <div class="w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>

          {/* Content Section */}
          <div className="p-5 md:p-12 space-y-16 text-lg text-slate-600 leading-relaxed">

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">Overview & Problem Statement</h2>
              <p>{project.problemStatement}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">Dataset & Data Cleaning</h2>
              <p className="mb-4">{project.datasetDescription}</p>
              <ul className="list-disc pl-5 space-y-2">
                {project.cleaningSteps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ul>
            </section>

            {project.dashboardScreenshots.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-100">Visualizations</h2>
                <div className="space-y-8">
                  {project.dashboardScreenshots.map((src, idx) => (
                    <div key={idx} className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                      <img src={src} alt={`Dashboard screenshot ${idx + 1}`} className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">Key Insights & Business Impact</h2>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                {project.keyInsights.map((insight, idx) => (
                  <li key={idx}>{insight}</li>
                ))}
              </ul>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-2">Conclusion</h3>
                <p>{project.businessImpact}</p>
              </div>
            </section>

          </div>
        </div>

      </div>
    </div>
  );
};
