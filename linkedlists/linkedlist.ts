class Node<T> {
	value: T
	next: Node<T> | null

	constructor(value: T) {
		this.value = value
		this.next = null
	}
}

class LinkedList<T> {
	head: Node<T>
	tail: Node<T>

	constructor(value: T) {
		const newValue = new Node(value)
		this.head = newValue
		this.tail = newValue
	}

    print() {
        let current: Node<T> = this.head
        const values: T[] = []
        while (current.next != null) {
            values.push(current.value)
            current = current.next
        }
        values.push(current.value)
        console.log(values)
    }

	append(value: T) {
		const newValue = new Node(value)
		this.tail.next = newValue
		this.tail = newValue
	}


}

const List = new LinkedList<number>(10)
List.append(5)
List.append(1)
List.append(0)

console.log('Head: ', List.head.value)
console.log('Tail: ', List.tail.value)

List.print()
