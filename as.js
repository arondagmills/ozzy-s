function multipy (a,b){
    let c = a * b;
    return c;
}
console.log(multipy(4,5));

function add (a,b){
    var plus = multipy(a,b) + a - b;
    return plus;
}
console.log(add(4,5));

function division(a,b){
    var div = add(a,b) % a - b;
    return div;
}
console.log(division(50,20));
