import React from 'react'
import { withRouteData, Link } from 'react-static'
import { Layout } from 'antd';
import Highlight from 'react-highlight';
//

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
      <div>
        <Layout.Content className='maxWidthContainer'>
          <section id='first-steps'>
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
    Most of file explorers offer the option to <InlineCode>Show Hidden Files</InlineCode> when you <InlineCode>rightClick</InlineCode> in the root of your project and you can do it the same way with your text editor. <br />
    In the terminal, you might run <InlineCode>$ ls -a</InlineCode> to show all, even hidden files, available in the current path.
  </p>
</section>

<section id='generators'>
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
</section>

<section id='templates'>
  <h1>Templates</h1>
  <p>Templates in Wizardo are the way of creating new files in your project, based on existing ones. In this section, we will go on with our tutorial by creating a template and reviewing the related parts</p>
  <h2>1. Templates folder </h2>
  <p><InlineCode>.wizardo/</InlineCode> folder has a folder called <InlineCode>templates/</InlineCode> in which we need to place our templates.<br />
    This is the place where Wizardo looks for templates. So lets go and copy our <InlineCode>index.html</InlineCode> into that location by:
  </p>
  <Highlight className='bash'>
    {` ~/website$ cp index.html .wizardo/templates/
 ~/website$ ls .wizardo/templates/
   index.html `}
 </Highlight>

 <h2>2. Templates structure in config file</h2>
 <p>Great, now that we have a template in <InlineCode>.wizardo/templates/</InlineCode> we need to let know our generator (<InlineCode>page_generator.config.json</InlineCode>) that whenever it runs, we are going to create a new file based on our template </p>
 <p>The content of <InlineCode>templates</InlineCode> key of the configuration file for a generator is really simple. It contains an array of sources and destinations. The <InlineCode>source_template</InlineCode> key indicates the name of our template inside the <InlineCode>templates/</InlineCode> folder, and the <InlineCode>destination</InlineCode> key, is the path in which is going to reside the file that wizardo will generate.</p>
 <p>Lets say that in our website we will have folder <InlineCode>pages/</InlineCode> to hold all of our pages. So lets go and modify <InlineCode>page_generator.config.json</InlineCode> to indicate our intention:</p>
 <Highlight className='json'>
   {`{
  "generator": "page_generator",
  "templates": [
    {
      "source_template": "index.html",
      "destination": "pages"
    }
  ],
  "modifiers": []
}`}
          </Highlight>
          <p><strong>Note</strong> that we removed the content of <InlineCode>modifiers</InlineCode> key. <Link to="/guides#modifiers"><em>Later</em></Link> on this guide we will go on to this part, but for now, just the array empty so we can see wizardo in action.</p>

          <h2>3. Run generator to test templates</h2>
          <p>To run the <InlineCode>page_generator</InlineCode> execute:</p>
          <Highlight className='bash'>
            {
              ` ~/website$ wizardo run page_generator
 Wizardo: run page_generator
   - Wizardo is tightly coupled with git.
     It seems that you dont have a git repo initialized in this directory.
   + Create a git repo and commit all your changes before running a generator` }
 </Highlight>

 <p>As the error messages says, wizardo rely on git to execute the rollbacks. So first we need to create a git repo and commit our changes</p>
 <Highlight className='bash'>
   {
     ` ~/website$ git init
 ~/website$ git add .
 ~/website$ git commit -m "Initialize wizardo"` }
  </Highlight>

  <p>Once we have that down, we can proceed to try running the <InlineCode>page_generator</InlineCode> again.</p>
  <Highlight className='bash'>
    {` ~/website$ wizardo run page_generator
 Wizardo: run page_generator
   create: pages
 Wizardo: run page_generator - DONE!
   create: pages/index.html` }
 </Highlight>
 <p><strong>Note</strong> that wizardo created the <InlineCode>pages/</InlineCode> folder for us and it also created a copy of the <InlineCode>index.html</InlineCode> from our templates.</p>
 <Highlight className='bash'>
   {` website/
  ├ .wizardo/
  │ ├─ page_generator.config.json
  │ └─ templates/
  │    └─ index.html
  ├ pages/
  │ └─ index.html
  └ index.html `}
