import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import Hero from '../components/HomePage/Hero'
import SectionOne from '../components/HomePage/SectionOne'
import GetInTouch from '../components/GetInTouch'
import SectionTwo from '../components/HomePage/SectionTwo'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Athena Media</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <SectionOne />
      <SectionTwo />
      <GetInTouch />
    </Fragment>
  )
}

export default Home
