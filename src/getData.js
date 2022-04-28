const axios = require("axios");

async function getData() {
  try {
    const response = await axios.get("https://animechan.vercel.app/api/random");

    return response?.data;
  } catch (error) {
    console.error(error);

    return error?.message;
  }
}

module.exports = getData;
