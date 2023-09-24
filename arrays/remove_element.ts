/*
	Write a function that takes in 2 arguments, an array of numbers and a number value
	The function should return an array of numbers that removes the given value from the given array
*/

function removeElementFilter(nums: number[], value: number): number[] {
	return nums.filter((num) => num != value)
}

/*
	Tests
*/

import { assertEquals } from 'deno_tests'
import { runTests } from '../utils.ts'

const tests = {
	'Case 1': () => assertEquals(removeElementFilter([1, 2, 2, 1], 2), [1, 1]),
	'Case 2': () => assertEquals(removeElementFilter([0, 1, 2, 2, 3, 0, 4, 2], 2), [0, 1, 3, 0, 4]),
	'Case 3': () => assertEquals(removeElementFilter([1, 1, 1, 1], 0), [1, 1, 1, 1]),
}

runTests(tests)
