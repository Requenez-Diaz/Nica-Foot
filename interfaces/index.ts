export interface Clients {
    id: string;
    name: string;
    image: string
    follow: number
    stores: number
}

export interface Maps {
    name: string
    description: string
    latitude: number
    longitude: number
}
export interface Populares {
    id: string,
    image: string,
    name: string
}
export interface Inventary {
    id: string
    name: string
    service: number
    description: string
    horario: number
    inventary: number
    sales: number
    price: number
    disponible: number
}
export interface Place {
    id: string
    img: string
}

interface Metadata {
    nextPage: number
    currentPage: number
    perPage: number
}
export interface ListClientsResponse {
    data: [Clients] | []
    metadata: Metadata
}

export interface ListMapsResponse {
    data: [Maps] | []
    metadata: Metadata
}
export  interface ListPopularesResponse {
    data: [Populares] | []
    metadata: Metadata
}
export interface ListInventarioResponse {
    data: [Inventary] | []
    metadata: Metadata
}
export interface ListPlaceResponse {
    data: [Place] | []
    metadata: Metadata
}