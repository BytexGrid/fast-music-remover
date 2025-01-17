import type { Metadata } from 'next';

const defaultMetadata: Metadata = {
  title: {
    default: 'Fast Music Remover - AI-Powered Background Music Removal',
    template: '%s | Fast Music Remover'
  },
  description: 'Remove background music while preserving speech with state-of-the-art AI technology. Process YouTube videos and audio files with our easy-to-use tool.',
  keywords: [
    'music removal',
    'background music remover',
    'AI audio processing',
    'speech enhancement',
    'audio cleanup',
    'YouTube audio processor',
    'noise reduction'
  ],
  authors: [{ name: 'Fast Music Remover Team' }],
  creator: 'Fast Music Remover Team',
  publisher: 'Fast Music Remover',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fastmusicremover.com',
    siteName: 'Fast Music Remover',
    title: 'Fast Music Remover - AI-Powered Background Music Removal',
    description: 'Remove background music while preserving speech with state-of-the-art AI technology.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Fast Music Remover Preview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fast Music Remover - AI-Powered Background Music Removal',
    description: 'Remove background music while preserving speech with state-of-the-art AI technology.',
    images: ['/og-image.png'],
  }
};

export default defaultMetadata; 