</Highlight>
  <p>Cool! Now that we learned how to generate files given a template, in the following section we will learn how to add some dynamism to our templates so we can generate files with names other than <InlineCode>index.html</InlineCode> 👍 </p>
  </section>

<section id='variables'>
  <h1>Variables</h1>
  <p>Variables are words that follow a special pattern that will be replaced with a given input at run time.</p>
  <h2>1. Variables types</h2>
  <p>Wizardo has three types of identifiers for variables: <br/>
    <InlineCode>___var_name___</InlineCode>, which is the most common used. It is given by three underscores followed by the variable name in snake_case and ending with other three underscores.<br />
    <InlineCode>___VarName___</InlineCode>, which is used similar to the previous one but uses PascalCase. This allow to use the same variables but print them in the generated files using PascalCase.<br />
    <InlineCode>{"<%=var_name=%>"}</InlineCode>, composed with <InlineCode>{"<%="}</InlineCode> followed by the variable name in <InlineCode>snake_case</InlineCode> and ending with <InlineCode>{"=%>"}</InlineCode>. This option is available to be used in the same line as one of the previous types.<br />
    We will see an example each of the previous variable types in the following steps of this section
</p>
  <h2>2. Variables in config file</h2>
  <p>Wizardo takes variables found in the config file and prompt for their values, so at run time they are replaced with their corresponding values.</p>
  <p>It makes sense in our example that generate pages with other names, such as <InlineCode>about</InlineCode>, <InlineCode>products</InlineCode> or <InlineCode>FAQ</InlineCode>.</p>
  <p>So lets modify the <InlineCode>page_generator.config.json</InlineCode> file to allow dynamic page names</p>
  <Highlight className='json'>
     {`{
  "generator": "page_generator",
  "templates": [
    {
      "source_template": "___page_name___.html",
      "destination": "pages"
    }
  ],
  "modifiers": []
}`}
  </Highlight>
  <p>This will cause the generator to fail if we run wizardo, because <InlineCode>___page_name___.html</InlineCode> does not exist in the templates. <br />
    To fix this, lets change <InlineCode>index.html</InlineCode> name from the <InlineCode>templates/</InlineCode> folder to <InlineCode>___page_name___.html</InlineCode>
  </p>
  <Highlight className='bash'>
    {" ~/website$ mv .wizardo/templates/index.html .wizardo/templates/___page_name___.html"}
  </Highlight>

  <h2>3. Run the generator</h2>
  <p>Let see how wizardo prompts for <InlineCode>page_name</InlineCode> variables. Remember that in order to run a Wizardo generator, you need to have all the changes commited first.</p>
  <Highlight className="bash">
    {` ~/website$ git add .
 ~/website$ git commit -m "Modify source_template to take a variable"
                       -m "and created another index page in pages"

 ~/website$ wizardo run page_generator
 Wizardo: run page_generator
   Enter the value for the following variables in your config file
    page_name: products <-------- Insert the new page name here!`}
  </Highlight>
  <p>Insert <InlineCode>products</InlineCode> when asked for and hit <InlineCode>Enter</InlineCode>.
    You will receive the following message:</p>
<Highlight className="bash">
    {` Wizardo: run page_generator - DONE!
  create: pages/products.html `}
  </Highlight>
  <p>And you can check the file creation in your file system. It should look something like the following:</p>
<Highlight className='bash'>
     {` website/
   ├ .wizardo/
   │ ├─ page_generator.config.json
   │ └─ templates/
   │    └─ ___page_name___.html
   ├ pages/
   │ ├─ products.html
   │ └─ index.html
   └ index.html `}
