import { Metadata } from 'next';
import { SITE_CONFIG } from './constants';

export function constructMetadata({
  title = SITE_CONFIG.name,
  description = SITE_CONFIG.description,
  image = '/thumbnail.jpg',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title: {
      template: `%s | ${SITE_CONFIG.name}`,
      default: SITE_CONFIG.name,
    },
    description,
    openGraph: {
      title: SITE_CONFIG.name,
      description,
      images: [
        {
          url: image,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: SITE_CONFIG.name,
      description,
      images: [image],
      creator: '@threadlab',
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
