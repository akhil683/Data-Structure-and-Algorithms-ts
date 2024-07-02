let user = {
  age: 54,
  name: 'akhili',
  magic: true,
  scream: function () {
    console.log("hello")
  }
}
user.age; //0(1)
user.spell = "world" //0(1)
user.scream(); //0(1)


//CREATE HASH TABLE (NO OBJECT)
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) { //0(1)
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)*i) % this.data.length;
  }
  return hash;
  }
  set(key, value) { //0(1)
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
      this.data[address].push([key, value]);
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  get(key) { //0(1)
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket.length) {
      for (let i = 0; i < currentBucket.length; i++) {
        if(currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
  keys () {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 342);
myHashTable.set("oranges", 366);
myHashTable.keys();