<script setup lang="ts"></script>
<template>
  <section id="about_page">
    <div class="about_content_page">
      <!-- about skills -->
      <div class="locker_container container-fluid">
        <div class="locker_row row w-100 h-100 mx-auto">
          <div class="duty_wrapper">
            <div class="working_area">
              <p class="skills_acquaintance fw-bold">Front-End/ MERN App Developer</p>
            </div>
            <div class="skills_agent_wrap">
              <div class="agent_img_wrapper">
                <div class="agent_img"></div>
              </div>

              <!-- skills recap mobile -->
              <div class="skills_recap d-block d-md-none">
                <div id="first_skill_pro" class="skill_item_pro">
                  <label for="css">CSS</label>
                  <div
                    id="progress_css"
                    class="progress"
                    role="progressbar"
                    aria-label="Example with label"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="height: 14px"
                  >
                    <div
                      class="progress-bar"
                      style="
                        width: 40%;
                        background-color: #f4f4f4;
                        border-radius: 30px;
                        animation: css-progress-anim 1s ease-in-out 4s forwards;
                      "
                    >
                      85%
                    </div>
                  </div>

                  <div class="skill_item_pro">
                    <label for="javascript">Javascript</label>
                    <div
                      id="progress_javascript"
                      class="progress"
                      role="progressbar"
                      aria-label="javascript"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="height: 14px"
                    >
                      <div
                        class="progress-bar"
                        style="
                          width: 60%;
                          background-color: #f4f4f4;
                          border-radius: 30px;
                          animation: javascript-progress-anim 1s ease-in-out 5.1s forwards;
                        "
                      >
                        80%
                      </div>
                    </div>

                    <div class="skill_item_pro">
                      <label for="reactjs">ReactJS</label>
                      <div
                        id="progress_reactjs"
                        class="progress"
                        role="progressbar"
                        aria-label="reactjs"
                        aria-valuenow="76"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="height: 14px"
                      >
                        <div
                          class="progress-bar"
                          style="
                            width: 60%;
                            background-color: #f4f4f4;
                            border-radius: 30px;
                            animation: react-progress-anim 1s ease-in-out 5.1s forwards;
                          "
                        >
                          78%
                        </div>
                      </div>

                      <div class="skill_item_pro">
                        <label for="vuejs">VueJS</label>
                        <div
                          id="progress_vuejs"
                          class="progress"
                          role="progressbar"
                          aria-label="vuejs"
                          aria-valuenow="65"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style="height: 14px"
                        >
                          <div
                            class="progress-bar"
                            style="
                              width: 60%;
                              background-color: #f4f4f4;
                              border-radius: 30px;
                              animation: vue-progress-anim 1s ease-in-out 5.1s forwards;
                            "
                          >
                            68%
                          </div>
                        </div>

                        <div class="skill_item_pro">
                          <label for="typescript">Typescript</label>
                          <div
                            id="progress_typescript"
                            class="progress"
                            role="progressbar"
                            aria-label="typescript"
                            aria-valuenow="60"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style="height: 14px"
                          >
                            <div
                              class="progress-bar"
                              style="
                                width: 60%;
                                background-color: #f4f4f4;
                                border-radius: 30px;
                                animation: typescript-progress-anim 1s ease-in-out 5.1s forwards;
                              "
                            >
                              65%
                            </div>
                          </div>

                          <div class="skill_item_pro">
                            <label for="express">ExpressJS</label>
                            <div
                              id="progress_express"
                              class="progress"
                              role="progressbar"
                              aria-label="express"
                              aria-valuenow="55"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style="height: 14px"
                            >
                              <div
                                class="progress-bar"
                                style="
                                  width: 55%;
                                  background-color: #f4f4f4;
                                  border-radius: 30px;
                                  animation: express-progress-anim 1s ease-in-out 6s forwards;
                                "
                              >
                                75%
                              </div>
                            </div>

                            <div class="skill_item_pro">
                              <label for="node">NodeJS</label>
                              <div
                                id="progress_node"
                                class="progress"
                                role="progressbar"
                                aria-label="NodeJs"
                                aria-valuenow="20"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style="height: 14px"
                              >
                                <div
                                  class="progress-bar"
                                  style="
                                    width: 20%;
                                    background-color: #f4f4f4;
                                    border-radius: 30px;
                                    animation: node-progress-anim 1s ease-in-out 8s forwards;
                                  "
                                >
                                  60%
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- skills recap desktop -->
              <div class="skills_recap d-none d-md-block">
                <div id="first_skill_pro" class="skill_item_pro">
                  <label for="css">CSS</label>
                  <div
                    id="progress_css"
                    class="progress"
                    role="progressbar"
                    aria-label="Example with label"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="height: 22px; border-radius: 6px"
                  >
                    <div
                      class="progress-bar"
                      style="
                        width: 40%;
                        background-color: #f4f4f4;
                        border-radius: 6px;
                        animation: css-progress-anim 1s ease-in-out 4s forwards;
                      "
                    >
                      85%
                    </div>
                  </div>

                  <div class="skill_item_pro">
                    <label for="javascript">Javascript</label>
                    <div
                      id="progress_javascript"
                      class="progress"
                      role="progressbar"
                      aria-label="javascript"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="height: 22px; border-radius: 6px"
                    >
                      <div
                        class="progress-bar"
                        style="
                          width: 60%;
                          background-color: #f4f4f4;
                          border-radius: 6px;
                          animation: javascript-progress-anim 1s ease-in-out 5.1s forwards;
                        "
                      >
                        80%
                      </div>
                    </div>

                    <div class="skill_item_pro">
                      <label for="reactjs">ReactJS</label>
                      <div
                        id="progress_reactjs"
                        class="progress"
                        role="progressbar"
                        aria-label="reactjs"
                        aria-valuenow="76"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="height: 22px; border-radius: 6px"
                      >
                        <div
                          class="progress-bar"
                          style="
                            width: 60%;
                            background-color: #f4f4f4;
                            border-radius: 6px;
                            animation: react-progress-anim 1s ease-in-out 5.1s forwards;
                          "
                        >
                          78%
                        </div>
                      </div>

                      <div class="skill_item_pro">
                        <label for="vuejs">VueJS</label>
                        <div
                          id="progress_vuejs"
                          class="progress"
                          role="progressbar"
                          aria-label="vuejs"
                          aria-valuenow="65"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style="height: 22px; border-radius: 6px"
                        >
                          <div
                            class="progress-bar"
                            style="
                              width: 60%;
                              background-color: #f4f4f4;
                              border-radius: 6px;
                              animation: vue-progress-anim 1s ease-in-out 5.1s forwards;
                            "
                          >
                            68%
                          </div>
                        </div>

                        <div class="skill_item_pro">
                          <label for="typescript">Typescript</label>
                          <div
                            id="progress_typescript"
                            class="progress"
                            role="progressbar"
                            aria-label="typescript"
                            aria-valuenow="60"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style="height: 22px; border-radius: 6px"
                          >
                            <div
                              class="progress-bar"
                              style="
                                width: 60%;
                                background-color: #f4f4f4;
                                border-radius: 6px;
                                animation: typescript-progress-anim 1s ease-in-out 5.1s forwards;
                              "
                            >
                              65%
                            </div>
                          </div>

                          <div class="skill_item_pro">
                            <label for="express">ExpressJS</label>
                            <div
                              id="progress_express"
                              class="progress"
                              role="progressbar"
                              aria-label="express"
                              aria-valuenow="55"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style="height: 22px; border-radius: 6px"
                            >
                              <div
                                class="progress-bar"
                                style="
                                  width: 55%;
                                  background-color: #f4f4f4;
                                  border-radius: 6px;
                                  animation: express-progress-anim 1s ease-in-out 6s forwards;
                                "
                              >
                                75%
                              </div>
                            </div>

                            <div class="skill_item_pro">
                              <label for="node">NodeJS</label>
                              <div
                                id="progress_node"
                                class="progress"
                                role="progressbar"
                                aria-label="NodeJs"
                                aria-valuenow="20"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style="height: 22px; border-radius: 6px"
                              >
                                <div
                                  class="progress-bar"
                                  style="
                                    width: 20%;
                                    background-color: #f4f4f4;
                                    border-radius: 6px;
                                    animation: node-progress-anim 1s ease-in-out 8s forwards;
                                  "
                                >
                                  60%
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- interest container -->
      <div class="interest_container container-fluid">
        <div class="inner_side_interests">
          <div class="beating_interest">
            <span class="int_work_title">Interest</span>
            <p class="interest_area">writing, movies, Games</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
