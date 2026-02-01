import React, { useState } from "react";
import { GoogleGenAI } from "@google/genai";

const TestGemini = () => {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const testAPI = async () => {
    setLoading(true);
    setError("");
    setResult("");

    const API_KEY = "AIzaSyDWZrlRMKdtz3k5x9ZpPRdKFeSu_zVpx34";

    // Danh sách model để thử (SDK mới)
    const modelsToTry = [
      "gemini-2.0-flash-exp",
      "gemini-1.5-flash",
      "gemini-1.5-flash-latest",
      "gemini-1.5-pro",
      "gemini-1.5-pro-latest",
    ];

    for (const modelName of modelsToTry) {
      try {
        console.log(`Đang thử model: ${modelName}...`);

        // ⭐ Khởi tạo với SDK mới
        const ai = new GoogleGenAI({ apiKey: API_KEY });

        // ⭐ Gọi API với cú pháp mới
        const response = await ai.models.generateContent({
          model: modelName,
          contents: "Say hello in Vietnamese",
        });

        const text = response.text;

        console.log(`✅ Model ${modelName} hoạt động!`);
        setResult(`Model: ${modelName}\nKết quả: ${text}`);
        setLoading(false);
        return; // Dừng lại khi tìm được model hoạt động
      } catch (err) {
        console.error(`❌ Model ${modelName} lỗi:`, err.message);
        console.error("Chi tiết lỗi:", err);
      }
    }

    setError("Không có model nào hoạt động. Kiểm tra API key hoặc region!");
    setLoading(false);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "monospace" }}>
      <h2>Test Gemini API (SDK mới @google/genai)</h2>

      <div
        style={{
          marginBottom: "20px",
          padding: "10px",
          background: "#fff3cd",
          borderRadius: "5px",
        }}
      >
        <strong>⚠️ Lưu ý:</strong> Đảm bảo đã cài đặt SDK mới:
        <pre
          style={{ background: "#f5f5f5", padding: "10px", marginTop: "10px" }}
        >
          npm install @google/genai
        </pre>
      </div>

      <button
        onClick={testAPI}
        disabled={loading}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: loading ? "not-allowed" : "pointer",
          background: loading ? "#ccc" : "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        {loading ? "Đang test..." : "Test API"}
      </button>

      {result && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            background: "#d4edda",
            borderRadius: "5px",
            border: "1px solid #c3e6cb",
          }}
        >
          <strong>✅ Thành công:</strong>
          <pre style={{ whiteSpace: "pre-wrap", marginTop: "10px" }}>
            {result}
          </pre>
        </div>
      )}

      {error && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            background: "#f8d7da",
            borderRadius: "5px",
            border: "1px solid #f5c6cb",
          }}
        >
          <strong>❌ Lỗi:</strong>
          <pre style={{ whiteSpace: "pre-wrap", marginTop: "10px" }}>
            {error}
          </pre>
          <div style={{ marginTop: "10px", fontSize: "14px" }}>
            <strong>Các khả năng:</strong>
            <ul>
              <li>SDK cũ chưa được gỡ</li>
              <li>API key không hợp lệ</li>
              <li>Region bị chặn (cần VPN)</li>
              <li>Chưa enable Generative Language API</li>
            </ul>
          </div>
        </div>
      )}

      <div
        style={{
          marginTop: "30px",
          padding: "15px",
          background: "#e7f3ff",
          borderRadius: "5px",
        }}
      >
        <h3>Debug Info:</h3>
        <p>
          <strong>API Key:</strong> {API_KEY.substring(0, 20)}...
        </p>
        <p>
          <strong>SDK Package:</strong> @google/genai
        </p>
        <p>
          <strong>Browser:</strong> {navigator.userAgent}
        </p>
      </div>
    </div>
  );
};

export default TestGemini;
