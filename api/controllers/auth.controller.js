import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const signup = async (req, res) => {

    const {username, email, password} = req.body

    if (!username || !email || !password) {
        throw new ApiError(401, "All fields are required")
    }

    const existUser = await User.findOne({
        $or: [{username}, {email}]
    })

    if (existUser) {
        throw new ApiError(409, "user with email or username already exist")
    }

    const hashedPassword = bcrypt.hashSync(password,10)

   const user = await User.create({
    username,
    email,
    password : hashedPassword
   })

   const createdUser = await User.findById(user._id);

   if (!createdUser) {
        throw new ApiError(500, "Something went wrong")
   }

    return res
            .status(201)
            .json( new ApiResponse(200, createdUser, "Signup successfull" ))
    
}

const signin = async (req, res) => {
    const {username, password} = req.body

    if (!(username, password) ) {
        throw new ApiError(401, "All fields are required");
    }

    try {
        const user = await User.findOne({username});
        if (!user) {
            throw new ApiError(401,"User not found");
        }
        const validPassword = bcrypt.compareSync(password, user.password)
        if (!validPassword) {
            throw new ApiError(402, "Invalid password");
        }
        const token = jwt.sign(
            { id: user._id},
            process.env.JWT_SECRET
        );
        return res.status(200).json( new ApiResponse(201, user, "Signin successfully"))
    } catch (error) {
        
    }

}

export {signup, signin}