import {sep} from './utils/utils';

// Simple Generic
//


function echo(data:any) {
    return data;
}

console.log(echo("RobK"));
console.log(echo(27));
console.log(echo({name: "Max", age: 27}));

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

sep();

// Built-In Generics
//

const testResults: Array<number> = [ 1.94, 2.33 ];
testResults.push(-1.99);
console.log(`Test results are...${testResults}`);


function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element));
}

printAll<string>(['Apple', 'Banana']);

const echo2: <T>(data: T) => T = betterEcho;

console.log(echo2<string>("Something"));

sep("Generic Classes");

// Generic Classes
//

class SimpleMath<T extends number | string, U extends number | string>
{
    baseValue: T;
    multiplyValue: U;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}
// casts vars within generic class to numbers with +
// sign in front of numbers within calculate function
//
const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = "15";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());

