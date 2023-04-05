const { Schema, model } = require('mongoose');
const ReactionsSchema = require('./Reactions');

const thoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //TODO: // Use a getter method to format the timestamp on query
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [ReactionsSchema]
    },
    {   // Schema Settings
        toJSON: {
            getters: true
        },
    }
);

// // Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
// thoughtsSchema.virtual('reactionCount').get(function () {
//     return this.reactions.length;
// });

const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;