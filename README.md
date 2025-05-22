# ⚙️ Integra IIoT Platform – AWS EC2 Deployment

> 🛒 **To launch the Integra IIoT Platform**, copy and paste this URL into your browser:

https://aws.amazon.com/marketplace/pp/prodview-5n6b3nx6tnu4g

This repository supports the official **Integra Developments Industrial IoT (IIoT) server image** available on the AWS Marketplace. It includes full-stack components for real-time sensor integration, data visualization, and AI-assisted support via SmartAlex.

---

## 🚀 What's Included

- ✅ **Node-RED** – Low-code editor for device and flow logic  
- ✅ **InfluxDB** – Time-series database for sensor data  
- ✅ **Grafana** – Visualization and alerting dashboards  
- ✅ **SmartAlex Chatbot** – AI assistant for configuration and troubleshooting

---

## 🌐 Use Cases

This platform is optimized for:

- Water quality and level monitoring  
- Environmental sensing  
- Power usage and cost tracking  
- Agriculture, aquaculture, hydroponics  
- Industrial automation (Modbus, LoRaWAN, MQTT, HTTP)

---

## ☁️ AWS Deployment

This repo supports the preconfigured **AWS EC2 image** published by Integra Developments.

### ▶️ To Launch the Server:

1. Go to:  
   🔗 https://aws.amazon.com/marketplace/pp/prodview-5n6b3nx6tnu4g  
2. Deploy on any `t2.small` or `t3.small` instance or larger.

### 🔐 After Deployment:

- Node-RED: `https://your-instance:1880`  
- Grafana: `https://your-instance:3000`  
- SmartAlex Chatbot: via embedded HTML or `/chatbot/` API

---

## 🧠 SmartAlex Overview

**SmartAlex** is your built-in AI assistant trained on industrial systems. He can:

- Generate Node-RED flows from natural language
- Decode LoRaWAN, Modbus, or HTTP payloads
- Assist with InfluxDB and Grafana configuration
- Answer technical questions in real-time

Accessible via:

- `/chatbot/` API
- Built-in HTML client on the server
- Embedded in your IIoT frontend (via reverse proxy)

---

## 🛠️ Technology Stack

- Node.js + Express (SmartAlex)
- Node-RED
- InfluxDB 1.8 / 2.x
- Grafana 10+
- Ubuntu 22.04 (AWS EC2)
- OpenAI GPT API integration

---

## 📁 Repository Structure
SmartAlex/ # Chatbot backend (Node.js + Express)
├── server.js
├── system.txt

NodeRED_Flows/ # Sample flows: energy monitor, LoRaWAN, cellular
AWS_IoT_Examples/ # AWS IoT Core integration (coming soon)
SmartAlex_Demo_Tests/ # Live chatbot test cases (USGS, BME280, etc.)
screenshots/ # Screenshots of Node-RED, Grafana, SmartAlex
README.md # This file


---

## 🔬 Demos

| Demo       | Description                                |
|------------|--------------------------------------------|
| [Demo 01](./SmartAlex_Demo_Tests/demo01_BME280_to_influx) | ESP32 BME280 → Influx → Grafana |
| [Demo 02](./SmartAlex_Demo_Tests/demo02_USGS_water_data_import) | USGS water level + flow integration |
| More coming soon...                                     |

---

📌 _Maintained by Integra Developments LLC_
