class StringBuilder {
    #value;
    constructor({value} ) {
        this.#value  = value ;
    }
    getValue() {
        return this.#value;
    } 
    padEnd(str) {
        this.#value += str;
    }

    padStart(str) {
        this.#value = str + this.#value;
    }

    padBoth(str) {
        this.#value = str + this.#value + str;
    }
}

const q = document.querySelector("input")
console.log(q)
q.addEventListener("input", function(e) {
    console.log(e.target.value)
})




const builder = new StringBuilder({value : "."});
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="