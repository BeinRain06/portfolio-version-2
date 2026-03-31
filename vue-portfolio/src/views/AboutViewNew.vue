<script setup lang="ts"></script>

<template>
  <section id="about_page">
    <div class="about_container">
      <div class="about_myself">
        <div class="profile_wrap">
          <div class="profile_box">
            <div class="profile_img"></div>
          </div>
          <div
            class="profile_graph w-100 h-100 d-flex flex-column justify-content-center align-items-start z-3"
          >
            <div class="profile_bar" data-bar="0"></div>
            <div class="profile_bar" data-bar="1"></div>
            <div class="profile_bar" data-bar="2"></div>
            <div class="profile_bar" data-bar="3"></div>
            <div class="profile_bar" data-bar="4"></div>
          </div>
          <div class="profile_bubble">
            <div class="profile_bubble_1"></div>
            <div class="profile_bubble_2"></div>
            <div class="profile_bubble_3"></div>
            <div class="profile_bubble_4"></div>
          </div>
        </div>
        <div class="domains_expertise">
          <p class="domains_capability"><span>Web Designer & </span><span>Developer</span></p>
        </div>
      </div>

      <!-- skills architecture -->
      <div class="skills_architecture">
        <div class="title_arch_desk eb-garamond-600">Tools , Libraries, Framework</div>
        <!-- Note HERE :  NEXT you need to style **stand_bard** properly (add color first) -->
        <div class="graph_box_container">
          <div class="graph_portait">
            <!-- graph box 1 -->
            <div id="libraries_frameworks" class="graph_box">
              <div class="graph_play">
                <div class="stand_bar" data-stand="0">
                  <span style="height: 80%"></span>
                  <div class="stats_number">80%</div>
                  <div class="label_bar" style="">Javascript</div>
                </div>
                <div class="stand_bar" data-stand="1">
                  <span style="height: 68%"></span>
                  <div class="stats_number">68%</div>
                  <div class="label_bar">ReactJS</div>
                </div>
                <div class="stand_bar" data-stand="2">
                  <span style="height: 75%"></span>
                  <div class="stats_number">75%</div>
                  <div class="label_bar">ExpressJS</div>
                </div>
                <div class="stand_bar" data-stand="3">
                  <span style="height: 70%"></span>
                  <div class="stats_number">70%</div>
                  <div class="label_bar">VueJS</div>
                </div>
                <div class="stand_bar" data-stand="4">
                  <span style="height: 65%"></span>
                  <div class="stats_number">65%</div>
                  <div class="label_bar">Typescript</div>
                </div>
                <div class="stand_bar" data-stand="5">
                  <span style="height: 60%"></span>
                  <div class="stats_number">60%</div>
                  <div class="label_bar">NodeJS</div>
                </div>
              </div>
              <div class="title_graph_play eb-garamond-600">
                <p>Libraries & Frameworks</p>
              </div>
            </div>
            <!-- graph icons -->
            <div class="graph_icons_container">
              <div class="icon_arch" data-tool="0"></div>
              <div class="icon_arch" data-tool="1"></div>
              <div class="icon_arch" data-tool="2"></div>
              <div class="icon_arch" data-tool="3"></div>
              <div class="icon_arch" data-tool="4"></div>
              <div class="icon_arch" data-tool="5"></div>
              <div class="icon_arch" data-tool="6"></div>
              <div class="icon_arch" data-tool="7"></div>
              <div class="icon_arch" data-tool="8"></div>
            </div>
            <!-- graph box 2 -->
            <div id="software_tools" class="graph_box">
              <div class="graph_play">
                <div class="stand_bar" data-stand="0">
                  <span style="height: 70%"></span>
                  <div class="stats_number">70%</div>
                  <div class="label_bar">TailwindCSS</div>
                </div>
                <div class="stand_bar" data-stand="1">
                  <span style="height: 65%"></span>
                  <div class="stats_number">65%</div>
                  <div class="label_bar">Bootstrap</div>
                </div>
                <div class="stand_bar" data-stand="2">
                  <span style="height: 50%"></span>
                  <div class="stats_number">50%</div>
                  <div class="label_bar">Github</div>
                </div>
                <div class="stand_bar" data-stand="3">
                  <span style="height: 68%"></span>
                  <div class="stats_number">68%</div>
                  <div class="label_bar">styled-components</div>
                </div>
                <div class="stand_bar" data-stand="4">
                  <span style="height: 65%"></span>
                  <div class="stats_number">65%</div>
                  <div class="label_bar">Figma</div>
                </div>
                <div class="stand_bar" data-stand="5">
                  <span style="height: 78%"></span>
                  <div class="stats_number">78%</div>
                  <div class="label_bar">CSS</div>
                </div>
              </div>
              <div class="title_graph_play eb-garamond-600">
                <p>I.T Tools</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- quote -->
      <div class="quote_container my-4">
        <div
          class="quote_ct w-100 d-flex flex-column justify-content-center align-items-center"
          style="color: var(--bg-principal)"
        >
          <ul class="w-100 mt-2">
            <li>
              <span class="text-decoration-underline" style="color: var(--text-color-two)"
                >Quote:</span
              >
            </li>
            <li class="quote_paragraph pt-3">
              <p class="fst-italic">
                <span>Somebody</span> should tell us, right at the start of our lives, that we are
                <span>dying</span>. Then we <span>might</span> live life to the limit, every minute
                of every day...
              </p>
            </li>
          </ul>

          <div class="author">
            <p class="author_name fw-bold" style="color: hsl(0, 0%, 27%)">Michael Landon</p>
          </div>
        </div>
      </div>
      <!-- interests -->
      <div class="interest_container">
        <div class="interest_accent d-flex flex-column flex-md-row">
          <div class="interest_label font_Satisfy">
            <h4>Interests</h4>
          </div>
          <div
            class="interest_list open-sans-400 w-100 d-flex justify-content-center justify-content-sm-end gap-2"
          >
            <p>writings</p>
            ,
            <p>movies</p>
            ,
            <p>Games</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.profile_bar[data-bar='0'] {
  position: relative;
  left: -0.25rem;
  flex-shrink: 0;
  width: 100%;
  height: 2px;
  margin-bottom: 2.2rem;
  background-color: #72b7ca;
  border-bottom-left-radius: 2px;
  box-shadow: -2px 2px 5px hsl(0, 8%, 45%);
}

