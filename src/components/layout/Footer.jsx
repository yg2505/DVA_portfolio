import React from 'react';
import { Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-center md:text-left">
          <p className="text-slate-900 font-bold text-lg mb-1">Yashvi Goyal</p>
          <p className="text-slate-500 text-sm">Data Analyst & Storyteller</p>
        </div>


        <div className="text-slate-500 text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>

      </div>
    </footer>
  );
};
