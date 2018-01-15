
function calcRect( w:number, l:number ):number {
    return w * l;
}


function showCalcRect( w:number, l:number ): void {
    console.log("calcRect result: " + calcRect(w, l));
}

export {calcRect, showCalcRect};