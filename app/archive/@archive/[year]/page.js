import NewsList from "@/components/NewsComponents/news-list";
import { getNewsForYear } from "@/libs/news";


export default function FilterednewsPage({params}) {
    const newsYear = params.year
    const news = getNewsForYear(newsYear)
    return <NewsList news={news}/>
}