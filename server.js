const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        app: "Balla Live",
        version: "1.0.0",
        status: "online",
        message: "Balla Live Backend is running"
    });
});

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        status: "online",
        app: "Balla Live",
        version: "1.0.0",
        time: new Date().toISOString()
    });
});

app.get("/api/live", (req, res) => {
    res.json({
        success: true,
        type: "live",
        count: 0,
        data: []
    });
});

app.get("/api/upcoming", (req, res) => {
    res.json({
        success: true,
        type: "upcoming",
        count: 0,
        data: []
    });
});

app.get("/api/results", (req, res) => {
    res.json({
        success: true,
        type: "results",
        count: 0,
        data: []
    });
});

app.get("/api/leagues", (req, res) => {
    res.json({
        success: true,
        type: "leagues",
        count: 0,
        data: []
    });
});

app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: "Endpoint not found"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log("Balla Live Backend running on port " + PORT);
});
