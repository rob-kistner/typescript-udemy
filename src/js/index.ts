// Simple Generic
//

/*
function echo(data:any) {
    return data;
}

console.log(echo("RobK"));
console.log(echo(27));
console.log(echo({name: "Max", age: 27}));
*/

// Better Generic
//
// The "<T>" construct enforces the data type to the function
//
function betterEcho<T>(data: T) {
    return data;
}

console.log(betterEcho("RobK").length);
console.log(betterEcho<number>(27));
console.log(betterEcho({ name: "Max", age: 27 }));


// Built-In Generics
//

const testResults: Array<number> = [ 1.94, 2.33 ];
testResults.push(-1.99);
console.log(testResults);

