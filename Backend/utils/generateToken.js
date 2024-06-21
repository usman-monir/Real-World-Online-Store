import jwt from "jsonwebtoken"

const generateToken = (res, userID) => {
    // create a jwt token
    const token = jwt.sign({ userID }, process.env.JWT_SECRET, { expiresIn: '1d' })
    // set jwt as http-only cookie
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000
    })
}

export default generateToken;
