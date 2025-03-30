
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">
            Oops! We couldn't find the page you're looking for.
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild>
              <a href="/">Return to Home</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/developers">Developer Resources</a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
