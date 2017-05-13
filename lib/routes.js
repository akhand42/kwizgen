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
      BlazeLayout.render('main', {topbar:'homeTopbar', content: 'registerPageLayout'});
  }
});
