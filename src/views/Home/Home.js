export default {
  name: 'home',
  components: {},
  props: [],
  data () {
    return {

      questions: [
        {
          id: 1,
          text: 'Question 1',
          answers: [
            { id: 1, text: 'Answer 1' },
            { id: 2, text: 'Answer 2' },
            { id: 3, text: 'Answer 3' }
          ],
          selectedAnswer: 0,
          correctAnswer: 1
        },
        {
          id: 2,
          text: 'Question 2',
          answers: [
            { id: 1, text: 'Answer 1' },
            { id: 2, text: 'Answer 2' },
            { id: 3, text: 'Answer 3' }
          ],
          selectedAnswer: 0,
          correctAnswer: 2
        },
        {
          id: 2,
          text: 'Question 3',
          answers: [
            { id: 1, text: 'Answer 1' },
            { id: 2, text: 'Answer 2' },
            { id: 3, text: 'Answer 3' }
          ],
          selectedAnswer: 0,
          correctAnswer: 3
        }
      ],
      currentQ: null,
      currentQIndex: 0,
      finalize: false
    }
  },
  computed: {

  },
  mounted () {
    this.currentQ = this.questions[this.currentQIndex];
  },
  methods: {

    /**
     * Change actual question
     * @param direction false si es previous, true si en next
     */
    changeQuestion(direction)
    {
      if (direction) {

        // Error with not answers 
        if(this.currentQ.selectedAnswer == 0)
        {
          alert('Select one questions before continue.');
          return false;
        }

        // Next questions indice 
        var newVal = this.currentQIndex + 1;
        this.currentQIndex = newVal;


        // If the answer it's last, then show results. 
        if(newVal == this.questions.length)
        {
          this.finalize = true;
        }

      }else {
        this.currentQIndex = this.currentQIndex - 1;
      }

      this.currentQ = this.questions[this.currentQIndex];
    },

    findAnswerTextById(question, idAnswer){
      return question.answers.find(a => a.id == idAnswer).text;
    },

    resetQuiz()
    {
      this.currentQIndex = 0;
      this.currentQ = this.questions[0];
      this.finalize = false;

      // Clean answers
      this.questions.forEach(q => q.selectedAnswer = 0);

    },
    /**
     * Devuelve el texto cantCorrectAnswer / Cant Total Answers
     */
    getResultText() {
      var cantCorrectas = 0 ;

      this.questions.forEach(q => {
        if(q.correctAnswer == q.selectedAnswer)
        {
          cantCorrectas = cantCorrectas + 1;
        }
      });
      return  cantCorrectas + ' de ' + this.questions.length;
    }



  }
}
