import "../css-components/home.css";

export interface IHome {
  MainBody: HTMLElement;
  MainHome: HTMLDivElement;
  sayHye: () => void;
  selfPresentation: () => void;
  welcomeHome: () => void;
  renderHome: () => void;
}

export default class Home implements IHome {
  MainBody: HTMLElement;
  MainHome: HTMLDivElement;

  static instance: Home = new Home();

  private constructor() {
    this.MainBody = document.getElementById("main_app") as HTMLElement;
    this.MainHome = document.getElementById("taked_home") as HTMLDivElement;
  }

  sayHye() {
    const container = document.createElement("div") as HTMLDivElement;
    const row = document.createElement("div") as HTMLDivElement;
    const helloWrapper = document.createElement("div") as HTMLDivElement;

    container.className = "hye_container container-fluid";

    row.className = "hye_row row";

    helloWrapper.className = "hello_wrap d-flex w-100 p-2 gap-2";

    helloWrapper.innerHTML = `
    <h1 class="say_hello" >Front-End/ MERN App Developer</h1>
    </div>`;

    row.appendChild(helloWrapper);
    container.appendChild(row);

    this.MainHome.innerHTML = "";

    this.MainHome.appendChild(container);
  }

  selfPresentation() {
    const container = document.createElement("div") as HTMLDivElement;
    const row = document.createElement("div") as HTMLDivElement;
    const nameWrapper = document.createElement("div") as HTMLDivElement;

    container.className = "name_container container-fluid";

    row.className =
      "name_row row d-flex justify-content-center align-items-center  ";

    nameWrapper.className =
      "name_wrap   d-flex justify-content-center  align-items-center p-2";

    nameWrapper.innerHTML = `
    <div class="my_name py-2 px-3" >I AM NGOUEND GERARD </div>
    
    </div>`;

    row.appendChild(nameWrapper);
    container.appendChild(row);

    this.MainHome.appendChild(container);
  }

  welcomeHome() {
    const container = document.createElement("div") as HTMLDivElement;
    const row = document.createElement("div") as HTMLDivElement;

    container.className = "footer_container container-fluid";

    row.className = "footer_row w-100 h-100 p-2";

    row.innerHTML = `
    <div class="logo_skills_wrapper w-100 h-100 d-flex flex-column">
        <div class= "logo_skills_city">
            <div id="javascript_skill" class= "logo_skill javascript_skill" data-pos="1"></div>
            <div id="react_skill" class= "logo_skill react_skill" data-pos="1"></div>
            <div id="typescript_skill" class= "logo_skill typescript_skill" data-pos="1"></div>
            <div id="vuejs_skill" class= "logo_skill vuejs_skill" data-pos="2"></div>
            <div id="mongodb_skill" class= "logo_skill mongodb_skill" data-pos="2"></div>
            <div id="node_skill" class= "logo_skill node_skill" data-pos="2"></div>
        </div>
      </div>`;

    container.appendChild(row);

    this.MainHome.appendChild(container);
  }

  renderHome() {
    this.sayHye();
    this.selfPresentation();
    this.welcomeHome();
  }
}
