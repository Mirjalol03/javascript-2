let a = window.prompt("1-sonni kiriting");
let b = window.prompt("2-sonni kiriting");
let c = window.prompt("3-sonni kiriting");

if ( 0 < a && 0 < b && 0 < c) {
    a = a * a;
    b = b * b;
    c = c * c;
    document.write(`${a} ${b} ${c}`);
}
else if (0 < a && 0 < b) {
    a = a * a;
    b = b * b;
    document.write(`${a} ${b} ${c}`);
}
else if (0 < a) {
    a = a * a;
    document.write(`${a} ${b} ${c}`);
}
else if (0 < b) {
    b = b * b;
    document.write(`${a} ${b} ${c}`);
}
else if (0 < b && 0 < c) {
    b = b * b;
    c = c * c;
    document.write(`${a} ${b} ${c}`);
}
else if (0 < a && 0 < c) {
    a = a * a;
    c = c * c;
    document.write(`${a} ${b} ${c}`);
}
else if (0 < c) {
    c = c * c;
    document.write(`${a} ${b} ${c}`);
}
else {
    document.write(`${a} ${b} ${c}`);
}