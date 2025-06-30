export class AppConfig {
  private static _instance: AppConfig | null = null;

  static get instance(): AppConfig {
    if (!this._instance) this._instance = new AppConfig();
    return this._instance;
  }

  tax: number = 0.08;
  shopName: string = "Cofee Lake";

  private constructor() {}
}
