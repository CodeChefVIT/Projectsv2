import { loadGetInitialProps } from 'next/dist/shared/lib/utils';
// import Link from 'next/link'
import nav2 from '../Secondnavbar/Navbar2.module.css'

const Navbar2 = (props) => {

    return (

        <div className={nav2.nav}>
            <ul className={nav2.items}>
                <li className={nav2.li} onClick={
                    () => {
                        props.setYear('2021');
                    }
                }>2021</li>
                <li className={nav2.li} onClick={
                    () => {
                        props.setYear('2020');
                    }
                }>2020</li>
                <li className={nav2.li} onClick={
                    () => {
                        props.setYear('2019');
                    }
                }>2019</li>

            </ul>

        </div>
    );
}

export default Navbar2;