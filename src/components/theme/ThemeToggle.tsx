import { useTheme } from './ThemeProvider'
import { CircleHalf } from '@/components/icons'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sun, Moon, Monitor } from 'lucide-react'
import type { ThemeMode } from '@/types'

const themeOptions: { value: ThemeMode; label: string; icon: React.ReactNode }[] = [
  { value: 'light', label: '浅色模式', icon: <Sun className="h-4 w-4" /> },
  { value: 'dark', label: '深色模式', icon: <Moon className="h-4 w-4" /> },
  { value: 'system', label: '跟随系统', icon: <Monitor className="h-4 w-4" /> },
]

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <CircleHalf className="h-5 w-5" />
          <span className="sr-only">切换主题</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themeOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => setTheme(option.value)}
            className={theme === option.value ? 'bg-accent' : ''}
          >
            <span className="mr-2">{option.icon}</span>
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ThemeToggle
