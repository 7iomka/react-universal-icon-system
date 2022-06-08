/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Icons} from '@/icons';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  // React 18 hack (react 17 works fine)
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <table style={{ maxWidth: '800px', margin: '0 auto'}}>
          <colgroup>
            <col span="1" style={ {width: '70%'}}  />
          </colgroup>
          <tr>
            <td>Sprite icon, no dimmensions (inherited or auto-added (if only viewbox is present))</td>
            <td className={styles.iconTd}><Icons.sprite.ChevronDown /></td>
          </tr>
          <tr>
            <td>Sprite icon, only width added (height is auto computed from viewbox aspect ratio)</td>
            <td className={styles.iconTd}><Icons.sprite.ChevronRight width={48} /></td>
          </tr>
          <tr>
            <td>Standalone icon, no dimmensions (inherited or auto-added (if only viewbox is present))</td>
            <td className={styles.iconTd}><Icons.standalone.Whatsapp /></td>
          </tr>
          <tr>
            <td>Standalone icon, only width added (height is auto computed from viewbox aspect ratio)</td>
            <td className={styles.iconTd}><Icons.standalone.Twitter width={48} /></td>
          </tr>
          <tr>
            <td>Standalone two-colors icon (single color from currentColor)</td>
            <td className={styles.iconTd}><Icons.standalone.Codepen width={48} height={48}/></td>
          </tr>
          <tr>
            <td>Standalone two-colors icon (single color from passed color attribute)</td>
            <td className={styles.iconTd}><Icons.standalone.Codepen width={48} height={48} color="red"/></td>
          </tr>
          <tr>
            <td>Standalone two-colors icon (one color from passed color attribute, another - from fill attribute (source need to contain fill="inherit" for filled icons and stroke="inherit" for stroked))</td>
            <td className={styles.iconTd}><Icons.standalone.Codepen width={48} height={48} color="red" fill="blue" /></td>
          </tr>
        </table>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home