import homeStyles from './Home.module.css'
import projectStyle from "../Projectsheading/Ourprojects.module.css";


const Hero = () => {
    return ( 
        <section className={homeStyles.showcase}>

            <div className={homeStyles.container}>

                <h2 className={homeStyles.heading1}><span className={homeStyles.yellow}>CodeChef-VIT</span> believes in the notion of <span className={homeStyles.yellow}>learning by doing</span></h2>

                <h1 className={homeStyles.para}><span className={homeStyles.yellow}>Project</span> based learning has always been our <span className={homeStyles.yellow}>aim</span>.</h1>


            </div>


        </section>
     );
}
 
export default Hero;