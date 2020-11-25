import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID lD9DnX2CpDPeAwTy2XK3lmwosgqDauB9RZyCmO9ZpQY'
    }
});