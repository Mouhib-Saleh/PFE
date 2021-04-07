const mongoose = require("mongoose");
const missionSchema = new mongoose.Schema({
  missionId: {
    type: String,
  },
  status: {
    type: String,
    required: true,
    min: 2,
  },
  contact: {
    type: String,
    required: true,
    min: 2,
  },
  priority: {
    type: Number,
    required: true,
    max: 100,
    min: 1,
    default: 0,
  },
  comment: {
    type: String,
    required: false,
    max: 1024,
    min: 0,
  },
  start_Date: {
    type: Date,
    required: false,
    default: mongoose.now,
  },
  start_Date_time: {
    start_time: {
      type: Date,

      default: mongoose.now,
    },
    end_time: {
      type: Date,

      default: mongoose.now,
    },
  },
  end_Date: {
    type: Date,

    default: mongoose.now,
  },
  end_Date_time: {
    start_time: {
      type: Date,

      default: mongoose.now,
    },
    end_time: {
      type: Date,

      default: mongoose.now,
    },
  },
  start_adress: {
    type: "string",

    enum: {
      // here !
    },
    coordinates: {
      N: {
        type: Number,
      },
      E: {
        type: Number,
      },
    },
  },
  end_adress: {
    type: String,
    required: false,
    enum: {
      // here !
    },
    coordinates: {
      N: {
        type: Number,
      },
      E: {
        type: Number,
      },
    },
  },
});

module.exports = mongoose.model("mission", missionSchema);
