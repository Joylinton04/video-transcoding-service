'use client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';




const useS3Upload = (setProgress: (progress: number) => void) => {


    return useMutation({
        mutationKey: ['s3-upload'],
        mutationFn: async ({ presignedUrl, file }: { presignedUrl: string, file: File }) => {
            const res = await axios.put(`${presignedUrl}`, file, {
                headers: {
                    'Content-Type': file.type
                },
                onUploadProgress: (progressEvent) => {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / (progressEvent.total || 100));
                    setProgress(percentCompleted);
                }
            });
            return res.data;
        }
    })
}

export default useS3Upload;