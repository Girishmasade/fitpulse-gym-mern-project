import jwt from 'jsonwebtoken'

export const protectedRoutes = (req, res, next) => {
    try {
        const token = req.headers.autharization?.split(" ")[1]
        if (!token) {
            return res.status(401).json({ message: "Unauthorized access" });
        }
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();

    } catch (error) {
        
    }
}

export const authorizeRoles = () => {

}