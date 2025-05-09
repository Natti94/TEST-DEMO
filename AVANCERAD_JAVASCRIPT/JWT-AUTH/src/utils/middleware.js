import JWT from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = import.meta.VITE_SECRET;

function Auth(req, res, next) {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.sendStatus(401);

  JWT.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

export default Auth;
