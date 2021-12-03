import type { NextPage } from 'next';
import { useState, useEffect } from "react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {

    const target = new Date("12/31/2021 23:59:59");

    const intervel = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      setDays(d);

      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

    }, 1000)

    return () => clearInterval(intervel);
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Happy New Year</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <div>
        <h1 className={styles.title}>
          สวัสดีปีใหม่
        </h1>
      </div>
      <div className={styles.timer}>
        <div className={styles.digit}>
          <div className={styles.counter}>
            {days}
          </div>
          <div className={styles.name}>
            วัน
          </div>
        </div>
        <div className={styles.digit}>
          <div className={styles.counter}>
            {hours}
          </div>
          <div className={styles.name}>
            ชั่วโมง
          </div>
        </div>
        <div className={styles.digit}>
          <div className={styles.counter}>
            {minutes}
          </div>
          <div className={styles.name}>
            นาที
          </div>
        </div>
        <div className={styles.digit}>
          <div className={styles.counter}>
            {seconds}
          </div>
          <div className={styles.name}>
            วินาที
          </div>
        </div>
      </div>


    </div>
  )
}

export default Home
