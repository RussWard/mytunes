// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  
  collection: SongQueue,

  initialize: function() {
    this.render();
  },

  render: function() {
    // this.$el.empty();
    this.collection.forEach(this.renderSongQueue, this);
    // return this.$el;
  },

  renderSongQueue: function(song) {
    var songQueueEnteryView = new SongQueueEntryView({model: song});
    this.$el.append(songQueueEnteryView.render());
  }

});
