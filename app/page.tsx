'use client';
// LandingPage.jsx (Next.js component)

import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function LandingPage() {

  const router = useRouter();

  return (
    <>
      <div className="relative min-h-screen flex flex-col justify-center items-center bg-neutral-950 text-neutral-100 overflow-hidden px-6">
        
        <div 
          className="absolute inset-0 z-0 opacity-[0.25] bg-neutral-950 bg-size-[34px_34px] bg-[linear-gradient(to_right,#3a3a3a_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a_1px,transparent_1px)]"
        />

        <div className="relative z-10 max-w-5xl text-center flex flex-col items-center">
          
          {/* Subtle Tag */}
          <span className="inline-flex items-center rounded-full bg-emerald-950 px-4 py-1.5 text-xs font-semibold text-emerald-300 ring-1 ring-inset ring-emerald-800 mb-8">
            H.265 (HEVC) & AV1 Supported
          </span>

          {/* Hero Headline (with gradient text trick) */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight bg-linear-to-b from-white to-neutral-400 bg-clip-text text-transparent mb-6">
            Developer-First
            <br /> Video Transcoding API.
          </h1>

          {/* Description Text */}
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mb-12 leading-relaxed">
            Scalable, asynchronous video processing built for modern stacks. Optimize and serve adaptive HLS/DASH streams via simple REST API. Secure, fast, and cost-effective.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6">
            <button onClick={() => { router.push('/upload') }} className="px-6 py-3 cursor-pointer bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-500 transition-colors duration-200 text-lg shadow-lg shadow-emerald-900/40">
              Get Started
            </button>
            <button onClick={() => { router.push('/docs') }} className="px-6 py-3 cursor-pointer bg-neutral-800 text-neutral-100 font-semibold rounded-xl hover:bg-neutral-700 transition-colors duration-200 text-lg ring-1 ring-neutral-700">
              View API Docs
            </button>
          </div>

          {/* Minimalist Footnote */}
          <p className="text-neutral-700 mt-20 text-sm font-mono">
            Powered by Node.js, FFmpeg, and S3.
          </p>
        </div>
      </div>
    </>
  );
}