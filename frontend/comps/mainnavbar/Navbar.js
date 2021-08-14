import Link from 'next/link'


const Navbar = () => {
    return ( 
        <nav>
            <Link href="/"><a>Home</a></Link>
            <Link href="/aboutme"><a>Events</a></Link>
            <Link href="#"><a>Webinars</a></Link>
            <Link href="#"><a>Projects</a></Link>
            <Link href="#"><a>Team</a></Link>
            <Link href="#"><a>Sponsors</a></Link>
            <Link href="#"><a>Updates</a></Link>

        </nav>
     );
}
 
export default Navbar;