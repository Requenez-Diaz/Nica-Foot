export interface Client {
    image: string
    name: string
    follow: number
    stores: number
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