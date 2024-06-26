const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            require: true,
            unique: true
        },
        userType: {
            type: String,
            default: "user"
        },
        name: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            default: null
        },
        email: {
            default: "",
            type: String, // Field type is String
            unique: true, // Field must be unique
            lowercase: true, // Convert value to lowercase
            trim: true, // Trim whitespace from value
            validate: {
                validator: (value) => {
                    // Custom validation logic for email format
                    return /\S+@\S+\.\S+/.test(value);
                },
                message: 'Invalid email format',
            },
        },
        profileImage: {
            type: String,
            default: 'https://t3.ftcdn.net/jpg/03/64/62/36/360_F_364623623_ERzQYfO4HHHyawYkJ16tREsizLyvcaeg.jpg'
        },
        phoneNumber: {
            type: Number,
            require: true
        },
        password: {
            type: String,
            required: true
        },
        location: {
            type: {
                latitude: Number,
                longitude: Number,
                city: String
            },
            default: {
                latitude: 40.7128,
                longitude: -74.0060,
                address: "New York, USA"
            }
        },
        isVerified: {
            type: Boolean,
            default: true
        },
        fcmToken: {
            type: String,
            default: null
        },
        accessToken: {
            type: String,
            default: null
        },
        deviceType: {
            type: String
        },
        about: {
            type: String,
            default: null
        },
        profession: {
            type: String,
            default: null
        },
        interests: {
            type: Array,
            default: [],
            ref: "interests"
        },
        dob: {
            type: Date,
            default: null
        },
        age: {
            type: Number,
            default: null
        },
    },
    {
        timestamps: true, versionKey: false
    }
)

module.exports = mongoose.model("users", userSchema);

