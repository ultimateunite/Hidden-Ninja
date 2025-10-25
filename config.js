const { ActivityType } = require('discord.js');

module.exports = {
  ownerId: '1004206704994566164',
  status: {
    rotateDefault: [
      { name: 'Netflix', type: ActivityType.Watching },
      { name: 'GTA VI', type: ActivityType.Playing },
      { name: 'Hidden Ninja Bot', type: ActivityType.Streaming, url: 'https://www.twitch.tv/hiddenninja' },
      { name: 'Spotify', type: ActivityType.Custom },
    ],
    songStatus: true
  },
  spotifyClientId: "f71a3da30e254962965ca2a89d6f74b9",
  spotifyClientSecret: "199a619d22dd4e55a4a2c1a7a3d70e63",
}
