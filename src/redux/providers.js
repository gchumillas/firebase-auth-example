import axios from "axios";
import { apiUrl } from "config";

export function getUsers(page, rowsPerPage) {
  const url = [apiUrl, `users?page=${page + 1}&per_page=${rowsPerPage}`].join(
    "/"
  );

  return axios.get(url);
}

export function getSingleUser(userId) {
  const url = [apiUrl, `users/${userId}`].join("/");

  return axios.get(url);
}

export function updateUser(userId, firstName, lastName) {
  const url = [apiUrl, `users/${userId}`].join("/");
  const payload = { first_name: firstName, last_name: lastName };

  return axios.patch(url, payload);
}

export function createUser(firstName, lastName) {
  const url = [apiUrl, `users`].join("/");
  const payload = { first_name: firstName, last_name: lastName };

  return axios.post(url, payload);
}
