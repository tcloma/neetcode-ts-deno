class Stack<T> {
	private elements: T[] = []

	constructor(values: T[] = []) {
		this.elements = values
	}

	push(value: T) {
		return this.elements.push(value)
	}

	pop() {
		return this.elements.pop()
	}

	peek() {
		console.log('Top element: ', this.elements[this.elements.length - 1])
	}

	print() {
		console.log(this.elements)
	}
}

const plates = new Stack([1, 2, 3, 4])

plates.push(5)
plates.push(6)
plates.peek()
plates.pop()
plates.print()
