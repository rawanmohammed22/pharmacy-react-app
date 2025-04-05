import React, { useState } from "react";

export default function Home() {
  const [drug1, setDrug1] = useState("");
  const [drug2, setDrug2] = useState("");
  const [interaction, setInteraction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔹 جلب البيانات من FastAPI عند البحث
  const fetchInteraction = async () => {
    if (!drug1.trim() || !drug2.trim()) {
      setError("⚠️ Please enter two drug names.");
      return;
    }

    setLoading(true);
    setError("");
    setInteraction(null);

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/check_interaction/?drug1=${encodeURIComponent(drug1)}&drug2=${encodeURIComponent(drug2)}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.message) {
        setError("⚠️ No interactions found.");
      } else {
        setInteraction(data);
      }
    } catch (err) {
      console.error("Fetch Error:", err);
      setError("❌ Error fetching data. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <>
      <div className="pt-24 bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4">
        {/* العنوان الرئيسي */}
        <h1 className="text-4xl font-bold text-blue-700 mb-3 text-center">
          Drug Interaction Checker
        </h1>
        <p className="text-gray-600 mb-5 text-center">
          Find potentially harmful drug interactions easily.
        </p>

        {/* إدخال الأدوية */}
        <div className="bg-white shadow-md rounded-lg flex flex-col md:flex-row items-center w-full md:w-2/3 lg:w-1/2 p-5 border border-gray-300">
          <input
            type="text"
            placeholder="Enter first drug..."
            className="w-full md:w-1/2 p-3 m-2 outline-none text-lg text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={drug1}
            onChange={(e) => setDrug1(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter second drug..."
            className="w-full md:w-1/2 p-3 m-2 outline-none text-lg text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={drug2}
            onChange={(e) => setDrug2(e.target.value)}
          />
          <button
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all m-2 w-full md:w-auto"
            onClick={fetchInteraction}
            disabled={loading}
          >
            {loading ? "Searching..." : "Search "}
          </button>
        </div>

        {/* عرض النتيجة */}
        {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
        {interaction && (
          <div className="mt-6 bg-white shadow-lg p-5 rounded-lg w-full md:w-2/3 lg:w-1/2 border border-gray-300">
            <h2 className="text-xl font-bold text-blue-700 text-center">Interaction Found:</h2>
            <p className="text-gray-700 mt-2 text-center">{interaction[0]?.interaction}</p>
          </div>
        )}
      </div>
    </>
  );
}
