// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        let newNode = new SinglyLinkedNode(val)
        if(!this.head){
            this.head = newNode
            this.length++
        } else {
            newNode.next = this.head
            this.head = newNode
            this.length++
        }
        return this

    //    0(1) because adding to head only looks at the first node in the list, thus constant.
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);
        this.length++
        if (!this.head) {
            this.head = newNode;

            return this
        } else {

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
        return this
        }
        //Time complexity should be o(n), because lines 44-47 traverse the entire list, making it linear time.
    }

    removeFromHead() {
        if(this.head === null){
         return undefined
        } else {
            let oldHead = this.head
            this.head = oldHead.next
            this.length--
            return oldHead
        }

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        if(this.head === null){
            
            return undefined
           } else {
            let prev;
            let oldTail = this.head;
            while (oldTail.next){
             prev = oldTail
                oldTail = oldTail.next
                console.log(prev)
                console.log(oldTail)
            }
            prev.next = null
            this.length--
            return oldTail
        }
        
        
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
