import { Header } from '../ui/header/header'
import { BASE_URL, EP_TRENDING } from '../config/api'
import { Carousel } from '../ui/hero/Carousel'

export interface Movies {
    overview: String
    title: String
    backdrop_path: String
    id: number
}

const getTrending = async () => {
    const res = await fetch(`${BASE_URL}${EP_TRENDING}`)
    const data = await res.json()
    return data.results
}

export default async function Home() {
    const trending = await getTrending()
    return (
        <>
            <Carousel movies={trending} />
        </>
    )
}
