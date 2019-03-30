var arrayObjects = [
    {
        name: 'HTML',
        state: true
    },
    {
        name: 'CSS',
        state: true
    },
    {
        name: 'JS',
        state: false
    }
];

console.log(arrayObjects);
console.log(arrayObjects[0]);
console.log(arrayObjects[0].name);
console.log(arrayObjects[0].state);

for (const iterator of arrayObjects) {
    console.log(iterator);
    console.log(iterator.name);
    console.log(iterator.state);
}