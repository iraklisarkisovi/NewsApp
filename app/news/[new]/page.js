import { DUMMY_NEWS } from "@/dummy-news"
import { notFound } from "next/navigation";


export default async function({params}){
    const slug = await params
    const newsSlug = slug.new
    const newsItem = DUMMY_NEWS.find((prev) => prev.slug === newsSlug) ;

    if(!newsItem){
        notFound();
    }
    return(
        <>
            <article className="news-article">
                <header>
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
                    <h1>
                    You are on page - {slug.new}
                    </h1>
                    <time dateTime={newsItem.date}>
                        {newsItem.date}
                    </time>
                </header>
                <p>{newsItem.content}</p>
            </article>
        </>
    )
}