// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    $.ajax({ 
          // This is the url you should use to communicate with the parse API server. 
      url: 'http://parse.sfs.hackreactor.com/mytunes/classes/songs',
      type: 'GET',
      contentType: 'application/json', 
      success: function (data) {
        _.extend(songData, data.results); 
        console.log('songdata:', songData); 
      }, 
      error: function (data) { 
            // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error 
        console.error('chatterbox:Failed to recieve message', data); 
          
      } 
    });
  }

});
