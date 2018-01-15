
const PI = 3.14;

const calcCirc = (diameter:number):number => (diameter * PI).toFixed(2);

const showCalcCirc = (diameter:number):void => {
    console.log(`calcCirc result: ${calcCirc(diameter)}`);
}


export { PI, calcCirc, showCalcCirc };
