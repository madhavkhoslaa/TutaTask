export class CacheService {
  private cache: Map<string, any>;
  private static instance: CacheService;
  private constructor() {
    this.cache = new Map<string, string[]>();
  }
  public static getInstance(): CacheService {
    if (!CacheService.instance) {
      CacheService.instance = new CacheService();
    }
    return CacheService.instance;
  }
  public set(key: string, value: string[]): void {
    this.cache.set(key, value);
  }

  public containsKey(key: string): boolean {
    return this.cache.has(key);
  }

  public get(key: string): string[] {
    return this.cache.get(key);
  }
}
