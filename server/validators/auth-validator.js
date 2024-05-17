const { z } = require("zod");

// craeting object scema

const signupSchema = z.object({
    username: z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be at least 3 char"})
    .max(255, { message: "Name must not be more than 255 charactors"}),

email: z
.string({required_error:"Email is required"})
.trim()
.email({ message: "Invalid email address"})
.min(3,{message:"Email must be at least of 3 char"})
.max(255, { message: "Emailmust not be more than 255 charactors"}),

phone: z
.string({required_error:"Phone is required"})
.trim()
.min(10,{message:"Phone must be of 10 char"})
.max(20, { message: "Phone must not be more than 20 charactors"}),

password: z
.string({required_error:"Password is required"})
.trim()
.min(6,{message:"Password must be at least 6 char"})
.max(255, { message: "Password must not be more than 255 charactors"}),
});


module.exports = signupSchema;