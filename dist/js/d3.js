"use strict";
var classnames;
(function (classnames) {
    classnames[classnames["Barbarian"] = 0] = "Barbarian";
    classnames[classnames["Crusader"] = 1] = "Crusader";
    classnames[classnames["Demon Hunter"] = 2] = "Demon Hunter";
    classnames[classnames["Monk"] = 3] = "Monk";
    classnames[classnames["Necromancer"] = 4] = "Necromancer";
    classnames[classnames["Witch Doctor"] = 5] = "Witch Doctor";
    classnames[classnames["Wizard"] = 6] = "Wizard";
})(classnames || (classnames = {}));
;
var elements;
(function (elements) {
    elements[elements["Physical"] = 0] = "Physical";
    elements[elements["Fire"] = 1] = "Fire";
    elements[elements["Cold"] = 2] = "Cold";
    elements[elements["Lightning"] = 3] = "Lightning";
    elements[elements["Poison"] = 4] = "Poison";
    elements[elements["Holy"] = 5] = "Holy";
})(elements || (elements = {}));
var Toon = /** @class */ (function () {
    function Toon() {
    }
    return Toon;
}());
var CharSpecs = /** @class */ (function () {
    function CharSpecs() {
    }
    Object.defineProperty(CharSpecs.prototype, "strength", {
        get: function () {
            return this._stats.strength;
        },
        set: function (amt) {
            this._stats.strength = amt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CharSpecs.prototype, "intelligence", {
        get: function () {
            return this._stats.intelligence;
        },
        set: function (amt) {
            this._stats.intelligence = amt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CharSpecs.prototype, "dexterity", {
        get: function () {
            return this._stats.dexterity;
        },
        set: function (amt) {
            this._stats.dexterity = amt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CharSpecs.prototype, "vitality", {
        get: function () {
            return this._stats.vitality;
        },
        set: function (amt) {
            this._stats.vitality = amt;
        },
        enumerable: true,
        configurable: true
    });
    return CharSpecs;
}());
var CharClass = /** @class */ (function () {
    function CharClass() {
    }
    return CharClass;
}());
var CharLevel = /** @class */ (function () {
    function CharLevel() {
    }
    return CharLevel;
}());
var Skill = /** @class */ (function () {
    function Skill(skillname) {
        this._name = skillname;
    }
    Object.defineProperty(Skill.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Skill.prototype, "charClass", {
        get: function () {
            return this._charClass;
        },
        set: function (classname) {
            this._charClass = classname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Skill.prototype, "category", {
        get: function () {
            return this._category;
        },
        set: function (category) {
            this._category = category;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Skill.prototype, "unlockedAt", {
        get: function () {
            return this._unlockedAt;
        },
        set: function (level) {
            this._unlockedAt = level;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Skill.prototype, "cost", {
        get: function () {
            return this._cost;
        },
        set: function (amt) {
            this._cost = amt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Skill.prototype, "costPool", {
        get: function () {
            return this._costPool;
        },
        set: function (pool) {
            this._costPool = pool;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Skill.prototype, "costCategory", {
        get: function () {
            return this._costCategory;
        },
        set: function (category) {
            this._costCategory = category;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Skill.prototype, "costDesc", {
        get: function () {
            return this._costDesc;
        },
        set: function (desc) {
            this._costDesc = desc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Skill.prototype, "effectDesc", {
        get: function () {
            return this._effectDesc;
        },
        set: function (desc) {
            this._effectDesc = desc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Skill.prototype, "effectDuration", {
        get: function () {
            return this._effectDuration;
        },
        set: function (amt) {
            this._effectDuration = amt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Skill.prototype, "effectDamageCategory", {
        get: function () {
            return this._effectDamageCategory;
        },
        set: function (category) {
            this._effectDamageCategory = category;
        },
        enumerable: true,
        configurable: true
    });
    return Skill;
}());
var bash = new Skill("Bash");
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
var cleave = new Skill("Cleave");
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
var frenzy = new Skill("Frenzy");
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
//# sourceMappingURL=d3.js.map