import VideoUploader from '@/components/shared/VideoUploader';

export const metadata = {
    title: 'Video Upload | Rosebourne Plumbing',
    description: 'Upload videos to Rosebourne Plumbing website',
};

export default function VideoUploadPage() {
    return (
        <div className="container mx-auto py-10 px-4 max-w-4xl">
            <h1 className="text-3xl font-bold mb-2">Video Upload</h1>
            <p className="text-gray-600 mb-8">
                Upload videos for the website. Supported formats: MP4, WebM, MOV.
                Maximum file size: 500MB.
            </p>

            <div className="bg-white rounded-lg shadow-md p-6">
                <VideoUploader />
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-lg font-medium text-blue-800 mb-2">Tips for video uploads</h3>
                <ul className="list-disc pl-5 space-y-1 text-blue-700">
                    <li>Use high resolution videos (1080p or higher) for best quality</li>
                    <li>Keep videos under 2 minutes for optimal user engagement</li>
                    <li>Compress videos before uploading for faster processing</li>
                    <li>Use descriptive filenames for easier management</li>
                    <li>Videos are automatically served via Vercel's global CDN</li>
                </ul>
            </div>
        </div>
    );
} 