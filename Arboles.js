class Checklist {
    constructor(groups = []) {
        this.groups = groups;
    }

    addGroup(group) {
        this.groups.push(group);
    }
}

class SubGroup {
    constructor(title, subGroups = [], checks = []) {
        this.title = title;
        this.subGroups = subGroups;
        this.checks = checks;
    }

    addSubGroup(subGroup) {
        this.subGroups.push(subGroup);
    }
}

class Group {
    constructor (title, subGroups = [], checks = []) {
        this.title = title;
        this.subGroups = subGroups;
        this.checks = checks;
    }

    addGroup(group) {
        this.subGroups.push(group);
    }
}

class Check {
    constructor(name, value = 0) {
        this.name = name;
        this.value = value;
    }

    addCheck(check) {
        this.checks.push(check);
    }
}
let array = [];

let groups = [];

let checkListComidas = new Checklist(new Group('Comidas', [new SubGroup('Mexicanas', [],[new Check('Sopes'), new Check('Mole')])]));
let checkListDulces = new Checklist(new Group('Dulces', [new SubGroup('Argentinos', [], [new Check('Agridulces'), new Check('Salados')])]));
let checkListBebidas = new Checklist(new Group('Bebidas', [new SubGroup('Naturales', [], [new Check('Frutas'), new Check('Coco')])]));
let checkListRopa = new Checklist(new Group('Ropa', [new SubGroup('Caballero', [], [new Check('Sueter'), new Check('Camisa')])]));
let arrays = [...array, checkListComidas, checkListDulces, checkListBebidas, checkListRopa];

arrays.map(element => {
    console.log("Nombre del grupo:", element.groups.title);
    console.log(element.groups);
    element.groups.subGroups.map(subGroup => {
        console.log(subGroup);
    });
    console.log("***************************");
});

array.filter(function(){
    return true;
});