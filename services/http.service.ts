const baseUrl = 'http://localhost:3000';
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAxR0tTMVdFR0FaUTFCNkVBQkVZUFA3WjI3IiwiaWF0IjoxNjcwNTA5Mzg0LCJleHAiOjYxNjcwNTA5Mzg0fQ.Qzxrb3MHhQMU3e4SjtEVqI5OB1N0SJAdXRN4dPGLtvk"

export class HttpClient {
   async get<T>(endPoint = "nicafoot") {
    const response = await fetch(`${baseUrl}/${endPoint}`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const data: T = await response.json();
    return data;
   }
}