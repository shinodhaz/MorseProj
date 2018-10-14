<template>
  <div>
      <div>
        <textarea v-on:keyup="reversedMessage()" v-model="translate" name="" id="" rows="5"></textarea>
      </div>
      <div>
        <div>
          {{translated}}
        </div>
      </div>
  </div>
</template>

<script>
const morseListChar = [
  ["A", "a", ".-"],
  ["B", "b", "-..."],
  ["C", "c", "-.-."],
  ["D", "d", "-.."],
  ["E", "e", "."],
  ["F", "f", "..-."],
  ["G", "g", "--."],
  ["H", "h", "...."],
  ["I", "i", ".."],
  ["J", "j", ".---"],
  ["K", "k", "-.-"],
  ["L", "l", ".-.."],
  ["M", "m", "--"],
  ["N", "n", "-."],
  ["O", "o", "---"],
  ["P", "p", ".--."],
  ["Q", "q", "--.-"],
  ["R", "r", ".-."],
  ["S", "s", "..."],
  ["T", "t", "-"],
  ["U", "u", "..-"],
  ["V", "v", "...-"],
  ["W", "w", ".--"],
  ["X", "x", "-..-"],
  ["Y", "y", "-.--"],
  ["Z", "z", "--.."]
];

export default {
  data() {
    return {
      translate: "",
      translated: ""
    };
  },
  methods: {
    getMorseWord: function(a) {
      var word = a;
      for (var i = 0; i < morseListChar.length; i++) {
        if (word == morseListChar[i][1]) {
          return morseListChar[i][2];
        }
      }
      return word;
    },
    reversedMessage: function() {
      this.translated = "";
      var splitWord = this.translate.split("");
      for (var i = 0; i < splitWord.length; i++) {
        this.translated += this.getMorseWord(splitWord[i]);
      }
    }
  }
};
</script>
