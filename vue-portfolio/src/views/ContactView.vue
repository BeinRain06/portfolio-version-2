<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

import { sendDataMail } from '../api_functions/api_function.ts'

const tweetRef = <HTMLDivElement>ref()
const gitRef = <HTMLDivElement>ref()
const linkedInRef = <HTMLDivElement>ref()
const warningDiv = <HTMLDivElement>ref()
const nameInputForm = <HTMLInputElement>ref()
const emailInputForm = <HTMLInputElement>ref()
const msgTextAreaForm = <HTMLTextAreaElement>ref()

const thisURL = <string>(
  ref(
    'https://script.google.com/macros/s/AKfycbypH2BtAHlCavQC5M35GMVIYS4NKpllq5XnRp1c-YWk70TLZAbqG8AQftGl5MwLjwZgVQ/exec'
  )
)

let media = <string>reactive({ mediaLink: '' })
let emailFormat = <{ name: string; email: string; message: string }>reactive({
  name: '',
  email: '',
  message: ''
})
let warningAttribute = <{ stateError: boolean; stateSuccess: boolean; message: string }>reactive({
  stateError: false,
  stateSuccess: false,
  message: ''
})

const formTag = computed(() => {
  const newObj = {
    name: nameInputForm.value,
    email: emailInputForm.value,
    message: msgTextAreaForm.value
  }

  return newObj
})

function redirectionMedia(e, label) {
  if (label === 'tweeter') {
    media.mediaLink = 'https://twitter.com/nest_Ngoueni'
  } else if (label === 'github') {
    media.mediaLink = 'https://github.com/BeinRain06'
  } else if (label === 'linkedin') {
    media.mediaLink = 'https://www.linkedin.com/in/gerard-ngouend-5a0584244/'
  }

  window.open(media.mediaLink, '_blank')
}

function handThisData(e, element) {
  if (element === 'name') {
    emailFormat.name = e.target.value
  } else if (element === 'email') {
    emailFormat.email = e.target.value
  } else if (element === 'message') {
    emailFormat.message = e.target.value
  }
}

function delayTime(timeSet) {
  setTimeout((): void => {
    emailFormat.name = ''
    emailFormat.email = ''
    emailFormat.message = ''

    warningAttribute.message = ''
    warningAttribute.stateError = false
    warningAttribute.stateSuccess = false

    nameInputForm.value.value = ''
    emailInputForm.value.value = ''
    msgTextAreaForm.value.value = ''
  }, timeSet)
}

