import React from 'react';
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { Button } from '../components/ui/Button';
import { SkillBadge } from '../components/ui/SkillBadge';
import { ProjectCard } from '../components/ui/ProjectCard';
import { skillsData } from '../data/skillsData';
import { projectsData } from '../data/projectsData';
import { ArrowDown, Download, Mail } from 'lucide-react';

export const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col justify-center max-w-6xl mx-auto px-6 py-20 relative">
        <div className="max-w-3xl">
          <p className="text-[var(--color-highlight)] font-semibold tracking-wide mb-4">
            Hi, my name is
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
            Yashvi Goyal.
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-500 mb-8 tracking-tight">
            Aspiring Data Analyst.
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl leading-relaxed">
            Turning raw data into meaningful insights and decisions. I specialize in building interactive dashboards, uncovering hidden patterns, and telling compelling stories with data.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#projects">
              <Button variant="primary">View Projects</Button>
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-6 animate-bounce">
          <a href="#about" className="text-slate-400 hover:text-slate-900 transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <SectionWrapper id="about" title="About Me">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              I am a data enthusiast driven by a relentless curiosity to understand "why". My journey into data analysis stems from a deep-rooted problem-solving mindset and a passion for finding clarity within chaos.
            </p>
            <p>
              I don't just focus on the tools; I focus on the insights. Whether it's cleaning messy datasets or designing intuitive visualizations, my goal is always to deliver actionable business intelligence that drives real-world results.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Core Strengths</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[var(--color-highlight)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-slate-700"><strong>Data Cleaning:</strong> Structuring and normalizing messy data for accurate analysis.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[var(--color-highlight)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-slate-700"><strong>Data Visualization:</strong> Designing clear, impactful dashboards that tell a story.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[var(--color-highlight)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-slate-700"><strong>Analytical Thinking:</strong> Translating business questions into data-driven strategies.</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* Skills Section */}
      <SectionWrapper id="skills" title="Skills & Tools" subtitle="The technologies and techniques I use to analyze data.">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((category, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <SkillBadge key={skillIdx} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Projects Section */}
      <SectionWrapper id="projects" title="Featured Projects" subtitle="A selection of case studies demonstrating my analytical process.">
        <div className="grid lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper id="contact" title="Get In Touch" subtitle="I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!">
        <div className="max-w-xl mx-auto mt-12 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
          <Mail className="w-12 h-12 text-[var(--color-highlight)] mx-auto mb-6" />
          <p className="text-slate-600 mb-8 leading-relaxed">
            Feel free to reach out via email. Let's discuss how data can solve your next business challenge.
          </p>
          <a href="mailto:ygoyal2505@gmail.com">
            <Button variant="primary" className="w-full sm:w-auto">
              Say Hello
            </Button>
          </a>
        </div>
      </SectionWrapper>

    </div>
  );
};
