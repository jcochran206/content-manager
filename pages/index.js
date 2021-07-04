
import Layout from 'components/Layout';
import ResourceHighlight from 'components/ResourceHighlight';
import Newsletter from 'components/Newsletter';
import Resourcelist from 'components/Resourcelist';
import Footer from 'components/Footer';
import { useEffect } from 'react';

//CORS


function Home({resources}) {

  useEffect(() => {
    fetch("http://localhost:3000/api/resources")
  }, [])
  
  return (
    <Layout>
      <ResourceHighlight 
        resources={resources.slice(0,2)}
      />
      <Newsletter />
      <Resourcelist 
        resources={resources.slice(2)}
      />
      <Footer/>
    </Layout>
  )
}


export async function getServerSideProps() {
  const resData = await fetch("http://localhost:3030/api/resources");
  const data = await resData.json();

  return{
    props: {
        resources: data
    }
  }
}


export default Home;
