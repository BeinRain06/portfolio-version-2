export interface ISkills {
  MainBody: HTMLElement;
}

export default class Skills implements ISkills {
  MainBody: HTMLElement;

  static instance: Skills = new Skills();

  private constructor() {
    this.MainBody = document.getElementById("main_app") as HTMLElement;
  }
}
