

# Integra IIoT Platform – AWS EC2 Deployment

This repository supports the official Integra Developments **Industrial IoT (IIoT) server image** available on the AWS Marketplace. It includes full-stack components for real-time sensor integration, data visualization, and AI-assisted support via SmartAlex.

## 🔧 What's Included

- 🧩 **Node-RED** – Low-code editor for device and flow logic
- 📊 **InfluxDB** – Time-series database for storing sensor data
- 📈 **Grafana** – Visualization and alerting dashboards
- 🤖 **SmartAlex Chatbot** – Built-in AI assistant for configuration and troubleshooting

This platform is optimized for industrial applications such as:
- Water quality and level monitoring
- Environmental sensing
- Power usage and cost tracking
- Agriculture, aquaculture, and hydroponics
- Industrial automation (Modbus, LoRaWAN, MQTT, HTTP integrations)

---

## 🌐 AWS Deployment

This repo supports the preconfigured AWS EC2 image published by Integra Developments.

👉 **To launch the server**:  
Visit the AWS Marketplace (listing link coming soon) and deploy the image on any t2/t3.small or larger EC2 instance.

Once deployed:
- Access **Node-RED** at `https://your-instance:1880`
- Access **Grafana** at `https://your-instance:3000`
- Access **SmartAlex** via embedded HTML or `/chatbot/` endpoint

---


---

## 🤖 SmartAlex Overview

SmartAlex is a built-in AI chatbot trained to assist engineers, technicians, and integrators. He can:

- Help build and import Node-RED flows
- Decode LoRaWAN, Modbus, and custom payloads
- Guide InfluxDB and Grafana configuration
- Answer technical questions in real time

SmartAlex is accessible via:
- The `/chatbot/` API endpoint
- A built-in HTML client on the image
- Web embedding using secure reverse proxy

---

## 🛠 Technology Stack

- Node.js + Express (SmartAlex)
- Node-RED (low-code runtime)
- InfluxDB 2.x
- Grafana 10+
- AWS EC2 (Ubuntu 22.04)
- OpenAI GPT API integration

---

## 📁 Repository Structure
```├── SmartAlex/ # Chatbot server backend (Node.js + Express)
│ ├── server.js
│ ├── flows.json
│ └── system.txt
├── NodeRED_Flows/ # Optional sample Node-RED flows (add your own)
├── AWS_IoT_Examples/ # Payload decoders, MQTT/AWS IoT Core integration (coming soon)
├── screenshots/ # Optional dashboard or chatbot UI screenshots
└── README.md # This file```

## 📜 License

MIT License — for public source files. The AWS image is commercial and maintained by Integra Developments LLC.

---

## 🏢 About Integra Developments

We specialize in scalable IIoT solutions for water treatment, environmental monitoring, industrial automation, and energy usage analytics.

🌐 Website: [https://integra-developments.com](https://integra-developments.com)
📩 Contact: info@integra-developments.com