@import '../../node_modules/bootstrap/dist/css/bootstrap-utilities.min.css';
/*progress bar*/

/* test anim */

.skills_acquaintance,
.interest_area {
  font-family: 'Dancing Script', cursive;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}

@media (min-width: 160px) {
  .skills_acquaintance {
    font-size: calc(18px + 0.3vw);
    visibility: hidden;
    animation: skills-acquaintance-anim 2s ease-in-out forwards 0.5s;
  }

  .int_work_title {
    font-size: calc(20px + 0.3vw);
    text-decoration: underline;
  }

  .interest_area {
    margin-bottom: 0;
    font-size: calc(17px + 0.3vw);
  }

  .about_content_page {
    position: relative;
    top: 0;
    width: 100vw;
    min-height: 100vh;
    margin: 0 auto;
    border-top: 0.65rem solid rgb(0, 0, 56);
    border-bottom: 1rem solid rgb(0, 0, 56);
    font-family: 'Hind', sans-serif;
    font-weight: 400;
    font-style: normal;

    background-color: rgb(0, 0, 75);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow-x: hidden;
    z-index: 1;
  }

  .locker_container {
    position: relative;
    top: 0%;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0 auto;
    z-index: 3;
  }

  .duty_wrapper {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .working_area {
    padding: 0 1rem;
    margin-top: 1rem;
    height: 4rem;
    color: #fff;
    text-align: center;
  }

  .duty_wrapper .skills_recap {
    position: relative;
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    font-size: calc(15px + 0.3vw);
  }

  .skills_recap .skill_item_pro {
    width: 90%;
    color: #c0c0c0;
    font-size: 11px;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .skills_agent_wrap {
    width: 100%;
    height: 18rem;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .skills_agent_wrap .agent_img_wrapper {
    position: relative;
    top: 0;
    left: 0;
    width: 200px;
    height: 175px;
    perspective: 500px;
    display: flex;
    justify-content: flex-end;
    flex-shrink: 0;
  }

  .agent_img_wrapper .agent_img {
    width: 100%;
    height: 100%;
    background-image: url('../assets/images/profile_add-1.png');
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: luminosity;
    transform: scale(0.96);
    /* border-radius: 50%; */
  }

  /*interest side */

  .interest_container {
    position: absolute;
    top: 17rem;
    left: 0.5rem;
    width: 100%;
    height: auto;
    z-index: 5;
  }

  .inner_side_interests {
    color: hsl(0, 0%, 81%);
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 0.5rem;
    visibility: hidden;
    animation: hide-show-interest 1s ease-in-out forwards;
  }

  .inner_side_interests .beating_interest {
    padding: 1rem 0.5rem 1rem 0.25rem;
    width: 11rem;
    position: relative;
    left: 0;
  }
}

@media (min-width: 460px) {
  .locker_container {
    min-height: 30rem;
    visibility: visible;
    /*  animation: anim-phaseA-about 1s ease-in-out forwards; */
  }

  .about_content_page {
    padding: 0;
  }

  .working_area {
    position: absolute;
    top: 4rem;
    left: 80%;
    padding: 0 1rem;
    margin-top: 0;
    color: #fff;
    width: 80%;

    transform: translateX(-62%);
    text-align: unset;
  }

  .skills_acquaintance {
    font-size: calc(22px + 0.3vw);
  }

  .duty_wrapper .skills_recap {
    padding-left: 1.75rem;
  }

  .skills_agent_wrap {
    height: 25rem;
    padding-bottom: 0;
    flex-direction: column;
    gap: 2rem;
  }

  .skills_agent_wrap .agent_img_wrapper {
    top: 3.75rem;
    right: 1rem;
    margin-bottom: 2rem;
  }

  .agent_img_wrapper .agent_img {
    transform: scale(0.85);
  }
  .duty_wrapper .skills_recap {
    width: 100%;
    padding-bottom: 3rem;
    height: 18rem;
  }

  .interest_container {
    position: absolute;
    top: unset;
    bottom: 5rem;
  }

  .inner_side_interests {
    height: 3rem;
    gap: 0;
  }

  .inner_side_interests .beating_interest {
    /*    padding: 1rem; */
    padding: 0.25rem 0.5rem;
    width: 9rem;
    position: relative;
    left: calc(67% + 6vw);
    writing-mode: sideways-lr;
  }

  .int_work_title {
    font-size: calc(22px + 0.15vw);
  }

  .interest_area {
    margin: 0;
    font-size: calc(18px + 0.3vw);
  }
}

@media (min-width: 768px) {
  .about_content_page {
    position: relative;
    top: 0;
    padding-bottom: 0.5rem;
    padding-top: 50px;
    height: 30rem;
    /* display: flex;
    flex-direction: column; */
  }

  .locker_container {
    height: calc(30rem - 6rem);
  }

  .skills_acquaintance {
    font-size: calc(24px + 0.3vw);
  }

  .int_work_title {
    font-size: calc(26px + 0.3vw);
  }

  .interest_area {
    font-size: calc(25px + 0.3vw);
  }

  .duty_wrapper {
    height: 100%;
  }

  .working_area {
    position: relative;
    top: 0;
    left: 50%;
    width: 100vw;
    height: 6rem;
    padding: 0.5rem 1rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    transform: translateX(-50%);
  }

  .skills_agent_wrap {
    height: calc(100% - 6rem);
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    margin: 0.5rem 0;
  }

  .skills_agent_wrap .agent_img_wrapper {
    top: 0.5rem;
    width: 19.25rem;
    padding-left: 1rem;
    height: 90%;
    margin-bottom: 0;
  }

  .agent_img_wrapper .agent_img {
    background-image: url('../assets/images/profile_2.png');
    background-position: center 20px;
    background-color: #8d8c8c;
    background-color: rgba(0, 0, 90, 0.5);
    transform: scale(1);
    border-radius: 0;
    border: 2px solid transparent;
  }

  .duty_wrapper .skills_recap {
    position: relative;
    top: 0.5rem;
    width: 60%;
    height: 100%;
    gap: 0.5rem;
    font-size: calc(15px + 0.3vw);
  }

  /* align skill Item Pro flex-end */
  #first_skill_pro.skill_item_pro .skill_item_pro {
    position: relative;
    top: 0;
    left: 0;
    width: 90%;
    transform: translate(0);
    display: flex;
    justify-content: flex-end;
  }

  /*interest side */

  .interest_container {
    position: relative;
    top: 0;
    bottom: unset;
    width: 100%;
    height: 6rem;
  }

  .inner_side_interests {
    position: absolute;
    left: 50%;
    /*  bottom: auto; */
    width: 100%;
    height: 100%;
    padding: 0.25rem;
    display: grid;
    place-items: center;
    transform: translateX(-50%);
    gap: 0;
    font-size: calc(18px + 0.3vw);
  }

  .inner_side_interests .beating_interest {
    padding: 0.5rem;
    width: 100%;
    left: auto;
    writing-mode: horizontal-tb;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    gap: 0.25rem;
  }
}

@keyframes anim-phaseA-about {
  0% {
    top: 50%;
    visibility: hidden;
  }
  100% {
    top: 0%;
    visibility: visible;
  }
}

@keyframes anim-phaseB-about {
  0% {
    top: -50%;
    visibility: hidden;
  }
  100% {
    top: 0%;
    visibility: visible;
  }
}

@keyframes skills-acquaintance-anim {
  0% {
    transform: scale(0.2);
    visibility: hidden;
  }
  100% {
    transform: scale(1);
    visibility: visible;
  }
}

@keyframes interest-area-anim {
  0% {
    transform: translateX(-300px) rotateZ(72deg) scale(0.2);
    visibility: visible;
  }
  25% {
    transform: translateX(-225px) rotateZ(144deg) scale(0.2);
    visibility: visible;
  }
  50% {
    transform: translateX(-150px) rotateZ(216deg) scale(0.5);
    visibility: visible;
  }
  75% {
    transform: translateX(-75px) rotateZ(288deg) scale(0.75);
    visibility: visible;
  }
  100% {
    transform: translateX(0) rotateZ(360deg) scale(1);
    visibility: visible;
    border-radius: 5px;
    border: 1px solid transparent;
  }
}

@keyframes hide-show-interest {
  0% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
  }
}

/*progress anim */

@keyframes css-progress-anim {
  0% {
    width: 0;
    background-color: #f4f4f4;
  }
  100% {
    width: 85%;
    background-color: #577e45;
  }
}

@keyframes javascript-progress-anim {
  0% {
    width: 0;
    background-color: #f4f4f4;
  }
  100% {
    width: 80%;
    background-color: #d3b610;
  }
}

@keyframes react-progress-anim {
  0% {
    width: 0;
    background-color: #f4f4f4;
  }
  100% {
    width: 76%;
    background-color: #45637e;
  }
}

@keyframes vue-progress-anim {
  0% {
    width: 0;
    background-color: #f4f4f4;
  }
  100% {
    width: 76%;
    background-color: #45637e;
    background-color: #74b855;
  }
}

@keyframes typescript-progress-anim {
  0% {
    width: 0;
    background-color: #f4f4f4;
  }
  100% {
    width: 76%;
    background-color: #45637e;
    background-color: #7e4579;
  }
}

@keyframes express-progress-anim {
  0% {
    width: 0;
    background-color: #f4f4f4;
  }
  100% {
    width: 75%;
    background-color: #68737c;
    /* background-color: #457e76; */
  }
}

@keyframes node-progress-anim {
  0% {
    width: 0%;
    background-color: #f4f4f4;
  }
  100% {
    width: 60%;
    background-color: #9c3840;
  }
}
</style>
