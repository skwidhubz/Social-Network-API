
// // CUSTOM VALIDATION

// // email: {
// //     type: String,
// //     required: [
// //       function() { return this.email = includes @ symbol; },
// //       'username is required if id is specified'
// //     ]

// // Data that comes into the model make sure it matches the format of a proper email .. @ symbol included.


// User

// username

// String
// Unique
// Required
// Trimmed
// email

// String
// Required
// Unique
// Must match a valid email address (look into Mongoose's matching validation)
// thoughts

// Array of _id values referencing the Thought model
// friends

// Array of _id values referencing the User model (self-reference)
// Schema Settings

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
