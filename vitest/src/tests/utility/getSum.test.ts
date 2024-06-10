import { it, describe, expect } from 'vitest'
import { getSum } from '../../utility'

describe('utility', () => {
    it('should return sum of two values', () => {
        expect(getSum(1, 4)).toBe(5)
    })
})