import { Container } from './Container'
import type { SocialLink } from '@/types'
import { Github, Twitter, Mail, Rss } from 'lucide-react'

interface FooterProps {
  copyright?: string
  powered?: boolean
  beian?: string
  social?: SocialLink[]
}

const socialIcons: Record<string, React.ReactNode> = {
  github: <Github className="h-5 w-5" />,
  twitter: <Twitter className="h-5 w-5" />,
  email: <Mail className="h-5 w-5" />,
  rss: <Rss className="h-5 w-5" />,
}

export function Footer({ copyright, powered = true, beian, social }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row" style={{ background: 'var(--card)' }}>
          <div className="flex flex-col items-center gap-2 md:items-start">
            <p className="text-sm text-muted-foreground">
              {copyright || `© ${currentYear} All rights reserved.`}
            </p>
            {beian && (
              <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                {beian}
              </a>
            )}
            {powered && (
              <p className="text-xs text-muted-foreground">
                Powered by{' '}
                <a
                  href="https://hexo.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground"
                >
                  Hexo
                </a>
                {' '}&{' '}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground"
                >
                  Theme Coss
                </a>
              </p>
            )}
          </div>

          {social && social.length > 0 && (
            <div className="flex items-center space-x-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  title={item.name}
                >
                  {socialIcons[item.icon.toLowerCase()] || item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </Container>
    </footer>
  )
}

export default Footer
