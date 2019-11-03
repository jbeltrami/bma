import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Wrapper from '../components/Wrapper';
import HomepageOne from '../components/direction1/HomepageOne';

import '../styles/bootstrap.scss';
import '../styles/index.scss';

const Home = props => {
  const [whichLayout, setWhichLayout] = useState(true);

  const renderPage = layout => {
    if (layout) return <HomepageOne />;
    return (
      <>
        <div>Try again later</div>
      </>
    );
  };

  const onHandleLayoutChange = () => {
    setWhichLayout(!whichLayout);
  };

  return (
    <div>
      <Head>
        <title>Boston Massage Associates</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2000,
        }}
      >
        <button type="button" onClick={onHandleLayoutChange}>
          Direction 1
        </button>
        <button type="button" onClick={onHandleLayoutChange}>
          Direction 2
        </button>
      </div>

      <Wrapper>{renderPage(whichLayout)}</Wrapper>
    </div>
  );
};

export default Home;
