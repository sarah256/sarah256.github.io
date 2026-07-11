import posthog from 'posthog-js'

const apiKey = import.meta.env.VITE_POSTHOG_PROJECT_TOKEN
const apiHost = import.meta.env.VITE_POSTHOG_HOST ?? 'https://us.i.posthog.com'

export const isPostHogEnabled = Boolean(apiKey)

if (typeof window !== 'undefined' && isPostHogEnabled) {
  posthog.init(apiKey, {
    api_host: apiHost,
    defaults: '2026-05-30',
  })
}

export { posthog }
