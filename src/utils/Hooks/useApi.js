import useSWR, { useSWRConfig } from 'swr'

export function useApi(key, request, options = {}) {
  const { cache } = useSWRConfig()
  const { data, error, isValidating, mutate } = useSWR(key, (url, params) => request(url, { ...params }), {
    revalidateOnFocus: false,
    revalidateOnMount: !cache.has(key),
    ...options
  })
  const isLoading = (!data && !error) || isValidating

  return {
    isLoading,
    data,
    error,
    isValidating,
    mutate
  }
}
