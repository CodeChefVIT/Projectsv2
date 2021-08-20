import homeStyles from '../Homesection/Home.module.css'
import projectStyle from "../Projectsheading/Ourprojects.module.css";


const Hero = () => {
    return ( 
        <section className={homeStyles.showcase}>

            <div className={homeStyles.container}>

                <h2 className={homeStyles.heading1}>CodeChef-VIT believes in the notion of learning by doing</h2>

                <h1 className={homeStyles.para}><span className={homeStyles.yellow}>project</span> based learning has</h1>
                <h1 className={homeStyles.para}>always been our <span className={homeStyles.yellow}>USP</span></h1>


            </div>


        </section>
     );
}
 
export default Hero;