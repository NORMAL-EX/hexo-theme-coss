import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface BackToTopProps {
  threshold?: number
  className?: string
}

export function BackToTop({ threshold = 300, className }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > threshold) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [threshold])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <Button
      variant="outline"
      size="icon-lg"
      className={cn(
        'fixed bottom-6 right-6 z-50 rounded-full shadow-lg transition-[transform,opacity] duration-300',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none',
        className
      )}
      onClick={scrollToTop}
      aria-label="返回顶部"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  )
}

export default BackToTop
