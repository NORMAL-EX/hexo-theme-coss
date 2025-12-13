import { useState } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme'
import { Container } from './Container'
import { cn } from '@/lib/utils'
import type { MenuItem } from '@/types'

interface HeaderProps {
  siteName: string
  menu: MenuItem[]
  onSearchClick?: () => void
  logo?: string
  headerTitle?: string
}

export function Header({ siteName, menu, onSearchClick, logo, headerTitle }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <Container>
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            {logo ? (
              <img src={logo} alt={siteName} className="h-8 w-8 rounded-full object-cover" />
            ) : (
              <span className="text-xl font-bold">{siteName}</span>
            )}
            {headerTitle && (
              <span className="text-lg font-semibold">{headerTitle}</span>
            )}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menu.map((item) => (
              <a
                key={item.url}
                href={item.url}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-2">
            {/* Search Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onSearchClick}
              aria-label="搜索"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "关闭菜单" : "打开菜单"}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="flex flex-col space-y-2 p-4">
            {menu.map((item) => (
              <a
                key={item.url}
                href={item.url}
                className={cn(
                  'text-lg font-medium text-muted-foreground transition-colors hover:text-foreground',
                  'flex items-center py-2'
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
