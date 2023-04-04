const { Schema, model } = require('mongoose');
const thoughtsSchema = require('./Thoughts');

const atSymbolValidator = {
    validator: (value) => {
      return value.includes('@');
    },
    message: (props) => `${props.value} is not valid email-address format`,
  };


const userSchema = new Schema(
    {
        username: {
        type: String,
        // unique: true,
        requried: true,
        trim: true
        },
  
        email: {
        type: String,
        // unique: true,
        requried: true,
        trim: true,
        validator: atSymbolValidator,
        },
        // thoughts: [thoughtsSchema], // Array of _id values referencing the Thought model
        // //friends: [userSchema] // Array of _id values referencing the User model (self-
    },
    { 
        toJSON: {
            getters: true
        },
    }
);

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
userSchema.virtual('friendCount').get(function () {
    return this.friends.length
});

const User = model('user', userSchema);
module.exports = User;

