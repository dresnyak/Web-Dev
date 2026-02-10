let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMap = new WeakMap();

readMap.set(messages[0], new Date(2017, 1, 1));
readMap.set(messages[1], new Date(2017, 1, 5));

alert("Read date of message 0: " + readMap.get(messages[0]));
