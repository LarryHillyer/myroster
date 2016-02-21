app.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise("home")
    
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl:"/static/app/components/home/home.html",
            controller:"HomeController",
            controllerAs:"hc"
        })
        
        .state('admin', {
            url: "/admin",
            templateUrl:"/static/app/components/admin/admin.html",
            controller:"AdminController",
            controllerAs:"ac"
        })
        
        .state('nfl-players', {
            url: "/nfl-players",
            templateUrl: "/static/app/components/nfl-league/nfl-players.html",
            controller:"NflController",
            controllerAs:"nc",
          
        })
        
        .state('my-roster', {
            url: "/my-roster",
            templateUrl: "/static/app/components/my-roster/my-roster.html",
            controller: "MyRosterController",
            controllerAs:"rc",
        })
        
        .state('draft', {
            url: "/draft",
            templateUrl: "/static/app/components/draft/draft.html",
            controller: "DraftController",
            controllerAs:"dc",
        })
       
})