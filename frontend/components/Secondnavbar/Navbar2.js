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

        // <div class="flex flex-row ...">
        //     <ul className={nav2.li}>
        //         <li className={nav2.items}><Link href="/"><a className={nav2.listlink}>2021</a></Link></li>
        //         <li className={nav2.items}><Link href="/"><a className={nav2.listlink}>2020</a></Link></li>
        //         <li className={nav2.items}><Link href="/"><a className={nav2.listlink}>2019</a></Link></li>
        //         <li className={nav2.items}><Link href="/"><a className={nav2.listlink}>2018</a></Link></li>
        //     </ul>
        // </div>
        // <div className="flex mb-4 bg-black">
        //     <div className="w-1/4 bg-black text-white h-12"><Link href="/"><a className={nav2.listlink} className="lg:mx-20 lg:py-5">2021</a></Link></div>
        //     <div className="w-1/4 bg-black text-white h-12"><Link href="/"><a className={nav2.listlink} className="lg:mx-20 lg:py-5">2020</a></Link></div>
        //     <div className="w-1/4 bg-black text-white h-12"><Link href="/"><a className={nav2.listlink} className="lg:mx-20 lg:py-5">2019</a></Link></div>
        //     <div className="w-1/4 bg-black text-white h-12"><Link href="/"><a className={nav2.listlink} className="lg:mx-20 lg:py-5">2018</a></Link></div>
       
        // </div>
    );
}

export default Navbar2;