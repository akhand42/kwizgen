Template.quizView.onCreated(function(){
  this.autorun(() =>  {
    this.subscribe('quiz',FlowRouter.getParam('id'));
  })
})

Template.quizView.helpers({
  quiz: function(){
    idOfQuiz = FlowRouter.getParam("id");
    thisQuiz = Quizzes.findOne({_id:idOfQuiz})
    return thisQuiz
  },
  quizDate: function(){
    idOfQuiz = FlowRouter.getParam("id");
    thisQuizDate = Quizzes.findOne({_id:idOfQuiz}).date
    return moment(thisQuizDate).format('dddd, Do MMMM YYYY')
  },
  quizRules: function(){
    idOfQuiz = FlowRouter.getParam("id");
    thisQuizRules = Quizzes.findOne({_id:idOfQuiz}).rules
    return thisQuizRules
  },
  quizQuestions: function(){

  }
})
