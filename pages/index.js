import React, { useState } from 'react';
import Head from 'next/head';
import Wrapper from '../components/Wrapper';
import HomepageOne from '../components/direction1/HomepageOne';
import HomepageTwo from '../components/direction2/HomepageTwo';

import '../styles/bootstrap.scss';
import '../styles/index.scss';

const Home = () => {
  const [whichLayout, setWhichLayout] = useState(false);

  const renderPage = layout => {
    if (layout) return <HomepageOne />;
    return <HomepageTwo />;
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
          Change Layout
        </button>
      </div>

      <Wrapper>{renderPage(whichLayout)}</Wrapper>
    </div>
  );
};

export default Home;
