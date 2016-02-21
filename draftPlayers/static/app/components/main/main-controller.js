app.controller("MainController", function($scope, $rootScope,  $state, AuthService, NflPlayers, NflTeams, NflPositions, NflJerseyNumbers){
    $scope.isLoggedIn = true;
    
    $rootScope.displayed_players = [];
    $rootScope.players = [];
    $rootScope.teams = [];
    $rootScope.positions = [];
    $rootScope.jersey_number = [];
    $rootScope.active_playercard = undefined;
    $rootScope.active_player_index = 0;
    $rootScope.league_players =  [ new League_Player("Larry"), new League_Player("John")]; 
    $rootScope.active_player = $rootScope.league_players[$rootScope.active_player_index];
    $rootScope.my_players_list = [];
    
    NflPlayers.all().then(function (data) {
        $rootScope.players = data;
    });
    
    NflTeams.all().then(function (data) {
        $rootScope.teams = data;
    });
    
    NflPositions.all().then(function (data) {
        $rootScope.positions = data;
    }); 
    
    NflJerseyNumbers.all().then(function (data) {
        $rootScope.jersey_numbers = data;
    });
    
    $scope.login = function() {
        AuthService.login();
        $scope.isLoggedIn = true;   
    }
    
    $scope.logout = function() {
        AuthService.logout();
        $scope.isLoggedIn = false;
        $state.go("home");
    }
    
    function League_Player(name){
        var player= this;
        player.name=name;  
        player.info="";         
    } 
})

