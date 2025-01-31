// import User from "../model/userModal.js";

// export const signup = async(req, res) => {
//   try {
//     const [fullname, email, password] = req.body;
//     const user = await User.findone({ email });
//     if (user) {
//       return res.satus(400).json({ message: "User already exits" });
//     }
//     const createUser = new User({
//         fullname,
//         email,
//         password
//     })
//    await createUser.save()
//     res.satus(201).json({message:"User created successfully."})
//   } catch (error) {
//     console.log("error" + error.message);
//     res.satus(501).json({message:"Internal server error."})

//   }
// };
import User from "../model/userModal.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body; // Destructure properly
    if (!fullname || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email }); // Correct `.findOne`
    if (user) {
      return res.status(400).json({ message: "User already exists" }); // Correct `.status`
    }
const hashPassword = await bcrypt.hash(password, 10)

    const createUser = new User({ fullname, email,password: hashPassword   });
    await createUser.save();

    res.status(201).json({ message: "User created successfully." , user :{
      _id:createUser._id,
      fullname :createUser.fullname,
      email:createUser.email
    } }); // Correct `.status`
  } catch (error) {
    console.error("Error: " + error.message);
    res.status(500).json({ message: "Internal server error." }); // Correct `.status`
  }
};


export const login = async(req, res) =>{

  try{
const {email, password} = req.body;

const user = await User.findOne({email});
const isMatch =await bcrypt.compare(password, user.password)
if(!user || !isMatch){
  return res.status(400).json({ message: "Invalid username or password" }); // Correct `.status`
}else{
  res.status(200).json({ message: "Login successfully." , user:{
    _id:user._id,
    fullname :user.fullname,
    email:user.email
  }}); // Correct `.status`

}
  }catch(error){
console.log("Error :" , + error.message);
res.status(500).json({message:"Internal server error"})
  }
}