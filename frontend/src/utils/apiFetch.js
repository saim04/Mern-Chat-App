const API_BASE_URL = "https://chatappbackend-production-a17b.up.railway.app";

export const apiFetch = (path, options = {}) => {
  return fetch(`${API_BASE_URL}${path}`, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  }).then(async (res) => {
    if (!res.ok) {
      const err = await res.text();
      throw new Error(err || res.statusText);
    }
    return res.json();
  });
};
