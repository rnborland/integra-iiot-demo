# Node-RED Flow Index

The file `SmartAlex/flows.json` contains the complete set of flows currently in use across multiple IIoT projects developed by Integra Developments. It serves as a full working export of the Node-RED workspace deployed in the AWS EC2 image.

## 📦 Included Flow Categories

### 1. Energy Monitoring
- Dual CT coil Modbus meter integration (Peacefair)
- Power, energy, and cost tracking logic
- Daily and monthly calculations using Node-RED function nodes
- MQTT + AWS IoT integration

### 2. Air Quality & Odor Detection
- Bosch BME688 gas sensor integration
- MQTT publishing to external brokers
- SmartAlex interaction support (future classification logic)

### 3. SmartAlex Chatbot Demo Flows
- Time and inject nodes for testing chatbot flow-building features
- Simple importable samples for guided walkthroughs

## 🚫 Not Yet Included
The following flow types are under development and will be added in a future version:
- Solinst Model 301 Modbus flow for water level and temperature
- Water usage anomaly detection logic
- Graphical system overview dashboards

---

## 🛠 How to Use

1. Open your Node-RED editor (`https://your-instance:1880`)
2. Go to **Menu > Import**
3. Paste the contents of `SmartAlex/flows.json`
4. Deploy and begin testing

---

## 🧠 Tip

You can also use SmartAlex (built into the system) to generate or modify flows interactively. Ask him for:
- Sample MQTT publishing flows
- LoRaWAN payload decoding
- Function nodes for InfluxDB formatting
