import Link from 'next/link'
import Image from 'next/image'
import navStyles from '../topnavbar/Navbar.module.css'


const Navbar = () => {
    return (
        <header className={navStyles.header}>

            <div style={{display:'inline'}}>

                <img src="/codechef logo 1.png" alt="logo" />

            </div>



            <nav className={navStyles.nav}>


                <ul className={navStyles.ul}>

                    <li className={navStyles.listitems}><Link href="/"><a className={navStyles.listlink}>Home</a></Link></li>
                    <li className={navStyles.listitems}><Link href="/"><a className={navStyles.listlink}>Events</a></Link></li>
                    <li className={navStyles.listitems}><Link href="/"><a className={navStyles.listlink}>Webinars</a></Link></li>
                    <li className={navStyles.listitems}><Link href="/"><a className={navStyles.listlink}>Projects</a></Link></li>
                    <li className={navStyles.listitems}><Link href="/"><a className={navStyles.listlink}>Team</a></Link></li>
                    <li className={navStyles.listitems}><Link href="/"><a className={navStyles.listlink}>Sponsors</a></Link></li>
                    <li className={navStyles.listitems}><Link href="/"><a className={navStyles.listlink}>Updates</a></Link></li>

                </ul>


            </nav>





        </header>
    );
}

export default Navbar;