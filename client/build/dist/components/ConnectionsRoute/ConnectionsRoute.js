var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
var ConnectionsRoute = /** @class */ (function (_super) {
    __extends(ConnectionsRoute, _super);
    function ConnectionsRoute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConnectionsRoute.prototype.render = function () {
        return (React.createElement("div", null, "Connections"));
    };
    return ConnectionsRoute;
}(React.PureComponent));
export default ConnectionsRoute;
//# sourceMappingURL=ConnectionsRoute.js.map