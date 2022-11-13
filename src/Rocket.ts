import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";
import { Payload } from "./Payload";
export class Rocket {
    private cargoItems: Cargo[];
    private astronauts: Astronaut[];
    constructor(public name: string, public totalCapacityKg: number) {
        this.cargoItems = [];
        this.astronauts = [];
    }
    sumMass(items: Payload[]): number {
        return items.map(item => item.massKg).reduce((a, b) => a + b,0);
    }
    currentMassKg(): number {
        return this.sumMass([...this.cargoItems, ...this.astronauts])
    }
    canAdd(item: Payload): boolean {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    }
    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }
}