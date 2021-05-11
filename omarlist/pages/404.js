import Link from "next/link"
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
    return (  
        <div className="not-found">
            <h1>OOOoops....</h1>
            <h2>The page can not be found.....</h2>
            <br></br>
            <p>Go back to <Link href="/"><a>HomePage</a></Link></p>

        </div>
    );
}

export default NotFound;