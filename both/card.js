Card = new Mongo.Collection("card");
Card.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

var cardSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  tags: {
        type: [String],
        label: 'Tags',
        autoform: {
            type: 'tagsTypeahead',
        }
    }
});


Card.attachSchema(cardSchema);
