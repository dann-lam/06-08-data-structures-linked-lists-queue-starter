const { SinglyLinkedNode } = require("./01-singly-linked-list");
// class SinglyLinkedList {
//     constructor() {
//         this.head = null;
//         this.length = 0;
//     }
class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    enqueue(val) {
        const newNode = new SinglyLinkedNode(val);



        if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
          this.length++;
          return this.length;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this.length;
        // Add node to end of queue (linked list)

        // Write your hypothesis on the time complexity of this method here
    }

    dequeue() {
        if (!this.head) return null;

        const oldHead = this.head;
        this.head = oldHead.next;

        if (!this.head) this.tail = null;
        //If there is nothing there in oldHead.next
        //Then set this.tail to null

        this.length--;

        return oldHead.value;
        // Write your hypothesis on the time complexity of this method here
        //added comment so I could repush everything looool
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
