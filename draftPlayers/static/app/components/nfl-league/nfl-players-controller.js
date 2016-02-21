app.controller('NflController', function ($rootScope, $scope, PutNflPlayers, PutMyPlayer) {

    $rootScope.test = "Test";
    $scope.getByTeam = function (team) {
        $rootScope.displayed_players = [];
        for (var i = 0; i < $rootScope.players.length; i++) {
            if (!($rootScope.players[i].selected) && team === $rootScope.players[i].pro_team) {
                $rootScope.displayed_players.push($rootScope.players[i])
            }
        }
        return $rootScope.displayed_players;
    }

    $scope.getByPosition = function (position) {
        $rootScope.displayed_players = [];
        for (var i = 0; i < $rootScope.players.length; i++) {
            if (!($rootScope.players[i].selected) && position === $rootScope.players[i].position) {
                $rootScope.displayed_players.push($rootScope.players[i])
            }
        }
        return $rootScope.displayed_players;
    }

    $scope.getByJersey = function (jersey) {
        $rootScope.displayed_players = [];
        for (var i = 0; i < $rootScope.players.length; i++) {
            if (!($rootScope.players[i].selected) && jersey === $rootScope.players[i].jersey) {
                $rootScope.displayed_players.push($rootScope.players[i])
            }
        }
        return $rootScope.displayed_players;
    }

    $scope.addToRoster = function (player) {
        var myPlayer = {};
        myPlayer['playerId'] = player.id;
        myPlayer['player_info'] = player;
        $rootScope.active_playercard = player;
 
        for (var i = 0; i < $rootScope.displayed_players.length; i++) {
            if (player.id === $rootScope.displayed_players[i].id) {
                $rootScope.displayed_players.splice(i, 1);
                break;
            }
        }        
            
        for (var i=0; i < $rootScope.my_players_list.length; i++) {
            if (player.id === $rootScope.my_players_list[i].id) {
                alert("Player Is already in Roster");
                return;
            }
        }
        
        for (var i=0;i<$rootScope.players.length;i++) {
            if (!($rootScope.players[i]['selected']) && player.id === $rootScope.players[i].id){
                $rootScope.players[i]['selected']=true;
                var playersJSON = JSON.stringify($rootScope.players);
                PutNflPlayers.all({ 'nfl_players': playersJSON })
                break
            }
        }        

        var myPlayerJSON = JSON.stringify(myPlayer);
        PutMyPlayer.all({ 'my_player': myPlayerJSON }).then(function () {
                $rootScope.my_players_list.push(player)
        });

        }
});   