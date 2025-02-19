export function isDevelopmentEnv(): boolean {
  return process.env.NODE_ENV === 'development'
}

export function isTestEnv(): boolean {
  return process.env.NODE_ENV === 'test'
}

export function isStagingEnv(): boolean {
  // NB: This is set in vercel builds.
  return Boolean(process.env.REACT_APP_STAGING)
}

export function isProductionEnv(): boolean {
  return process.env.NODE_ENV === 'production' && !isStagingEnv()
}

export function isSentryEnabled(): boolean {
  return process.env.REACT_APP_SENTRY_ENABLED === 'true'
}

export const getEnvironmentVariable = (name: string): string => {
  const env = process.env[name]
  if (!env) {
    throw new Error(`Couldn't find environment variable: ${name}`)
  }
  return env
}
