const baseUrl = 'http://localhost:3000';
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAxR0tKVFlHVjFERVhQM0NLNFFRNE1IR1FDIiwiaWF0IjoxNjcwMzAwNzgzLCJleHAiOjE2NzY3NjYxOTV9.obvXARvjiySepwTyZ5kpaYzSIfinl_K9fas7K0OT7Bw"

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