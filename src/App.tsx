
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Index from "./pages/Index";
import Features from "./pages/Features";
import Demo from "./pages/Demo";
import Government from "./pages/Government";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import FarmPlanner from "./pages/FarmPlanner";
import Marketplace from "./pages/Marketplace";
import Weather from "./pages/Weather";
import MarketPrices from "./pages/MarketPrices";
import Loans from "./pages/Loans";
import AskExpert from "./pages/AskExpert";
import NotFound from "./pages/NotFound";
import CropCalendar from "./pages/CropCalendar";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();
  
  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }
  
  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }
  
  return <>{children}</>;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/features" element={<Features />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/government" element={<Government />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/farm-planner" 
        element={
          <ProtectedRoute>
            <FarmPlanner />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/marketplace" 
        element={
          <ProtectedRoute>
            <Marketplace />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/weather" 
        element={
          <ProtectedRoute>
            <Weather />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/market-prices" 
        element={
          <ProtectedRoute>
            <MarketPrices />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/loans" 
        element={
          <ProtectedRoute>
            <Loans />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/ask-expert" 
        element={
          <ProtectedRoute>
            <AskExpert />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/crop-calendar" 
        element={
          <ProtectedRoute>
            <CropCalendar />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/settings" 
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        } 
      />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
