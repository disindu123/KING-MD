const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("94775704025")
global.mongodb = process.env.MONGODB_URI || ""
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/naveeddogar/KING-MD'
global.location = 'pakistan/multan'
global.gurl = 'https://whatsapp.com/channel/0029Va66s2IJENxvTJjUtM1w' // add your username
global.sudo = process.env.SUDO || '94775704025'
global.devs = '94775704025';
global.website = 'https://king-md-session.onrender.com/' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/5541dfe4dc8c2f51e3f02.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'KING-MD' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '💫Disindu Damsandu💫' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? 'KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUpQZDF6QzU1Uzc1dW9vOEFvQ1NSNFltM2RNNUxmU3Vtb1I4WHNITkJHND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZE1CZDJLZFhMenpvbnBvVHlxamQ3cGFHTkRJbGxiM0U1TDZOd3JTVEtVYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0SU5lK1Q2bGN1V29obXJKTmQ4UnZSaW9HYlkzdElHc2FPaE1xODhLaFhNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJobGJEaUlhQW9FRzk3eDRDY083L1MwYy9tSHJXbFVPTFhXQkh5ODdUaTNZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdIM2ZLQmdBMVJwM3Jxd3NhVkFTUEI5UWh5ZXJaYksvL3FLSWdhVnBsRjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJvYkJBRGNBWkFEMVRtWnZHUzVLZUcrZ3J1UGErbmZlZzVPTUJmSWFZRVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUFSQ3Y2M2xscjgrbzNTWTV1bUVGNVJGV2YvMHArYXpQZHhqTUd5QXBVOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTXpORW5ydTdCOFdsQnhaN040MU9qbSswMG1hZjJNSHM3RXBFVlkxNGRTcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRTL0JJTHBEK2l0c01ncDV6NUZkSTBwTXltWExZOFR2YVpvSDRrWkY2TUxvdkhPbUNFV21iU00zRW1UUFJTdCtpTDF1LzJWZnRqT2FuSXI1amhaR2dBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODksImFkdlNlY3JldEtleSI6IjA3cERPdm5UbGtxV1NYTmxDaUpYbitoZEFlZ0dhdFB2cy96ZUhwNkE3UU09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InJXS0FhUlZ3VFdtbzVoeDdiOS1jVWciLCJwaG9uZUlkIjoiNDY5ZTVmZDgtMzYyYy00MjRiLTlkOTktNDgwMjJhYmM2ODhhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFmMXc0ekw1cE1WUzZVNStNZitXU0RxV0dkbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSEhuckN3TzFqcUJkZXdkNWY1TDBxYWhjcW89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNEVMNzJNTlYiLCJtZSI6eyJpZCI6Ijk0Nzc1NzA0MDI1OjUwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuC8u+Krt/CdlIfwnZSm8J2UsPCdlKbwnZSr8J2UofCdlLIg8J2Uh/CdlJ7wnZSq8J2UsPCdlJ7wnZSr8J2UofCdlLLiq7jgvLoifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pQZzFQY0RFSzJ2LzdRR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImcwTUNWMHQ5Uy82eFBxTXMxb0tuSG9SdGtOa3R6K0drMUxxazVwakNvd0k9IiwiYWNjb3VudFNpZ25hdHVyZSI6InJNQndlOFFxYUlwUFJjRFowRmIvUExKd3lqRXpBR1UwemZSRlRWMk1GWnNwUUVFT0V5b0ZiRHExSlBSWjhkMkQ1OXFMK0VBUG8zNkFkc0xBRndyeEFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJWUEpIQ01uMGVYMjBmeDE0ZUduYThQb1J6cUw5V3dTYnk3MVpscmZtdGsyVU5KUnFGTk83RE1FUUNLM3htNEdncXRlWlJrMVgyM1VEdFZpQVQwdjdnZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzc1NzA0MDI1OjUwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllOREFsZExmVXYrc1Q2akxOYUNweDZFYlpEWkxjL2hwTlM2cE9hWXdxTUMifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE3NTE0ODIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR0VsIn0=' : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? '💫Disindu Damsandu💫' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'King-Md' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'false' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.3.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'KING-MD',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