.profile_bar[data-bar='1'] {
  position: relative;
  left: calc(12% - 0.5rem);
  flex-shrink: 0;
  width: 78%;
  height: 2px;
  margin-bottom: 2.2rem;
  background-color: hsl(0, 8%, 45%);
  border-bottom-left-radius: 2px;
  box-shadow: -2px 2px 5px hsl(0, 8%, 45%);
}

.profile_bar[data-bar='2'] {
  position: relative;
  left: calc(40% - 0.5rem);
  flex-shrink: 0;
  width: 60%;
  height: 2px;
  margin-bottom: 2.2rem;
  background-color: hsl(150, 44%, 42%);
  border-bottom-left-radius: 2px;
  box-shadow: -2px 2px 5px hsl(0, 8%, 45%);
}

.profile_bar[data-bar='3'] {
  position: relative;
  left: calc(45% - 0.5rem);
  flex-shrink: 0;
  width: 45%;
  height: 2px;
  margin-bottom: 2.2rem;
  /*   background-color: #7a3a3a;
 */
  background-color: hsl(0, 34%, 38%);
  border-bottom-left-radius: 2px;
  box-shadow: -2px 2px 5px hsl(0, 8%, 45%);
}

.profile_bar[data-bar='4'] {
  position: relative;
  left: calc(35% - 0.5rem);
  flex-shrink: 0;
  width: 65%;
  height: 2px;
  background-color: hsl(263, 17%, 57%);
  border-bottom-left-radius: 2px;
  box-shadow: -2px 2px 5px hsl(0, 8%, 45%);
}

/* graph skills colors */
#libraries_frameworks .stand_bar[data-stand='0'] > span,
#software_tools .stand_bar[data-stand='5'] > span {
  background-color: transparent;
  animation: javascript-progress-anim 1s ease-in-out 5.1s forwards;
  visibility: visible;
}

