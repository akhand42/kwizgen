Template.indivQuestion.onCreated(function(){
  this.autorun(() =>  {
    this.subscribe('quizQuestions',FlowRouter.getParam('id'));
  })
})

Template.indivQuestion.helpers({
  allQuestions: function(){
    var ind = FlowRouter.getParam('index');
    var quest = Quizzes.find().fetch();
    if(quest.length != 0){
      return quest[0].questions[ind-1].newQuestion
    }
  },
  quesNum: function(){
    return FlowRouter.getParam('index')
  },
  imageURL: function(){
    var ind = FlowRouter.getParam('index');
    var quest = Quizzes.find().fetch();
    if(quest.length != 0){
      return quest[0].questions[ind-1].questionImage
    }
  },
  gridURL: function(){
    var quiz = FlowRouter.getParam('id');
    return '/quiz/'+ quiz + '/questions'
  },
  answerURL: function(){
    var quiz = FlowRouter.current().path;
    // console.log(quiz)
    return quiz + '/answer'
  }
})

Template.indivQuestion.events({
  'click .answerBut': function(){
    // var index = FlowRouter.getParam('index')
    // Session.set('selectedPlayer', 'session value test');
    console.log("Session set!")
  }
})
