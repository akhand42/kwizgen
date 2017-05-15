Template.indivAnswer.onCreated(function(){
  this.autorun(() =>  {
    this.subscribe('quizQuestions',FlowRouter.getParam('id'));
  })
})

Template.indivAnswer.helpers({
  allQuestions: function(){
    var ind = FlowRouter.getParam('index');
    var quest = Quizzes.find().fetch();
    if(quest.length != 0){
      return quest[0].questions[ind-1].newAnswer
    }
  },
  quesNum: function(){
    return FlowRouter.getParam('index')
  },
  imageURL: function(){
    var ind = FlowRouter.getParam('index');
    var quest = Quizzes.find().fetch();
    if(quest.length != 0){
      return quest[0].questions[ind-1].answerImage
    }
  },
  gridURL: function(){
    var quiz = FlowRouter.getParam('id');
    return '/quiz/'+ quiz + '/questions'
  }
})
