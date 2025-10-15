import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Convo — Say the unsaid',
    short_name: 'Convo',
    description: 'Talk freely in a warm, anonymous chat. No account, no tracking—messages are used to reply, then deleted. A friendly ear, no judgment. Start a safe chat.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon/logo_250_250.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon/logo_500_500.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}