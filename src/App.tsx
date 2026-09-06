import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppLayout from "@/components/AppLayout";
import Dashboard from "./pages/Dashboard";
import SupplierUpload from "./pages/SupplierUpload";
import Batches from "./pages/Batches";
import BatchDetail from "./pages/BatchDetail";
import StorageMonitor from "./pages/StorageMonitor";
import Complaints from "./pages/Complaints";
import Verify from "./pages/Verify";
import AIChecker from "./pages/AIChecker";
import PatientSafety from "./pages/PatientSafety";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/upload" element={<SupplierUpload />} />
            <Route path="/batches" element={<Batches />} />
            <Route path="/batches/:id" element={<BatchDetail />} />
            <Route path="/storage" element={<StorageMonitor />} />
            <Route path="/complaints" element={<Complaints />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/ai-checker" element={<AIChecker />} />
            <Route path="/patient-safety" element={<PatientSafety />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
