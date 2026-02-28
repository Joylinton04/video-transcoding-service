// LandingPage.jsx (in a Next.js /app directory)

import React from 'react';
import Head from 'next/head';

// Optional: A small component to generate the dotted pattern easily.
// You can also use a simple CSS background image for this.
const DottedBackground = () => (
  <div
    className="absolute inset-0 z-0 opacity-20"
    style={{
      backgroundColor: '#0a0a0a', // Main dark bg
      backgroundImage: 'radial-gradient(#262626 1px, transparent 1px)',
      backgroundSize: '24px 24px',
    }}
  />
);

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>FluxTranscode | High-Performance Video Transcoding</title>
      </Head>

      {/* Main Container: 100vh, dark background, relative for bg positioning */}
      <div className="relative min-h-screen flex flex-col justify-center items-center bg-neutral-950 text-neutral-100 overflow-hidden font-sans px-6">
        
        {/* The Dotted Grid Background Layer */}
        <DottedBackground />

        {/* Content Layer (z-10 to stay above background) */}
        <div className="relative z-10 max-w-5xl text-center flex flex-col items-center">
          
          {/* Subtle Accent / Tag */}
          <span className="inline-flex items-center rounded-full bg-emerald-950 px-4 py-1.5 text-xs font-semibold text-emerald-300 ring-1 ring-inset ring-emerald-800 mb-8">
            Now processing H.265 (HEVC) & AV1
          </span>

          {/* Hero Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent mb-6">
            Developer-First
            <br /> Video Transcoding API.
          </h1>

          {/* Description Text */}
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mb-12 leading-relaxed">
            Scalable, asynchronous video processing built for modern stacks. Transcode, optimize, and serve high-quality adaptive streams (HLS/DASH) with a simple REST API. Secure, fast, and cost-effective.
          </p>

          {/* Action Buttons (Primary & Secondary) */}
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="px-8 py-4 cursor-pointer bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-500 transition-colors duration-200 text-md shadow-lg shadow-emerald-900/40">
              Get Started
            </button>
            
            <button className="px-8 py-4 cursor-pointer bg-neutral-800 text-neutral-100 font-semibold rounded-xl hover:bg-neutral-700 transition-colors duration-200 text-md ring-1 ring-neutral-700">
              View API Docs
            </button>
          </div>

          {/* Subtle 'Proof' (Optional) */}
          <p className="text-neutral-600 mt-16 text-sm font-mono">
            Powered by Node.js, FFmpeg, and S3.
          </p>
        </div>
      </div>
    </>
  );
}