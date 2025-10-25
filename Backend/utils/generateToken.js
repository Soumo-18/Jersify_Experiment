import jwt from 'jsonwebtoken';

const generateToken = (user) => {
  // The payload now contains all the data the frontend needs for routing and display
  const payload = {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    isProfileComplete: user.isProfileComplete,
  };

  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

export default generateToken;