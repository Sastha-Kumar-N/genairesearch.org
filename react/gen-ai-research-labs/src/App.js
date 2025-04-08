import React from "react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-8 font-sans">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-700 mb-2">
          Gen AI Research Labs
        </h1>
        <p className="text-lg text-gray-600">
          Advancing research through AI-powered insights
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Internship Projects</h2>
        <ul className="grid gap-6 md:grid-cols-2">
          {[
            "1. NAFLD Based Comorbidity Prediction",
            "2. Gut Dysbiosis Associated Autoimmune Disorder Prediction",
            "3. Genomic Annotation Using AI",
            "4. Bharat Genome Database",
          ].map((project, index) => (
            <li key={index} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">{project}</h3>
              <p className="text-gray-700">
                Learn more about how we use AI to drive cutting-edge research in biology and healthcare.
              </p>
            </li>
          ))}
        </ul>
      </section>

      <footer className="text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Gen AI Research Labs. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
