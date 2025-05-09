import axios from "axios";

class ApiClient {
  private static instance: ApiClient;
  private client;

  private constructor() {
    this.client = axios.create({
      baseURL: "http://localhost:3001",
    });
  }

  static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient();
    }
    return ApiClient.instance;
  }

  getClient() {
    return this.client;
  }
}

export default ApiClient;
