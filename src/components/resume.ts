export interface IResume {
  MainBody: HTMLElement;
}

export default class Resume implements IResume {
  MainBody: HTMLElement;

  static instance: Resume = new Resume();

  private constructor() {
    this.MainBody = document.getElementById("main_app") as HTMLElement;
  }
}
