/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['fakestoreapi.com'],
        },
/*     reactStrictMode: false,
    images: {
        remotePatterns : [
            {
                protocol: "https",
                hostname: "fakestoreapi.com",
                port: "3000",
                pathname: "/**",
            },
        ],
    }, */
    
      
}

module.exports = nextConfig


/* 
module.exports = {
    images: {
      domains: ['localhost:8000'] // whatever port your backend runs on
    }
} 
*/