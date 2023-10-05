import { Clients } from '@/Components/Clients/Clients'
import { Data } from '@/Components/Data/Data'
import { Demo } from '@/Components/Demo/Demo'
import { Feature } from '@/Components/Feature/Feature'
import { Feature2 } from '@/Components/Feature2/Feature2'
import { Footer } from '@/Components/Footer/Footer'
import { Header } from '@/Components/Header/Header'
import { Navbar } from '@/Components/Navbar/Navbar'
import { Service } from '@/Components/Service/Service'
import { Testimonials } from '@/Components/Testimonials/Testimonials'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nexcent</title>
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </Head>
      <main>
        <Navbar />
        <Header />
        <Clients />
        <Service />
        <Feature />
        <Data />
        <Feature2 />
        <Testimonials />
        <Demo />
        <Footer />
      </main>
    </>
  )
}
