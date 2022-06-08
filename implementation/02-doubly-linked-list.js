// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}
// let kirby = new DoublyLinkedList
// kirby.addToHead(9)
// console.log(kirby)
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.tail = newNode;
            this.head = newNode;
        } else {
            newNode.next = this.head;

            this.head.prev = newNode;

            this.head = newNode
        }

        this.length++;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        // if (this.length >= 1) {
        //     this.tail.next = newNode;
        //     newNode.prev = this.tail;
        //     this.tail = newNode;
        //   } else {
        //     this.head = newNode;
        //     this.tail = newNode;
        //   }

          this.length += 1;
        }
        // Add node of val to tail of linked list

        // Write your hypothesis on the time complexity of this method here


    removeFromHead() {
        if(!this.head) return undefined
        const oldHead = this.head
        this.head = oldHead.next
        if(this.head){
        this.head.prev = null
        }
        this.length--
        return oldHead.value
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        if(!this.head) return undefined
        const oldTail = this.tail
        this.tail = oldTail.prev
        if(this.tail){
            this.tail.next = null
        }
        this.length--
        return oldTail.value
    }

    peekAtHead() {
        if(!this.head) return;
        return this.head.value;
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
       if(!this.head) return;
       return this.tail.value;
        // Write your hypothesis on the time complexity of this method here
    }
}


// kirby.addToHead('lol')
// console.log(kirby)

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
