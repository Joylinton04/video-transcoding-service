'use client';
import React, { useState, useRef } from 'react';
import { UploadCloud, FileVideo, X, Settings, ArrowRight } from 'lucide-react';
// Base styles for media player and provider (~400B).
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import VideoPlayer from '@/component/VideoPlayer';
import useUpload from '@/hooks/useUpload';


const UploadPage = () => {
    const [videoSrc, setVideoSrc] = useState<string>('');
    const [file, setFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [openPlayer, setOpenPlayer] = useState(false);
    const { mutate: uploadVideo, } = useUpload()

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile && selectedFile.type.startsWith('video/')) {
            setVideoSrc(URL.createObjectURL(selectedFile));
            setFile(selectedFile);
            console.log(URL.createObjectURL(selectedFile))
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFile = e.dataTransfer.files?.[0];
        if (droppedFile && droppedFile.type.startsWith('video/')) {
            setFile(droppedFile);
            setVideoSrc(URL.createObjectURL(droppedFile));
        }
    };

    const clearFile = () => {
        setFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleUpload = () => {
        if (file) {
            uploadVideo({ fileName: file.name }, {
                onSuccess: (data) => {
                    console.log(data)
                }
            });
        }
    };

    return (
        <div className="relative min-h-screen flex flex-col justify-center items-center bg-black text-white overflow-hidden px-6 font-sans">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"></div>
                <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-size-[32px_32px]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-2xl flex flex-col items-center">
                {/* Header */}
                <div className="text-center mb-12 animate-fade-in">
                    <div className="inline-flex items-center justify-center p-3 sm:p-4 bg-white/5 rounded-2xl border border-white/10 mb-6 backdrop-blur-xl shadow-2xl">
                        <UploadCloud className="w-8 h-8 sm:w-10 sm:h-10 text-green-400" />
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 bg-linear-to-br from-white via-white to-white/50 bg-clip-text text-transparent">
                        Upload Video
                    </h1>
                    <p className="text-base sm:text-lg text-white/50 max-w-xl mx-auto font-medium">
                        Securely upload your video file for high-performance transcoding into multiple adaptive formats.
                    </p>
                </div>

                {/* Upload Section */}
                <div className="w-full relative group">
                    {/* Glowing underlay */}
                    <div className="absolute -inset-1 bg-linear-to-r from-green-500 to-emerald-500 rounded-3xl blur-xl opacity-45 group-hover:opacity-40 transition duration-500"></div>

                    <div className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 shadow-2xl transition-all duration-300">
                        {!file ? (
                            <div
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                                onClick={() => fileInputRef.current?.click()}
                                className={`relative flex flex-col items-center justify-center p-12 border-2 border-dashed rounded-2xl cursor-pointer transition-all duration-300 ${isDragging ? 'border-green-500 bg-green-500/10' : 'border-white/20 hover:border-white/40 hover:bg-white/5'}`}
                            >
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="video/*"
                                    className="hidden"
                                    onChange={handleFileUpload}
                                />
                                <div className="p-4 bg-green-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <FileVideo className="w-8 h-8 text-green-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Drag & Drop</h3>
                                <p className="text-white/40 text-sm mb-6 text-center">or click to browse your files (MP4, MOV, AVI)</p>
                                <button className="px-6 py-2.5 cursor-pointer bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-colors duration-200 border border-white/10">
                                    Select File
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-6 animate-fade-in-up">
                                <div className="flex items-center justify-between p-4 bg-black/40 border border-white/10 rounded-2xl">
                                    <div className="flex items-center gap-4 overflow-hidden">
                                        <div className="p-3 bg-indigo-500/20 rounded-xl">
                                            <FileVideo className="w-6 h-6 text-indigo-400" />
                                        </div>
                                        <div className="flex flex-col overflow-hidden">
                                            <span className="font-semibold truncate">{file.name}</span>
                                            <span className="text-sm text-white/50">{(file.size / (1024 * 1024)).toFixed(2)} MB</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={clearFile}
                                        className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/50 hover:text-white"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>


                                <button 
                                    onClick={handleUpload}
                                    className="cursor-pointer w-full mt-4 group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.7)]">
                                    <span>Upload Video</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-12 text-center font-mono">
                    <p className="text-neutral-700 text-sm font-mono">
                        Powered by Node.js, FFmpeg, and S3.
                    </p>
                </div>
            </div>

            {/* watch video */}

            {videoSrc && (
                <div className='absolute bottom-10 right-10 bg-emerald-500 w-40 h-12 cursor-pointer rounded-xl flex items-center justify-center hover:scale-105 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500 hover:bg-emerald-400 z-99999'
                    onClick={() => setOpenPlayer(!openPlayer)}>
                    <button
                        className='text-white font-bold capitalize cursor-pointer'>
                        {openPlayer ? 'close player' : 'watch video'}
                    </button>
                </div>
            )}

            {
                openPlayer && (
                    <div className='fixed top-0 left-0 w-full h-full backdrop-blur-xs bg-black/2 z-9999 flex items-center justify-center'>
                        <div className='bg-white/10 backdrop-blur-xl p-6 rounded-2xl'>
                            <VideoPlayer src={videoSrc} />
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default UploadPage;