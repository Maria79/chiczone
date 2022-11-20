/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['firebasestorage.googleapis.com'],
		unoptimized: true,
	},
	// images: {
	// 	remotePatterns: [
	// 		{
	// 			protocol: 'https',
	// 			hostname: 'firebasestorage.googleapis.com',
	// 			port: '',
	// 			pathname: '/chiczone-917b9.appspot.com/**',
	// 		},
	// 	],
	// },
};

//chiczone-917b9.appspot.com/image

gs: module.exports = nextConfig;
