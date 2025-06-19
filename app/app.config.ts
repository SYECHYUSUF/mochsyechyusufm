export default defineAppConfig({
  global: {
    meetingLink: 'https://cal.com/hugorcd/15min',
    available: true,
  },
  profile: {
    name: 'Moch Syech Yusuf M',
    job: 'Frontend Developer',
    email: 'mochsyechyusufm@gmail.com',
    phone: '(+62) 85342505228',
    picture: '/pp.jpg',
  },
  socials: {
    github: 'https://github.com/SYECHYUSUF',
    twitter: 'https://twitter.com/',
    linkedin: 'https://www.linkedin.com/in/moch-syech-yusuf-m-110392346',
    instagram: 'https://www.instagram.com/syechyusufm',
    spotify: 'https://open.spotify.com/artist/20zafXaLhm5IcXnSU93rNn',
  },
  seo: {
    title: 'Canvas a Nuxt portfolio template',
    description: 'Canvas is a simple but beautiful portfolio template for designers and developers built with Nuxt and Tailwind CSS. Made with ❤️ by HugoRCD',
    url: 'https://canvas.hrcd.fr',
    lang: 'en',
  },
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'neutral',
    },
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    button: {
      slots: {
        base: 'cursor-pointer',
      },
      defaultVariants: {
        color: 'neutral',
      },
    },
    input: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    textarea: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    icons: {
      loading: 'lucide:loader',
    },
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
})