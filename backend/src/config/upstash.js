import {Redis} from '@upstash/redis';
import {Ratelimit} from '@upstash/ratelimit';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(100, '100 s'),

});
export default ratelimit;