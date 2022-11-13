export class Rocket {
    name;
    totalCapacityKg;
    cargoItems;
    astronauts;
    constructor(name, totalCapacityKg) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = [];
        this.astronauts = [];
    }
    sumMass(items) {
        return items.map(item => item.massKg).reduce((a, b) => a + b);
    }
    currentMassKg() {
        return this.sumMass([...this.cargoItems, ...this.astronauts]);
    }
    canAdd(item) {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    }
    addCargo(cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }
    addAstronaut(astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }
}
//# sourceMappingURL=Rocket.js.map