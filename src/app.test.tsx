import { describe, it } from 'vitest'
import { render } from '@testing-library/preact'
import { App } from './app'

describe('CustomSwitch', () => {
  it('should be rendered correctly', () => {
    render(<App />)
  })
})
