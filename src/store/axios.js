import axios from "axios";

class UserManager {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.NEXT_APP_URL}`,
    });

    this.service.interceptors.request.use(
      (config) => {
        const token = Cookies.get("authToken");
        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        } else {
          console.log("authToken çerezi bulunamadı veya değeri geçersiz.");
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  request(method, path, data = null, headers = {}, params = {}) {
    const config = {
      method: method,
      url: path,
      headers: headers,
      params: params,
    };

    if (method.toLowerCase() === "post" || method.toLowerCase() === "put") {
      config.data = data;
    }

    return this.service(config);
  }

  get(path, params = {}, headers = {}) {
    return this.request("get", path, null, headers, params);
  }

  post(path, data, headers = {}, params = {}) {
    return this.request("post", path, data, headers, params);
  }

  // Similarly you can add put, delete etc.
}

export const userManager = new UserManager();
