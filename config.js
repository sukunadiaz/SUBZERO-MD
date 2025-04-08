const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // ===== BOT CORE SETTINGS =====
    SESSION_ID: process.env.SESSION_ID || ""
    PREFIX: process.env.PREFIX || "."
    BOT_NAME: process.env.BOT_NAME || "Sukuna"
    MODE: process.env.MODE || "public"
    REPO: process.env.REPO || "https://github.com/mrfrankofcc/SUBZERO-MD"

    // ===== OWNER & DEVELOPER SETTINGS =====
    OWNER_NUMBER: process.env.OWNER_NUMBER || "2349166818712"
    OWNER_NAME: process.env.OWNER_NAME || "Diaz"
    DEV: process.env.DEV || "2349166818712"
    DEVELOPER_NUMBER: '2349166818712@s.whatsapp.net'

    // ===== AUTO-RESPONSE SETTINGS =====
    AUTO_REPLY: process.env.AUTO_REPLY || "true"
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true"
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Sukuna*"
    READ_MESSAGE: process.env.READ_MESSAGE || "true"

    // ===== REACTION & STICKER SETTINGS =====
    AUTO_REACT: process.env.AUTO_REACT || "true"
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false"
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍"
    STICKER_NAME: process.env.STICKER_NAME || "Sukuna"
    AUTO_STICKER: process.env.AUTO_STICKER || "true"

    // ===== MEDIA & AUTOMATION =====
    AUTO_VOICE: process.env.AUTO_VOICE || "false"
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
    AUTO_TYPING: process.env.AUTO_TYPING || "true"
    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.postimg.cc/XYrZFtDc/images-1.jpg"

    // ===== SECURITY & ANTI-FEATURES =====
    ANTI_BAD: process.env.ANTI_BAD || "true"
    ANTI_LINK: process.env.ANTI_LINK || "true"
    ANTI_VV: process.env.ANTI_VV || "true"
    DELETE_LINKS: process.env.DELETE_LINKS || "false"
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log"

    // ===== BOT BEHAVIOR & APPEARANCE =====
    DESCRIPTION: process.env.DESCRIPTION || "*© Domain Expansion"
    PUBLIC_MODE: process.env.PUBLIC_MODE || "true"
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true"
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true"
};
