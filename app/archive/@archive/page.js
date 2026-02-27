import { getAvailableNewsYears } from "@/libs/news"
import Link from "next/link"

export default function ArchivePage() {
    const links = getAvailableNewsYears();
    console.log(links);

    return(
        <header>
            <nav>
                <ul>
                    {links.map((link) => (
                        <li key={link}>
                            <Link href={"/archive/" + link}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}