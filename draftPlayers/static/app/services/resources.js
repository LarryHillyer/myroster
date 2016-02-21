(function () {
    app = angular.module("my-roster")

    app.factory('NflPlayers', function ($http) {
        return {
            all: function () {
                return $http.get("/draftPlayers/get_nfl_players/").then(function (response) {
                    return response.data['nfl_players'];
                })
            }
        }
    });
    
    app.factory('NflTeams', function ($http) {
        return {
            all: function () {
                return $http.get("/draftPlayers/get_nfl_teams/").then(function (response) {
                    return response.data['nfl_teams'];
                })
            }
        }
    });
    
    app.factory('NflPositions', function ($http) {
        return {
            all: function () {
                return $http.get("/draftPlayers/get_nfl_positions/").then(function (response) {
                    return response.data['nfl_positions'];
                })
            }
        }
    });
    
    app.factory('NflJerseyNumbers', function ($http) {
        return {
            all: function () {
                return $http.get("/draftPlayers/get_nfl_jersey_numbers/").then(function (response) {
                    return response.data['nfl_jersey_numbers'];
                })
            }
        }
    });
    
    app.factory('PutMyPlayer', function($http){
        return {
            all: function(playerData) {
                return $.post("/draftPlayers/put_my_player/", playerData)
            }
        }
    });
    
    app.factory('GetMyPlayers', function ($http) {
       return {
           all:function() {
               return $http.get("/draftPlayers/get_my_players/").then(function (response) {
                   return response.data
               })
           }
       }
    });
    
    app.factory('GetNflPlayersFromCBS', function($http) {
        return {
            all:function(apiUrl) {
                return $http.get(apiUrl).then(function(response){
                    return response.data
                })
            }
        }
    })
    
    app.factory('PutNflPlayers', function($http){
        return {
            all: function(playerData) {
                return $.post("/draftPlayers/put_nfl_players/", playerData)
            }
        }
    });
    
    app.factory('PutNflTeams', function($http){
        return {
            all: function(teamData) {
                return $.post("/draftPlayers/put_nfl_teams/", teamData)
            }
        }
    });
   
   app.factory('PutNflPositions', function($http){
        return {
            all: function(positionData) {
                return $.post("/draftPlayers/put_nfl_positions/", positionData)
            }
        }
    }); 
    
    app.factory('PutNflJerseyNumbers', function($http){
        return {
            all: function(jerseyNumbersData) {
                return $.post("/draftPlayers/put_nfl_jersey_numbers/", jerseyNumbersData)
            }
        }
    }); 
    
    app.factory('RemovePlayerFromMyRoster', function($http){
        return {
            all: function(playerId) {
                return $.post("/draftPlayers/delete_my_player/", playerId);
            }
        }
    });
    
    app.factory('PutLeaguePlayer', function($http){
        return {
            all: function(leaguePlayerData) {
                return $.post("/draftPlayers/put_league_player/", leaguePlayerData)
            }
        }
    });
    
    app.factory('RemoveLeaguePlayers', function($http){
        return {
            all: function() {
                return $.post("/draftPlayers/delete_league_players/");
            }
        }
    }); 
    
    app.service("AuthService", function () {
        this.isLoggedIn = true;
        this.login = function () {
            this.isLoggedIn = true;
        }

        this.logout = function () {
            this.isLoggedIn = false;
        }

    });
    
})();