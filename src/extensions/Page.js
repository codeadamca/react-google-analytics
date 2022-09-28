import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types';

import ReactGA from 'react-ga';
ReactGA.initialize(process.env.GOOGLE_TRACKING_ID);

const Page = ({ title, ...rest }) => {
  useEffect(() => {
    document.title = (title ? title : "Home");
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
  return <Route {...rest} />;
};

Page.propTypes = {
  title: PropTypes.string.isRequired,
};

export {Page};