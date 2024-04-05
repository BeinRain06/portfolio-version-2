import "../css-components/skills.css";

export interface ISkills {
  MainBody: HTMLElement;
  MainSkills: HTMLDivElement;
  builtSkills: () => HTMLDivElement;
  renderSkills: () => void;
}

export default class Skills implements ISkills {
  MainBody: HTMLElement;
  MainSkills: HTMLDivElement;

  static instance: Skills = new Skills();

  private constructor() {
    this.MainBody = document.getElementById("main_app") as HTMLElement;
    this.MainSkills = document.getElementById(
      "active_skills"
    ) as HTMLDivElement;
  }

  builtSkills() {
    const skillsContainer = document.createElement("div") as HTMLDivElement;
    const abilityContentOne = document.createElement("div") as HTMLDivElement;
    const abilityContentTwo = document.createElement("div") as HTMLDivElement;

    abilityContentOne.className = "skills_content row col-xs-12 col-6";
    abilityContentTwo.className = "skills_content row col-xs-12 col-6";

    abilityContentOne.innerHTML = `
    <div class="skill_box">
      <div class="skill_item">
        <div class="skill_subItem">
          <h4 class="title_subItem" >UI DeSiGn</h4>
          <ul class="area_knowledge">
            <li class="talking_area">
              <p class="knowledge">Bootstrap CSS</p>
            </li>
            <li class="talking_area">
              <p class="knowledge">Styled-Components</p>
            </li>
            <li class="talking_area">
              <p class="sample_project">
                 <span class= "sample_link fw-light text-decoration-underline">Link :</span>
                 <a href="https://words-letters-game.vercel.app/" class=" text-decoration-underline"> https://words-letters-game.vercel.app/</a>
               </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="skill_box">
      <div class="skill_item">
        <div class="skill_subItem">
          <h4 class="title_subItem" >Vanilla JS</h4>
          <ul class="area_knowledge">
            <li class="talking_area">
              <p class="knowledge">write HTML with class component in vanilla</p>
            </li>
            <li class="talking_area">
              <p class="knowledge">style JS component with CSS and bootstrap CSS</p>
            </li>
             <li class="talking_area">
              <p class="knowledge">handle DOM Events actions in vanilla JS</p>
            </li>
            <li class="talking_area">
              <p class="sample_project">
                 <span class= "sample_link fw-light text-decoration-underline">Link :</span>
                 <a href="https://to-do-list-kappa-lyart-28.vercel.app/" class=" text-decoration-underline"> https://to-do-list-kappa-lyart-28.vercel.app/</a>
               </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="skill_box">
      <div class="skill_item">
        <div class="skill_subItem">
          <h4 class="title_subItem" >Express JS</h4>
          <ul class="area_knowledge">
            <li class="talking_area">
              <p class="knowledge">Authentication app using cookies and Jsonwebtoken(JWT)</p>
            </li>
            <li class="talking_area">
              <p class="knowledge">HTTP Request with MonGODB, Express, & Node </p>
            </li>
            <li class="talking_area">
              <p class="knowledge">MONGODB Model with ExpressJS</p>
            </li>
            <li class="talking_area">
              <p class="sample_project">
                 <span class= "sample_link fw-light text-decoration-underline">Link :</span>
                 <a href="https://github.com/BeinRain06/Tds_Restaurant_three" class=" text-decoration-underline"> https://github.com/BeinRain06/Tds_Restaurant_three</a>
               </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="skill_box">
      <div class="skill_item">
        <div class="skill_subItem">
          <h4 class="title_subItem" >NodeJS</h4>
          <ul class="area_knowledge">
            <li class="talking_area">
              <p class="knowledge">write HTML, CSS, JS in NodeJs backend Environment</p>
            </li>
            <li class="talking_area">
              <p class="knowledge">Node - Express Routing</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    `;

    abilityContentTwo.innerHTML = `
    <div class="skill_box">
      <div class="skill_item">
        <div class="skill_subItem">
          <h4 class="title_subItem" >TypeScript</h4>
          <ul class="area_knowledge">
            <li class="talking_area">
              <p class="knowledge">TypeScript declaration in Class Components</p>
            </li>
            <li class="talking_area">
              <p class="knowledge">TypeScript declaration in ReactJS Components</p>
            </li>
            <li class="talking_area">
              <p class="sample_project">
                 <span class= "sample_link fw-light text-decoration-underline">Link :</span>
                 <a href="#" class=" text-decoration-underline"> DevPortFolio</a>
               </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="skill_box">
      <div class="skill_item">
        <div class="skill_subItem">
          <h4 class="title_subItem" >React JS</h4>
          <ul class="area_knowledge">
            <li class="talking_area">
              <p class="knowledge">Reducer Hook, context API Hook,</p>
            </li>
            <li class="talking_area">
              <p class="knowledge">style JS component with CSS and bootstrap CSS</p>
            </li>
            <li class="talking_area">
              <p class="knowledge">React-redux slice</p>
            </li>
             <li class="talking_area">
              <p class="knowledge">React-Slick-Carousel</p>
            </li>
             <li class="talking_area">
              <p class="knowledge">React-Router-DOM</p>
            </li>
            <li class="talking_area">
              <p class="sample_project">
                 <span class= "sample_link fw-light text-decoration-underline">Link :</span>
                 <a href="https://furniture-store-peach.vercel.app/" class=" text-decoration-underline"> https://furniture-store-peach.vercel.app/</a>
               </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="skill_box">
      <div class="skill_item">
        <div class="skill_subItem">
          <h4 class="title_subItem" >MONGODB</h4>
          <ul class="area_knowledge">
            <li class="talking_area">
              <p class="knowledge">MONGODB Atlas Cloud setup for new Project</p>
            </li>
            <li class="talking_area">
              <p class="knowledge">Create Collection and Database in MongoDB </p>
            </li>
            <li class="talking_area">
              <p class="knowledge">HTTP Request ith Built-in MONGODB functions</p>
            </li>
            <li class="talking_area">
              <p class="sample_project">
                 <span class= "sample_link fw-light text-decoration-underline">Link :</span>
                 <a href="https://quiz-app-delta-beryl.vercel.app/" class=" text-decoration-underline"> Other Link</a>
               </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    `;

    skillsContainer.className = "skills_container container-fluid";

    skillsContainer.appendChild(abilityContentOne);
    skillsContainer.appendChild(abilityContentTwo);

    return skillsContainer;
  }

  renderSkills() {
    const grabSkillsContainer = this.builtSkills() as HTMLDivElement;

    //render action to main app
    setTimeout((): void => {
      this.MainSkills.appendChild(grabSkillsContainer);
    }, 2000);
  }
}
