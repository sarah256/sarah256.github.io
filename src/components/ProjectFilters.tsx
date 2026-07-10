import type { Project, ProjectType } from '../data/projects'
import { getProjectLanguages, getProjectTools, projectTypes } from '../data/projects'
import { ActiveFilterBadges, MultiSelect } from '@/components/ui/multi-select'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export interface ProjectFilterState {
  type: ProjectType | 'all'
  languages: string[]
  tools: string[]
}

export const defaultProjectFilters: ProjectFilterState = {
  type: 'all',
  languages: [],
  tools: [],
}

export function filterProjects(projectList: Project[], filters: ProjectFilterState): Project[] {
  return projectList.filter((project) => {
    if (filters.type !== 'all' && project.type !== filters.type) return false
    if (filters.languages.length > 0 && !filters.languages.some((lang) => project.languages.includes(lang))) {
      return false
    }
    if (filters.tools.length > 0 && !filters.tools.some((tool) => project.tools.includes(tool))) return false
    return true
  })
}

interface ProjectFiltersProps {
  filters: ProjectFilterState
  onChange: (filters: ProjectFilterState) => void
}

export function ProjectFilters({ filters, onChange }: ProjectFiltersProps) {
  const languages = getProjectLanguages()
  const tools = getProjectTools()
  const hasActiveFilters =
    filters.type !== 'all' || filters.languages.length > 0 || filters.tools.length > 0

  const activeBadges = [
    ...(filters.type !== 'all'
      ? [
          {
            key: `type-${filters.type}`,
            label: filters.type,
            onRemove: () => onChange({ ...filters, type: 'all' }),
          },
        ]
      : []),
    ...filters.languages.map((language) => ({
      key: `lang-${language}`,
      label: language,
      onRemove: () =>
        onChange({
          ...filters,
          languages: filters.languages.filter((item) => item !== language),
        }),
    })),
    ...filters.tools.map((tool) => ({
      key: `tool-${tool}`,
      label: tool,
      onRemove: () =>
        onChange({
          ...filters,
          tools: filters.tools.filter((item) => item !== tool),
        }),
    })),
  ]

  return (
    <div className="mb-8 space-y-4 border-b border-border pb-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="grid flex-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-[0.72rem] uppercase tracking-wider text-muted-foreground">type</span>
            <Select
              value={filters.type}
              onValueChange={(value) => onChange({ ...filters, type: value as ProjectType | 'all' })}
            >
              <SelectTrigger className="h-9 font-mono text-xs">
                <SelectValue placeholder="All types" />
              </SelectTrigger>
              <SelectContent>
                {projectTypes.map((type) => (
                  <SelectItem key={type.id} value={type.id} className="font-mono text-xs">
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <MultiSelect
            label="languages"
            options={languages}
            selected={filters.languages}
            onChange={(languages) => onChange({ ...filters, languages })}
            placeholder="All languages"
          />

          <MultiSelect
            label="tools"
            options={tools}
            selected={filters.tools}
            onChange={(tools) => onChange({ ...filters, tools })}
            placeholder="All tools"
          />
        </div>

        {hasActiveFilters && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-9 shrink-0 font-mono text-xs text-muted-foreground"
            onClick={() => onChange(defaultProjectFilters)}
          >
            clear all
          </Button>
        )}
      </div>

      <ActiveFilterBadges items={activeBadges} />
    </div>
  )
}
