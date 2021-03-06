const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      // For the schema of this attribute, define type and default
      type: Date,
      default: () => new Date(),
    },
    exercises: [
      // Schema for each item in exercises array
      {
        type: {
          // TODO: For the schema of this attribute, define type and trim and required
          // required is a message for the user to see
          type: String,
          trim: true,
          required: 'Please select a type of workout',
        },
        name: {
          // TODO: For the schema of this attribute, define type and trim and required
          type: String,
          trim: true,
          required: 'Please enter the name of your workout',
        },
        duration: {
          // TODO: For the schema of this attribute, define type as number and its required
          type: Number,
          trim: true,
        },
        weight: {
          // TODO: For the schema of this attribute, define type as number
          type: Number,
          trim: true,
        },
        reps: {
          // TODO: For the schema of this attribute, define type as number
          type: Number,
          trim: true,
        },
        sets: {
          // TODO: For the schema of this attribute, define type as number
          type: Number,
          trim: true,
        },
        distance: {
          // TODO: For the schema of this attribute, define type as number
          type: Number,
          trim: true,
        },
      },
    ],
  },

);

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
