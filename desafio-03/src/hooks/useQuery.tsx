import { useEffect, useState } from 'react'

export function useQuery<T>(value: T, delay = 500): T {
  const [queryValue, setQueryValue] = useState(value)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setQueryValue(value)
    }, delay)

    return () => {
      clearTimeout(timeout)
    }
  }, [value, delay])

  return queryValue
}
