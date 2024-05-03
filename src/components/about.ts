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

  // interest_area

  IdAgent() {
    const container = document.createElement("div") as HTMLDivElement;
    const row = document.createElement("div") as HTMLDivElement;
    const dutyWrapper = document.createElement("div") as HTMLDivElement;

    container.className = "locker_container container-fluid";

    row.className = "locker_row row w-100 h-100 mx-auto";

    dutyWrapper.className = "duty_wrapper w-100 h-100";

    const skillsRecap = document.createElement("div") as HTMLDivElement;

    skillsRecap.className = "skills_recap";

    skillsRecap.innerHTML = `
    <div id="first_skill_pro" class="skill_item_pro">
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

    const agentImgWrapper = document.createElement("div") as HTMLDivElement;
    agentImgWrapper.className = "agent_img_wrapper";
    agentImgWrapper.innerHTML = `
    <div class="agent_img"></div>
    `;

    dutyWrapper.appendChild(agentImgWrapper);
    dutyWrapper.appendChild(skillsRecap);

    row.appendChild(dutyWrapper);
    container.appendChild(row);

    this.MainAbout.innerHTML = "";
    this.MainAbout.appendChild(container);
  }

  detailsInterest() {
    const container = document.createElement("div") as HTMLDivElement;
    const row = document.createElement("div") as HTMLDivElement;

    container.className = "interest_container container-fluid";

    row.className = "interest_row row";

    const workingArea = document.createElement("div") as HTMLDivElement;

    workingArea.className = "working_area";

    workingArea.innerHTML = `
    <p class="skills_acquaintance fw-bold" >Front-End/ Back-End Developer </p>
    `;

    const interestBoard = document.createElement("div") as HTMLDivElement;

    interestBoard.className = "inner_side_interests";

    interestBoard.innerHTML = `
      <div class="beating_interest">
        <span class="int_work_title">Interest</span>
        <p class="interest_area" > animes, writing, movies, Games  </p>
      </div> "
      `;

    row.appendChild(workingArea);
    row.appendChild(interestBoard);

    container.appendChild(row);

    this.MainAbout.appendChild(container);
  }

  renderAbout() {
    this.IdAgent();
    this.detailsInterest();
  }
}
