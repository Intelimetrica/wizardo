import React from 'react'
import { withRouteData, Link } from 'react-static'
import { Layout } from 'antd';
import Highlight from 'react-highlight';

export default withRouteData((props) => (
  <div>
    <Layout>
      <Layout.Header>
        <h1 className='maxWidthContainer'>CONTRIBUTE</h1>
      </Layout.Header>
      <br />
      <Layout.Content className='maxWidthContainer'>
        <section>
          <h2>We need help!</h2>
          <p>Submit your PR in <a href="https://github.com/Intelimetrica/wizardo/pulls">Github</a> or submit the issues you come across while using the tool.</p>
          <p>Thank you!</p>
        </section>

      </Layout.Content>
    </Layout>
  </div>
))
