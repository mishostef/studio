/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Astronaut.ts":
/*!**************************!*\
  !*** ./src/Astronaut.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Astronaut": () => (/* binding */ Astronaut)
/* harmony export */ });
class Astronaut {
    massKg;
    name;
    constructor(massKg, name) {
        this.massKg = massKg;
        this.name = name;
    }
}


/***/ }),

/***/ "./src/Cargo.ts":
/*!**********************!*\
  !*** ./src/Cargo.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cargo": () => (/* binding */ Cargo)
/* harmony export */ });
class Cargo {
    massKg;
    material;
    constructor(massKg, material) {
        this.massKg = massKg;
        this.material = material;
    }
}


/***/ }),

/***/ "./src/Rocket.ts":
/*!***********************!*\
  !*** ./src/Rocket.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rocket": () => (/* binding */ Rocket)
/* harmony export */ });
class Rocket {
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
        return items.map(item => item.massKg).reduce((a, b) => a + b, 0);
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Astronaut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Astronaut */ "./src/Astronaut.ts");
/* harmony import */ var _Cargo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cargo */ "./src/Cargo.ts");
/* harmony import */ var _Rocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Rocket */ "./src/Rocket.ts");
// TODO: 
// * Code the Astronaut, Cargo, and Rocket classes in new files.
// * Import the three classes into this file.



