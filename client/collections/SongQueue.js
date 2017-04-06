// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      } 
    });
    this.on('ended', function(song) {
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    });
    this.on('dequeue', function(song) {
      this.remove(song);
      if (this.length > 0) {
        this.playFirst();
      }
    });
  },

  playFirst: function() {
    console.log(this.at(0));
    this.at(0).play();
  }

//   initialize: function() {
//     this.on('add', this.enqueue, this);
//     this.on('ended', this.removeFirst, this);
//     this.on('dequeue', this.dequeue, this);
//   },

//   enqueue: function() {
//     if (this.length === 1) {
//       this.playFirst();
//     } 
//   },

//   dequeue: function(song) {
//     this.remove(song);
//     if (this.length > 0) {
//       this.playFirst();
//     }
//   },

//   removeFirst: function() {
//     this.shift();
//     if (this.length > 0) {
//       this.playFirst();
//     }
//   }

});


// stop the song if dequed and play next
// deque a song and que is empty play enpty song