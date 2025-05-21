# NodeRED_Flows

This folder contains prebuilt Node-RED flows tested on the Integra IIoT platform for AWS EC2.

## Included Flows

---

### `power_monitor.json`

- Combines readings from two Modbus energy meters via MQTT
- Calculates:
  - Total current (Amps)
  - Total power (Watts)
  - Total energy (kWh)
  - Daily and monthly energy usage
  - Estimated monthly cost
- Displays real-time and historical charts via Node-RED Dashboard
- Optionally logs to InfluxDB for Grafana visualization

---

### `thingspeak.json`

- Reads temperature and humidity data from a ThingSpeak channel
- Intended for use with Blues cellular IoT devices
  - The Blues device transmits environmental data to ThingSpeak via Arduino code
- Node-RED polls ThingSpeak and displays live readings in dashboard charts
- Demonstrates HTTP-based cloud integration without MQTT

---

### `sensecap.json`

- Includes **two separate flows**:
  1. **SenseCAP S2100 LoRaWAN - Temperature & Humidity**
     - Reads from a commercial LoRaWAN-enabled temp/humidity sensor
     - Uses base64 decoding logic inside Node-RED
     - LoRaWAN messages are received via **AWS IoT Core for LoRaWAN**
  2. **SenseCAP S2100 LoRaWAN - pH Sensor via 4–20 mA**
     - Reads a 4–20 mA signal from an Endress+Hauser CM42 Liquiline M transmitter
     - Signal is passed to the SenseCAP analog input
     - Data is sent via LoRaWAN and decoded from base64 in Node-RED
     - Flow demonstrates full decoding and data handling

?? Note: AWS IoT Core for LoRaWAN does not include built-in payload decoders (unlike TTN), so decoding must be done at the application layer (e.g., Node-RED).

---

## ?? Usage Instructions

1. Open Node-RED on your IIoT server
2. Use the **Import ? Clipboard** feature
3. Paste the full content of any `.json` file
4. Deploy the flow to test

All flows are production-ready and were validated on an AWS-hosted IIoT platform using Node-RED, InfluxDB, and Grafana.

---