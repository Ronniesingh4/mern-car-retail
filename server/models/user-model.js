const  mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email: {
        type:String,
        require:true,
    },
    phone: {
        type:String,
        require:true,
    },
    password: {
        type:String,
        require:true,
    },
    isAdmin:{
        type: Boolean,
        default:false,
    },
    
})

// secure password
userSchema.pre('save', async function(next) {
  //  console.log("pre method", this);
    const user = this;

    if (!user.isModified('password')) {
        next();
    }
 
    try {
        // Generating a salt with 10 rounds
        const saltRound = await bcrypt.genSalt(10);    
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
    } catch (error) {
        // Passing any error to the next middleware or save operation
        next(error);
    }
});


//compare thhe password

userSchema.methods.comparePassword = async function(password){
return bcrypt.compare(password, this.password);
};

// Generate a JSON Web Token (JWT) for the user
userSchema.methods.generateToken = async function() {
    try {
        return jwt.sign({
            userId: this._id.toString(), // Corrected to toString()
            email: this.email,
            isAdmin: this.isAdmin,
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: "30d"
        });
    } catch (error) {
        console.error(error);
    }
};





const User = new mongoose.model("User", userSchema);

module.exports = User;