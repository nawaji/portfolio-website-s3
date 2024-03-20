/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '1337',
				pathname: '/uploads/*'
			},
			{
				protocol: 'https',
				hostname: 'portfolio-website-strapi-s3.s3.us-west-2.amazonaws.com',
				port: '',
				pathname: '/*'
			},
		],
	},
};


export default nextConfig;
