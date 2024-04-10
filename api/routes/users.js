import express from "express";
import { deletedUser, getAllUsers, getUser, updateuser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

// router.get("/checkauth", verifyToken, (req, res, next) => {
//     res.send("Hello you are logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("Hello user you are logged in and you can delete your account");
// });

// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//    res.send("Hello admin you are logged in you can delete your account");
// })

router.put("/:id", verifyUser, updateuser);
router.delete("/:id", verifyUser, deletedUser);
router.get("/:id", verifyUser, getUser);
router.get("/", verifyAdmin, getAllUsers);
export default router