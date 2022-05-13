export interface News {
    id: number,
    url: string,
    by: string,
    title: string,
    time: number,
    text?: string
    type: string,
    score: number
    descendants: number
}