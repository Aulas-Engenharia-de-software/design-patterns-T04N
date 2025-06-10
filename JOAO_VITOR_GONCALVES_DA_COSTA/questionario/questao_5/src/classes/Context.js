"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Context {
    constructor() {
        this._strategy = null;
    }
    set strategy(strategy) {
        this._strategy = strategy;
    }
    execute(value) {
        var _a;
        return (_a = this._strategy) === null || _a === void 0 ? void 0 : _a.calcular(value);
    }
}
exports.default = Context;
