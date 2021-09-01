import Link from 'next/link'
import nav2 from '../Secondnavbar/Navbar2.module.css'

const Navbar2 = () => {
    return (

        <div className={nav2.nav}>
            <ul className={nav2.items}>
                <li className={nav2.li}><Link href="/"><a >2021</a></Link></li>
                <li className={nav2.li}><Link href="/"><a >2020</a></Link></li>
                <li className={nav2.li}><Link href="/"><a >2019</a></Link></li>
                <li className={nav2.li}><Link href="/"><a >2018</a></Link></li>


            </ul>

        </div>
    );
}

export default Navbar2;