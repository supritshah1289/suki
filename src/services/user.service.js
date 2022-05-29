/**
 * <p> User Types </p>
 * <p>
 *  <li> All (public content) </li>
 *  <li> User </li>
 *  <li> Mod (Moderator)</li>
 *  <li> Admin </li>
 * </p>
 */

import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "all");
  }

  getUserBoard() {
    return axios.get(API_URL + "user", { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + "mod", { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + "admin", { headers: authHeader() });
  }
}

export default new UserService();
