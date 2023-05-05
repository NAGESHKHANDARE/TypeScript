var sn;
sn = "nagesh";
sn = 100;
function formatcommandLine(input) {
    var line = '';
    if (typeof input === "string") {
        line = input.trim();
    }
    else {
        line = input.map(function (x) { return x.trim(); }).join(' ');
    }
    return line;
}
console.log(formatcommandLine('hello  ')); //hello
console.log(formatcommandLine(['hello  ', 'world  '])); // hello world
//console.log(formatcommandLine(1234567));
