import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>
    <div>
      <h1 className={styles.title}>
        Homepage
      </h1>

      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nulla numquam officiis laudantium! Aliquid ratione soluta deleniti odit temporibus ipsa dolores tempora doloremque? Dignissimos ipsum quibusdam nostrum! Adipisci, tempora magni!
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nulla numquam officiis laudantium! Aliquid ratione soluta deleniti odit temporibus ipsa dolores tempora doloremque? Dignissimos ipsum quibusdam nostrum! Adipisci, tempora magni!
      </p>

      <Link href="/ninjas">
        <a className={styles.btn}>
          See Ninja List
        </a>
      </Link>
    </div>
    </>
  )
}
