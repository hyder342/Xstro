import dotenv from 'dotenv';
dotenv.config();

const config = {
	SESSION_ID: process.env.SESSION_ID || 'zzBm2Cra#R5QdzaCtKAOdSMwsDz1WlAONkR7W-1udIAHuJx3WHNw',
	SUDO: process.env.SUDO || '',
	API_ID: process.env.API_ID || 'https://xstro-api-4fb28ece11a9.herokuapp.com',
	BOT_INFO: process.env.BOT_INFO || 'αѕтяσχ11;χѕтяσ м∂',
	STICKER_PACK: process.env.STICKER_PACK || 'мα∂є ву;χѕтяσ мυℓтι ∂єνι¢є вσт',
	WARN_COUNT: process.env.WARN_COUNT || 3,
	TIME_ZONE: process.env.TIME_ZONE || 'Africa/Lagos',
	DEBUG: process.env.DEBUG || false,
	VERSION: '1.2.1',
};
export { config };
export default config;
