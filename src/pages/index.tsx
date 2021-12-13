import Head from 'next/head'
import '../components/Hero'
import { Hero } from '../components/Hero'
import IndoxScreen from '../components/InboxScreen'
import Task from '../components/Task'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page | Created with ❤️</title>
      </Head>

      <IndoxScreen />
    </>
  )
}
