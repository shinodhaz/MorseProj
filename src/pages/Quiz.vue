<template>
  <div>
    <div>
      {{question}}
    </div>

    <div>
    <b-row>
        <b-col cols="6">
          {{answer1}}
        </b-col>
        <b-col cols="6">
          {{answer2}}
        </b-col>
        <b-col cols="6">
          {{answer3}}
        </b-col>
        <b-col cols="6">
          {{answer4}}
        </b-col>
    </b-row> 
    </div>
  </div>
</template>

<script>
const question = [
  "life",
  "love",
  "ness",
  "ring",
  "wolf",
  "fish",
  "five",
  "king",
  "tree",
  "over"
];

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
      answer1: "",
      answer2: "",
      answer3: "",
      answer4: "",
      question: ""
    };
  },
  methods: {
    getMorseWord(a) {
      var word = a;
      for (var i = 0; i < morseListChar.length; i++) {
        if (word == morseListChar[i][1]) {
          return morseListChar[i][2];
        }
      }
      return word;
    },
    translateWords(a) {
      var words = "";
      var splitWord = a.split("");
      for (var i = 0; i < splitWord.length; i++) {
        console.log(splitWord[i]);
        words += this.getMorseWord(splitWord[i]);
      }
      return words;
    },
    randomWord() {
      return question[Math.floor(Math.random() * question.length)];
    }
  },
  created: function() {
    this.question = this.randomWord();
    this.answer1 = this.translateWords(this.randomWord());
    this.answer2 = this.translateWords(this.randomWord());
    this.answer3 = this.translateWords(this.randomWord());
    this.answer4 = this.translateWords(this.randomWord());
  }
};
</script>
