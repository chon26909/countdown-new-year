import type { NextPage } from 'next';
import { useState, useEffect } from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {

    const target = new Date("12/31/2022 23:59:59")

    const intervel = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (100 * 60 * 60 * 24))
      setDays(d);

      const h = Math.floor((difference % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60 )) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor(( difference % (1000 * 60)) / 1000);
      setSeconds(s);

    },1000)
  
    return () => clearInterval(intervel);
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="timer-warpper">
        Hello
      </div>
    
    </div>
  )
}

export default Home
