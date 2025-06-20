import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./contact.module.css";

export const Contact =() => {
    return (<footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>

        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                <a href="mailto:swan.nalani@gmail.com">swan.nalani@gmail.com</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon" />
                <a href="https://www.linkedin.com/in/nalani-swan/">linkedin.com/in/nalani-swan/</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
                <a href="https://github.com/luckycharm92">github.com/luckycharm92</a>
            </li>
        </ul>
    </footer>);
    
};