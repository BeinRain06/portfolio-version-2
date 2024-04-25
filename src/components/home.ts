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
    <div class="suit_bar">
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
    <span class="my_name py-2 px-3" >I AM NGOUEND GERARD </span>
    
    </div>`;

    row.appendChild(nameWrapper);
    container.appendChild(row);

    this.MainHome.appendChild(container);
  }

  welcomeHome() {
    const container = document.createElement("div") as HTMLDivElement;
    const row = document.createElement("div") as HTMLDivElement;

    container.className =
      "footer_container container-fluid d-flex  justify-content-center align-items-center";

    row.className = "footer_row  d-flex justify-content-end p-2";

    row.innerHTML = `
    <div class="glad_see_you d-flex flex-column justify-content-end w-100 h-100">
      <div class="logo_skills_wrapper w-100 h-100 d-flex justify-content-end">
        <div class= "logo_skills_city">
            <div id="react_skill" class= "logo_skill react_skill"></div>
            <div id="typescript_skill" class= "logo_skill typescript_skill"></div>
            <div id="mongodb_skill" class= "logo_skill mongodb_skill"></div>
            <div id="javascript_skill" class= "logo_skill javascript_skill"></div>
            <div id="node_skill" class= "logo_skill node_skill"></div>
        </div>
      </div>
      <span class="welcome_home" ><i>Welcome home__</i></span>
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
