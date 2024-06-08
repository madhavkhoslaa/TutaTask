"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerPollTest = void 0;
var enum_1 = require("../../../Errors/enum");
var base_1 = require("../../Step/base");
var FTPMockService_1 = require("../../../Services/FTPMockService/FTPMockService");
var ServerPollTest = /** @class */ (function (_super) {
    __extends(ServerPollTest, _super);
    function ServerPollTest(nextStep, isLast) {
        var _this = _super.call(this, nextStep) || this;
        _this.nextStep = nextStep;
        _this.isLast = isLast;
        return _this;
    }
    ServerPollTest.prototype.next = function (data, chainResult) {
        try {
            var isFolder = FTPMockService_1.FTPMockService.isFolder(data);
            if (isFolder) {
                chainResult.push(enum_1.Results.SFTP_FOLDER.toString());
            }
            else {
                chainResult.push(enum_1.Results.SFTP_FILE.toString());
            }
            if (this.isLast) {
                return chainResult;
            }
            return this.nextStep.next(data, chainResult);
        }
        catch (e) {
            chainResult.push(enum_1.Results.VALIDATION_STEP_ERROR.toString());
            return chainResult;
        }
    };
    return ServerPollTest;
}(base_1.AbstractStep));
exports.ServerPollTest = ServerPollTest;
