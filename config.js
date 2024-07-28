const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="abilewaayomide@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Ayomide202407/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/EYHA0EjGsN41mO0psPG5HT";
global.website=process.env.GURL || "https://chat.whatsapp.com/EYHA0EjGsN41mO0psPG5HT" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/Ayomide202407/Suhail-Md/main/lib/Mikasa.Ackerman.full.3909974.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "POWERED BY GRANDPA-MD" 


global.devs = "2349010756236" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349010756236";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "23490107562366";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://raw.githubusercontent.com/Ayomide202407/Suhail-Md/main/lib/anime-waifu-maid-crying-and-kneeling-oalyg68n72eniw3q.webp" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_13_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjksXG4gICAgICAgIDg0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDk5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTk5LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEzLFxuICAgICAgICA5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjA0LFxuICAgICAgICA5OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzksXG4gICAgICAgIDMzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY0LFxuICAgICAgICA5MixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDQyLFxuICAgICAgICA3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjE4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTksXG4gICAgICAgIDU5LFxuICAgICAgICAyMjksXG4gICAgICAgIDk4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTc0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDksXG4gICAgICAgIDEwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTU5LFxuICAgICAgICA3MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDEsXG4gICAgICAgIDM1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTEwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDMwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDMyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjIsXG4gICAgICAgIDIxLFxuICAgICAgICAzMixcbiAgICAgICAgODQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI0LFxuICAgICAgICA1MixcbiAgICAgICAgMjExLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyLFxuICAgICAgICAwLFxuICAgICAgICA3OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA4LFxuICAgICAgICA5NixcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDQyLFxuICAgICAgICA2MixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDcyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI1WFBmbk5kejhBS1BsUWFmanI2SDA4RG1KaGVrdFpMSW1BNnVoUVpjdlRjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJnTlRQdk1uVFJDZXVnY28tYzJQQkxBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjljZDllYmFhLWE3MzMtNDY0ZS1iZGE0LWZhMjkxNWM0ZGI2NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDQsXG4gICAgICAzNixcbiAgICAgIDIwMixcbiAgICAgIDI0OSxcbiAgICAgIDIwOCxcbiAgICAgIDU4LFxuICAgICAgMTU1LFxuICAgICAgMjI3LFxuICAgICAgNTYsXG4gICAgICA4MyxcbiAgICAgIDIyMixcbiAgICAgIDIyOSxcbiAgICAgIDE0NyxcbiAgICAgIDk0LFxuICAgICAgNDcsXG4gICAgICAyOSxcbiAgICAgIDgwLFxuICAgICAgMjAxLFxuICAgICAgMjQsXG4gICAgICAxNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUyLFxuICAgICAgMjE5LFxuICAgICAgMTIsXG4gICAgICAxMjAsXG4gICAgICAxMzYsXG4gICAgICAxNzIsXG4gICAgICAyMjIsXG4gICAgICAzNyxcbiAgICAgIDcyLFxuICAgICAgMTcxLFxuICAgICAgMTg0LFxuICAgICAgMTE1LFxuICAgICAgMTE5LFxuICAgICAgMTU4LFxuICAgICAgMzMsXG4gICAgICA0LFxuICAgICAgOTIsXG4gICAgICAxMDAsXG4gICAgICA5MCxcbiAgICAgIDE1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09XYTI3a0hFTFg0bWJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYWMzS2Jta1RibVhoZXgrdEJNOUhhZXpCUnllWFJEa0x5YTA5S2VpVXNpbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJxQTBCVkFKdFZ1bEZaK1UzN0dSYzZWVnVDUEhSVytNT1YwTkJ2VWdiN1N0SFVkMXI3bGtvV0F2aUY1Tk9RbndkMFlTaUVCSDB5cXlyZHU5UCt1ZzlDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZRnFvclE3cTN0Qit6OGlwVUN1OERjYXdvb2hnQWh1ZDhnQzZGZTZLN01SYTFKNWhpVklZTFk5MnUwd1F0UXhRZVhKTEo4dG5Zc1Q3ZnhKNE5QbzRCUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTA3NTYyMzY6NTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2NzgyOTg4MjQyMTM5MTo1NkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTA3NTYyMzY6NTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjE4NjgxMFxufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 POWERED BY GRANDPA_MD 』```", //*『sᴜʙsᴄʀɪʙᴇ • ᴛᴇᴄʜ』*\n GRANDPA"),
 
  author : process.env.PACK_AUTHER|| "Grandpa",
  packname: process.env.PACK_NAME || "It's me bitch",
  botname : process.env.BOT_NAME  || "GRANDPA_MD",
  ownername:process.env.OWNER_NAME|| "GRANDPA",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-None-ldSYCUaCzRQH7W9Yrd72T3BlbkFJuWuZNRvvwvdZqKdFXH6u",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "28c7b9e9be12c2f0e01e2e021483211d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
