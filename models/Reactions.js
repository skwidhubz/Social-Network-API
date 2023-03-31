const { Schema, model, default: mongoose, Types } = require('mongoose');


const reactionSchema = new Schema(
    {
        reactionId: {
            type: mongoose.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now
            // TODO: Use a getter method to format the timestamp on query
        }
    },
    {   // Schema Settings
        toJSON: {
            getters: true
        },
    }
);

// This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.

const Reactions = model('reactions', reactionSchema);
module.exports = Reactions;