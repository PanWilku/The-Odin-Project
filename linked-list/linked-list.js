import { Node } from "./node.js";

export class LinkedList  {
    constructor(value) {
        this.head = value;
        this.tail = null;
    }

    append(value) {
        const node = new Node(value);

        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.nextNode = node;
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

    pop() {
        this.tail = null;
    }

    contains(value) {
        let head = this.head;
        while(head !== null) {
            if(head.value === value) {
                return true;
            } else {
                head = head.nextNode;
            }
        }
        return false;
    }


    find(value) {
        let head = this.head;
        let indexCounter = 0;
        const index = [];

        while(head !== null) {
            if(value === head.value) {
                index.push(indexCounter);
                head = head.nextNode;
                indexCounter ++;
            } else {
                head = head.nextNode;
                indexCounter++;   
            }
        }
        
        if(index.length === 0) {
            return null;
        } else {
            return index;
        }


    }


    toString() {
        let result = "";
        let head = this.head;
        while( head !== null) {
            result += `( ${head.value} ) -> `;
            head = head.nextNode;
        }
        result += "null";
        return result;
    }

    insertAt(value, index) {
        const newNode = new Node(value);
        let head = this.head;
        let counter = 0;

        if(index === 0) {
            newNode.nextNode = this.head;
            this.head = newNode;
            return;
        }

        while(head !== null && counter < index - 1) {
            head = head.nextNode;
            counter++;
        }

        if(head === null) {
            throw new Error("out of bound")
        }

        newNode.nextNode = head.nextNode;
        head.nextNode = newNode;
    }

    removeAt(index) {
        if (this.head === null) {
            throw new Error("List is empty");
        }
    
        if (index === 0) {
            //need to use this, because we do a reference to this list.
            //variable head below doesnt refer to this list directly,
            //and its purpose is to reference to current iterated node in a list
            //so to change head, we actually need to change property of list itself.
            this.head = this.head.nextNode;
            return;
        }
    
        let head = this.head;
        let counter = 0;
    
        while (head !== null && counter < index - 1) {
            head = head.nextNode;
            counter++;
        }
    
        if (head === null || head.nextNode === null) {
            throw new Error("Index out of bounds");
        }

        //removing node happens here. Im linking next node to next next one
        head.nextNode = head.nextNode.nextNode;
    }
}