<script setup lang="ts">
import { reactive } from 'vue'
import { redirectionMedia, handleHoverMedia } from '@/reusable-function/media-target'

let media = reactive({ mediaLink: '' })
</script>

<template>
  <section id="home_page">
    <div class="taked_home">
      <!-- Tech -->
      <div class="hye_container">
        <div class="hye_row">
          <div class="hello_wrap d-flex w-100 p-2 gap-2">
            <h1 class="say_hello">Web Designer & <span style="color: #154c79">Developer</span></h1>
          </div>
        </div>
      </div>
      <!-- Name -->
      <div class="name_container">
        <div class="name_row d-flex justify-content-center align-items-center">
          <div class="name_wrap d-flex justify-content-center align-items-center">
            <div class="my_name px-1 font_Satisfy">
              <p>NGOUEND RaouL GERARD</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Logo skills -->
      <div class="footer_container">
        <div class="footer_row">
          <div class="logo_skills_wrapper w-100 d-flex flex-column">
            <div class="logo_skills_city">
              <div id="javascript_skill" class="logo_skill javascript_skill" data-pos="1"></div>
              <div id="react_skill" class="logo_skill react_skill" data-pos="1"></div>
              <div id="typescript_skill" class="logo_skill typescript_skill" data-pos="1"></div>
              <div id="vuejs_skill" class="logo_skill vuejs_skill" data-pos="2"></div>
              <div id="mongodb_skill" class="logo_skill mongodb_skill" data-pos="2"></div>
              <div id="node_skill" class="logo_skill node_skill" data-pos="2"></div>
            </div>
          </div>
          <div class="social_media_assets">
            <div
              class="social_media_content"
              @click.prevent="(e: Event) => redirectionMedia(e, media)"
            >
              <div
                class="link_media"
                @mouseover="(e: Event) => handleHoverMedia(e, 'hover')"
                @mouseleave="(e: Event) => handleHoverMedia(e, 'leave')"
              >
                <div id="link_tweeter" class="link_icon" data-icon="0"></div>
              </div>
              <div
                class="link_media"
                @mouseover="(e: Event) => handleHoverMedia(e, 'hover')"
                @mouseleave="(e: Event) => handleHoverMedia(e, 'leave')"
              >
                <div id="link_github" class="link_icon" data-icon="0"></div>
              </div>
              <div
                class="link_media"
                @mouseover="(e: Event) => handleHoverMedia(e, 'hover')"
                @mouseleave="(e: Event) => handleHoverMedia(e, 'leave')"
              >
                <div id="link_linkedin" class="link_icon" data-icon="0"></div>
              </div>
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
    height: calc(100vh - 50px);
    margin: 0;
    background-color: rgb(201, 174, 226);
    background-image: url('../assets/images/lauren-mancke-aOC7TSLb1o8-unsplash.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 auto;
    overflow-x: hidden;
    z-index: 0;
  }

  /* hello message */
  .hye_container {
    position: relative;
    width: 100%;
    height: calc(34vh - 50px);
    padding-top: 0.5rem;
    z-index: 3;
  }

  .hye_row {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    visibility: hidden;
    animation: anim-hello-group 1s ease-out 1.8s forwards;
  }

  .hello_wrap {
    position: relative;
    left: calc(3% - 0.3vw);
    height: 80px;
    color: hsla(187, 9%, 82%, 0.72);
    font-size: calc(18px + 0.3vw);
  }

  /* presentation name */

  .name_container {
    position: relative;
    width: 100%;
    height: calc(40vh - 1rem);
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
    color: var(--bg-border-layout);
    font-weight: 430;
    font-size: calc(24px + 0.25vw);
    letter-spacing: 4px;
  }

  /* footer message */
  .footer_container {
    position: relative;
    width: 100%;
    height: 26vh;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    z-index: 3;
  }

  .footer_row {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
  }

  .logo_skills_wrapper {
    height: 42%;
    padding: 0 1rem;
    justify-content: center;
    perspective: 600px;
  }

  .logo_skills_city {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }

  .logo_skill {
    position: relative;
    width: 32px;
    height: 32px;
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

  /* -------social media-------- */

  .social_media_assets {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .social_media_content {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 2.5rem);
    grid-auto-rows: 100%;
    place-items: center;
  }

  .social_media_content .link_media {
    position: relative;
    width: 100%;
    height: 100%;
    font-size: calc(13px + 0.25vw);
    display: grid;
    place-items: center;
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

  /* -------social media-------- */

  .social_media_content {
    width: 10rem;
    grid-template-columns: repeat(3, 3.2rem);
    place-items: end center;
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
    transition: all 450ms ease 300ms;
    z-index: 2;
  }

  .name_wrap .my_name::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 36rem;
    padding: 2rem 2rem;
    background-color: #a8a6955d;
    border-radius: 5px;
    backdrop-filter: sepia(25%);
    transform: translate(-50%, -52%);
    transition: all 750ms ease;
    z-index: -2;
  }

  .name_wrap .my_name:hover {
    color: #6b6142;
  }
  .name_wrap .my_name:hover::before {
    background-color: #a8a69585;
    backdrop-filter: invert(67%);
  }

  .logo_skills_city {
    height: 76px;
    margin-bottom: 0.25rem;
  }

  .logo_skill {
    position: relative;
    width: 80px;
  }

  /* -------social media-------- */

  .social_media_assets {
    display: flex;
    justify-content: end;
  }
}

@media (max-width: 600px) and (orientation: landscape) {
  .hye_container {
    width: 100%;
    height: calc(38vh - 50px);
    padding-top: 0;
  }

  .name_container {
    top: 0.5rem;
    width: 100%;
    height: calc(44vh - 0.5rem);
  }

  .footer_container {
    height: 18vh;
  }

  .logo_skills_city {
    width: 100%;
    display: flex;
    justify-content: flex-start;
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
