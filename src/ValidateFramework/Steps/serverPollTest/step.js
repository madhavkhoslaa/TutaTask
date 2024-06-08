"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerPollTest = void 0;
const enum_1 = require("../../../Errors/enum");
const base_1 = require("../../Step/base");
const FTPMockService_1 = require("../../../Services/FTPMockService/FTPMockService");
class ServerPollTest extends base_1.AbstractStep {
    constructor(nextStep, isLast) {
        super(nextStep);
        this.nextStep = nextStep;
        this.isLast = isLast;
    }
    next(data, chainResult) {
        try {
            const isFolder = FTPMockService_1.FTPMockService.isFolder(data);
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
    }
}
exports.ServerPollTest = ServerPollTest;