#libraries_frameworks .stand_bar[data-stand='1'] > span,
#software_tools .stand_bar[data-stand='4'] > span {
  background-color: transparent;
  animation: react-progress-anim 1s ease-in-out 5.1s forwards;
  visibility: visible;
}

#libraries_frameworks .stand_bar[data-stand='2'] > span,
#software_tools .stand_bar[data-stand='3'] > span {
  background-color: transparent;
  animation: express-progress-anim 1s ease-in-out 6s forwards;
  visibility: visible;
}

#libraries_frameworks .stand_bar[data-stand='3'] > span,
#software_tools .stand_bar[data-stand='2'] > span {
  background-color: transparent;
  animation: vue-progress-anim 1s ease-in-out 5.1s forwards;
  visibility: visible;
}

#libraries_frameworks .stand_bar[data-stand='4'] > span,
#software_tools .stand_bar[data-stand='1'] > span {
  background-color: transparent;
  animation: typescript-progress-anim 1s ease-in-out 5.1s forwards;
  visibility: visible;
}

#libraries_frameworks .stand_bar[data-stand='5'] > span,
#software_tools .stand_bar[data-stand='0'] > span {
  background-color: transparent;
  animation: node-progress-anim 1s ease-in-out 8s forwards;
  visibility: visible;
}

/*icons tool */
.icon_arch {
  width: 80%;
  height: 80%;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  place-items: center;
}

.icon_arch[data-tool='0'] {
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
  background-image: url('../assets/images/settings-pictures/settings-3-svgrepo-com.svg');
}
.icon_arch[data-tool='1'] {
  grid-column: 3 / span 1;
  grid-row: 2 / span 1;
}
.icon_arch[data-tool='2'] {
  grid-column: 4 / span 1;
  grid-row: 2 / span 1;
}
.icon_arch[data-tool='3'] {
  grid-column: 2 / span 1;
  grid-row: 3 / span 1;
}
.icon_arch[data-tool='4'] {
  grid-column: 3 / span 1;
  grid-row: 3 / span 1;
  background-image: url('../assets/images/settings-pictures/settings-5-svgrepo-com.svg');
}
.icon_arch[data-tool='5'] {
  grid-column: 4 / span 1;
  grid-row: 3 / span 1;
}
.icon_arch[data-tool='6'] {
  grid-column: 2 / span 1;
  grid-row: 4 / span 1;
}
.icon_arch[data-tool='7'] {
  grid-column: 3 / span 1;
  grid-row: 4 / span 1;
}
.icon_arch[data-tool='8'] {
  grid-column: 4 / span 1;
  grid-row: 4 / span 1;
  background-image: url('../assets/images/settings-pictures/settings-6-svgrepo-com.svg');
}

/* utilities */
ul {
  list-style: none;
  padding: 0;
}

