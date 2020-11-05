class Stack { 

      // Array is used to implement stack 
    constructor() 
    { 
        this.items = [];
        this.count = 0; 
    }
  
    push(item) {
        this.items[this.count] = item;
        this.count += 1;
        return this.count - 1;
    }

    pop() {
        if (this.count == 0) return undefined;
        let deletedItem = this.items[this.count - 1];
        this.count -= 1;
        return deletedItem;
    }

    peek() {
        return this.items[this.count -1];
    }

    size() {
        return this.count;
    }  
    
}

module.exports.Stack = Stack;
