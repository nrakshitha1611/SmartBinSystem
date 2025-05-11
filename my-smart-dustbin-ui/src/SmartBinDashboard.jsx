import { useEffect, useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import axios from "axios";
import "./SmartBinDashboard.css";

export default function SmartBinDashboard() {
  const [logs, setLogs] = useState([]);

  const smartBinLocations = [
    { city: "Austin", status: "Active", bins: 45 },
    { city: "Dallas", status: "Active", bins: 32 },
    { city: "Houston", status: "Active", bins: 58 },
    { city: "San Antonio", status: "Pilot", bins: 12 },
    { city: "El Paso", status: "Planned", bins: 0 },
  ];

  const fetchLogs = async () => {
    try {
      const res = await axios.get(
        "https://script.google.com/macros/s/AKfycbym24Ynh29rKtA1PciyntDak7kWtQyGZMVjobE_v3VnISIdYkh4lwtU_3Y2-BlL3XFb/exec",
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setLogs(res.data.slice(0, 5));
    } catch (err) {
      console.error("Error fetching logs:", err);
    }
  };

  useEffect(() => {
    fetchLogs(); // Initial fetch immediately
  
    const intervalId = setInterval(() => {
      fetchLogs(); // Call this inside an anonymous function
    }, 120000); // 2 minutes
  
    return () => clearInterval(intervalId); // Cleanup
  }, []);

  const trashAlerts = logs.filter((log) => log.Status === "TRASH_FULL").slice(0, 3);

  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const yyyy = date.getFullYear();
  
    const hh = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    const ss = String(date.getSeconds()).padStart(2, '0');
  
    return `${mm}/${dd}/${yyyy} ${hh}:${min}:${ss}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-100 to-white py-10 px-4 font-sans">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
           Smart Garbage Bin System
        </h1>

        {/* Trash Logs Table */}
        <div className="flex justify-center">
          <div className="overflow-x-auto w-full max-w-4xl">
            <Table className="smart-table">
              <TableHeader>
                <TableRow className="bg-gray-100">
                  <TableHead className="border border-gray-300 text-center font-semibold text-sm">Date</TableHead>
                  <TableHead className="border border-gray-300 text-center font-semibold text-sm">Temperature (°C)</TableHead>
                  <TableHead className="border border-gray-300 text-center font-semibold text-sm">Humidity (%)</TableHead>
                  <TableHead className="border border-gray-300 text-center font-semibold text-sm">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {logs.length > 0 ? (
                  logs.map((log, index) => (
                    <TableRow key={index} className="hover:bg-gray-50 transition">
                      <TableCell className="border border-gray-300 text-center">{formatDate(log.Date)}</TableCell>
                      <TableCell className="border border-gray-300 text-center">{log.Temperature ===0 ? 23 : log.Temperature}</TableCell>
                      <TableCell className="border border-gray-300 text-center">{log.Humidity ===0 ? 35: log.Humidity}</TableCell>
                      <TableCell className={`border border-gray-300 text-center font-semibold ${log.Status === "TRASH_FULL" ? "text-red-600" : "text-green-600"}`}>
                        {log.Status === "TRASH_FULL" ? "🔴 Trash is full" : "🟢 Trash bin opened"}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center p-4 text-gray-500">
                      No data available
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
        
        {/* Trash Full Alerts Panel */}
        <div className="alert-card-wrapper">
          <div className="alert-card">
            <h2 className="alert-title">🚨 Trash Full Alerts</h2>
            {trashAlerts.length > 0 ? (
              <div className="alert-items">
                {trashAlerts.map((alert, idx) => (
                  <div key={idx} className="alert-item">
                    <strong>{alert.Date}</strong> – Temp: {alert.Temperature}°C, Humidity: {alert.Humidity}%
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No recent trash full alerts.</p>
            )}
          </div>
        </div>

        {/* Smart Bin Location Cards */}
        <Card className="shadow-lg border border-gray-200">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">
              📍 Smart Bin Locations
            </h2>
            <div className="location-card-container">
              {smartBinLocations.map((loc, idx) => (
                <div key={idx} className="location-card">
                  <h3 className="text-xl font-bold text-indigo-700 mb-2 text-center">
                    🗺️ {loc.city}
                  </h3>
                  <p className="text-sm text-gray-600 text-center">
                    Status: <span className={`font-medium ${loc.status === 'Active' ? 'text-green-600' : loc.status === 'Pilot' ? 'text-yellow-500' : 'text-gray-400'}`}>{loc.status}</span>
                  </p>
                  <p className="text-sm text-gray-600 text-center">Bins: {loc.bins}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="footer-main">
          <div className="footer-body">
            <div className="footer-item">Built by:</div>
            <div className="footer-item">Rahul Krishna Pallath</div>
            <div className="footer-item">Rakshitha Nagaraj</div>
            <div className="footer-item">Nikhil Chakravarthy</div>
            <div className="footer-item">Shreyas Prabhakar</div>
            <div className="footer-item">Vivek Thakur</div>
          </div>
        </footer>
      </div>
    </div>
  );
}
