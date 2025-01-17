'use client';

import Image from 'next/image';

export default function Examples() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Examples
        </h1>

        {/* Application Interface */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Application Interface
          </h2>
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={`/fast-music-remover/UI-screenshot.png`}
              alt="Fast Music Remover Interface"
              width={1200}
              height={675}
              className="w-full h-auto"
              priority
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            The Fast Music Remover web interface provides a simple way to process your media files.
          </p>
        </section>

        {/* Demo Video Section */}
        <section id="demo-video" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Demo Videos
          </h2>
          
          {/* Quick Demo */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Quick Demo
            </h3>
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
              <video
                className="w-full h-full"
                controls
                playsInline
                poster={`/fast-music-remover/UI-screenshot.png`}
              >
                <source
                  src="https://github.com/user-attachments/assets/e46c161b-0178-4213-b468-245e9f829d5e"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              A quick demonstration of the Fast Music Remover in action.
            </p>
          </div>

          {/* Full Example */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Full Example
            </h3>
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/aujFci9AuXE"
                title="Fisher College of Business Fall Career Fair"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Original video by Fisher College of Business, licensed under Creative Commons Attribution license.
            </p>
          </div>
        </section>

        {/* Before/After Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Before/After Examples
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Example 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Interview with Background Music
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Original</p>
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center">
                      <p className="text-gray-600 dark:text-gray-400">Audio sample coming soon</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Processed</p>
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center">
                      <p className="text-gray-600 dark:text-gray-400">Audio sample coming soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Example 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Presentation with Background Music
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Original</p>
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center">
                      <p className="text-gray-600 dark:text-gray-400">Audio sample coming soon</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Processed</p>
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center">
                      <p className="text-gray-600 dark:text-gray-400">Audio sample coming soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Common Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Content Creation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Remove background music from video clips while preserving voice-overs and dialogue.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Interviews
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Clean up recorded interviews by removing unwanted background music and enhancing speech.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Educational Content
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Improve educational videos by removing distracting background music while keeping the narration clear.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 