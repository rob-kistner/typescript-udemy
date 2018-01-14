enum classnames {
    "Barbarian",
    "Crusader",
    "Demon Hunter",
    "Monk",
    "Necromancer",
    "Witch Doctor",
    "Wizard"
};

enum elements {
    "Physical",
    "Fire",
    "Cold",
    "Lightning",
    "Poison",
    "Holy"
}

class Toon
{
    private _name:string;
    private _gender:string;
    private _level:number;
    private _paragon:number;
    private specs:CharSpecs;
}

class CharSpecs
{
    private _stats:{
        strength:number,
        intelligence:number,
        dexterity:number,
        vitality:number
    };

    constructor() {}

    get strength(): number {
        return this._stats.strength;
    }
    set strength( amt: number) {
        this._stats.strength = amt;
    }
    get intelligence(): number {
        return this._stats.intelligence;
    }
    set intelligence( amt: number) {
        this._stats.intelligence = amt;
    }
    get dexterity(): number {
        return this._stats.dexterity;
    }
    set dexterity( amt: number) {
        this._stats.dexterity = amt;
    }
    get vitality(): number {
        return this._stats.vitality;
    }
    set vitality( amt: number) {
        this._stats.vitality = amt;
    }
}

class CharClass
{
   private _classname:string; 
}

class CharLevel
{

}



class Skill
{
    private _name: string;
    private _charClass: string;
    private _category: string;
    private _unlockedAt: number;
    private _element: string;
    private _cost: number;
    private _costPool: string;
    private _costCategory: string;
    private _costDesc: string;
    private _effectDesc: string;
    private _effectDuration: number;
    private _effectDamageCategory: string;

    constructor( skillname: string ) {
        this._name = skillname;
    }

    get name(): string {
        return this._name;
    }
    set name( name: string ) {
        this._name = name;
    }
    get charClass(): string {
        return this._charClass;
    }
    set charClass( classname: string ) {
        this._charClass = classname;
    }
    get category(): string {
        return this._category;
    }
    set category( category: string ) {
        this._category = category;
    }
    get unlockedAt(): number {
        return this._unlockedAt;
    }
    set unlockedAt( level: number ) {
        this._unlockedAt = level;
    }
    get cost(): number {
        return this._cost;
    }
    set cost( amt: number ) {
        this._cost = amt;
    }
    get costPool(): string {
        return this._costPool;
    }
    set costPool( pool: string ) {
        this._costPool = pool;
    }
    get costCategory(): string {
        return this._costCategory;
    }
    set costCategory( category: string ) {
        this._costCategory = category;
    }
    get costDesc(): string {
        return this._costDesc;
    }
    set costDesc( desc: string ) {
        this._costDesc = desc;
    }
    get effectDesc(): string {
        return this._effectDesc;
    }
    set effectDesc( desc: string ) {
        this._effectDesc = desc;
    }
    get effectDuration(): number {
        return this._effectDuration;
    }
    set effectDuration( amt: number ) {
        this._effectDuration = amt;
    }
    get effectDamageCategory(): string {
        return this._effectDamageCategory;
    }
    set effectDamageCategory( category: string ) {
        this._effectDamageCategory = category;
    }
}

let bash = new Skill("Bash");
bash.charClass = "Barbarian";
bash.unlockedAt = 1;
bash.cost = 6;
bash.category = "Primary";
bash.costPool = "Fury";
bash.costDesc = "Generate: 6 Fury per attack";
bash.effectDuration = 0;
bash.effectDesc = "Brutally smash an ememy for 320% weapon damage";
bash.effectDamageCategory = "weapon damage";
/*
    effects 320% weapon damage
*/
let cleave = new Skill("Cleave");
cleave.charClass = "Barbarian";
cleave.unlockedAt = 3;
cleave.cost = 6;
cleave.category = "Primary";
cleave.costPool = "Fury";
cleave.costDesc = "Generate: 6 Fury per attack";
cleave.effectDuration = 0;
cleave.effectDesc = "Swing your weapon in a wide arc to deal 200% weapon damage to all enemies caught in the swing";
cleave.effectDamageCategory = "weapon damage";
/*
    effects:
    200% weapon damage
*/
let frenzy = new Skill("Frenzy");
cleave.charClass = "Barbarian";
cleave.unlockedAt = 11;
cleave.cost = 4;
cleave.category = "Primary";
cleave.costPool = "Fury";
cleave.costDesc = "Generate: 4 Fury per attack";
cleave.effectDuration = 0;
cleave.effectDesc = "Swing for 220% weapon damage. Frenzy's attack speed increases by 15% for 4 seconds with each swing. This effect stacks up to 5 times.";
cleave.effectDamageCategory = "weapon damage";
/*
    effects:
    220% weapon damage, 0 seconds
    attack speed +15%, 4 seconds
    stack max 5 times
*/