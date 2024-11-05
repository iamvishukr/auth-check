import { create } from "zustand";
import axios from "axios";

const API_URL = "http://localhost:8000/api/auth";

axios.defaults.withCredentials = true;
export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,

  signup: async (email, password, name) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/signup`, {
        email,
        password,
        name,
      });
      set({
        user: response.data.user,
        isLoading: false,
        isAuthenticated: true,
      });
    } catch (error) {
      set({
        error: error?.response?.data?.message || "ERROR VERIFYING",
        isLoading: false,
      });

      throw error;
    }
  },

  verifyEmail: async (code) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/verify-email`, { code });
      set({
        isLoading: false,
        isAuthenticated: true,
        user: response.data.user,
      });
      return response.data;
    } catch (error) {
      set({
        error: error.response.data.message || "ERROR VERIFYING",
        isLoading: false,
      });
      throw error;
    }
  },
}));
