import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
    return ( 
        <div>
            <div className="logo">
                <Image src="/codechef logo 1.png" width={80} height={80} />
            </div>

            <nav>
                <Link href="/"><a>Home</a></Link>
                <Link href="/aboutme"><a>Events</a></Link>
                <Link href="#"><a>Webinars</a></Link>
                <Link href="#"><a>Projects</a></Link>
                <Link href="#"><a>Team</a></Link>
                <Link href="#"><a>Sponsors</a></Link>
                <Link href="#"><a>Updates</a></Link>
            </nav>

        </div>
     );
}
 
export default Navbar;