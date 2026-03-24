import { useState, useCallback } from 'react'

export type ButtonState = 'idle' | 'running' | 'done'

interface UseButtonAnimationOptions {
  duration: number
  onComplete?: () => void
}

export function useButtonAnimation({ duration, onComplete }: UseButtonAnimationOptions) {
  const [state, setState] = useState<ButtonState>('idle')

  const trigger = useCallback(() => {
    if (state !== 'idle') return
    setState('running')
    setTimeout(() => {
      setState('done')
      onComplete?.()
    }, duration)
  }, [state, duration, onComplete])

  const reset = useCallback(() => {
    setState('idle')
  }, [])

  return { state, trigger, reset }
}
