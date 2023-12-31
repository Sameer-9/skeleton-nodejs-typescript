"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTP_STATUS = void 0;
var HTTP_STATUS;
(function (HTTP_STATUS) {
    HTTP_STATUS[HTTP_STATUS["OK"] = 200] = "OK";
    HTTP_STATUS[HTTP_STATUS["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HTTP_STATUS[HTTP_STATUS["NOT_FOUND"] = 404] = "NOT_FOUND";
    HTTP_STATUS[HTTP_STATUS["INTERNAL_SERVER"] = 500] = "INTERNAL_SERVER";
})(HTTP_STATUS || (exports.HTTP_STATUS = HTTP_STATUS = {}));
