import { Node } from "./node";

class LinkedList  {
    constuctor(value) {
        this.head = value;
        this.tail = null;
    }

    append(value) {
        const node = new Node(value);

        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    prepend(value) {
        const node = new Node(value);
        
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.nextNode = this.head;
            this.head = node;
        }
    }

    size() {
        let length = 0;
        let head = this.head;

        while(head) {
            head = head.nextNode;
            length++;
        }
        return length;
    }

    head() {
        return this.head;
    }

    tail() {
        return this.tail;
    }

    at(index) {
        let counter = 0;
        let head = this.head;
        while(index != counter) {
            head = head.nextNode;
            counter++;
        }
        return counter;
    }

    pop()
}