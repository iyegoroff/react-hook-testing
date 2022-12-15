/* eslint-disable @typescript-eslint/ban-types, no-null/no-null */
import React from 'react'
import { create, act } from 'react-test-renderer'

export async function renderHook<T>(hook: () => T) {
  const result: { current: null | T } = { current: null }
  const Hook = () => {
    const state = hook()

    React.useEffect(() => {
      result.current = state
    })

    return null
  }

  await act(() => {
    create(React.createElement(Hook))
  })

  return { result } as { result: { current: T } }
}
