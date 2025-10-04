'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTiktok
} from '@fortawesome/free-brands-svg-icons'

interface SocialLink {
  icon: any
  href: string
  label: string
  hoverColor: string
}

export default function SocialMediaSidebar() {
  const socialLinks: SocialLink[] = [
    {
      icon: faFacebookF,
      href: `https://www.facebook.com/${process.env.NEXT_PUBLIC_SOCMED_FB || 'your_facebook_handle'}`,
      label: 'Facebook',
      hoverColor: 'hover:text-blue-500'
    },
    {
      icon: faInstagram,
      href: `https://www.instagram.com/${process.env.NEXT_PUBLIC_SOCMED_IG || 'your_instagram_handle'}`,
      label: 'Instagram',
      hoverColor: 'hover:text-pink-500'
    },
    {
      icon: faYoutube,
      href: `https://www.youtube.com/channel/${process.env.NEXT_PUBLIC_SOCMED_YT || 'your_youtube_channel_id'}`,
      label: 'YouTube',
      hoverColor: 'hover:text-red-500'
    },
    {
      icon: faTiktok,
      href: `https://www.tiktok.com/@${process.env.NEXT_PUBLIC_SOCMED_TIKTOK || 'your_tiktok_handle'}`,
      label: 'TikTok',
      hoverColor: 'hover:text-black'
    }
  ]

  return (
    <div id='socmedsidebar' className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-40">
      <div className="flex flex-col space-y-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              group flex items-center justify-center
              w-7 h-7
              bg-black/20 backdrop-blur-sm
              border border-white/20
              rounded-full
              text-white text-lg
              transition-all duration-300 ease-in-out
              hover:bg-white/10 hover:border-white/40 hover:scale-110
              ${link.hoverColor}
              shadow-lg hover:shadow-xl
            `}
            aria-label={link.label}
          >
            <FontAwesomeIcon
              icon={link.icon}
              className="w-2 h-2 transition-transform duration-300 group-hover:scale-110"
            />
          </a>
        ))}
      </div>
    </div>
  )
}