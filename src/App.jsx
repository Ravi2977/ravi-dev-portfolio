import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import { AnimatePresence } from "framer-motion";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800); // little longer for smooth feel

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-x-hidden text-white min-h-screen">

      {/* 🔥 BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#0B132B] via-[#0f1b3a] to-[#0B132B]" />

      {/* 🔥 LOADER WITH EXIT */}
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {/* MAIN APP */}
      {!loading && (
        <>
          <Navbar />
          <Home />
        </>
      )}

    </div>
  );
}

export default App;