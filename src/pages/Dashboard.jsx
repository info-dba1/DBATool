import React, { useState } from "react";

export default function Dashboard() {
  const [fileName, setFileName] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) setFileName(file.name);
  };

  return (
    <div className="space-y-6">
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">Upload Dental Document</h2>
        <p className="text-sm text-gray-500 mb-4">
          Drag & drop your PDF here or click to upload.
        </p>

        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition ${
            isDragging ? "border-blue-400 bg-blue-50" : "border-gray-300"
          }`}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
        >
          <input
            type="file"
            accept="application/pdf"
            id="fileInput"
            className="hidden"
            onChange={handleFileSelect}
          />
          <label htmlFor="fileInput" className="cursor-pointer">
            <div className="text-5xl mb-2"></div>
            <div className="text-gray-600">
              {fileName ? (
                <span className="font-medium">{fileName}</span>
              ) : (
                "Drop PDF or click to upload"
              )}
            </div>
          </label>
        </div>
      </section>

      <section className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Recent Files</h3>
        <ul className="space-y-3">
          <li className="flex justify-between border rounded p-3">
            <div>
              <div className="font-medium">Patient_Claim_01.pdf</div>
              <div className="text-sm text-gray-500">Oct 5, 2025</div>
            </div>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm">
              Processed
            </span>
          </li>
          <li className="flex justify-between border rounded p-3">
            <div>
              <div className="font-medium">Dental_Preauth_09.pdf</div>
              <div className="text-sm text-gray-500">Oct 4, 2025</div>
            </div>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded text-sm">
              Pending
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}
