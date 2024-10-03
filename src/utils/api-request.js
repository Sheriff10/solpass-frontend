import axios from "axios";
import { getCookie, removeCookie } from "./cookies";

// Utility function to handle API requests
const apiRequest = async (url, method = "GET", data = null, isDev = false) => {
  try {
    // Create axios instance with credentials and headers
    const axiosInstance = axios.create({
      withCredentials: true, // Ensure cookies/credentials are sent
      headers: {
        "Content-Type": "application/json", // Default content type
        authorization: `Bearer ${getCookie("access-token")}`,
        "dev-authorization": `Bearer ${getCookie("dev-token")}`,
      },
    });

    const response = await axiosInstance({
      url,
      method,
      data, // Attach data for POST, PUT, PATCH requests
    });

    return response.data; // Return the response data
  } catch (error) {
    // Network error handling
    console.log(error);
    if (error.response) {
      // Server responded with a status other than 2xx
      const { status, data } = error.response;

      if (status === 403 || status === 401) {
        localStorage.removeItem("hasRedirected");
        removeCookie("access-token");
        removeCookie("dev-token");
        window.location.href = isDev ? "/auth/developer/login" : "/"; // Handle auth errors
      }

      // Handle specific errors from the API
      console.error(`Error: ${status} - ${data.message}`);
      throw new Error(data.message || "Something went wrong");
    } else if (error.request) {
      // No response received from the server
      console.error("Network Error:", error.message);
      throw new Error("Network error. Please try again.");
    } else {
      // Error setting up the request
      console.error("Error:", error.message);
      throw new Error("An error occurred. Please try again.");
    }
  }
};

export default apiRequest;
