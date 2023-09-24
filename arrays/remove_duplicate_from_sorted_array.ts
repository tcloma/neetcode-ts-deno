function removeDuplicateFromSortedArray(nums: number[]): number[] {
	const filteredNumbers: number[] = []
	const elementsSeen = new Map()

	for (const num of nums) {
		if (!elementsSeen.has(num)) {
			elementsSeen.set(num, 1)
			filteredNumbers.push(num)
		}
	}

	return filteredNumbers
}

// Tests

import { assertEquals } from 'deno_tests'
import { runTests } from '../utils.ts'

const tests = {
	'Case 1': () => assertEquals(removeDuplicateFromSortedArray([0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3]), [0, 1, 2, 3]),
	'Case 2': () => assertEquals(removeDuplicateFromSortedArray([1, 1, 1, 1, 1, 1, 1]), [1]),
}

runTests(tests)
