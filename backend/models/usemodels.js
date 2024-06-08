const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {ObjectId} = mongoose.Schema

const UseModel = new Schema(
  {
    fName: {
      type: String,
      require: true,
      trim: true,
      text: true
    },
    lName: {
      type: String,
      require: true,
      trim: true,
      text: true
    },
    username: {
      type: String,
      require: true,
      trim: true,
      unique: true,
      text: true
    },
    email: {
      type: String,
      require: true,
      trim: true,
    },
    password: {
      type: String,
      require: true,
    },
    profilePicture: {
      type: String,
      default: ""
    },
    cover: {
      type: String,
      trim: true
    },
    bMonth: {
      type: String,
      require: true,
      trim: true,
    },
    bDay: {
      type: String,
      require: true,
      trim: true,
    },
    bYear: {
      type: String,
      require: true,
      trim: true,
    },
    gender: {
      type: String,
      require: true,
    },
    verified: {
      type: Boolean,
      default: false
    },
    friends: [
      {
        type: ObjectId,
        ref: 'usemodels'
      }
    ],
    followers: [
      {
        type: ObjectId,
        ref: 'usemodels'
      }
    ],
    following: [
      {
        type: ObjectId,
        ref: 'usemodels'
      }
    ],
    request: [
      {
        type: ObjectId,
        ref: 'usemodels'
      }
    ],
    search: [
      {
        user: {
          type: ObjectId,
          ref: "usemodels",
          require: true,
          text: true
        },
        createdAt: {
          type: Date,
          require: true
        }
      }
    ],
    details: {
      bio: {
        type: String
      },
      othername: {
        type: String
      },
      job: {
        type: String
      },
      currentcity: {
        type: String
      },
      workplace: {
        type: String
      },
      collage: {
        type: String
      },
      highschool: {
        type: String
      },
      hometown: {
        type: String
      },
      relationship: {
        type: String,
        enum: [
          "Single",
          "In A Relationship",
          "It's Complicated",
          "Married",
          "Divorced"
        ]
      },
      instagram: {
        type: String
      }
    },
    savePost: [
      {
        post: {
          type: ObjectId,
          ref: "post"
        },
        savedAt: {
          type: Date,
          require: true
        }
      }
    ]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('usemodel', UseModel)