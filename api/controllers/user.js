import User from "../models/Users.js";

export const updateuser = async(req,res,next)=>{
    try {
        const updateduser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updateduser);

    } catch (err) {
        next(err)
    }
}

export const deletedUser = async(req,res,next)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("Deleted");

    } catch (err) {
        next(err)
    }
}

export const getUser = async(req,res,next)=>{
    try {
        const hotel = await User.findById(req.params.id)
        res.status(200).json(hotel);

    } catch (err) {
        next(err);
    }
}

export const getAllUsers= async(req,res,next)=>{
    try {
        const users = await Hotel.find()
        res.status(200).json(users);

    } catch (err) {
        next(err);
    }
}