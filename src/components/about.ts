import "../css-components/about.css";
export interface IAbout {
  MainBody: HTMLElement;
  MainAbout: HTMLDivElement;
  IdAgent: () => void;
  detailsInterest: () => void;
  renderAbout: () => void;
}

export default class About implements IAbout {
  MainBody: HTMLElement;
  MainAbout: HTMLDivElement;

  static instance: About = new About();

  private constructor() {
    this.MainBody = document.getElementById("main_app") as HTMLElement;
    this.MainAbout = document.getElementById("know_about_me") as HTMLDivElement;
  }

  IdAgent() {
    const container = document.createElement("div") as HTMLDivElement;
    const row = document.createElement("div") as HTMLDivElement;
    const dutyWrapper = document.createElement("div") as HTMLDivElement;

    container.className = "locker_container container-fluid";

    row.className = "locker_row row w-100 h-100";

    dutyWrapper.className =
      "duty_wrapper w-100 h-100 d-flex justify-content-between px-2";

    dutyWrapper.innerHTML = `
      <div class="agent_img_wrapper" >
        <div class="agent_img"></div>
      </div>
      <div class="working_area" >
        
        <p class="skills_acquaintance fw-bold" >Front-End/ Back-End Developer </p>
      </div>
      `;

    row.appendChild(dutyWrapper);
    container.appendChild(row);

    this.MainAbout.innerHTML = "";
    this.MainAbout.appendChild(container);
  }

  detailsInterest() {
    const container = document.createElement("div") as HTMLDivElement;
    const row = document.createElement("div") as HTMLDivElement;
    const interestWrapper = document.createElement("div") as HTMLDivElement;

    container.className = "interest_container container-fluid";

    row.className = "interest_row row w-100 h-100 mx-auto";

    interestWrapper.className = "interest_wrapper ";

    const interestBoardOne = document.createElement("div") as HTMLDivElement;

    interestBoardOne.className = "skills_recap";

    interestBoardOne.innerHTML = `
    <div class="skill_item_pro">
          <label for="css">CSS</label>
          <div id="progress_css" class="progress style="height: 16px" role="progressbar" aria-label="Example with label" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar" style="width: 40%;background-color: #f4f4f4; border-radius: 24px;animation: css-progress-anim 1s ease-in-out 4s forwards">75%</div>
        </div>
    
        <div class="skill_item_pro">
          <label for="javascript">Javascript</label>
          <div id="progress_javascript" class="progress style="height: 14px" role="progressbar" aria-label="javascript" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar" style="width: 60% ;background-color: #f4f4f4; border-radius: 24px;animation: javascript-progress-anim 1s ease-in-out 5.1s forwards">60%</div>
        </div>
        <div class="skill_item_pro">
          <label for="express">ExpressJS</label>
          <div id="progress_express" class="progress style="height: 16px" role="progressbar" aria-label="express" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar" style="width: 55%;background-color: #f4f4f4; border-radius: 24px;animation: express-progress-anim 1s ease-in-out 6s forwards;">55%</div>
        </div>
        
        <div class="skill_item_pro">
          <label for="typescript">Typescript</label>
          <div id="progress_typescript" class="progress style="height: 16px" role="progressbar" aria-label="typescript" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar" style="width: 25%; background-color: #f4f4f4;border-radius: 24px;animation: typescript-progress-anim 1s ease-in-out 7s forwards;">25%</div>
        </div>
        <div class="skill_item_pro">
          <label for="node">NodeJS</label>
          <div id="progress_node" class="progress style="height: 16px" role="progressbar" aria-label="NodeJs" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar" style="width: 20%;background-color: #f4f4f4; border-radius: 24px;animation: node-progress-anim 1s ease-in-out 8s forwards;">20%</div>
        </div>
    `;

    const interestBoardTwo = document.createElement("div") as HTMLDivElement;

    interestBoardTwo.className = "inner_side_interests";

    interestBoardTwo.innerHTML = `
      <div class="beating_interest">
        <span class="int_work_title">Interest</span>
        <p class="interest_area" > animes, writing, movies, Games  </p>
      </div> "
      `;

    interestWrapper.appendChild(interestBoardOne);
    interestWrapper.appendChild(interestBoardTwo);

    row.appendChild(interestWrapper);
    container.appendChild(row);

    this.MainAbout.appendChild(container);
  }

  renderAbout() {
    this.IdAgent();
    this.detailsInterest();
  }
}
