app.controller("MyRosterController", function ($rootScope, $scope, GetMyPlayers, RemovePlayerFromMyRoster, PutNflPlayers) {
    
    $rootScope.test = "Test";
    activate();

    function activate() {
        $rootScope.my_players_list = [];
        $scope.loadRoster = loadRoster;
        $scope.loadRoster();
    }
    
    $scope.selectPlayer = function() {
        $rootScope.activePlayer = undefined 
        $rootScope.active_playercard = undefined   
        nextPlayer();    
    }
    
    function nextPlayer() {
        $rootScope.active_player_index++
        $rootScope.active_player = $rootScope.league_players[$rootScope.active_player_index]   
    }
    
    function loadRoster(){
      //  $http.get("/my_roster/get_my_players/").then(function (response) {
          GetMyPlayers.all().then( function(response) {
            var my_players = response;
            var my_players_list = [];
            for (var i = 0; i < my_players.length; i++) {
                var player = my_players[i]['player_info']
                my_players_list.push(player)
            }
            $rootScope.my_players_list = my_players_list;
        });
    }
    
    $scope.removeFromRoster = function (player) {
        for (var i = 0; i < $rootScope.my_players_list.length; i++) {
            if (player === $rootScope.my_players_list[i]) {
                $rootScope.my_players_list.splice(i, 1)             
                for (var j = 0; j < $rootScope.players.length; j++) {
                     if ($rootScope.players[j]['selected'] && player.id === $rootScope.players[j].id) {
                        $rootScope.players[j]['selected'] = undefined;
                        $rootScope.displayed_players.push(player)
                        var playersJSON = JSON.stringify($rootScope.players);
                        PutNflPlayers.all({ 'nfl_players': playersJSON })
                        break
                    }
                }
                
                RemovePlayerFromMyRoster.all({ 'playerId': player.id })           
                break;
            }
        }
    }
});   