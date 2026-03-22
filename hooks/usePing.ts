'use client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

interface pingParam {
    videoId: string;
}

const usePing = () => {
    return useMutation({
        mutationFn: async ({ videoId }: pingParam) => {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/upload/ping`, { videoId });
            return res.data;
        }
    })
}

export default usePing;