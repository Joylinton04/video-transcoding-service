'use client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'

interface UploadParams {
    fileName: string;
}

const useUpload = () => {
    return useMutation({
        mutationFn: async ({ fileName }: UploadParams) => {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/init-upload`, { fileName });
            return res.data;
        }
    })
}

export default useUpload; 