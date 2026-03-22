import React from 'react'
import Image from 'next/image'
import { Play, Clock, MoreVertical } from 'lucide-react'

const dummyVideos = [
    { id: '1', name: 'trip_to_japan_final_v2.mp4', dateUploaded: 'Oct 24, 2026', duration: '12:45' },
    { id: '2', name: 'presentation_recording.mkv', dateUploaded: 'Oct 23, 2026', duration: '45:20' },
    { id: '3', name: 'gameplay_highlight_reel.mov', dateUploaded: 'Oct 20, 2026', duration: '08:12' },
    { id: '4', name: 'drone_footage_beach.mp4', dateUploaded: 'Oct 15, 2026', duration: '03:55' },
    { id: '5', name: 'interview_with_ceo.avi', dateUploaded: 'Oct 10, 2026', duration: '55:30' },
];

const Page = () => {
    return (
        <div className="relative min-h-screen bg-black p-6 text-white overflow-hidden font-sans">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"></div>
                <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-size-[32px_32px]"></div>
            </div>
            <div className="relative z-10 w-full max-w-7xl mx-auto py-8">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-white to-gray-400">
                        Uploaded Videos
                    </h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-10">
                    {dummyVideos.map((video) => (
                        <div key={video.id} className="group cursor-pointer flex flex-col">
                            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4 border border-white/10 group-hover:border-blue-500/50 transition-all duration-300 shadow-lg group-hover:shadow-blue-900/20 bg-gray-900">
                                <Image
                                    src="/images/video_thumbnail_1.png"
                                    alt={video.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-black/80 px-2 py-1 rounded-md text-xs font-medium text-gray-200 border border-white/10 backdrop-blur-sm">
                                    <Clock className="w-3 h-3 text-blue-400" />
                                    {video.duration}
                                </div>

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-12 h-12 rounded-full bg-blue-600/90 text-white flex items-center justify-center backdrop-blur-md shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        <Play className="w-6 h-6 ml-1" fill="currentColor" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex gap-3 px-1">
                                <div className="w-9 h-9 rounded-full bg-linear-to-br from-blue-900 to-indigo-900 flex items-center justify-center shrink-0 border border-white/5 shadow-inner">
                                    <span className="text-xs font-bold text-blue-200">
                                        {video.name.charAt(0).toUpperCase()}
                                    </span>
                                </div>
                                <div className="flex flex-col flex-1 min-w-0 pr-1">
                                    <h3 className="text-sm font-semibold text-gray-200 truncate group-hover:text-blue-400 transition-colors" title={video.name}>
                                        {video.name}
                                    </h3>
                                    <div className="flex items-center justify-between mt-1">
                                        <div className="text-[13px] text-gray-400 font-medium truncate">
                                            Uploaded {video.dateUploaded}
                                        </div>
                                    </div>
                                    <div className="flex gap-2 mt-2 flex-wrap">
                                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 transition-colors">1080p</span>
                                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 transition-colors">720p</span>
                                    </div>
                                </div>
                                <button className="self-start p-1 -mr-1 -mt-1 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors opacity-0 group-hover:opacity-100" aria-label="More options">
                                    <MoreVertical className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Page;