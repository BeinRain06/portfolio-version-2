export interface IHome {
  MainBody: HTMLElement;
}

export default class Home implements IHome {
  MainBody: HTMLElement;

  static instance: Home = new Home();

  private constructor() {
    this.MainBody = document.getElementById("main_app") as HTMLElement;
  }
}
