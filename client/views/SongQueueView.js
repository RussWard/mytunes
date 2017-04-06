// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  
  tagName: 'table',
  
  collection: SongQueue,

  initialize: function() {
    this.$el.empty();
    this.render();
    this.collection.on('ended add dequeue', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html('<th>Song Queeue</th>').append(this.collection.map(function(song) {
      return new SongQueueEntryView({ model: song }).render();
    }));
    
    return this.$el;
  }

});
