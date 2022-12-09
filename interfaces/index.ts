export interface Client {
    image: string
    name: string
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
export interface Inventario {
    id: string,
    name: string
    service: number
    description: string
    horario: number
    inventary: number
    sales: number
    price: number
    disponible: number
}
interface Metadata {
    nextPage: number
    currentPage: number
    perPage: number
}
export interface ListClientsResponse {
    data: [Client] | []
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
    data: [Inventario] | []
    metadata: Metadata
}