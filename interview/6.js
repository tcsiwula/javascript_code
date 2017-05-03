
let dependencyGraph = [
  {dependent: 'a', independent: 'b'},
  {dependent: 'a', independent: 'c'},
  {dependent: 'a', independent: 'd'},
  {dependent: 'b', independent: 'a'},
  {dependent: 'd', independent: 'c'},
];

let frequencyTable = [];

for(var i =0; i < 255; i++) {
  frequencyTable[i] = 0;
}

for(var i =0; i < dependencyGraph.length; i++)
{
  console.log(dependencyGraph[i].dependent + " depends on " + dependencyGraph[i].independent)
  //console.log('typeof - ', typeof dependencyGraph[i].dependent.charCodeAt(0));
  frequencyTable[dependencyGraph[i].dependent.charCodeAt(0)]++;
  //console.log('after - ', parseInt(frequencyTable[dependencyGraph[i].dependent.charCodeAt(0)]));
}
console.log('install -', frequencyTable);
dependencyGraph.sort()
console.log('install -', frequencyTable);












