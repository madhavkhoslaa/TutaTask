"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FTPMockService = void 0;
const RegexService_1 = require("../RegexService/RegexService");
class FTPMockService {
    // Imagine this as an API Call to a server
    static isFolder(url) {
        const ftpFolderRegex = "^ftp://([^s/]+/)+$"; // Matches FTP URLs ending with a slash (folder)
        return RegexService_1.RegexService.validateOne(ftpFolderRegex, url);
    }
    static isFile(url) {
        return !this.isFolder(url);
    }
}
exports.FTPMockService = FTPMockService;
