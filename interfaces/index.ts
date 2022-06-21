export interface Article {
    id: number,
    featured: boolean,
    title: string,
    url: string,
    imageUrl: string,
    newsSite: string,
    summary: string,
    publishedAt: string,
    launches: ILaunches,
    events: IEvents
}
interface IEvents{
    id: string,
    provider: string
}
interface ILaunches{
    id: string,
    provider: string
}
