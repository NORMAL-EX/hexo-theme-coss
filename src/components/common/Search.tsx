import { useState, useEffect, useCallback } from 'react'
import { Search as SearchIcon, X } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import type { SearchResult } from '@/types'

interface SearchProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  searchData?: SearchResult[]
}

export function Search({ open, onOpenChange, searchData = [] }: SearchProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])

  const performSearch = useCallback(
    (searchQuery: string) => {
      if (!searchQuery.trim()) {
        setResults([])
        return
      }

      const lowerQuery = searchQuery.toLowerCase()
      const filtered = searchData.filter(
        (item) =>
          item.title.toLowerCase().includes(lowerQuery) ||
          item.content?.toLowerCase().includes(lowerQuery) ||
          item.excerpt?.toLowerCase().includes(lowerQuery)
      )

      setResults(filtered.slice(0, 10))
    },
    [searchData]
  )

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      performSearch(query)
    }, 300)

    return () => clearTimeout(debounceTimer)
  }, [query, performSearch])

  useEffect(() => {
    if (!open) {
      setQuery('')
      setResults([])
    }
  }, [open])

  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) return text

    const regex = new RegExp(`(${highlight})`, 'gi')
    const parts = text.split(regex)

    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 dark:bg-yellow-800 px-0.5 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px] p-0">
        <DialogHeader className="px-4 pt-4 pb-2">
          <DialogTitle className="sr-only">搜索</DialogTitle>
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="搜索文章..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 pr-10"
              autoFocus
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </DialogHeader>

        <ScrollArea className="max-h-[400px]">
          {results.length > 0 ? (
            <ul className="px-2 pb-4">
              {results.map((result) => (
                <li key={result.slug}>
                  <a
                    href={`/posts/${result.slug}/`}
                    className={cn(
                      'block px-3 py-3 rounded-lg',
                      'hover:bg-accent transition-colors'
                    )}
                    onClick={() => onOpenChange(false)}
                  >
                    <h4 className="font-medium text-foreground mb-1">
                      {highlightText(result.title, query)}
                    </h4>
                    {result.excerpt && (
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {highlightText(result.excerpt, query)}
                      </p>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          ) : query ? (
            <div className="px-4 py-8 text-center text-muted-foreground">
              没有找到相关结果
            </div>
          ) : (
            <div className="px-4 py-8 text-center text-muted-foreground">
              输入关键词开始搜索
            </div>
          )}
        </ScrollArea>

        <div className="px-4 py-3 border-t text-xs text-muted-foreground flex items-center justify-between">
          <span>按 ESC 关闭</span>
          <span>共 {searchData.length} 篇文章</span>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Search
