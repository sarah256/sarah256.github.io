import { isPostHogEnabled, posthog } from './posthog'

function capture(event: string, properties?: Record<string, string | number | boolean | string[]>) {
  if (!isPostHogEnabled) return
  posthog.capture(event, properties)
}

export function trackButtonClick(properties: {
  name: string
  location: string
  [key: string]: string | number | boolean | string[]
}) {
  capture('button_clicked', properties)
}

export function trackNavClick(properties: { path: string; label: string }) {
  capture('nav_clicked', properties)
}

export function trackDesignFilterClick(properties: { category: string }) {
  capture('design_filter_clicked', properties)
}

export function trackResumeDownload() {
  capture('resume_downloaded')
}

export function trackProjectLinkClick(properties: {
  projectId: string
  projectName: string
  linkType: string
  linkLabel: string
  url: string
}) {
  capture('project_link_clicked', properties)
}

export function trackProjectFiltersChanged(properties: {
  type: string
  languages: string[]
  tools: string[]
}) {
  capture('project_filters_changed', properties)
}

export function trackSocialClick(properties: { platform: string; location: string }) {
  capture('social_link_clicked', properties)
}
