const users = require("../utils/users");
const login = (req, res) => {
  const { email, password } = req.query;
  if (!email || !password) {
    return res.status(400).json({ access: false, error: "Faltan datos" });
  }
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(403).json({ access: false });
  }
  return res.status(200).json({ access: true });
};
module.exports = login;
