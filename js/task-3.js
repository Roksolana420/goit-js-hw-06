class StringBuilder {
    constructor(value ) {
        this._value  = value ;
    }
    getValue() {
        return this._value;
    } 
    padEnd(str) {
        this._value += str;
    }

    padStart(str) {
        this._value = str + this._value;
    }

    padBoth(str) {
        this._value = str + this._value + str;
    }
}






const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="