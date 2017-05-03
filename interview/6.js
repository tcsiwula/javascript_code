/*
 6. Given a list of dependencies, (a -> b is "a depends on b"
 which means "b needs to be installed before a") print out
 the optimal way to install things to satisfy all dependencies.
 */

let dependencyGraph = [
  {dependent: 'a', independent: 'b'},
  {dependent: 'a', independent: 'c'},
  {dependent: 'a', independent: 'd'},
  {dependent: 'b', independent: 'a'},
  {dependent: 'd', independent: 'c'},
];

let frequencyTable = [];

// init array to 0
for(var i =0; i < 255; i++) {
  frequencyTable[i] = 0;
}

// update frequency distribution
for(var i =0; i < dependencyGraph.length; i++)
{
  console.log(dependencyGraph[i].dependent + " depends on " + dependencyGraph[i].independent)
  frequencyTable[dependencyGraph[i].dependent.charCodeAt(0)]++;
  //console.log('after - ', parseInt(frequencyTable[dependencyGraph[i].dependent.charCodeAt(0)]));
}

// sort by most frequent
dependencyGraph.sort()
console.log('frequencyTable() -', frequencyTable.filter((x)=>{return x > 0}));






























