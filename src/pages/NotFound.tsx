
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
          पेज नहीं मिला<br />
          <span className="text-lg">Page not found</span>
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button 
          onClick={() => window.location.href = '/'}
          className="bg-primary hover:bg-primary-dark text-white"
        >
          <Home className="mr-2" size={18} />
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
