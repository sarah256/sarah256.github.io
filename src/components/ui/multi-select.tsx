import { ChevronsUpDown, X } from 'lucide-react'
import { useMemo } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'

interface MultiSelectProps {
  label: string
  options: string[]
  selected: string[]
  onChange: (selected: string[]) => void
  placeholder?: string
  className?: string
}

function toggleValue(values: string[], value: string): string[] {
  return values.includes(value) ? values.filter((item) => item !== value) : [...values, value]
}

export function MultiSelect({
  label,
  options,
  selected,
  onChange,
  placeholder = 'Select...',
  className,
}: MultiSelectProps) {
  const triggerLabel = useMemo(() => {
    if (selected.length === 0) return placeholder
    if (selected.length === 1) return selected[0]
    return `${selected.length} selected`
  }, [placeholder, selected])

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <span className="font-mono text-[0.72rem] uppercase tracking-wider text-muted-foreground">{label}</span>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className="h-9 w-full min-w-40 justify-between font-mono text-xs font-normal"
          >
            <span className="truncate">{triggerLabel}</span>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-(--radix-popover-trigger-width) p-0" align="start">
          <Command>
            <CommandInput placeholder={`Search ${label.toLowerCase()}...`} className="font-mono text-xs" />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {options.map((option) => {
                  const isSelected = selected.includes(option)
                  return (
                    <CommandItem
                      key={option}
                      value={option}
                      onSelect={() => onChange(toggleValue(selected, option))}
                      className="font-mono text-xs"
                    >
                      <Checkbox checked={isSelected} className="pointer-events-none" />
                      {option}
                    </CommandItem>
                  )
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}

interface ActiveFilterBadgesProps {
  items: { key: string; label: string; onRemove: () => void }[]
}

export function ActiveFilterBadges({ items }: ActiveFilterBadgesProps) {
  if (items.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Badge key={item.key} variant="secondary" className="gap-1 pr-1 font-mono text-[0.7rem] font-normal">
          {item.label}
          <button
            type="button"
            className="rounded-sm p-0.5 hover:bg-background/80"
            onClick={item.onRemove}
            aria-label={`Remove ${item.label} filter`}
          >
            <X className="h-3 w-3" />
          </button>
        </Badge>
      ))}
    </div>
  )
}
