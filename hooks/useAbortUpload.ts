'use client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

interface AbortParams {
    videoId: string;
}

const useAbortUpload = () => {
    return useMutation({
        mutationFn: async ({ videoId }: AbortParams) => {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/upload/abort`, { videoId });
            return res.data;
        }
    })
}

export default useAbortUpload;