</Highlight>

  <h2>4. Variables in templates</h2>
  <p>You can also add variables inside templates, so everytime you generate a new view based on a template, it is not just a copy, but a customized new file.</p>
  <p>To demonstrate this, go to <InlineCode>___page_name___.html</InlineCode> and modify the content with the following:</p>
  <Highlight className='html'>
    {` <!DOCTYPE html>
 <html lang="en">
   <head>
     <meta charset="UTF-8">
     <title>___page_name___</title>
   </head>
   <body>
     ___PageName___
   </body>
 </html> `}
  </Highlight>
  <p>
    <strong>Note</strong> that we are inserting the variable <InlineCode>___page_name___</InlineCode> two time. One in <InlineCode>snake_case</InlineCode> notation and another one in <InlineCode>PascalCase</InlineCode> notation.
  </p>
  <p>An important point with variables in wizardo is that you should declare its content in <InlineCode>snake_case</InlineCode> only, and it will transform them into <InlineCode>PascalCase</InlineCode> if needed.</p>
  <p>Lets run the generator again, this time use <InlineCode>about_us</InlineCode> as value the of <InlineCode>___page_name___</InlineCode> so we can see the <InlineCode>PascalCase</InlineCode> transformation in action. (Remember to commit the changes before running a generator).</p>

  <Highlight className='bash'>
    {` ~/website$ wizardo run page_generator
 Wizardo: run page_generator

 Enter the value for the following variables in your config file
   page_name: about_us
 Wizardo: run page_generator - DONE!
   create: pages/about_us.html `}
  </Highlight>
  <p>Great. Now lets take a look to <InlineCode>pages/about_us.html</InlineCode> file</p>
  <Highlight className='html'>
    {` <!DOCTYPE html>
 <html lang="en">
   <head>
     <meta charset="UTF-8">
     <title>about_us</title>
   </head>
   <body>
     AboutUs
   </body>
 </html> `}
  </Highlight>
  <h2>5. Limitations and workaround</h2>
  <p>
    At the moment wizardo look for variables only in the config file, if the variable to be replaced exists in a template but not in the generator's config file, wizardo won't prompt for that variable and you will probably end up with an un-replaced variable in the final file. <br />
    <strong>This is a limitation</strong> that the team has in mind and we are planning to improve it in future releases.
  </p>
  <p>A <strong>workaround</strong> to this, is add an extra key <InlineCode>variables</InlineCode> with an array of <InlineCode>variables</InlineCode> to the <InlineCode>generator</InlineCode>'s config file. As the following:</p>
  <Highlight className='json'>
     {`{
  "generator": "page_generator",
  "templates": [
    {
      "source_template": "___page_name___.html",
      "destination": "pages"
    }
  ],
  "modifiers": [],
  "variables": [
    "___these_variables___",
    "___exist_only_in___",
    "___template_files___"
  ]
}`}
  </Highlight>
  <p>This workaround tells wizardo to ask for these variables and to use the values given at runtime.</p>
</section>

<section id='modifiers'>
  <h1>Modifiers</h1>
  <p>Modifiers are the way of looking for a pattern in existing files and adding new content to them.<br />
    They work with <InlineCode>Regular Expressions</InlineCode> so if you are unfamiliar with those, we recommend you to go take a look at them in <a href="https://regexone.com/" target="_blank">regexone.com</a> or the resource of your choice.
  </p>
  <h2>1. Modifiers structure</h2>
  <p>The content of <InlineCode>modifiers</InlineCode> key in the configuration file is made of an <InlineCode>array</InlineCode> of <InlineCode>path_to_file</InlineCode>, <InlineCode>regex</InlineCode> and <InlineCode>text_to_insert</InlineCode>.</p>
  <p> - <InlineCode>path_to_file</InlineCode> indicates the path from the root of the project to the file that the modifier is goint to work on.<br />
     - <InlineCode>regex</InlineCode> is the regular expression that will be found in the the given file and will be used to insert after it. A way of validation the patterns created is to use <a href="https://regex101.com" target="_blank">regex101.com</a> in <InlineCode>javascript</InlineCode> mode.<br />
     - <InlineCode>text_to_insert</InlineCode> is what is going to be inserted after the match in the regex.<br />
