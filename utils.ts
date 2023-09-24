export function runTests(tests: { 'Case 1': () => void }) {
	for (const [key, value] of Object.entries(tests)) {
		Deno.test(key, value)
	}
}
