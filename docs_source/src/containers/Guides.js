import React from 'react'
import { withRouteData, Link } from 'react-static'
import { Layout } from 'antd';
//

const Section = ({id, children}) => (
  <section id={id}>
    {children}
  </section>
)
export default withRouteData((props) => (
  <div>
    <Layout>
      <Layout.Header>
        <h1 className='maxWidthContainer' >GUIDES</h1>
      </Layout.Header>
      <br />
      <Layout.Content className='maxWidthContainer'>
        <Section id='first-steps'>
          <h1>First steps</h1>
          <p>Install wizardo</p>
          <p>Explain a little bit about the installation and the cli </p>
          <p>wizardo init command (run init)</p>
          <p>Explain .wizardo hidden folder</p>
          <p>How to show that folder in the file explorer?</p>
        </Section>
        <Section id='generators'>
          <h1>Create a generator</h1>
          <p>wizardo create command (create a generator)</p>
          <p>wizardo config file</p>
          <p>wizardo list|ls command</p>
          <p>config file structure and introduction</p>
          <p>Explain git barriers and reasons behind it</p>
        </Section>
        <Section id='templates'>
          <h1>Templates</h1>
          <p>templates introduction</p>
          <p>templates structure in config file</p>
          <p>templates folder </p>
          <p>create a sample template</p>
        </Section>
        <Section id='variables-config'>
          <h1>Variables in config</h1>
          <p>explain how variables can be included as part of source_template and destination paths in templates</p>
          <p>Explain how these variables are going to be promped while runing the generator</p>
          <p>Explain snake_case and PascalCase support </p>
          <p>Explain the rule of always using snake_case as input while runing the generator</p>
        </Section>
        <Section id='variables-templates'>
          <h1>Variables in templates</h1>
          <p>You can also have variables inside templates</p>
          <p>Write TODO or reminder to support variables in templates that not necessarily are in the config file</p>
          <p>modify current template to accept a variable from config.file</p>
        </Section>
        <Section id='modifiers'>
          <h1>Modifiers</h1>
        </Section>
        <Section id='run-the-generator'>
          <h1>Run the Generator!</h1>
        </Section>
      </Layout.Content>
    </Layout>
  </div>
))
