import "../css-components/skills.css";

export interface ISkills {
  MainBody: HTMLElement;
  MainSkills: HTMLDivElement;
  builtSkills: () => void;
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
          <h4 class="title_subItem" >CSS</h4>
          <ul class="area_knowledge">
            <li class="talking_area">
              <p class="knowledge">Grid System</p>
            </li>
            <li class="talking_area">
              <p class="knowledge">Flex Item</p>
            </li>
            <li class="talking_area">
              <p class="sample_project">
                 <span class= "sample_link fw-light text-decoration-underline">Link :</span>
                 <a href="https://crowdfunding-product-page-peach-five.vercel.app" class=" text-decoration-underline"> https://crowdfunding-product-page-peach-five.vercel.app/</a>
               </p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="skill_box">
      <div class="skill_item">
        <div class="skill_subItem">
          <h4 class="title_subItem" >JavaScript</h4>
          <ul class="area_knowledge">
            <li class="talking_area">
              <p class="knowledge">FETCH API</p>
            </li>
            <li class="talking_area">
              <p class="knowledge">Modal Component</p>
            </li>
             <li class="talking_area">
              <p class="knowledge">Loading Effect</p>
            </li>
            <li class="talking_area">
              <p class="sample_project">
                 <span class= "sample_link fw-light text-decoration-underline">Link :</span>
                 <a href="https://quiz-app-delta-beryl.vercel.app/" class=" text-decoration-underline"> https://quiz-app-delta-beryl.vercel.app/</a>
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
          <h4 class="title_subItem" >VueJS</h4>
          <ul class="area_knowledge">
            <li class="talking_area">
              <p class="knowledge">vue 3 composition API</p>
            </li>
            <li class="talking_area">
              <p class="knowledge">Programmatic Navigation Vue router </p>
            </li>
            <li class="talking_area">
              <p class="knowledge">Pinia store management basis</p>
            </li>
            <li class="talking_area">
              <p class="knowledge">Token key pass with linux openssl and jsonwebtoken</p>
            </li>
            <li class="talking_area">
              <p class="sample_project">
                 <span class= "sample_link fw-light text-decoration-underline">Link :</span>
                 <a href="https://github.com/BeinRain06/blog-app-tech" class=" text-decoration-underline"> https://github.com/BeinRain06/blog-app-tech</a>
               </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
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
      <div class="full_stack_wrap w-100 my-2 mx-auto">
        <div class="full_stack_content">
          <span class="title_stack font_Satisfy">Full Stack Projects</span>
          <div class="project_base">
            <div class="img_stack_wrap">
              <img src="../src/assets/images/Screenshot-2.png" class="img_full_stack w-100 h-100 object-fit-cover" alt="not found">
            </div>
            <div class="about_stack_project">
              <ul class="summary_project"><li style="list-style:square; padding-left:0.25rem; margin-right:0.5rem"></li><li style="list-style:none;">order foods online</li></ul>
              <span class="font_Open_Sans_500 mb-1">MERN (MONGODB-Express-ReactJS-Node) + Styled-Components</span>
              <span class="w-100"><a class="full_stack_link" href="https://github.com/BeinRain06/Tds_Restaurant_three" class=" text-decoration-underline">https://github.com/BeinRain06/Tds_Restaurant_three</a></span>
            </div>  
          </div>

           <div class="project_base">
          <div class="img_stack_wrap">
              <img src="../src/assets/images/Screenshot-3.png" class="img_full_stack w-100 h-100 object-fit-cover" alt="not found">
            </div>
            <div class="about_stack_project">
              <ul class="summary_project"><li style="list-style:square; 
              padding-left:0.25rem; margin-right:0.5rem"></li><li style="list-style:none;">blog about tech news</li></ul>
              <span class="font_Open_Sans_500 mb-1">MEVN (MONGODB-Express-VueJS-Node) + TailwindCSS</span>
              <span class="w-100"><a class="full_stack_link" href="https://github.com/BeinRain06/blog-app-tech" class=" text-decoration-underline">https://github.com/BeinRain06/blog-app-tech</a></span>
            </div>
        </div>
        </div>
        </div>
      <div> 
    `;

    skillsContainer.className = "skills_container container-fluid";

    skillsContainer.appendChild(abilityContentOne);
    skillsContainer.appendChild(abilityContentTwo);

    this.MainSkills.innerHTML = "";

    this.MainSkills.appendChild(skillsContainer);
  }

  renderSkills() {
    this.builtSkills();
  }
}
