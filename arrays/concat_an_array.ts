function concatAnArray(arr: number[]): number[] {
	return [...arr, ...arr]
}

// Tests

import { assertEquals } from 'deno_tests'
import { runTests } from '../utils.ts'

const tests = {
	'Case 1': () => assertEquals(concatAnArray([1, 2, 3]), [1, 2, 3, 1, 2, 3]),
	'Case 2': () => assertEquals(concatAnArray([0, 2, 4, 8]), [0, 2, 4, 8, 0, 2, 4, 8]),
}

runTests(tests)
