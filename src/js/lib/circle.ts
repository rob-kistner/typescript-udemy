
const PI = 3.14;

function calcCirc(diameter:number):number {
    return (diameter * PI).toFixed(2);
}
function showCalcCirc(diameter:number):void {
    console.log(`calcCirc result: ${calcCirc(diameter)}`);
}


export { calcCirc, showCalcCirc };