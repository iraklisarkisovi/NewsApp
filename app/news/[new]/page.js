

export default async function({params}){
    const slug = await params

    return(
        <>
            <div>
                <h1>
                    You are on page - {slug.new}
                </h1>
            </div>
        </>
    )
}