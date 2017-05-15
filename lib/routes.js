FlowRouter.route('/', {
  name: 'home',
  action(){
    BlazeLayout.render('main', {topbar:'homeTopbar', content: 'homePageLayout'});
  }
});

FlowRouter.route('/login', {
  name: 'login',
  action(){
    BlazeLayout.render('main', {topbar:'homeTopbar', content: 'loginPageLayout'});
  }
});

FlowRouter.route('/register', {
  name: 'register',
  action(){
      BlazeLayout.render('main', {topbar:'homeTopbar', content: 'registerPageLayout'});
  }
});

FlowRouter.route('/quizmaster/dashboard', {
  name: 'quizmaster-dashboard',
  action(){
      if(Meteor.userId()){
        BlazeLayout.render('main', {topbar:'homeTopbar', content: 'dashboardLayout'});
      }
      else{
        FlowRouter.go('/')
      }
  }
});


FlowRouter.route('/quiz/create', {
  name: 'quizmaster-quizzes-create',
  action(){
      if(Meteor.userId()){
        BlazeLayout.render('main', {topbar:'homeTopbar', content: 'createQuiz'});
      }
      else{
        FlowRouter.go('/')
      }
  }
});

FlowRouter.route('/private/quizzes', {
  name: 'quizmaster-quizzes-private',
  action(){
      if(Meteor.userId()){
        BlazeLayout.render('main', {topbar:'homeTopbar', content: 'yourQuizzes'});
      }
      else{
        FlowRouter.go('/')
      }
  }
});

FlowRouter.route('/public/quizzes', {
  name: 'quizmaster-quizzes-public',
  action(){
    BlazeLayout.render('main', {topbar:'homeTopbar', content: 'publicQuizzes'});
  }
});

FlowRouter.route('/quiz/:id', {
  name: 'quiz-view-private',
  action(){
      if(Meteor.userId()){
        BlazeLayout.render('main', {content: 'quizView'});
      }
      else{
        FlowRouter.go('/')
      }
  }
});

FlowRouter.route('/quiz/:id/questions', {
  name: 'quiz-view-question',
  action(){
      if(Meteor.userId()){
        BlazeLayout.render('main', {content: 'gridView'});
      }
      else{
        FlowRouter.go('/')
      }
  }
});

FlowRouter.route('/quiz/:id/question/:index', {
  name: 'quiz-view-question-indi',
  action(){
      if(Meteor.userId()){
        BlazeLayout.render('main', {content: 'indivQuestion'});
      }
      else{
        FlowRouter.go('/')
      }
  }
});

FlowRouter.route('/quiz/:id/question/:index/answer', {
  name: 'quiz-view-question-indi-answer',
  action(){
      if(Meteor.userId()){
        BlazeLayout.render('main', {content: 'indivAnswer'});
      }
      else{
        FlowRouter.go('/')
      }
  }
});


FlowRouter.route('/test', {
  name: 'quiz-view-test',
  action(){
        BlazeLayout.render('main', {content: 'testLayout'});
  }
});
