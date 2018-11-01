import React from 'react'
import { withSiteData } from 'react-static'
import { Icon, Row, Col } from 'antd';
//
import logo_vertical from '../images/logo_vertical.svg';

const Jumbotron = props => (
  <section className='jumbotron'>
    <img src={logo_vertical} alt="" style={{ maxHeight: 250, display: 'block', margin: '0 auto' }} />
    <h1>The language agnostic code generator tool</h1>
  </section>
);

const Installation = props => (
  <section className='installation'>
    <div className='code-snippet'>
      <Icon type="download" theme="outlined" />
      <pre>
        <code>$ npm install -g wizardo</code>
      </pre>
    </div>
  </section>
);

const WhatIsIt = props => (
  <section className='what-is-it'>
    <Row type='flex' justify='space-around'>
      <Col md={8} sm={20}>
        <div className='explanation'>
          <h1>What is Wizardo?</h1>
          <p>Wizardo is tool that allows you to create your code generators.</p>
          <p>With Wizardo generators, you can also modify existing files to insert snippets of code whenever is needed.</p>
          <p>It uses templates to generate new files and a configuration file to execute all the steps required to run a scaffold. Its variables based CLI adds dynamism to generators.</p>
        </div>
      </Col>
      <Col md={11} sm={20}>
        <img src={logo_vertical} alt="" />
      </Col>
    </Row>
  </section>
)

export default withSiteData(() => (
  <div>
    <Jumbotron />
    <Installation />
    <WhatIsIt />
  </div>
));
