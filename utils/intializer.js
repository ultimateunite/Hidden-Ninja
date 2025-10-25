const axios = require('axios');
const dotenv = require('dotenv');
const colors = require('../UI/colors/colors'); 
dotenv.config();

const client = require('../main');

const BACKEND = process.env.BACKEND || 'https://server-backend-tdpa.onrender.com';
const BOT_API = process.env.BOT_API;
const DISCORD_USER_ID = process.env.DISCORD_USER_ID;


function printBox({ title, lines, color = colors.cyan }) {
    console.log('\n' + '─'.repeat(60));
    console.log(`${color}${colors.bright}${title}${colors.reset}`);
    console.log('─'.repeat(60));
    lines.forEach(line => {
        console.log(`${color}${line}${colors.reset}`);
    });
    console.log('─'.repeat(60) + '\n');
}

async function initializeBot() {
    const BOT_ID = client.user?.id || 'AIO @1.4.1.0';

    if (!BOT_API || !DISCORD_USER_ID) {
        console.log(`${colors.yellow}⚠️  BOT_API or DISCORD_USER_ID not configured - skipping verification${colors.reset}`);
        printBox({
            title: '[ ⚡ Bot Ready ]',
            lines: [
                'Bot is running without external verification.',
                'All features are available!',
                'To enable verification, add BOT_API and DISCORD_USER_ID to Secrets.'
            ],
            color: colors.green
        });
        return true;
    }

    try {
       
        const response = await axios.post(`${BACKEND}/api/verify-key`, {
            apiKey: BOT_API,
            discordId: DISCORD_USER_ID,
            botId: BOT_ID
        });

        if (response.data.success) {
            printBox({
                title: '[ ✅ API Key Verified ]',
                lines: [
                    `User: ${response.data.user?.username || DISCORD_USER_ID}`,
                    'Your bot is ready to go!',
                    'Visit Hidden Ninja Bot for more info.'
                ],
                color: colors.green
            });
            return true;
        } else {
            printBox({
                title: '[ ❌ Verification Failed ]',
                lines: [
                    response.data.message || 'Unknown error',
                    'No user account found for this Discord ID.',
                    'Visit Hidden Ninja Bot to register/login.'
                ],
                color: colors.red
            });
            process.exit(1);
        }
    } catch (error) {
        printBox({
            title: '[ ❌ Verification Error ]',
            lines: [
                error.response?.data?.message || error.message,
                'Visit Hidden Ninja Bot to get API.'
            ],
            color: colors.red
        });
        process.exit(1);
    }
}

module.exports = initializeBot;
