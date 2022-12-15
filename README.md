# react-hook-testing

[![npm](https://img.shields.io/npm/v/react-hook-testing)](https://npm.im/react-hook-testing)
[![build](https://github.com/iyegoroff/react-hook-testing/workflows/build/badge.svg)](https://github.com/iyegoroff/react-hook-testing/actions/workflows/build.yml)
[![publish](https://github.com/iyegoroff/react-hook-testing/workflows/publish/badge.svg)](https://github.com/iyegoroff/react-hook-testing/actions/workflows/publish.yml)
[![codecov](https://codecov.io/gh/iyegoroff/react-hook-testing/branch/main/graph/badge.svg?token=YC314L3ZF7)](https://codecov.io/gh/iyegoroff/react-hook-testing)
[![Type Coverage](https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fiyegoroff%2Freact-hook-testing%2Fmain%2Fpackage.json)](https://github.com/plantain-00/type-coverage)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/react-hook-testing)
[![npm](https://img.shields.io/npm/l/react-hook-testing.svg?t=1495378566926)](https://www.npmjs.com/package/react-hook-testing)

react hook testing

## Getting started

```
npm i react-test-renderer -D
npm i react-hook-testing -D
```

## Description

Minimal version of `renderHook` function from `@testing-library/react`.

## Example

```ts
import { useState } from 'react'
import { act } from 'react-test-renderer'
import { renderHook } from 'react-hook-testing'

describe('renderHook', () => {
  test('should handle useState', async () => {
    // !!! requires await
    const { result } = await renderHook(() => useState(1))

    expect(result.current[0]).toEqual(1)

    await act(() => {
      result.current[1](2)
    })

    expect(result.current[0]).toEqual(2)
  })
})
```
