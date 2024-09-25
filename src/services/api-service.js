import apiRequest from "../utils/api-request";

const BASE_URL = "http://127.0.0.1:5000";

export const loginAdress = async (address) => {
  const response = await apiRequest(`${BASE_URL}/auth/login`, "POST", {
    address,
  });
  return response.message;
};

export const addressStats = async (address) => {
  const response = await apiRequest(
    `${BASE_URL}/address/stats/${address}`,
    "GET"
  );
  console.log(response);
  return response.message;
};

export const categoryStats = async (address) => {
  const response = await apiRequest(
    `${BASE_URL}/address/category-stats/${address}`,
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

export const verificationLink = async (address, questName) => {
  const response = await apiRequest(`${BASE_URL}/verification`, "POST", {
    address,
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
