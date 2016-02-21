# -*- coding: utf-8 -*-
"""
Created on Tue Feb  9 20:04:08 2016

@author: Larry
"""


from django.conf.urls import url

from draftPlayers.views import index, put_nfl_players, \
    get_nfl_players, put_nfl_teams, get_nfl_teams, put_nfl_positions, \
    get_nfl_positions, put_nfl_jersey_numbers, get_nfl_jersey_numbers, \
    get_my_players, put_my_player, admin, delete_my_player, put_league_player, \
    delete_league_players

urlpatterns = [ 
    url(r'^$', index.as_view(), name='index'), \
    url(r'^admin/$', admin.as_view(), name='admin'), \
    url(r'^put_nfl_players/$', put_nfl_players.as_view(), \
        name='put_nfl_players'),
    url(r'^get_nfl_players/$', get_nfl_players.as_view(), \
        name='get_nfl_roster'),
    url(r'^put_nfl_teams/$', put_nfl_teams.as_view(), \
        name='put_nfl_teams'),
    url(r'^get_nfl_teams/$', get_nfl_teams.as_view(), \
        name='get_nfl_teams'),    
    url(r'^put_nfl_positions/$', put_nfl_positions.as_view(), \
        name='put_nfl_positions'),
    url(r'^get_nfl_positions/$', get_nfl_positions.as_view(), \
        name='get_nfl_positions'),
    url(r'^put_nfl_jersey_numbers/$', put_nfl_jersey_numbers.as_view(), \
        name='put_nfl_jersey_numbers'),
    url(r'^get_nfl_jersey_numbers/$', get_nfl_jersey_numbers.as_view(), \
        name='get_nfl_jersey_numbers'), 
    url(r'^put_my_player/$', put_my_player.as_view(), \
        name='put_my_player'),
    url(r'^get_my_players/$', get_my_players.as_view(), \
        name='get_my_players'),
    url(r'^delete_my_player/$', delete_my_player.as_view(), \
        name='delete_my_player'),  
    url(r'^put_league_player/$', put_league_player.as_view(), \
        name='put_league_player'),
    url(r'^delete_league_players/$', delete_league_players.as_view(), \
        name='delete_league_players'),
    ]