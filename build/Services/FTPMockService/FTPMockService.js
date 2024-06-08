"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FTPMockService = void 0;
var RegexService_1 = require("../RegexService/RegexService");
var FTPMockService = /** @class */ (function () {
    function FTPMockService() {
    }
    // Imagine this as an API Call to a server
    FTPMockService.isFolder = function (url) {
        var ftpFolderRegex = "^ftp://([^s/]+/)+$"; // Matches FTP URLs ending with a slash (folder)
        return RegexService_1.RegexService.validateOne(ftpFolderRegex, url);
    };
    FTPMockService.isFile = function (url) {
        return !this.isFolder(url);
    };
    return FTPMockService;
}());
exports.FTPMockService = FTPMockService;
