import React from 'react'

export function useDebounce<T = any>(value: T, delayInMs = 500) {
  const [debounce, setDebounce] = React.useState<T | null>(null)
  const timeout = React.useRef<NodeJS.Timeout | null>(null)

  React.useEffect(() => {
    clearTimeout(timeout.current!)

    timeout.current = setTimeout(() => {
      setDebounce(value)
    }, delayInMs)
  }, [value, timeout.current])

  return [debounce]
}