</p>
<p><strong>Note</strong> that at the moment, <InlineCode>modifiers</InlineCode> don't respect identation, so <InlineCode>text_to_insert</InlineCode> needs take that into consideration.</p>
  <h2>2. Use modifiers</h2>
  <p>Following with the tutorial, lets create a navbar into the <InlineCode>index.html</InlineCode> of root, so whenever we add a new page with the <InlineCode>page_generator</InlineCode>, the modifier adds the corresponding route to the navbar.</p>
  <p>First, modify <InlineCode>index.html</InlineCode> to match the following code. We are basically adding a navbar with routes to each of the files we have created so far.</p>

  <Highlight className="html" >
{`
<!DOCTYPE html>
<html lang="en">
 <head>
   <meta charset="UTF-8">
   <title>index</title>
   <style>
     body { padding: 0; margin: 0; }
     nav { background: #efefef; padding: 15px 50px; }
     nav a { color: black; padding: 10px 15px; }
   </style>
 </head>
 <body>
   <nav>
      <a href="pages/about_us.html"> AboutUs </a>
      <a href="pages/index.html">    Index   </a>
      <a href="pages/products.html"> Products</a>
    </nav>
  My website
  </body>
  </html>`}
  </Highlight>
  <p>
    Our <InlineCode>modifier</InlineCode> is going to insert an anchor for the new page right after the <InlineCode>{`<nav>`}</InlineCode> tag.<br />
      Modify the <InlineCode>page_generator.config.json</InlineCode> file to include the following modifier:
  </p>
  <div style={{fontSize: '0.9em'}}>
    <Highlight className="json">
      {`{
  "generator": "page_generator",
  "templates": [
    {
      "source_template": "___page_name___.html",
      "destination": "pages"
    }
  ],
  "modifiers": [
     {
       "path_to_file": "index.html",
       "regex": "<nav>\\n",
       "text_to_insert": "     <a href=\\"pages/<%=page_name=%>.html\\">___PageName___</a>\\n"
     }
  ]
}`}
  </Highlight>
  </div>
  <p>We are going to work in the <InlineCode>"index.html"</InlineCode> file of root using <InlineCode>path_to_file</InlineCode></p>
  <p>We are matching <InlineCode>{`"<nav>\\n"`}</InlineCode> using <InlineCode>regex</InlineCode>.</p>
  <p>And we are inserting the new anchor right after the match using <InlineCode>text_to_insert</InlineCode>.</p>
  <p><strong>Note</strong> that we are using variables in <InlineCode>text_to_insert</InlineCode> key. You can also use variables inside the <InlineCode>regex</InlineCode> and <InlineCode>path_to_file</InlineCode> keys.</p>
  <h2>3. Execute the modifier</h2>
  <p>To test the modifier we just need to run our <InlineCode>page_generator</InlineCode>.</p>

  <Highlight className="bash">
    {` ~/website$ wizardo run page_generator
Wizardo: run page_generator

  Enter the value for the following variables in your config file
    page_name: faqs
Wizardo: run page_generator - DONE!
  create: pages/faqs.html
  modify: index.html `}
  </Highlight>
  <p>As the last line of the response states, <InlineCode>index.html</InlineCode> was modified and now it contains an anchor to the recently created <InlineCode>faqs.html</InlineCode> page.</p>
  <p>The index now looks like:</p>
  <Highlight className="html" >
    {`
<!DOCTYPE html>
<html lang="en">
 <head>
   <meta charset="UTF-8">
   <title>index</title>
   <style>
     body { padding: 0; margin: 0; }
     nav { background: #efefef; padding: 15px 50px; }
     nav a { color: black; padding: 10px 15px; }
   </style>
 </head>
 <body>
   <nav>
      <a href="pages/faqs.html">Faqs</a>
      <a href="pages/about_us.html"> AboutUs </a>
      <a href="pages/index.html">    Index   </a>
      <a href="pages/products.html"> Products</a>
    </nav>
  My website
  </body>
  </html>`}
</Highlight>
  <h2>4. Don't modify files that you just created</h2>
  <p>Wizardo is currently built with the async file system api of node. So if you try writing to the same file in the <InlineCode>modifiers</InlineCode> and the <InlineCode>templates</InlineCode>, you could come across a couple WTFs.</p>
  <p>If you need to do something like that, you can always create a new generator that leaves the templates empty, <InlineCode>"templates": []</InlineCode>, and run it manually after the one that create files with templates.</p>
</section>
      </Layout.Content>
    </div>
  </Layout>
</div>
))
