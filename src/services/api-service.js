import apiRequest from "../utils/api-request";

// const BASE_URL = "http://127.0.0.1:5000";
const BASE_URL = "https://solpass-server.onrender.com";

export const loginAdress = async (address) => {
  const response = await apiRequest(`${BASE_URL}/auth/login`, "POST", {
    address,
  });
  return response.message;
};

export const addressStats = async (address) => {
  const response = await apiRequest(`${BASE_URL}/address/stats`, "GET");
  console.log(response);
  return response.message;
};

export const categoryStats = async (address) => {
  const response = await apiRequest(
    `${BASE_URL}/address/category-stats`,
    "GET"
  );
  return response.message;
};

export const categoryQuest = async (id) => {
  const response = await apiRequest(
    `${BASE_URL}/address/category/${id}`,
    "GET"
  );
  console.log(response);
  return response.message;
};

export const verificationLink = async (questName) => {
  const response = await apiRequest(`${BASE_URL}/verification`, "POST", {
    questType: questName,
  });
  console.log(response);
  return response.message;
};

export const verifyVerification = async (statusUrl) => {
  const response = await apiRequest(`${BASE_URL}/callback`, "POST", {
    statusUrl,
  });
  console.log(response);
  return response.message;
};

/**
 * DEVELOPER API SERVICE SECTION
 */

export const loginDev = async (credential) => {
  const response = await apiRequest(
    `${BASE_URL}/auth/dev/login`,
    "POST",
    credential,
    true
  );
  return response.message;
};
export const signupDev = async (credential) => {
  const response = await apiRequest(
    `${BASE_URL}/auth/dev/signup`,
    "POST",
    credential,
    true
  );
  return response.message;
};

export const getApiKey = async () => {
  console.log("called appikey");
  const response = await apiRequest(
    `${BASE_URL}/v1/devloper/apikey/get`,
    "GET",
    null,
    true
  );
  console.log(response);
  return response;
};

export const createApiKey = async (name) => {
  console.log("called appikey");
  const response = await apiRequest(
    `${BASE_URL}/v1/devloper/apikey/create`,
    "POST",
    { name },
    true
  );
  console.log(response);
  return response;
};
