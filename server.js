const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

const apiKey = process.env.API_KEY;
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/nakshatra-durations", async (req, res) => {
  try {
    const response = await axios.post(
      process.env.NAKSHATRA_API_END_POINT,
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.post("/yoga-durations", async (req, res) => {
  try {
    const response = await axios.post(
      process.env.YOGA_API_END_POINT,
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.post("/tithi-durations", async (req, res) => {
  try {
    const response = await axios.post(
      process.env.THITHI_API_END_POINT,
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.post("/karana-durations", async (req, res) => {
  try {
    const response = await axios.post(
      process.env.KARANA_API_END_POINT,
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.post("/aayanam", async (req, res) => {
  try {
    const response = await axios.post(
      process.env.AAYANAM_API_END_POINT,
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.post("/good-bad-", async (req, res) => {
  try {
    const response = await axios.post(
      process.env.GOOD_BAD_API_END_POINT,
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.post("/rahu-kalam", async (req, res) => {
  try {
    const response = await axios.post(
      process.env.RAHU_KALAM_API_END_POINT,
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.post("/yama-gandam", async (req, res) => {
  try {
    const response = await axios.post(
      process.env.YAMA_KANDAM_API_END_POINT,
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.post("/gulika-kalam", async (req, res) => {
  try {
    const response = await axios.post(
      process.env.GULIKA_API_END_POINT,
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
