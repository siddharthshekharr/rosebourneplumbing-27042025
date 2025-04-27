export default function VideoUploadLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-primary text-white py-3 px-4">
                <div className="container mx-auto">
                    <h2 className="text-xl font-semibold">Admin Portal</h2>
                    <p className="text-sm opacity-80">Manage website content</p>
                </div>
            </div>

            <div className="container mx-auto mt-2 flex gap-4">
                <nav className="hidden md:block w-64 p-4">
                    <ul className="space-y-1">
                        <li>
                            <a href="/admin" className="block p-2 rounded hover:bg-gray-200">
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="/admin/video-upload" className="block p-2 rounded bg-gray-200 font-medium">
                                Video Upload
                            </a>
                        </li>
                        <li>
                            <a href="/admin/image-upload" className="block p-2 rounded hover:bg-gray-200">
                                Image Upload
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="flex-1">
                    {children}
                </div>
            </div>
        </div>
    );
} 