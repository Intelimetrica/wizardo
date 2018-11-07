import React from 'react'
import { withRouteData, Link } from 'react-static'
import { Layout } from 'antd';
import Highlight from 'react-highlight';
//

const Section = ({id, children}) => (
  <section id={id}>
    {children}
  </section>
);
const InlineCode = ({children}) => (
  <span><code>{children}</code></span>
);
export default withRouteData((props) => (
  <div>
    <Layout>
      <Layout.Header>
        <h1 className='maxWidthContainer'>GUIDES</h1>
      </Layout.Header>
      <br />
      <Layout.Content className='maxWidthContainer'>
        <Section id='first-steps'>
          <h1>First steps</h1>
          <h2>Installation</h2>
          <p>In order for you to have Wizardo CLI available in your computer, you need to have node installed in your system in a version equal or greater than v6.0.0. To install node here is the <a href="https://nodejs.org/en/download/" target="_blank">link</a>.<br />
            You can install Wizardo through npm as following:</p>
          <Highlight className='bash'>
            {"$ npm install -g wizardo"}
          </Highlight>
          <p>This will install Wizardo CLI globally in your system. <br />You can see Wizardo's options by executing <InlineCode>{"$ wizardo --help"}</InlineCode> </p>

          <div style={{fontSize: '0.8em'}}>

            <Highlight className='bash'>
              {`$ wizardo --help
   Usage: wizardo [options] [command]

   Options:
     -v, --version       output the version number
     -h, --help          output usage information

   Commands:
     init                create the initial boilerplate for wizardo generator
     create <generator>  create a new generator into .wizardo/<generator>.config.json
     run <generator>     run generator given .wizardo/<generator>.config.json
     list|ls             list all available generators
     *                   not a command`}
   </Highlight>

 </div>
          <h2>Wizardo init</h2>
          <p></p>
          <h2>Explain .wizardo hidden folder</h2>
          <h2>How to show that folder in the file explorer?</h2>
        </Section>
        <Section id='generators'>
          <h1>Create a generator</h1>
          <h2>wizardo create command (create a generator)</h2>
          <h2>wizardo config file</h2>
          <h2>wizardo list|ls command</h2>
          <h2>config file structure and introduction</h2>
          <h2>Explain git barriers and reasons behind it</h2>
        </Section>
        <Section id='templates'>
          <h1>Templates</h1>
          <h2>templates introduction</h2>
          <h2>templates structure in config file</h2>
          <h2>templates folder </h2>
          <h2>create a sample template</h2>
        </Section>
        <Section id='variables-config'>
          <h1>Variables in config</h1>
          <h2>explain how variables can be included as part of source_template and destination paths in templates</h2>
          <h2>Explain how these variables are going to be promped while runing the generator</h2>
          <h2>Explain snake_case and PascalCase support </h2>
          <h2>Explain the rule of always using snake_case as input while runing the generator</h2>
        </Section>
        <Section id='variables-templates'>
          <h1>Variables in templates</h1>
          <h2>You can also have variables inside templates</h2>
          <h2>Write TODO or reminder to support variables in templates that not necessarily are in the config file</h2>
          <h2>modify current template to accept a variable from config.file</h2>
        </Section>
        <Section id='modifiers'>
          <h1>Modifiers</h1>
          <h2>Modifiers introduction</h2>
          <h2>Modifiers structure in config file</h2>
          <h2> - regex</h2>
          <h2> - text to insert</h2>
          <h2>Variables inside modifiers</h2>
          <h2>disclosure about modifying recently created files</h2>
        </Section>
        <Section id='run-the-generator'>
          <h1>Run the Generator!</h1>
        </Section>
      </Layout.Content>
    </Layout>
  </div>
))
