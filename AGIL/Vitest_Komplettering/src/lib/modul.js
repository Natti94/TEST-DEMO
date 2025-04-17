const API_URL = "https://tokenservice-jwt-2025.fly.dev/token-service/v1/request-token";

let jwtToken = "";

export function setToken(token) {
    jwtToken = token;
}

function getHeaders() {
    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
    };
}

export async function readToken(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "GET",
        headers: getHeaders(),
    });
    return response.json();
}
