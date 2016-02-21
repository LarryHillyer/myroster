app.controller("AdminController", function($rootScope, $scope, GetNflPlayersFromCBS, PutNflPlayers, PutNflTeams, PutNflPositions, PutNflJerseyNumbers, RemoveLeaguePlayers, PutLeaguePlayer){
    
    activate();
    function activate() {
        $rootScope.nflPlayers = [];
        
        $scope.loadLeaguePlayers = loadLeaguePlayers;
        $scope.loadLeaguePlayers()
        $scope.loadNflPlayers = loadNflPlayers;
        
    }
    
    function loadLeaguePlayers() {
        RemoveLeaguePlayers.all()
        for (var i=0;i<$rootScope.league_players.length; i++) {
            var myLeaguePlayer = {};
            myLeaguePlayer['league_player'] = $rootScope.league_players[i].name
            myLeaguePlayer['league_player_info'] = $rootScope.league_players[i]
            var leaguePlayerJSON = JSON.stringify(myLeaguePlayer);
            PutLeaguePlayer.all({'league_player':leaguePlayerJSON});
        }
        
    }
    
    function loadNflPlayers() {
        var url = "http://bcw-getter.herokuapp.com/?url=";
        var url2 = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";
        var apiUrl = url + encodeURIComponent(url2);
        // $.get(apiUrl).success(function (res) {
        GetNflPlayersFromCBS.all(apiUrl).then(function(res) {
            // var resToObj = JSON.parse(res);
            var players = res.body.players;
            var teams = [];
            var positions = [];
            var jersey_numbers = [];

            for (var i = 0; i < players.length; i++) {
                var teamIsNew = true;
                var positionIsNew = true;
                var jerseyIsNew = true;

                if (players[i].pro_status === null || players[i].firstname.length <= 0) {
                    players.splice(i, 1);
                    i--;
                }
                if (i === 0) {
                    for (var j = 0; j < teams.length; j++) {
                        if (teams[j] == players[0].pro_team) {
                            teamIsNew = false;
                        }
                    }

                    if (teamIsNew && players[0].pro_team !== undefined && players[0].position !== "" && players[0].jersey !== undefined) {
                        teams.push(players[0].pro_team);
                        positions.push(players[0].position)
                        jersey_numbers.push(players[0].jersey)
                    }

                } else if (i > 0) {

                    for (var j = 0; j < teams.length; j++) {
                        if (teams[j] == players[i].pro_team) {
                            teamIsNew = false;
                        }
                    }

                    if (teamIsNew && players[i].pro_team !== undefined) {
                        teams.push(players[i].pro_team);
                    }

                    for (var j = 0; j < positions.length; j++) {
                        if (positions[j] == players[i].position) {
                            positionIsNew = false;
                        }
                    }

                    if (positionIsNew && players[i].position !== undefined && players[i].position !== "") {
                        positions.push(players[i].position);
                    }

                    for (var j = 1; j < jersey_numbers.length; j++) {
                        if (jersey_numbers[j] == players[i].jersey) {
                            jerseyIsNew = false;
                        }
                    }

                    if (jerseyIsNew && players[i].jersey !== undefined && players[i].jersey !== "") {
                        jersey_numbers.push(players[i].jersey);
                    }

                } else if (i < 0) {
                    i = 0
                }
            }
                       
            var playersJSON = JSON.stringify(players);
            PutNflPlayers.all({ 'nfl_players': playersJSON }).then(function () {
                $rootScope.players = players;
            });
            
            var teamsJSON = JSON.stringify(teams);
            PutNflTeams.all({ 'nfl_teams': teamsJSON }).then(function () {
                $rootScope.teams = teams;
            }); 
              
            var positionsJSON = JSON.stringify(positions);
            PutNflPositions.all({ 'nfl_positions': positionsJSON }).then(function () {
                $rootScope.positions = positions;
            });
             
            var jersey_numbersJSON = JSON.stringify(jersey_numbers);
            PutNflJerseyNumbers.all({ 'nfl_jersey_numbers': jersey_numbersJSON }).then(function () {
                $rootScope.jersey_numbers = jersey_numbers;
            });                   
        })
    }    
});