let url = "ws://localhost:9001";

const client = mqtt.connect(url, {
  username: 'detpos',
  password: 'asdffdsa',
});

client.on("connect", () => {
  console.log("Connected to MQTT broker");
  // Subscribe to a topic
  //   client.subscribe("your/topic");
});

client.on("message", (topic, message) => {
  console.log(`Received message on topic ${topic}: ${message.toString()}`);
});

const permitBtn = document.getElementById("permit");
const ppBtn = document.getElementById("pp");
const finalBtn = document.getElementById("final");

const publicMessage = (topic, message) => {
  client.publish(topic, message);

  console.log(`Published message on topic ${topic}: ${message}`);
};

permitBtn.addEventListener("click", () =>
  publicMessage("detpos/device/permit/1", "01permit")
);

ppBtn.addEventListener("click", () =>
  publicMessage("detpos/device/livedata/1", "01L97.001P232003")
);

finalBtn.addEventListener("click", () =>
  publicMessage("detpos/device/Final/1", "01S1097L18.232P2000T1234.567")
);
