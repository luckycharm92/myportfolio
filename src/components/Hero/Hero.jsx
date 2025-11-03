import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero =() =>{
    return( <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hey, I'm Nalani Toni-Ann Swan</h1>
            <p className={styles.description}>I'm a 2nd Year BSc Computer Science Student</p>

            <a href="mailto:swan.nalani@email.com" className={styles.contactBtn}>Contact Me</a>

        </div>
        <img src={getImageUrl("hero/Nalani.png")} alt="Photo of Nalani" className={styles.NalaniPhotoImg} />

            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
    </section>
    );
};