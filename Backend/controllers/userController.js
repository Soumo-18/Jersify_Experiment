// import asyncHandler from 'express-async-handler';
// import User from '../models/userModel.js';
// import generateToken from '../utils/generateToken.js';

// // A helper function to format the user data we send back
// const formatUserResponse = (user) => {
//     return {
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//         isProfileComplete: user.isProfileComplete,
//         token: generateToken(user._id),
//     };
// };

// // @desc    Register a new user with full details
// // @route   POST /api/users/register
// // @access  Public
// const registerUser = asyncHandler(async (req, res) => {
//   const { name, email, password, phoneNumber, addresses } = req.body;

//   if (!name || !email || !password || !phoneNumber || !addresses) {
//       res.status(400);
//       throw new Error('Please provide all required fields');
//   }

//   const userExists = await User.findOne({ email });

//   if (userExists) {
//     res.status(400);
//     throw new Error('User already exists');
//   }

//   const adminEmails = process.env.ADMIN_EMAILS.split(',');
//   const role = adminEmails.includes(email) ? 'admin' : 'user';

//   const user = await User.create({
//     name,
//     email,
//     password,
//     phoneNumber,
//     addresses,
//     role,
//     isProfileComplete: true, // Profile is complete on manual registration
//   });

//   if (user) {
//     res.status(201).json(formatUserResponse(user));
//   } else {
//     res.status(400);
//     throw new Error('Invalid user data');
//   }
// });

// // @desc    Auth user & get token (Login)
// // @route   POST /api/users/login
// // @access  Public
// const loginUser = asyncHandler(async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });

//   if (user && (await user.matchPassword(password))) {
//     res.json(formatUserResponse(user));
//   } else {
//     res.status(401);
//     throw new Error('Invalid email or password');
//   }
// });

// // @desc    Google OAuth callback
// // @route   GET /api/users/auth/google/callback
// // @access  Public
// const googleAuthCallback = (req, res) => {
//     // Passport attaches the user to req.user after the strategy runs
//     const user = req.user;
//     const token = generateToken(user._id);

//     // Instead of sending JSON, we redirect to the frontend
//     // We pass the token as a URL parameter for the frontend to handle
//     res.redirect(`${process.env.FRONTEND_URL}/auth/callback?token=${token}`);
// };


// // @desc    Update user profile with additional details
// // @route   PUT /api/users/profile
// // @access  Private
// const updateUserProfile = asyncHandler(async (req, res) => {
//     const user = await User.findById(req.user._id);

//     if (user) {
//         user.name = req.body.name || user.name;
//         user.phoneNumber = req.body.phoneNumber || user.phoneNumber;
//         user.addresses = req.body.addresses || user.addresses;

//         // If the essential details are now present, mark profile as complete
//         if (user.phoneNumber && user.addresses && user.addresses.length > 0) {
//             user.isProfileComplete = true;
//         }
        
//         const updatedUser = await user.save();
//         res.json(formatUserResponse(updatedUser));

//     } else {
//         res.status(404);
//         throw new Error('User not found');
//     }
// });


// export { registerUser, loginUser, googleAuthCallback, updateUserProfile };



import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

// This helper now passes the full user object to generate the rich token
const formatUserResponse = (user) => {
    return {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        isProfileComplete: user.isProfileComplete,
        token: generateToken(user), // <-- Pass the whole user object
    };
};

// --- No changes needed in registerUser ---
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, phoneNumber, addresses } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }
  const adminEmails = process.env.ADMIN_EMAILS.split(',');
  const role = adminEmails.includes(email) ? 'admin' : 'user';
  const user = await User.create({ name, email, password, phoneNumber, addresses, role, isProfileComplete: true });
  if (user) {
    res.status(201).json(formatUserResponse(user));
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// --- loginUser now uses the updated formatUserResponse ---
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json(formatUserResponse(user));
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// --- googleAuthCallback now generates the rich token ---
const googleAuthCallback = (req, res) => {
    const user = req.user;
    const token = generateToken(user); // <-- Generate rich token
    res.redirect(`${process.env.FRONTEND_URL}/auth/callback?token=${token}`);
};

// --- updateUserProfile now returns a new, updated rich token ---
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id);
    if (user) {
        user.name = req.body.name || user.name;
        user.phoneNumber = req.body.phoneNumber || user.phoneNumber;
        user.addresses = req.body.addresses || user.addresses;
        if (user.phoneNumber && user.addresses && user.addresses.length > 0) {
            user.isProfileComplete = true;
        }
        const updatedUser = await user.save();
        res.json(formatUserResponse(updatedUser)); // <-- This now sends a new token
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

export { registerUser, loginUser, googleAuthCallback, updateUserProfile };
