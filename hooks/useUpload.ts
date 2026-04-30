'use client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

interface UploadParams {
    fileName: string;
}
interface Response {
    videoId: string;
    url: string;
}

const useUpload = () => {
    return useMutation({
        mutationFn: async ({ fileName }: UploadParams) => {
            const res = await axios.post<Response>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/upload/init`, { fileName });
            return res.data;
        }
    })
}

export default useUpload;