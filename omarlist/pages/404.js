import Link from "next/link"
import { useEffect } from 'react'
import { useRouter } from 'next/router'


const NotFound = () => {

    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        },3000)
    },[])

    return (  
        <div className="not-found">
            <h1>Oops.....</h1>
            <h2>The page can not be found.</h2>
            
            <p>Click to go back to <Link href="/"><a>HomePage</a></Link></p>
            <p>Will be redirecting to Home Page soon...</p>

        </div>
    );
}

export default NotFound;