let falcon9 = new _Rocket__WEBPACK_IMPORTED_MODULE_2__.Rocket('Falcon 9', 7500);
let astronauts = [
    new _Astronaut__WEBPACK_IMPORTED_MODULE_0__.Astronaut(75, 'Mae'),
    new _Astronaut__WEBPACK_IMPORTED_MODULE_0__.Astronaut(81, 'Sally'),
    new _Astronaut__WEBPACK_IMPORTED_MODULE_0__.Astronaut(99, 'Charles')
];
for (let i = 0; i < astronauts.length; i++) {
    let astronaut = astronauts[i];
    let status = '';
    if (falcon9.addAstronaut(astronaut)) {
        status = "On board";
    }
    else {
        status = "Not on board";
    }
    console.log(`${astronaut.name}: ${status}`);
}
let cargo = [
    new _Cargo__WEBPACK_IMPORTED_MODULE_1__.Cargo(3107.39, "Satellite"),
    new _Cargo__WEBPACK_IMPORTED_MODULE_1__.Cargo(1000.39, "Space Probe"),
    new _Cargo__WEBPACK_IMPORTED_MODULE_1__.Cargo(753, "Water"),
    new _Cargo__WEBPACK_IMPORTED_MODULE_1__.Cargo(541, "Food"),
    new _Cargo__WEBPACK_IMPORTED_MODULE_1__.Cargo(2107.39, "Tesla Roadster"),
];
for (let i = 0; i < cargo.length; i++) {
    let c = cargo[i];
    let loaded = '';
    if (falcon9.addCargo(c)) {
        loaded = "Loaded";
    }
    else {
        loaded = "Not loaded";
    }
    console.log(`${c.material}: ${loaded}`);
}
console.log(`Final cargo and astronaut mass: ${falcon9.currentMassKg()} kg.`);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEtBQUssTUFBTSxFQUFFLENBQUMsQ0FBQztDQUMzQztBQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLE9BQU8sQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL0FzdHJvbmF1dC50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL0NhcmdvLnRzIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvUm9ja2V0LnRzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBheWxvYWQgfSBmcm9tIFwiLi9QYXlsb2FkXCI7XG5leHBvcnQgY2xhc3MgQXN0cm9uYXV0IGltcGxlbWVudHMgUGF5bG9hZCB7XG4gICAgY29uc3RydWN0b3IocHVibGljIG1hc3NLZzogbnVtYmVyLCBwdWJsaWMgbmFtZTogc3RyaW5nKSB7IH1cbn0iLCJpbXBvcnQgeyBQYXlsb2FkIH0gZnJvbSBcIi4vUGF5bG9hZFwiO1xuZXhwb3J0IGNsYXNzIENhcmdvIGltcGxlbWVudHMgUGF5bG9hZCB7XG4gICAgY29uc3RydWN0b3IocHVibGljIG1hc3NLZzogbnVtYmVyLCBwdWJsaWMgbWF0ZXJpYWw6IHN0cmluZykgeyB9XG59XG4iLCJpbXBvcnQgeyBDYXJnbyB9IGZyb20gXCIuL0NhcmdvXCI7XG5pbXBvcnQgeyBBc3Ryb25hdXQgfSBmcm9tIFwiLi9Bc3Ryb25hdXRcIjtcbmltcG9ydCB7IFBheWxvYWQgfSBmcm9tIFwiLi9QYXlsb2FkXCI7XG5leHBvcnQgY2xhc3MgUm9ja2V0IHtcbiAgICBwcml2YXRlIGNhcmdvSXRlbXM6IENhcmdvW107XG4gICAgcHJpdmF0ZSBhc3Ryb25hdXRzOiBBc3Ryb25hdXRbXTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgdG90YWxDYXBhY2l0eUtnOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5jYXJnb0l0ZW1zID0gW107XG4gICAgICAgIHRoaXMuYXN0cm9uYXV0cyA9IFtdO1xuICAgIH1cbiAgICBzdW1NYXNzKGl0ZW1zOiBQYXlsb2FkW10pOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gaXRlbXMubWFwKGl0ZW0gPT4gaXRlbS5tYXNzS2cpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsMCk7XG4gICAgfVxuICAgIGN1cnJlbnRNYXNzS2coKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VtTWFzcyhbLi4udGhpcy5jYXJnb0l0ZW1zLCAuLi50aGlzLmFzdHJvbmF1dHNdKVxuICAgIH1cbiAgICBjYW5BZGQoaXRlbTogUGF5bG9hZCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzc0tnKCkgKyBpdGVtLm1hc3NLZyA8PSB0aGlzLnRvdGFsQ2FwYWNpdHlLZztcbiAgICB9XG4gICAgYWRkQ2FyZ28oY2FyZ286IENhcmdvKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmNhbkFkZChjYXJnbykpIHtcbiAgICAgICAgICAgIHRoaXMuY2FyZ29JdGVtcy5wdXNoKGNhcmdvKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBhZGRBc3Ryb25hdXQoYXN0cm9uYXV0OiBBc3Ryb25hdXQpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuY2FuQWRkKGFzdHJvbmF1dCkpIHtcbiAgICAgICAgICAgIHRoaXMuYXN0cm9uYXV0cy5wdXNoKGFzdHJvbmF1dCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gVE9ETzogXG4vLyAqIENvZGUgdGhlIEFzdHJvbmF1dCwgQ2FyZ28sIGFuZCBSb2NrZXQgY2xhc3NlcyBpbiBuZXcgZmlsZXMuXG4vLyAqIEltcG9ydCB0aGUgdGhyZWUgY2xhc3NlcyBpbnRvIHRoaXMgZmlsZS5cbmltcG9ydCB7IEFzdHJvbmF1dCB9IGZyb20gJy4vQXN0cm9uYXV0JztcbmltcG9ydCB7IENhcmdvIH0gZnJvbSAnLi9DYXJnbyc7XG5pbXBvcnQgeyBSb2NrZXQgfSBmcm9tICcuL1JvY2tldCc7XG5cbmxldCBmYWxjb245OiBSb2NrZXQgPSBuZXcgUm9ja2V0KCdGYWxjb24gOScsIDc1MDApO1xuXG5sZXQgYXN0cm9uYXV0czogQXN0cm9uYXV0W10gPSBbXG4gICAgbmV3IEFzdHJvbmF1dCg3NSwgJ01hZScpLFxuICAgIG5ldyBBc3Ryb25hdXQoODEsICdTYWxseScpLFxuICAgIG5ldyBBc3Ryb25hdXQoOTksICdDaGFybGVzJylcbl07XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgYXN0cm9uYXV0cy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBhc3Ryb25hdXQgPSBhc3Ryb25hdXRzW2ldO1xuICAgIGxldCBzdGF0dXMgPSAnJztcbiAgICBpZiAoZmFsY29uOS5hZGRBc3Ryb25hdXQoYXN0cm9uYXV0KSkge1xuICAgICAgICBzdGF0dXMgPSBcIk9uIGJvYXJkXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdHVzID0gXCJOb3Qgb24gYm9hcmRcIjtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYCR7YXN0cm9uYXV0Lm5hbWV9OiAke3N0YXR1c31gKTtcbn1cblxubGV0IGNhcmdvOiBDYXJnb1tdID0gW1xuICAgIG5ldyBDYXJnbygzMTA3LjM5LCBcIlNhdGVsbGl0ZVwiKSxcbiAgICBuZXcgQ2FyZ28oMTAwMC4zOSwgXCJTcGFjZSBQcm9iZVwiKSxcbiAgICBuZXcgQ2FyZ28oNzUzLCBcIldhdGVyXCIpLFxuICAgIG5ldyBDYXJnbyg1NDEsIFwiRm9vZFwiKSxcbiAgICBuZXcgQ2FyZ28oMjEwNy4zOSwgXCJUZXNsYSBSb2Fkc3RlclwiKSxcbl07XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgY2FyZ28ubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgYyA9IGNhcmdvW2ldO1xuICAgIGxldCBsb2FkZWQgPSAnJztcbiAgICBpZiAoZmFsY29uOS5hZGRDYXJnbyhjKSkge1xuICAgICAgICBsb2FkZWQgPSBcIkxvYWRlZFwiXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbG9hZGVkID0gXCJOb3QgbG9hZGVkXCJcbiAgICB9XG4gICAgY29uc29sZS5sb2coYCR7Yy5tYXRlcmlhbH06ICR7bG9hZGVkfWApO1xufVxuXG5jb25zb2xlLmxvZyhgRmluYWwgY2FyZ28gYW5kIGFzdHJvbmF1dCBtYXNzOiAke2ZhbGNvbjkuY3VycmVudE1hc3NLZygpfSBrZy5gKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=