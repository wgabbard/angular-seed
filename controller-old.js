'use strict';

/* Controllers */

angular.module('quizQuestions')
  .controller('QuestionController', ['$scope', '$interval', '$location', function ($scope, $interval, $location) {
      this.quizQuestions = questions;
      function Quiz(args) {
          this.questions = [];
          this.name = args.name;
          this.title = args.title;          
      };

      function Question(args) {
          this.number = args.number;
          this.text = args.text;
          this.answers = args.answers;
          this.correctAnswer = args.correctAnswer;
          this.correctMsg = args.correctMsg;
          this.errorMsg = args.errorMsg;
      }
      var createQuiz = function () {
          var quiz = new Quiz({
              name: "ccfaQuiz",
              title: "CCFA Quiz"
              
          });
          quiz.questions.push({
              details: new Question({
                  number: 1,
                  text: "Approximately ____ Americans are currently living with IBD, a growth of about 200,000 since this figure was last reported in 2011.",
                  answers: ["1.4 million","1.5 million","1.6 million"],
                  correctAnswer: 2,
                  correctMsg: '',
                  errorMsg: '', 
              }),
          });
          quiz.questions.push({
              details: new Question({
                  number: "2",
                  description: "As many as _____ new cases are diagnosed in the United States each year.",
                  answers: ['70,000', '75,000', '80,000'],
              }),
              correctAnswer: 3,
              correctMsg: '',
              errorMsg: '',
          });  
          quiz.questions.push({
              details: new Question({
                  number: "3",
                  description: "There may be as many as ____ children in the United States living with either Crohn’s disease or ulcerative colitis.",
                  answers: ['60,000', '80,000', '100,000'],
              }),
              correctAnswer: 3,
              correctMsg: '',
              errorMsg: '',
          }); 
           quiz.questions.push({
              details: new Question({
                  number: "4",
                  description: "One of the fastest growing patient populations is ____",
                  answers: ['Adults over the age of 35', 'Children under the age of 18', 'Young adults age 21-35'],
              }),
              correctAnswer: 3,
              correctMsg: '',
              errorMsg: '',
          }); 
          quiz.questions.push({
              details: new Question({
                  number: "5",
                  description: "While the exact cause of IBD is not entirely understood, it is known to involve",
                  answers: ['The immune system', 'A person’s genes', 'Environmental factors', 'All of the above'],
              }),
              correctAnswer: 3,
              correctMsg: '',
              errorMsg: '',
          });  
          quiz.questions.push({
              details: new Question({
                  number: "6",
                  description: "Active smokers are ____as likely as nonsmokers to develop Crohn’s disease.",
                  answers: ['More than twice', 'More than three times', 'More than four times'],
              }),
              correctAnswer: 3,
              correctMsg: '',
              errorMsg: '',
          });
          quiz.questions.push({
              details: new Question({
                  number: "7",
                  description: "Ideally, women with IBD should be in remission for ___ before becoming pregnant.",
                  answers: ['3-6 months', '6-8 months', '1 year'],
              }),
              correctAnswer: 3,
              correctMsg: '',
              errorMsg: '',
          });             
          quiz.questions.push({
              details: new Question({
                  number: "8",
                  description: "The total annual financial burden (both indirect and direct costs) of IBD in the United States is an estimated ____",
                  answers: ['$12.3 billion to $29.6 billion', '$14.6 billion to $31.6 billion', '$15.5 billion to $35.6 billion'],
              }),
              correctAnswer: 3,
              correctMsg: '',
              errorMsg: '',
          });
          return quiz;
      }

      var init = function () {
          createQuiz();
      };

      init();
  }]);