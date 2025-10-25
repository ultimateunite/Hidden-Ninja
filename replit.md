# Discord All-in-One Bot

## Overview
This is a comprehensive Discord bot with multiple features including music playback, moderation, economy, leveling, and many other commands. The bot was imported from GitHub and configured for Replit.

## Current Status
- ✅ Node.js and dependencies installed
- ✅ Discord bot token configured and bot connects successfully
- ✅ MongoDB connected successfully
- ✅ All 100 commands loaded and verified
- ✅ Bot is fully operational

## Setup Instructions

### Required Secrets
The bot requires two environment variables (configured via Replit Secrets):

1. **TOKEN** - Your Discord bot token from the Discord Developer Portal
2. **MONGODB_URI** - Your MongoDB connection string

**Important**: The MongoDB URI should have the actual password, not a placeholder. The format should be:
```
mongodb+srv://username:actual_password@cluster.mongodb.net/?appName=YourApp
```

Replace `<gg>` with your actual MongoDB password in the connection string.

### How to Update Secrets
1. Open the "Secrets" tool in the left sidebar (lock icon)
2. Click the three dots next to the secret you want to update
3. Select "Edit"
4. Update the value
5. Click "Update Secret"

## Project Structure
- `/commands/` - All bot commands organized by category
- `/events/` - Event handlers for Discord events
- `/handlers/` - Various feature handlers
- `/models/` - Database schemas
- `/antimodules/` - Anti-spam, anti-raid protection
- `/excesscommands/` - Optional command modules (economy, hentai, other)
- `config.json` - Bot configuration (prefix, language, enabled features)
- `index.js` - Main entry point

## Features
- Music playback (Distube & Lavalink)
- Moderation tools
- Economy system
- Leveling system
- Ticket system
- Custom commands
- Auto-moderation
- And many more!

## Running the Bot
The bot automatically starts via the "Discord Bot" workflow. Check the console output for status.

## Recent Changes
- 2025-10-25: Initial import and Replit setup
- Removed hardcoded credentials from config.json for security
- Added .gitignore and .env.example
- Installed Python for native module compilation
- Configured Discord Bot workflow
