const db = require("../models");
const User = db.User


const getCurrentUser = async (req, res) => {
  const userId = req.user.id;
  const user = await User.findOne({ where: { id : userId } });
  if (user){
    const { username, email, role } = user;
    return res.status(200).json({ user: { username, email, role } });
  }
  else{
    return res.status(400).json({ error: "User not found" });
  }
};


module.exports = { getCurrentUser };
