import projectStyle from "../Projectsheading/Ourprojects.module.css";
import homeStyles from '../Homesection/Home.module.css'

const Projecttext = () => {
    return (
        <section className={projectStyle.section}>
            <div className={projectStyle.content}>
                <h1 className={projectStyle.ourprojects}>Our Projects</h1>
                <p className={projectStyle.projectContent}>Our core members have created various <span className={homeStyles.yellow}>industrial level Projects</span> <br />
                    under the guidance of their abled technical mentors</p>
            </div>
        </section>
    );
}

export default Projecttext;