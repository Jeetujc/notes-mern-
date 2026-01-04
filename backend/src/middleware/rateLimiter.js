import ratelimit from '../config/upstash.js';

const rateLimiter = async (req, res, next) => {
    try {
        const ip = req.ip; // Get user's IP address
        const { success } = await ratelimit.limit(ip);
        if (!success) {
            return res.status(429).json({ message: "Too Many Requests" });
        }

        next();
    } catch (error) {
        console.error("Error in rate limiter middleware:", error);
        res.status(500).json({ message: "Server Error" });
    }
}
export default rateLimiter;