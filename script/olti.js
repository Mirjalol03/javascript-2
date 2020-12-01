alert("x , y (x va y teng emas) butun sоn bеrilgan. Ularning kichigini ularning yarim yig’indisi bilan, kattasini ularning ikkilangan ko`paytmasi bilan almashtiring")

let x = window.prompt("1-sonni kiriting");
let y = window.prompt("2-sonni kiriting");
x = parseInt(x);
y = parseInt(y);

if (x > y) {
    y = (x + y) / 2;
    console.log(y);
    x = (x * y) * 2;
    console.log(x);
    document.write(`${x} ${y}`);
}
else {
    x = (x + y) /2;
    console.log(x);
    y = (x * y) * 2;
    console.log(y);
    document.write(`${x} ${y}`)
}