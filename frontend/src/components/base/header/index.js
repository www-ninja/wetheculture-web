import React from 'react';
import {Helmet} from "react-helmet";

const Header = props => {
    return (
        <div className="header">
          <Helmet>
              <meta charSet="utf-8" />
              <title>We the Culture</title>
              <link rel="canonical" href="http://wetheculture.io" />
              <meta name="description" content="We the Culture - Full-service NFT, Web3, and Metavererse development"/>
          </Helmet>
        </div>
    )
}
