import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About =() => {
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/nalanicuteicon.png")}
         alt="My cute icon" className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")} 
            alt="Cursor Icon" 
             />
            <div className={styles.aboutItemText}>
                <h3>About me:</h3>
                <p>I am currently pursuing a Bachelor's Degree in Computer Science at the University of Leeds in the United Kingdom.
                     I aspire to work in either Software Engineering or Quantitivative trading in the Tech or Finance industry.</p>
                      <br></br>
                      <br></br>
                <p> In my free time I play football for the Cayman Islands Women's National Team, watch movies, go to the beach and listen to 50's and 60's music.</p>
            </div>
            </li>



        </ul>
         </div>
        </section>;
};