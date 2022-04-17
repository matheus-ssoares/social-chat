"use strict";
exports.__esModule = true;
exports.User = void 0;
var uuidv4_1 = require("uuidv4");
var User = /** @class */ (function () {
    function User(props, id) {
        Object.assign(this, props);
        if (!id) {
            this.id = (0, uuidv4_1.uuid)();
        }
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map