@media (min-width: 160px) {
  .about_container {
    width: 100vw;
    padding: 2rem 1rem 0;
    margin: 0 auto;
    background-color: var(--bg-primary-color);
    border-top: 0.35rem solid #55a4b9;
    border-bottom: 0.75rem solid #448ca0;
  }

  /* presentation */

  .about_myself {
    width: 100%;
    display: grid;
    grid-template-areas:
      'capability'
      'profile';
    grid-template-rows: 3rem 14rem;
    gap: 1.5rem;
  }

  .domains_expertise {
    width: 90%;
    grid-area: capability;
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    color: var(--text-color-primar);
    font-size: calc(14px + 0.25vw);
    text-align: center;
    padding: 0.25rem 1rem;
    margin: 0 auto;
  }

  .profile_wrap {
    position: relative;
    width: 100%;
    grid-area: profile;
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
    display: grid;
    grid-template-columns: 72% 26%;
    gap: 1rem;
  }

  .profile_box {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 3;
  }

  .profile_box .profile_img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    background: url('../assets/images/profile_1.png') no-repeat;
    background-position: center top -10px;
    background-size: cover;
    border-radius: 5px;
    box-shadow: -2px -2px 5px var(--bg-navbar);
  }

  /* skills architecture */
  .title_arch_desk {
    display: none;
  }

  .graph_icons_container {
    display: none;
  }

  .graph_portait {
    width: 100%;
    margin-top: 0.5rem;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 18rem 18rem;
    gap: 3rem;
  }

  #libraries_frameworks {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }

  #software_tools {
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
  }

  .graph_box {
    display: grid;
    grid-template-areas:
      'title'
      'graph';
    grid-template-rows: 14% 86%;
    padding: 0 0.5rem;
  }

  .title_graph_play {
    grid-area: title;
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    height: 2.4rem;
    color: var(--bg-shift-secondary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: calc(20px + 0.15vw);
    /*  font-weight: bold; */
  }

  .graph_play {
    grid-area: graph;
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
    width: 100%;
    height: 100%;
    /* padding-top: 0.5rem; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
  }

  .stand_bar {
    position: relative;
    height: 2rem;
    flex-basis: 100%;
    width: 100%;
    padding: 10px 6px;
    color: #d4d4d4;
    background-color: var(--bg-secondary-color);
    border-radius: 25px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .stand_bar span {
    position: relative;
    top: 0;
    display: block;
    width: 100%;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    visibility: hidden;
  }

  .stand_bar .stats_number {
    position: absolute;
    top: 2px;
    left: calc(100% - 2rem);
    font-size: calc(12px + 0.18vw);
  }

  .stand_bar .label_bar {
    position: absolute;
    bottom: 8px;
    left: 10px;
    color: var(--text-color-three);
    writing-mode: unset;
    font-size: calc(11px + 0.15vw);
  }

  /* quote */
  .interest_list p {
    width: min-content;
    padding-bottom: 2px;
    font-size: calc(14px + 0.1vw);
    border-bottom: 1px solid #333;
  }
}

@media (min-width: 430px) {
  .about_container {
    padding: 2rem 2rem 1rem;
  }

  .about_myself {
    grid-template-rows: 3rem 20rem;
    gap: 1.5rem;
  }

  .profile_wrap {
    margin: 2.3rem 0 1rem;
    display: grid;
    grid-template-columns: 60% 36%;
    gap: 1rem;
  }

  .profile_box {
    width: 16.4rem;
    height: 18rem;
  }

  .profile_box .profile_img {
    background-position: center top -2px;
  }

  .profile_bubble {
    position: absolute;
    top: 0;
    right: calc(8%);
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }

  .profile_bubble_1,
  .profile_bubble_2,
  .profile_bubble_3,
  .profile_bubble_4 {
    position: absolute;
    /* border: 2px solid var(--text-color-three); */
    box-shadow: 0px 0px 5px var(--bg-secondary-color);
    border-radius: 50%;
    z-index: 1;
  }

  .profile_bubble_1 {
    width: 80%;
    height: 90%;
    grid-column: 5 / span 1;
    grid-row: 2 / span 1;
    transform: skewX(-30deg);
  }

  .profile_bubble_2 {
    top: -1rem;
    left: -50%;
    width: 100%;
    height: 100%;
    grid-column: 4 / span 1;
    grid-row: 1 / span 1;
    transform: skewX(35deg);
  }

  .profile_bubble_3 {
    width: 100%;
    height: 100%;
    grid-column: 4 / span 1;
    grid-row: 4 / span 1;
    transform: skewX(30deg);
  }

  .profile_bubble_4 {
    width: 70%;
    height: 60%;
    grid-column: 5 / span 1;
    grid-row: 6 / span 1;
    transform: skewX(-40deg);
  }

  /* presentation */

  .domains_expertise {
    width: 60%;
    font-size: calc(16px + 0.25vw);
  }

  /* skills architecture */

  .graph_portait {
    margin-top: 3.25rem;
  }

  .graph_box {
    grid-template-rows: 5% 95%;
    padding: 0 0.5rem;
  }

  .title_graph_play {
    font-size: calc(22px + 0.15vw);
  }

  .graph_play {
    padding: 1rem 0 0.5rem;
    display: flex;
    flex-direction: row;
    gap: 0;
  }

  .stand_bar {
    position: relative;
    height: 90%;
    flex-basis: 16%;
    max-width: 2rem;
    padding: 10px 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .stand_bar span {
    position: relative;
    top: 10px;
  }

  .stand_bar .stats_number {
    position: absolute;
    top: 1rem;
    left: 5px;
    font-size: calc(12px + 0.18vw);
  }

  .stand_bar .label_bar {
    position: absolute;
    top: 20%;
    left: 8px;
    /* writing-mode: sideways-lr; */
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    font-size: calc(11px + 0.15vw);
    display: flex;
    justify-content: center;
  }

  /* interests */
  .interest_list p {
    font-size: calc(15px + 0.1vw);
  }
}

@media (min-width: 768px) {
  .about_myself {
    max-width: 94%;
    margin: 0 auto;
    grid-template-rows: 3rem 28rem;
  }

  .domains_expertise {
    font-size: calc(17px + 0.25vw);
    padding: 0.5rem 1rem 2rem;
  }

  .profile_box {
    width: 21rem;
    height: 24rem;
  }

  .profile_box .profile_img {
    background-position: center top -14px;
  }
  /* skills architecture */
  .title_arch_desk {
    height: 6rem;
    color: #111111ef;
    display: grid;
    padding: 0.5rem 0;
    display: grid;
    place-items: center;
    font-size: calc(24px + 0.18vw);
  }

  .graph_portait {
    width: 100%;
    max-width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 35% 30% 35%;
    grid-template-rows: 16rem;
    gap: 0;
  }

  .graph_box {
    display: grid;
    grid-template-areas:
      'graph'
      'title';
    grid-template-rows: 90% 10%;
    padding: 0 0.5rem;
  }

  #libraries_frameworks {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }

  #software_tools {
    grid-column: 3 / span 1;
    grid-row: 1 / span 1;
  }

  .title_graph_play {
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
    height: 2rem;
    text-decoration: underline;
    font-size: calc(22px + 0.15vw);
  }

  #libraries_frameworks .title_graph_play {
    padding-left: 1rem;
    justify-content: flex-start;
  }

  #software_tools .title_graph_play {
    padding-right: 1rem;
    justify-content: flex-end;
  }
  .graph_play {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }

  .graph_icons_container {
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
  /* quote */
  .quote_ct .quote_paragraph {
    max-width: 60%;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  .quote_ct .author {
    width: 70%;
    display: flex;
    justify-content: end;
    /*  margin: 0 auto; */
  }

  /* interests */
  .interest_list p {
    /* font-size: calc(16px + 0.1vw); */
  }
}

/*progress anim */

@keyframes css-progress-anim {
  0% {
    height: 0;
    background-color: #f4f4f4;
  }
  100% {
    height: 85%;
    background-color: #577e45;
  }
}

@keyframes javascript-progress-anim {
  0% {
    height: 0;
    background-color: #f4f4f4;
  }
  100% {
    height: 80%;
    background-color: #c0a405;
  }
}

@keyframes react-progress-anim {
  0% {
    height: 0;
    background-color: #f4f4f4;
  }
  100% {
    height: 76%;
    background-color: #45637e;
  }
}

@keyframes vue-progress-anim {
  0% {
    height: 0;
    background-color: #f4f4f4;
  }
  100% {
    height: 76%;
    background-color: #45637e;
    background-color: #74b855;
  }
}

@keyframes typescript-progress-anim {
  0% {
    height: 0;
    background-color: #f4f4f4;
  }
  100% {
    height: 76%;
    background-color: #45637e;
    background-color: #7e4579;
  }
}

@keyframes express-progress-anim {
  0% {
    height: 0;
    background-color: #f4f4f4;
  }
  100% {
    height: 75%;
    background-color: #68737c;
    /* background-color: #457e76; */
  }
}

@keyframes node-progress-anim {
  0% {
    height: 0%;
    background-color: #f4f4f4;
  }
  100% {
    height: 60%;
    background-color: #9c3840;
  }
}
</style>
