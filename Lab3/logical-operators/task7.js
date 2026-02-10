let age = prompt("Age?", 18);

if (!(age >= 14 && age <= 90)) {
    alert("Outside range");
}

if (age < 14 || age > 90) {
    alert("Outside range");
}
