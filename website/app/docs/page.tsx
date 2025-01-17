export default function Documentation() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Documentation
        </h1>

        {/* Installation Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Installation
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Prerequisites</h3>
            <ul className="list-disc list-inside mb-4 text-gray-800 dark:text-gray-300">
              <li>Python 3.9+</li>
              <li>FFmpeg</li>
              <li>CMake</li>
              <li>nlohmann-json</li>
              <li>libsndfile</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Quick Start with Docker</h3>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
              <code className="text-sm text-gray-800 dark:text-gray-300">
                docker pull ghcr.io/omeryusufyagci/fast-music-remover:latest
              </code>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <code className="text-sm text-gray-800 dark:text-gray-300">
                docker run -p 8080:8080 ghcr.io/omeryusufyagci/fast-music-remover:latest
              </code>
            </div>
          </div>
        </section>

        {/* Usage Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Usage
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Using the Web Interface</h3>
            <ol className="list-decimal list-inside mb-4 text-gray-800 dark:text-gray-300">
              <li>Open the application in your browser</li>
              <li>Enter a YouTube URL or upload a file</li>
              <li>Click "Process Media"</li>
              <li>Download the processed file</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Manual Installation</h3>
            <ol className="list-decimal list-inside mb-4 text-gray-800 dark:text-gray-300">
              <li>Clone the repository</li>
              <li>Install Python dependencies: <code className="text-gray-800 dark:text-gray-300">pip install -r requirements.txt</code></li>
              <li>Configure the application</li>
              <li>Start the server: <code className="text-gray-800 dark:text-gray-300">python app.py</code></li>
            </ol>
          </div>
        </section>

        {/* API Documentation */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            API Documentation
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-800 dark:text-gray-300 mb-4">
              The Fast Music Remover provides a simple HTTP API for processing media files.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Endpoints</h3>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 dark:text-white">POST /process</h4>
              <p className="text-gray-800 dark:text-gray-300">Process a media file or URL</p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Parameters</h3>
            <ul className="list-disc list-inside mb-4 text-gray-800 dark:text-gray-300">
              <li><code className="text-gray-800 dark:text-gray-300">url</code>: YouTube URL (optional)</li>
              <li><code className="text-gray-800 dark:text-gray-300">file</code>: Media file upload (optional)</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
} 