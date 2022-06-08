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
                // console.log("This is Prev")
                // console.log(prev)
                // console.log("This is oldTail")
                // console.log(oldTail)
            }
            //I need to make sure prev.next exists first before I assign to null
            //Or make sure prev is not null
            //So in the case of only having one.
            //I still want to remove from the tail, but I would simply say "this.head = null"
            //If Prev is truthy value, then reassign
            if(!this.head.next){ //
                this.head = null
            }
            if(prev){
                prev.next = null
            }

            //I need a conditional to see if the list only has one node.
            //I need to reassign that head pointer to null.
            this.length--
            return oldTail
        }


        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node
        if (!this.head) return;
        return this.head.value;
        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        if(!this.head){
            return;
        }
            let curr = this.head;
            while (curr) {
                console.log(curr.value)
                curr = curr.next;
            }
        }
        // Print out the linked list
        //Walk through the list
        //Print the value of each node as we walk through it, until we get to the end using the "tail" while loop.
        // Write your hypothesis on the time complexity of this method here

    
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
