class Credentials{
  private token = undefined;
  private static _instance: Credentials;

  constructor(){}

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  public setToken(token){
    this.token = token;
  }

  public getToken(){
    return this.token;
  }
}

export const credentials = Credentials.Instance;