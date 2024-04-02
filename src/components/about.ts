export interface IAbout {
  MainBody: HTMLElement;
}

export default class About implements IAbout {
  MainBody: HTMLElement;

  static instance: About = new About();

  private constructor() {
    this.MainBody = document.getElementById("main_app") as HTMLElement;
  }
}
