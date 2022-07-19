import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
    const access_token = jwt.sign(
        { sub: req.user.id },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRES },
    );

    return res.status(200).send({ access_token });
};

