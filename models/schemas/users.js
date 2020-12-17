const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    emailAddress: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    birth_date: {
        type: Date,
        required: false
    },
    fave_musical: {
        type: String,
        required: false
    },
    total_points: {
        type: Number, 
        required: false
    }
});


userSchema.statics.checkExists = async function(email) {
    return await this.exists({emailAddress: email});
}

userSchema.statics.checkPassword = async function(email, password) {
    const user = await this.findOne({emailAddress: email})
    if (!user) {
        console.log("User doesnt exist")
        return false;    
    }
    
    if (await bcrypt.compare(password, user.password)) {        
        return true;
    }
        console.log("Passwords don't match")
        return false;
}

module.exports = mongoose.model("Users", userSchema);