import NewsList from "@/components/NewsComponents/news-list";
import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";


export default function News(){
    return(
        <>
            <div>
                <h1>
                    News Detail Page    
                </h1>
                <NewsList news={DUMMY_NEWS}/>              
            </div>
        </>
    )
}