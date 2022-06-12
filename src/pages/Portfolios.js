import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import Pagination from '../components/Pagination';
import PortfoliosView from '../components/PortfoliosView';
import Sectiontitle from '../components/Sectiontitle';

function Portfolios() {
  const [portfolios, setPortfoios] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [portfoliosPerPage] = useState(9);

  useEffect(() => {
    let mounted = true;
    axios.get('/api/portfolios').then((response) => {
      if (mounted) {
        setPortfoios(response.data);
      }
    });
    return () => (mounted = false);
  }, []);

  const indexOfLastPortfolios = currentPage * portfoliosPerPage;
  const indexOfFirstPortfolios = indexOfLastPortfolios - portfoliosPerPage;
  const currentPortfolios = portfolios.slice(
    indexOfFirstPortfolios,
    indexOfLastPortfolios
  );

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <Helmet>
        <title>michaelleojacob react-portolfio projects</title>
        <meta
          name='description'
          content='michaelleojacob react-portolfio projects'
        />
      </Helmet>
      <div className='mi-about mi-section mi-padding-top mi-padding-bottom'>
        <div className='container'>
          <Sectiontitle title='My Apps' />
          {<PortfoliosView portfolios={currentPortfolios} />}
          {!(portfolios.length > portfoliosPerPage) ? null : (
            <Pagination
              className='mt-50'
              itemsPerPage={portfoliosPerPage}
              totalItems={portfolios.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Portfolios;
