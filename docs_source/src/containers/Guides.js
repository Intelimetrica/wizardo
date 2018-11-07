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
          <p>This will install Wizardo CLI globally in your system. <br />You can see Wizardo's options by executing <InlineCode>$ wizardo --help</InlineCode> </p>

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
          <h2>Wizardo init</h2>
          <p>
            Wizardo is intended to be used for particular projects. So you might want configure it in different ways according to your needs. <br />
            For that reason, Wizardo offers a command that adds a folder called <InlineCode>.wizardo</InlineCode> in the root of your project in which you can dump all the configuration needed.<br />
            To execute the command you need to run:
          </p>
          <Highlight className='bash'>
            {`$ wizardo init `}
          </Highlight>
          <p>As a result of this command, the root of your project will have a <InlineCode>.wizardo</InlineCode> folder with a <InlineCode>templates</InlineCode> folder inside of it.</p>
          <p>A project with generators would look like the following:</p>
          <Highlight className='bash'>
            {` app/
  ├ .wizardo/
  │ ├─ sample_generator.config.json
  │ └─ templates/
  │    └─ sample_template.js
  └ other_files/ `}
          </Highlight>
          <p>
            The content of a <InlineCode>.wizardo</InlineCode> folder is made out of two parts: <Link to="/guides#generators"><em>generators config files</em></Link> and <Link to="/guides#templates"><em>templates</em></Link>.
            Later in this guide, we will go in depth on each of the previous topics. But as a highlevel explanation, <InlineCode>{'<generators>.config.json'}</InlineCode> files, describe the steps your generators will execute and <InlineCode>templates</InlineCode> folder contain all the templates used by the config files.
            </p>
          <h3>Should I commit this folder in git?</h3>
          <p>
            Yes.<br />
            Specially if you want your generators to be available to other developers in your project.<br />
            Actually Wizardo works tighly coupled with git and you cannot run a generator without have it commited in your repo.<br />
            For more info on this, you can go to <Link to="/guides#run-the-generator"><em>Run the generator</em></Link> section.
          </p>
          <h3>I can't find .wizardo folder in my file explorer</h3>
          <p>
            Most of file explorers hide folders and files starting with <InlineCode>.</InlineCode> and that is the reason why we create wizardo's configuration folder starting with dot. The root of your project shouldn't be contaminated with configuration files. Anyways, you might want to use the folder.<br />
            Most of file explorers offer the option to <InlineCode>Show Hidden Files</InlineCode> when you <InlineCode>Right + Click</InlineCode> in the root of your project and you can do it the same way with your text editor. <br />
            In the terminal, you might run <InlineCode>$ ls -a</InlineCode> to show all, even hidden files, available in the current path.
          </p>
        </Section>

        <Section id='generators'>
          <h1>Generators</h1>
          <p>In this section we are going to go through different aspects of a generator using a simple example. We will create a plain html based website using Wizardo.</p>
          <h2>1. Setup</h2>
          <p>To start with this example, create a folder <InlineCode>website/</InlineCode> to hold our project. <InlineCode>cd</InlineCode> into our folder and execute <InlineCode>$ wizardo init</InlineCode></p>

          <Highlight className='bash'>
            {` ~$ mkdir website
 ~$ cd website
 ~/website$ wizardo init
 ~/website$ ls -a
 .  ..  .wizardo `}
          </Highlight>

          <p>Next, we will insert an index page in the root of our website</p>
          <Highlight className='bash'>
            {` ~/website$ touch index.html`}
          </Highlight>
          <p>Copy the following html template inside <InlineCode>index.html</InlineCode> using your favorite text editor: </p>
            <Highlight className='html'>
              {` <!DOCTYPE html>
 <html lang="en">
   <head>
     <meta charset="UTF-8">
     <title>index</title>
   </head>
   <body>
     My website
   </body>
 </html> `}
          </Highlight>

          <h2>2. Create command</h2>
          <p>Now we will execute the <InlineCode>create</InlineCode> command that will add into our <InlineCode>.wizardo</InlineCode> folder a config file for our new generator.</p>
          <p>Lets say that we want a generator to create new pages into our website. So lets run the command by:</p>
          <Highlight className='bash'>
            {` ~/website$ wizardo create page_generator`}
          </Highlight>

          <p>This command will add <InlineCode>page_generator.config.json</InlineCode> into our <InlineCode>.wizardo/</InlineCode> folder with the following json:</p>

          <Highlight className='json'>
            {`{
  "generator": "page_generator",
  "templates": [
    {
      "source_template": "<%=example.js=%>",
      "destination": "path/to/<%=destination=%>"
    }
  ],
  "modifiers": [
    {
      "path_to_file": "path/to/existing/existing_file.js",
      "regex": "Hello World ___view___\\n",
      "text_to_insert": "Just matched with \`___view___\`\\n"
    }
  ]
}`}
          </Highlight>
          <p>The config file contain 3 main sections, that are <InlineCode>generator</InlineCode> with the name of our generator, <InlineCode>templates</InlineCode> and <InlineCode>modifiers</InlineCode> that we are going to discuss in the following sections <Link to="/guides#templates"><em>templates</em></Link> and <Link to="/guides#modifiers"><em>modifiers</em></Link>.</p>

          <h2>3. List command</h2>
          <p>The existance of <InlineCode>page_generator.config.json</InlineCode> file, tells Wizardo that we have a generator under the name <InlineCode>page_generator</InlineCode>.</p>
          <p>To verify so, we can run the <InlineCode>list</InlineCode> command to list all the available generators in our project.</p>
          <Highlight className='bash'>
            {` ~/website$ wizardo ls
    - page_generator `}
          </Highlight>
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
          <h2>Explain git barriers and reasons behind it</h2>
        </Section>
      </Layout.Content>
    </Layout>
  </div>
))
