class Storage {
    constructor(items) {
    this._items = items;
    }
    
    getItems() {
        return this._items;
    }
    
    addItem(item) {
    this._items.push(item);
    }
    
    removeItem(item) {
    const index = this._items.indexOf(item);
    if (index !== -1) {
        this._items.splice(index, 1);
    }
    }
        }


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]