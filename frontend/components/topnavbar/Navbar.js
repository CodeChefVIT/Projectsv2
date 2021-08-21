import Link from 'next/link'
import navStyles from '../topnavbar/Navbar.module.css'


const Navbar = () => {
    return (
        <nav className={navStyles.nav}>

            <div className={navStyles.logoimage}>

                <img src="https://i.ibb.co/4J9LXxS/cclogo.png" alt="logo" style={{marginLeft: 20, height: 80}}/>

            </div>
            <ul className={navStyles.ul}>

                <li className={navStyles.listitems}><Link href="/"><a className={navStyles.listlink}>Home</a></Link>
                </li>
                <li className={navStyles.listitems}><Link href="/"><a className={navStyles.listlink}>Events</a></Link>
                </li>
                <li className={navStyles.listitems}><Link href="/"><a className={navStyles.listlink}>Webinars</a></Link>
                </li>
                <li className={navStyles.listitems}><Link href="/"><a className={navStyles.listlink}>Projects</a></Link>
                </li>
                <li className={navStyles.listitems}><Link href="/"><a className={navStyles.listlink}>Team</a></Link>
                </li>
                <li className={navStyles.listitems}><Link href="/"><a className={navStyles.listlink}>Sponsors</a></Link>
                </li>
                <li className={navStyles.listitems}><Link href="/"><a className={navStyles.listlink}>Updates</a></Link>
                </li>

            </ul>


        </nav>

    );
}

export default Navbar;