function sendOurMailReview(e, emailFormat) {
  // \w - alias for [a-zA-Z_0-9]
  // "whitespace"?  - allow whitespace after word, set is as optional
  const regExName = /^[a-zA-Z]{1,2}(\w+ ?)+$/
  const regEXEmail = /^([a-zA-Z0-9_\-\.\+]+)@([a-zA-Z0-9_\-\.]+)\.[a-zA-Z]{2,5}$/

  console.log(emailFormat)

  const checkName = regExName.test(emailFormat.name)
  const checkEmail = regEXEmail.test(emailFormat.email)

  console.log(emailFormat.name)
  console.log(checkName)

  if (emailFormat.name === '' || emailFormat.email === '') {
    warningAttribute.message = 'name and email needed!'

    warningAttribute.stateError = true

    delayTime(5000)

    return
  }

  if (emailFormat.message === '') {
    warningAttribute.message = 'Please Leave a Message!'

    warningAttribute.stateError = true

    delayTime(5000)
  }

  if (checkName && checkEmail) {
    const formatMailObj = {
      name: emailFormat.name,
      email: emailFormat.email,
      message: emailFormat.message
    }

    // Method POST Email
    sendDataMail(formatMailObj, thisURL.value)

    warningAttribute.message = 'Message Sent'

    warningAttribute.stateSuccess = true

    delayTime(3000)
  } else if (!checkName && !checkEmail) {
    warningAttribute.message = 'There is an error. Check field name and email!'

    warningAttribute.stateError = true

    delayTime(5000)

    return
  } else if (!checkName) {
    warningAttribute.message = 'error  name !'

    delayTime(5000)

    return
  } else if (!checkEmail) {
    warningAttribute.message = 'error email !'
    warningAttribute.stateError = true

    delayTime(5000)

    return
  }
}
</script>
<template>
  <section id="contact_page">
    <div class="msg_and_form_container container-fluid">
      <div class="msg_together row d-flex flex-column align-items-center">
        <div class="main_contact_area">
          <!--contact board -->
          <div class="contact_board">
            <div class="social_activity">
              <div class="social_msg">
                <p class="social_says">social media</p>
              </div>
              <div class="social_media_wrap">
                <div class="social_media">
                  <div
                    id="link_tweeter"
                    class="tweeter_wrapper link_media"
                    ref="tweetRef"
                    @click.prevent="(e) => redirectionMedia(e, 'tweeter')"
                  ></div>
                  <div
                    id="link_github"
                    class="github_wrapper link_media"
                    ref="gitRef"
                    @click.prevent="(e) => redirectionMedia(e, 'github')"
                  ></div>
                  <div
                    id="link_linkedin"
                    class="linkedin_wrapper link_media"
                    ref="linkedInRef"
                    @click.prevent="(e) => redirectionMedia(e, 'linkedin')"
                  ></div>
                </div>
              </div>
            </div>
            <div class="form_side"></div>
          </div>

          <!--form container -->
          <form class="form_container">
            <div class="sharing_msg">
              <p class="message_me">Let's Build Something Together !</p>
            </div>
            <div id="name_wrap" class="name_wrap form_content_control">
              <label for="signature">Guess Name</label>
              <input
                type="text"
                id="name"
                class="input_field"
                name="name"
                placeholder="signature"
                ref="nameInputForm"
                @input.event="(e) => handThisData(e, 'name')"
              />
            </div>
            <div id="email_wrap" class="email_wrap form_content_control">
              <label for="email">email</label>
              <input
                type="text"
                id="email"
                class="input_field"
                name="email"
                placeholder="email_address"
                ref="emailInputForm"
                @input.event="(e) => handThisData(e, 'email')"
              />
              <div class="warning_submit_msg" v-if="warningAttribute.stateError" ref="warningDiv">
                <p class="w-100 h-100 d-flex justify-content-center align-items-center m-0">
                  {{ warningAttribute.message }}
                </p>
              </div>
              <div class="success_submit_msg" v-if="warningAttribute.stateSuccess" ref="warningDiv">
                <p class="w-100 h-100 d-flex justify-content-center align-items-center m-0">
                  {{ warningAttribute.message }} &#10003;
                </p>
              </div>
            </div>
            <div id="message_wrap" class="message_wrap form_content_control">
              <label for="message">Leave a Message</label>
              <textarea
                id="message"
                name="message"
                class="message"
                placeholder="drop_message"
                rows="5"
                cols="30"
                ref="msgTextAreaForm"
                @input.event="(e) => handThisData(e, 'message')"
              ></textarea>
            </div>
            <div class="submit_container">
              <button class="btn_sub_msg" @click.prevent="(e) => sendOurMailReview(e, emailFormat)">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/*Main container*/

