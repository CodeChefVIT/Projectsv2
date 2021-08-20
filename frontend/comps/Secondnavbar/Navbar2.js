import Link from 'next/link'
import nav2 from '../Secondnavbar/Navbar2.module.css'

const Navbar2 = () => {
    return (

        <div className={nav2.nav}>
            <nav className={nav2.navbar2}>
                <ul className={nav2.li}>
                    <li className={nav2.items}><Link href="/"><a className={nav2.listlink}>2021</a></Link></li>
                    <li className={nav2.items}><Link href="/"><a className={nav2.listlink}>2020</a></Link></li>
                    <li className={nav2.items}><Link href="/"><a className={nav2.listlink}>2019</a></Link></li>
                    <li className={nav2.items}><Link href="/"><a className={nav2.listlink}>2018</a></Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar2;