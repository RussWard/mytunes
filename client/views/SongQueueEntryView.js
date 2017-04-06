// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  
  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  initialize: function() {
    this.render();
  },
  
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  }


});
