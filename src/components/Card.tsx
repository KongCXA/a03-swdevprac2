import React from 'react';
import styles from './card.module.css';

export default function Card() {
  const title = 'The Grand Hall';
  const description = 'ฮอลล์ขนาด 600 ที่นั่ง ระบบแสงสีเสียงครบ ใกล้รถไฟฟ้า';
  const imageUrl = '/img/venue1.jpg';

  return (
    <article className={styles.card}>
      <div className={styles.mediaWrap}>
        <img className={styles.image} src={imageUrl} alt={title} loading="lazy" />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
      </div>
    </article>
  );
}