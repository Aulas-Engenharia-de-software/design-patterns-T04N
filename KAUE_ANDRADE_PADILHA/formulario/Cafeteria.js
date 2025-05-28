var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Componentes concretos
var CafeExpresso = /** @class */ (function () {
    function CafeExpresso() {
    }
    CafeExpresso.prototype.custo = function () {
        return 5;
    };
    CafeExpresso.prototype.descricao = function () {
        return "Café Expresso";
    };
    return CafeExpresso;
}());
var CafeComLeite = /** @class */ (function () {
    function CafeComLeite() {
    }
    CafeComLeite.prototype.custo = function () {
        return 6;
    };
    CafeComLeite.prototype.descricao = function () {
        return "Café com Leite";
    };
    return CafeComLeite;
}());
// Decorator base
var CafeDecorator = /** @class */ (function () {
    function CafeDecorator(cafe) {
        this.cafe = cafe;
    }
    return CafeDecorator;
}());
// Complementos
var Chantilly = /** @class */ (function (_super) {
    __extends(Chantilly, _super);
    function Chantilly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chantilly.prototype.custo = function () {
        return this.cafe.custo() + 2;
    };
    Chantilly.prototype.descricao = function () {
        return this.cafe.descricao() + " + Chantilly";
    };
    return Chantilly;
}(CafeDecorator));
var Chocolate = /** @class */ (function (_super) {
    __extends(Chocolate, _super);
    function Chocolate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chocolate.prototype.custo = function () {
        return this.cafe.custo() + 3;
    };
    Chocolate.prototype.descricao = function () {
        return this.cafe.descricao() + " + Chocolate";
    };
    return Chocolate;
}(CafeDecorator));
// Uso
var pedido = new Chantilly(new Chocolate(new CafeExpresso()));
var pedido2 = new Chocolate(new Chantilly(new CafeComLeite()));
console.log(pedido.descricao()); // Café Expresso + Chocolate + Chantilly
console.log(pedido2.descricao()); // Café com Leite + Chantilly + Chocolate
console.log(pedido.custo()); // 10
console.log(pedido2.custo()); // 11
