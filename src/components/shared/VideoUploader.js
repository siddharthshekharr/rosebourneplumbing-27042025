'use client';

import { useState } from 'react';

export default function VideoUploader() {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');
    const [uploadProgress, setUploadProgress] = useState(0);
    const [error, setError] = useState('');

    const validateFile = (file) => {
        // Check file size (max 500MB)
        const maxSize = 500 * 1024 * 1024; // 500MB in bytes
        if (file.size > maxSize) {
            return 'File is too large. Maximum size is 500MB.';
        }

        // Check file type
        const allowedTypes = ['video/mp4', 'video/webm', 'video/quicktime'];
        if (!allowedTypes.includes(file.type)) {
            return 'Invalid file type. Only MP4, WebM, and MOV videos are allowed.';
        }

        return null;
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (!selectedFile) return;

        setError('');

        const validationError = validateFile(selectedFile);
        if (validationError) {
            setError(validationError);
            return;
        }

        setFile(selectedFile);
    };

    const handleUpload = async () => {
        if (!file) return;

        try {
            setUploading(true);
            setUploadProgress(0);
            setError('');

            // Create a custom fetch with upload progress
            const xhr = new XMLHttpRequest();
            const filename = encodeURIComponent(file.name);

            xhr.open('POST', `/api/blob-upload?filename=${filename}`);

            xhr.upload.onprogress = (event) => {
                if (event.lengthComputable) {
                    const progress = Math.round((event.loaded / event.total) * 100);
                    setUploadProgress(progress);
                }
            };

            xhr.onload = async () => {
                if (xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    setVideoUrl(response.url);
                    setUploading(false);
                } else {
                    throw new Error('Upload failed');
                }
            };

            xhr.onerror = () => {
                setError('Upload failed. Please try again.');
                setUploading(false);
            };

            xhr.send(file);
        } catch (error) {
            console.error('Error uploading video:', error);
            setError('An error occurred during upload. Please try again.');
            setUploading(false);
        }
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-4">
                <input
                    type="file"
                    accept="video/mp4,video/webm,video/quicktime"
                    onChange={handleFileChange}
                    className="block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-primary file:text-white
            hover:file:bg-primary/80"
                />
                <button
                    onClick={handleUpload}
                    disabled={!file || uploading || error}
                    className="py-2 px-4 bg-primary text-white rounded-md disabled:opacity-50"
                >
                    {uploading ? 'Uploading...' : 'Upload'}
                </button>
            </div>

            {error && (
                <div className="mt-2 p-3 bg-red-50 text-red-600 border border-red-200 rounded-md">
                    {error}
                </div>
            )}

            {uploading && (
                <div className="mt-4">
                    <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Uploading...</span>
                        <span className="text-sm font-medium">{uploadProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                            className="bg-primary h-2.5 rounded-full transition-all"
                            style={{ width: `${uploadProgress}%` }}
                        ></div>
                    </div>
                </div>
            )}

            {videoUrl && (
                <div className="mt-4">
                    <p className="mb-2 text-sm text-gray-500">Video uploaded successfully:</p>
                    <video
                        controls
                        className="w-full max-h-[500px] rounded-lg border"
                        src={videoUrl}
                    />
                    <div className="mt-3 flex flex-col gap-2">
                        <p className="text-xs text-gray-500 break-all">{videoUrl}</p>
                        <div className="flex gap-2">
                            <button
                                onClick={() => navigator.clipboard.writeText(videoUrl)}
                                className="text-xs py-1 px-2 bg-gray-100 text-gray-700 rounded"
                            >
                                Copy URL
                            </button>
                            <button
                                onClick={() => window.open(videoUrl, '_blank')}
                                className="text-xs py-1 px-2 bg-gray-100 text-gray-700 rounded"
                            >
                                Open in new tab
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
} 