@media (min-width: 160px) {
  .msg_and_form_container .msg_together {
    position: relative;
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
  }

  /* drop a message */
  .main_contact_area {
    position: relative;
    top: 0rem;
    width: 80%;
    height: auto;
    margin: 0 0 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }

  /* --------------- */

  .link_media {
    position: relative;
    width: 2rem;
    height: 2rem;
    padding: 0rem;
    background-image: url('../assets/images/linkedin-svgrepo-com.svg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 3;
  }

  .tweeter_wrapper.link_media {
    background-image: url('../assets/images/x_logo_twitter_new_brand_icon.svg');
  }

  .github_wrapper.link_media {
    background-image: url('../assets/images/logo-github-svgrepo-com.svg');
  }

  .link_media::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0.25rem;
    opacity: 0.8;
    border-radius: 5px;
    border: 1px solid transparent;
    transition: all 1s ease-in-out;
  }

  .link_media:hover::before {
    border-radius: 5px;
    border: 1px solid #fff;
  }

  .msg_and_form_container {
    position: relative;
    top: 0;
    width: 100vw;
    height: auto;
    padding: 0;
    background-image: linear-gradient(
      to right,
      #151365,
      #121c6a,
      #11256e,
      #122d71,
      #153474,
      #193a79,
      #1d407e,
      #214683,
      #254d8c,
      #295496,
      #2c5b9f,
      #3062a9
    );
  }

  .main_contact_area {
    width: 90%;
    height: 595px;
    max-width: 680px;
    margin: 2.5rem 0 2rem;
    display: flex;
    flex-direction: column-reverse;
  }

  .contact_board {
    position: relative;
    top: 0.5rem;
    padding: 0;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100px;
  }

  .contact_board .social_activity {
    padding: 0px 8px 5px;
    display: flex;
    flex-direction: column;
  }

  .social_activity .social_msg {
    width: 100vw;
    height: 35px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .social_msg .social_says {
    position: relative;
    top: 0;
    color: rgba(51, 51, 131, 0.87);
    padding-left: 12px;
    writing-mode: horizontal-tb;
    font-size: 11px;
  }

  .social_activity .social_media_wrap {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .social_activity .social_media {
    width: 100%;
    height: 40px;
    font-size: calc(14px + 0.15vw);
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
  }

  .social_media .link_media {
    width: 1.3em;
    height: 1.3em;
    padding: 0;
  }

  .form_container {
    width: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    justify-content: center;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }

  .form_container input,
  .form_container button {
    border: none;
    outline: none;
  }

  .sharing_msg {
    position: relative;
    width: 100%;
    top: 1rem;
    display: flex;
    justify-content: center;
    border: 1px solid transparent;
  }

  .sharing_msg .message_me {
    font-size: calc(14px + 0.1vw);
    color: #bebebe;
    padding: 5px 0;
    transition: all 380ms ease-in-out;
  }

  .sharing_msg .message_me:hover {
    color: navy;
    letter-spacing: 0.35px;
    box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.38);
    font-size: calc(14px + 0.35vw);
  }

  .name_wrap {
    letter-spacing: 0 !important;
  }

  .email_wrap {
    position: relative;
  }

  .email_wrap .warning_submit_msg,
  .email_wrap .success_submit_msg {
    position: absolute;
    top: 5px;
    width: 80%;
    padding: 5px 10px;
    color: brown;
    background-color: #cfcd51;
    visibility: visible;
    opacity: 1;
    border-radius: 5px;
    box-shadow: -1px -2px 3px rgba(0, 0, 0, 0.3);
    transition: all 450ms ease;
  }

  .email_wrap .success_submit_msg {
    background-color: #aafc9f;
    color: #0b8a3b;
  }

  .message_wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }

  .message_wrap textarea {
    padding: 5px;
    color: #e2e2e0;
    background-color: transparent;
    outline: none;
    border-radius: 5px;
    border: 1px solid #c5c3c3;
    box-shadow: 0px 0px 4px rgb(127, 127, 131);
  }

  .message_wrap textarea:focus {
    border: 2px solid #1d5391;
  }

  .submit_container {
    position: relative;
    width: 100%;
    padding: 0;
    margin: 2.5rem auto 0;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: visible;
  }

  .submit_container .btn_sub_msg {
    width: 100%;
    color: #fff;
    padding: 12px 0;
    background-color: rgb(88, 115, 151);
    border-radius: 5px;
    font-size: calc(14px + 0.25vw);
    transition: all 350ms ease-in-out;
  }

  .submit_container .btn_sub_msg:hover {
    background-color: rgb(28, 74, 143);
  }

  .form_content_control {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .form_container label {
    position: relative;
    top: 0;
    left: 0;
    width: 40%;
    color: rgb(209, 190, 228);
    font-size: calc(11px + 0.3vw);
    font-family: Georgia, 'Times New Roman', Times, serif;
    display: block;
    float: left;
  }

  .form_container input {
    height: 32px;
    color: #e2e2e0;
    padding-left: 0.5rem;
    margin-bottom: 1rem;
    background-color: transparent;
    border-bottom: 1px solid #c5c3c3;
    border-bottom-right-radius: 5px;
    transition: all 300ms ease-in-out;
  }

  .form_container input:focus {
    border-bottom: 2px solid #1d5391;
  }

  .form_container input::placeholder,
  .form_container textarea::placeholder {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 10px;
  }
}

@media (min-width: 460px) {
  .link_station {
    height: calc(100vh - 50px);
  }

  .main_contact_area {
    width: 84%;
    height: 660px;
  }

  .sharing_msg {
    justify-content: flex-end;
    border: 1px solid transparent;
  }

  .sharing_msg .message_me {
    padding: 3px 0;
    font-size: calc(13px + 0.15vw);
  }

  .sharing_msg .message_me:hover {
    color: navy;
    letter-spacing: 0.5px;
    font-size: calc(13px + 0.25vw);
  }

  .form_container label {
    width: 40%;
    font-size: calc(14px + 0.3vw);
  }

  .form_content_control {
    gap: 0.25rem;
  }

  .message_wrap {
    padding-top: 1rem;
    gap: 1.25rem;
  }

  .submit_container {
    margin: 3rem auto 0;
  }

  .submit_container .btn_sub_msg {
    padding: 15px 0;
  }
}

@media (min-width: 768px) {
  .main_contact_area {
    top: 0;
    left: -0.35rem;
    width: 80%;
    height: 40rem;
    max-width: 920px;
    flex-direction: row;
    gap: 20px;
  }

  .main_contact_area * div {
    width: 100%;
    height: 100%;
  }

  .form_side {
    width: 100%;
    flex-direction: row;
  }

  .contact_board {
    top: 5rem;
    height: 65%;
    grid-template-columns: 140px;
    grid-template-rows: 90%;
  }

  .contact_board .social_activity {
    height: 100%;
    padding: 10px 8px;
    background-color: rgba(107, 25, 100, 0.18);
  }

  .social_activity .social_msg {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .social_msg .social_says {
    writing-mode: sideways-lr;
    top: 15px;
    color: #9595ee;
    padding-left: 0px;
    letter-spacing: 1px;
    font-size: calc(14px + 0.15vw);
  }

  .social_activity .social_media_wrap {
    flex: 0 0 1;
    flex-direction: column;
  }

  .social_activity .social_media {
    justify-content: center;
    align-items: baseline;
    margin-top: 0;
    gap: 1.25rem;
  }

  .social_media .link_media {
    width: 1.2rem;
    height: 1.2rem;
    padding: 0;
  }

  .form_container {
    display: grid;
    grid-template-areas:
      '. . with_me with_me with_me'
      'guess guess guess guess .'
      'email email email submit submit'
      'msg msg msg msg msg';
    grid-template-rows: 140px;
    padding: 10px 8px 10px 8px;
    row-gap: 10px;
  }

  .sharing_msg {
    grid-area: with_me;
    position: relative;
    top: 5rem;
    left: 0;
    bottom: 0;
    padding: 0.5rem 0;
    float: right;
    border-radius: 5px;
    border-top: 1px solid #c5c3c3;
  }

  .sharing_msg .message_me {
    font-size: calc(13px + 0.3vw);
    color: #cac6c6;
    font-weight: bolder;
    padding-top: -0.15rem;
    margin-bottom: 0;
    transform: scale(1);
    transition: all 350ms ease-in-out;
  }

  .sharing_msg .message_me:hover {
    color: navy;
    letter-spacing: 0px;
    padding-top: 0.15rem;
  }

  .email_wrap {
    grid-area: email;
  }

  .name_wrap {
    grid-area: guess;
  }

  .message_wrap {
    padding-top: 2rem;
    grid-area: msg;
    height: 12rem !important;
  }

  .submit_container {
    grid-area: submit;
    padding: 1rem;
    border: 1px solid gray;
  }

  .submit_container .btn_sub_msg {
    width: 90%;
    padding: 15px;
    transition: all 350ms ease-in-out;
  }

  input.input_field {
    min-height: 35px;
    padding: 0.5rem;
    width: 60%;
  }

  textarea.message {
    padding: 0.5rem;
  }

  input.input_field::placeholder,
  textarea.message::placeholder {
    font-size: calc(12px + 0.25vw);
  }
}
</style>
