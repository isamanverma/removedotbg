import { useAuth } from "@clerk/clerk-react";
import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const { getToken } = useAuth();

  const loadCreditsData = async () => {
    try {
      setLoading(true);
      const token = await getToken();
      console.log("Got token:", token ? "Token exists" : "No token");

      if (!token) {
        throw new Error("No authentication token available");
      }

      console.log("Fetching credits from:", `${backendUrl}/api/user/credits`);
      const { data } = await axios.get(`${backendUrl}/api/user/credits`, {
        headers: { 
          token,
          'Content-Type': 'application/json'
        }
      });

      console.log("Credits response:", data);
      
      if (data.success) {
        setCredits(data.credits);
        console.log("Credits updated:", data.credits);
      } else {
        throw new Error(data.message || "Failed to load credits");
      }
    } catch (error) {
      console.error("Credits loading error:", error);
      toast.error(error.response?.data?.message || error.message);
      setCredits(null);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    credits,
    setCredits,
    loadCreditsData,
    backendUrl,
    loading
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
