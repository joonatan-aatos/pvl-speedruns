import { from } from "rxjs";

const api = {
  get: (url: string) => {
    const request = fetch(`http://localhost:5000/${url}`).then((response) =>
      response.json()
    );
    return from(request);
  },
  post: (url: string, body: any) => {
    const request = fetch(`http://localhost:5000/${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
    return from(request);
  },
  put: (url: string, body: any) => {
    const request = fetch(`http://localhost:5000/${url}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
    return from(request);
  },
  delete: (url: string, body: any) => {
    const request = fetch(`http://localhost:5000/${url}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
    return from(request);
  },
};

export default api;
