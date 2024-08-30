<script setup lang="ts"></script>

<template>
  <section id="home_page">
    <div class="taked_home">
      <!-- Tech -->
      <div class="hye_container container-fluid">
        <div class="hye_row row">
          <div class="hello_wrap d-flex w-100 p-2 gap-2">
            <h1 class="say_hello">Front-End/ MERN App Developer</h1>
          </div>
        </div>
      </div>
      <!-- Name -->
      <div class="name_container container-fluid">
        <div class="name_row row d-flex justify-content-center align-items-center">
          <div class="name_wrap d-flex justify-content-center align-items-center p-2">
            <div class="my_name py-2 px-3">I AM NGOUEND GERARD</div>
          </div>
        </div>
      </div>
      <!-- Logo skills -->
      <div class="footer_container container-fluid">
        <div class="footer_row w-100 h-100 p-2">
          <div class="logo_skills_wrapper w-100 h-100 d-flex flex-column">
            <div class="logo_skills_city">
              <div id="javascript_skill" class="logo_skill javascript_skill" data-pos="1"></div>
              <div id="react_skill" class="logo_skill react_skill" data-pos="1"></div>
              <div id="typescript_skill" class="logo_skill typescript_skill" data-pos="1"></div>
              <div id="vuejs_skill" class="logo_skill vuejs_skill" data-pos="2"></div>
              <div id="mongodb_skill" class="logo_skill mongodb_skill" data-pos="2"></div>
              <div id="node_skill" class="logo_skill node_skill" data-pos="2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (min-width: 160px) {
  /*wrapper*/
  .main_view,
  .main_view.active_section {
    min-height: 100vh;
  }

  .taked_home {
    position: relative;
    top: 0;
    width: 100%;
    min-height: calc(100vh - 100px);
    margin: 0;
    background-color: rgb(201, 174, 226);
    background-image: url('../assets/images/lauren-mancke-aOC7TSLb1o8-unsplash.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 auto;
    z-index: 0;
  }

  /* hello message */
  .hye_container {
    position: relative;
    top: 0.5rem;
    width: 100%;
    height: 22vh;
    z-index: 3;
  }

  .hye_row {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: left;
    visibility: hidden;
    animation: anim-hello-group 1s ease-out 1.8s forwards;
  }

  .hello_wrap {
    position: relative;
    top: 2rem;
    left: calc(3% - 0.3vw);
    height: 80px;
    color: #2f90bb;
    color: #154c79;
    font-size: calc(18px + 0.3vw);
  }

  /* presentation name */

  .name_container {
    position: relative;
    width: 100%;
    height: 44vh !important;
    z-index: 3;
  }

  .name_row {
    position: absolute;
    top: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    visibility: hidden;
    margin: 0 auto;
    animation: anim-name-group 1s ease-out 2.6s forwards;
    backdrop-filter: hue-rotate(40deg);
  }

  .name_wrap {
    position: relative;
    width: 100%;
    height: auto;
    color: rgb(36, 155, 36);
    font-weight: 430;
    font-size: calc(36px + 0.3vw);
    letter-spacing: 4px;
  }

  /* footer message */
  .footer_container {
    position: relative !important;
    width: 100%;
    height: calc(32vh - 40px);
    z-index: 3;
  }

  .logo_skills_wrapper {
    justify-content: center;
  }

  .logo_skills_city {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }

  .logo_skill {
    position: relative;
    width: 70px;
    height: 100%;
    clip-path: circle(55%);
    transform: rotate(0deg);
    display: block;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: all 1s ease-in-out;
  }

  div.logo_skill[data-pos='1']:hover {
    transform: rotate(360deg);
  }
  div.logo_skill[data-pos='2']:hover {
    transform: rotate(-360deg);
  }

  .logo_skill.react_skill {
    background-image: url('../assets/images/react-javascript-js-framework-facebook-svgrepo-com.svg');
  }
  .logo_skill.typescript_skill {
    background-image: url('../assets/images/typescriptdef-official-svgrepo-com.svg');
  }
  .logo_skill.mongodb_skill {
    background-image: url('../assets/images/mongodb-svgrepo-com.svg');
  }
  .logo_skill.javascript_skill {
    background-image: url('../assets/images/js-svgrepo-com.svg');
  }
  .logo_skill.node_skill {
    background-image: url('../assets/images/node-js-svgrepo-com.svg');
  }

  .logo_skill.vuejs_skill {
    background-image: url('../assets/images/vue-vuejs-javascript-js-framework-svgrepo-com.svg');
  }
}

@media (min-width: 460px) {
  .hello_wrap {
    top: 2rem;
  }

  .name_row {
    top: 48%;
    margin: 0;
    backdrop-filter: unset;
  }

  .name_wrap {
    height: 100%;
  }

  .logo_skills_wrapper {
    justify-content: center;
  }

  .logo_skills_city {
    height: 50px;
    justify-content: flex-start;
    gap: 1rem;
  }

  .logo_skill {
    position: relative;
    width: 55px;
    height: 100%;
    clip-path: circle(55%);
  }
}

@media (min-width: 768px) {
  .main_view,
  .main_view.active_section {
    min-height: 100vh;
  }

  .taked_home {
    margin: 0;
    background-position: center 35%;
    min-height: calc(100vh - 50px);
  }

  .taked_home::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.24);
  }

  .hye_container {
    position: relative;
    top: 3rem;
    width: 100%;
    height: 7rem;
    z-index: 3;
  }

  .hello_wrap {
    position: relative;
    top: 2rem;
    left: calc(3% - 0.3vw);
    font-size: calc(21px + 0.3vw);
  }

  .name_row {
    top: 55%;
    background-blend-mode: hard-light;
  }

  .name_wrap {
    position: relative;
    height: 100%;
    color: #b41b5b;
    transition: all 450ms ease 300ms;
  }

  .name_wrap .my_name::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 33rem;
    height: 3rem;
    padding: 0.25rem;
    background-color: rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    transform: translate(-50%, -50%);
    transition: all 450ms ease;
  }

  .name_wrap:hover {
    color: #b4366a;
  }
  .name_wrap .my_name:hover::before {
    background-color: rgba(0, 0, 0, 0.25);
  }

  .logo_skills_city {
    height: 76px;
    margin-bottom: 0.25rem;
  }

  .logo_skill {
    position: relative;
    width: 80px;
  }
}

@keyframes anim-hello-group {
  0% {
    left: -40%;
    visibility: hidden;
  }
  100% {
    left: 20%;
    visibility: visible;
  }
}

@keyframes anim-name-group {
  0% {
    left: 100%;
    visibility: hidden;
  }

  100% {
    left: 50%;
    visibility: visible;
  }
}

@keyframes anim-footer-message {
  0% {
    visibility: hidden;
    transform: scale(0.2);
    opacity: 0.74;
  }

  100% {
    visibility: visible;
    transform: scale(1);
    opacity: 1;
  }
}
</style>
