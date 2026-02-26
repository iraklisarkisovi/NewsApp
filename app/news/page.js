import Link from "next/link";


export default function News(){
    return(
        <>
            <div>
                <h1>
                    News Detail Page    
                </h1>
                <ul className="news-list">
                   <li><Link href={"/news/Home"}>Home</Link></li>
                   <li><Link href={"/news/Service"}>Service</Link></li> 
                   <li><Link href={"/news/Navigate"}>Navigate</Link></li>
                </ul>                
            </div>
        </>
    )
}