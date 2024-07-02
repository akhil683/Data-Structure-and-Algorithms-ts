const strings = [ 'a,', 'b', 'c', 'd', 'e', 'f']; // 4*4=16 byte of storage 
strings[2];

//PUSH: add last item to the array
strings.push('g'); // 0(1)
console.log(strings);

//POP: remove last item of the array
strings.pop(); 
strings.pop(); // 0(1)
console.log(strings); // ['a', 'b', 'c', 'd', 'e']

// unshift: Add item in start of the array
strings.unshift('x'); // 0(n) : we are looping through the item, because we are realigning the indexes of items.
console.log(strings); // ['x', 'a', 'b', 'c', 'd', 'e']

//SPICE: add item in middle of the array
strings.splice(2,  0, 'alien'); // 0(n) : worst case
console.log(strings); // ['x', 'a', 'alien', 'b', 'c', 'd', 'e'] 


//STATIC vs DYNAMIC arrays
