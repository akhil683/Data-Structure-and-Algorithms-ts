// three ways to build a graph

// 1. Edge List
const graph1 = [
  [0, 2], // connections - 0 is connected to 2 and vice-versa
  [2, 3],
  [2, 1],
  [1, 3],
];

//2. Adjacent List
//Index is node and value is node's neighbour
//The index of array is the value of the actual graph node
const graph2 = [[2], [2, 3], [0, 1, 3], [1, 2]];
const graph2obj = {
  0: [2],
  1: [2, 3],
  2: [0, 1, 3],
  3: [1, 2],
};

//3. Adjacent Matrix
//Matrix have 0 and 1, indicating whether x has connection to y.
//0 = no, 1= yes
const graph3 = [
  [0, 0, 1, 0], // in this array 2nd index is 1 => 2 is connected to 0 (index)
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
];
const graph3obj = {
  0: [0, 0, 1, 0], // in this array 2nd index is 1 => 2 is connected to 0 (index)
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0],
};
