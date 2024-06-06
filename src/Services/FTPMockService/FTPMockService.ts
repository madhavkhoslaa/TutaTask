import { RegexService } from "../RegexService/RegexService";

export class FTPMockService {
  // Imagine this as an API Call to a server
  static isFolder(url: string): boolean {
    const ftpFolderRegex: string = "^ftp://([^s/]+/)+$"; // Matches FTP URLs ending with a slash (folder)
    return RegexService.validateOne(ftpFolderRegex, url);
  }
  static isFile(url: string): boolean {
    return !this.isFolder(url);
  }
}
