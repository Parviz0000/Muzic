module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("play with 2p", {
    type: "STREAMING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
