
export function sep(title:string = "", fillchar:string = "- ", fillamt:number = 25):void {
    let s:string = "\n";
    s += Array(3).join(fillchar);
    s += title + " ";
    s += Array(fillamt).join(fillchar);
    s += "\n\n";
    console.log(s);
}
