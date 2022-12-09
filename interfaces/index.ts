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
export interface Information {
    id: string,
    namePlaces: string,
    numberPhone: number,
    places: string
    socialmedia: string
}
export interface Category {
    id: string
    name: string,
    description: string
    product: string
    date: number
    avatar: string
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

export interface ListInformationResponse {
    data: [Information] | []
    metadata: Metadata
}

export interface ListCategoryResponse {
    data: [Category] | []
    metadata: Metadata
}