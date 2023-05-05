// funcition / method overloding  same name with diff parameters or arguments
function doubleMe(x) {
    if (x && typeof x === 'number') {
        console.log(x * 2);
    }
    else if (x === 'string') {
        console.log(x + " " + x);
    }
    else if (Array.isArray(x)) {
        return x.map(function (name) { return console.log(name); });
    }
}
doubleMe(2); // 4
doubleMe('Nagesh'); // Nagesh Nagesh
doubleMe(["a"]); //
