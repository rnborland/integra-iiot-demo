# 🌊 USGS Water Data Import (SmartAlex Demo)

This SmartAlex-driven example shows how to:

- Retrieve real-time level and flow data from a USGS water station
- Write the data into InfluxDB using HTTP POST
- Visualize the results in Grafana on a single combined panel

---

## 🤖 SmartAlex Prompt

This demo was created with one simple prompt to SmartAlex:

I need to obtain level and flow data once per hour from the usgs for kinzua creek near guffey pa station id 03011800 and send the values to influxdb under a tag for the station id. Let's graph the results in Grafana from the measurements in a single graph of level and flow.



## 🛠️ Node-RED Flow

Import the flow provided in this folder:
- `usgs_kinzua_creek_level_flow.json`

This flow:
- Runs once per hour
- Pulls data from USGS station `03011800` (Kinzua Creek)
- Writes both gage height and flow as fields into InfluxDB under the measurement `usgs_data`
- Tags each entry with `station_id=03011800`

InfluxDB write uses HTTP POST for better reliability (avoids the known `influxdb out` tag bug).

---

## 📊 Grafana Setup

1. **Add a Data Source:**
   - Type: InfluxDB
   - URL: `http://localhost:8086`
   - Database: `usgs`
   - Save & Test

2. **Create a Time Series Panel:**
   - Query:
     ```sql
     SELECT mean("level") AS "Level", mean("flow") AS "Flow"
     FROM "usgs_data"
     WHERE "station_id" = '03011800' AND $timeFilter
     GROUP BY time($__interval) fill(null)
     ```
   - Set panel title: `Kinzua Creek – Level and Flow`
   - Customize axis labels and units as needed

---

## 🖼️ Screenshots

### 🧠 SmartAlex Response
![SmartAlex Chat](./Screenshot%202025-05-22%20170505.png)

---

### 🔧 Node-RED Flow
![Node-RED Flow](./Screenshot%202025-05-22%20170614.png)

---

### 📊 Grafana Panel *(coming soon)*
*Screenshot will be added once visualization is built*

---

## 🧠 Customize for Other Stations

To use different USGS stations or parameters:

- Replace `sites=03011800` with your desired station ID
- Modify `parameterCd=00065,00060` to include:
  - `00065` = Gage Height
  - `00060` = Discharge
  - `00300` = Dissolved Oxygen
  - `00400` = Turbidity

[Full Parameter Code Reference](https://waterservices.usgs.gov/rest/IV-Service.html#parameterCd)

---

## ✅ Why This Works

Unlike many AI-generated flows that use the `influxdb out` node (which fails to tag correctly), this setup:

- Uses `msg.payload` formatted in [Influx Line Protocol](https://docs.influxdata.com/influxdb/v1.8/write_protocols/line_protocol_tutorial/)
- Tags by station ID
- Works in production with or without InfluxDB authentication
- Is fully generated and explained by SmartAlex

---

## 📦 About This Demo

Created by Integra Developments LLC as part of the SmartAlex IIoT Assistant demo series.

See more at: [integra-developments.com](https://integra-developments.com)
