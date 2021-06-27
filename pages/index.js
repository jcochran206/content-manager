
import Layout from 'components/Layout';
import ResourceHighlight from 'components/ResourceHighlight';
import Newsletter from 'components/Newsletter';
import Resourcelist from 'components/Resourcelist';
import Footer from 'components/Footer';

import {resources} from '../api/data';

export default function Home() {
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
