  client.on("CB:Call", (json) => {
    if (botinfo.settings.callBlock == true) {
  client
    .query({
      json: [
        "action",
        "call",
        [
          "call",
          {
            from: client.user.jid,
            to: json[1].from,
            id: baileys.generateMessageID(),
          },
          [
            [
              "reject",
              {
                "call-id": json[1].id,
                "call-creator": json[1].from,
                count: "0",
              },
              null,
            ],
          ],
        ],
      ],
    })
    .then(() => {
      setTimeout(async () => {
        if (client.blocklist.includes(json[1].from)) return;
        client.blockUser(json[1].from, "add");
      }, 3000);
    })
    .catch();
   }
});
