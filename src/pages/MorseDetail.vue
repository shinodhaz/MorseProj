<template>
  <div >
    <b-tabs>
  <b-tab title="Character" active>
    <b-row>
        <b-col cols="3" v-for="item in itemsChar">
          <div>
            {{item[1].toUpperCase() }} <br> {{item[2]}}
          </div>
        </b-col>
    </b-row> 
  </b-tab>
  <b-tab title="Number" >
    <b-row>
        <b-col cols="3" v-for="item in itemsNo">
          <div>
            {{item[1].toUpperCase() }} <br> {{item[2]}}
          </div>
        </b-col>
    </b-row>
  </b-tab>
    <b-tab title="Punctuation" >
    <b-row>
        <b-col cols="3" v-for="item in itemsPunc">
          <div>
            {{item[1].toUpperCase() }} <br> {{item[2]}}
          </div>
        </b-col>
    </b-row>
  </b-tab>
</b-tabs>
  </div>
</template>

<script>

const morseListPuc = [
  [ "PERIOD", ".", ".-.-.-" ],
  [ "COMMA", ",", "--..--" ],
  [ "QUESTION_MARK", "?", "..--.." ],
  [ "APOSTROPHE", "'", ".----." ],
  [ "EXCLAMATION_MARK", "!", "-.-.--" ],
  [ "SLASH", "/", "-..-." ],
  [ "OPEN_PAREN", "(", "-.--.-" ],
  [ "CLOSE_PAREN", ")", "-.--.-" ],
  [ "AMPERSAND", "&", ".-..." ],
  [ "COLON", ":", "---..." ],
  [ "SEMI_COLON", ";", "-.-.-." ],
  [ "EQUALS", "=", "-...-" ],
  [ "PLUS", "+", ".-.-." ],
  [ "MINUS", "-", "-....-" ],
  [ "UNDERSCORE", "_", "..--.-" ],
  [ "DOUBLE_QUOTE","\"", ".-..-." ],
  [ "DOLLAR_SIGN", "$", "...-..-" ],
  [ "AT_SIGN", "@", ".--.-." ]
]

const morseListNumber = [
  [ "0", "0", "-----" ],
  [ "1", "1", ".----" ],
  [ "2", "2", "..---" ],
  [ "3", "3", "...--" ],
  [ "4", "4", "....-" ],
  [ "5", "5", "....." ],
  [ "6", "6", "-...." ],
  [ "7", "7", "--..." ],
  [ "8", "8", "---.." ],
  [ "9", "9", "----." ]
]

const morseListChar = [
  
  [ "A", "a", ".-" ],
  [ "B", "b", "-..." ],
  [ "C", "c", "-.-." ],
  [ "D", "d", "-.." ],
  [ "E", "e", "." ],
  [ "F", "f", "..-." ],
  [ "G", "g", "--." ],
  [ "H", "h", "...." ],
  [ "I", "i", ".." ],
  [ "J", "j", ".---" ],
  [ "K", "k", "-.-" ],
  [ "L", "l", ".-.." ],
  [ "M", "m", "--" ],
  [ "N", "n", "-." ],
  [ "O", "o", "---" ],
  [ "P", "p", ".--." ],
  [ "Q", "q", "--.-" ],
  [ "R", "r", ".-." ],
  [ "S", "s", "..." ],
  [ "T", "t", "-" ],
  [ "U", "u", "..-" ],
  [ "V", "v", "...-" ],
  [ "W", "w", ".--" ],
  [ "X", "x", "-..-" ],
  [ "Y", "y", "-.--" ],
  [ "Z", "z", "--.." ],
]

export default {
  data(){
    return{
      itemsChar: morseListChar,
      itemsNo: morseListNumber,
      itemsPunc: morseListPuc
    }
  }
}
</script>


<style>
  .nav.nav-tabs li{
      width: 33.33%;
      margin-top: 10px;
  }

  .col-3 {
      height: calc(15vw);
      padding: 10px 10px;
  }

  .row{
    margin-right: 0px;
  }
</style>