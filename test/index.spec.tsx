import { useState } from 'react'
import { act } from 'react-test-renderer'
import { renderHook } from '../src'

describe('renderHook', () => {
  test('should handle useState', async () => {
    const { result } = await renderHook(() => useState(1))

    expect(result.current[0]).toEqual(1)

    await act(() => {
      result.current[1](2)
    })

    expect(result.current[0]).toEqual(2)
  })
})
