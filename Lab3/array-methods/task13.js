function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {});
}

let users = [
    {id: 'john', name: "John", age: 20},
    {id: 'ann', name: "Ann", age: 24},
    {id: 'pete', name: "Pete", age: 31},
];

let usersById = groupById(users);
alert(usersById.john.name);
