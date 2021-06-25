import Head from 'next/head'
import Image from 'next/image'
import Navbar from 'components/Navbar';
import ResourceHighlight from 'components/ResourceHighlight';
import Newsletter from 'components/Newsletter';
import Resourcelist from 'components/Resourcelist';
import Footer from 'components/Footer';


export default function Home() {
  return (
    <>
    <Navbar />
    <ResourceHighlight />
    <Newsletter />
    <Resourcelist />
    <Footer/>

    </>
  )
}
