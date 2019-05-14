webpackJsonp([0xe33f9882f36e],{414:function(e,t){e.exports={data:{site:{siteMetadata:{title:"5 minutes of React",author:"5 minutes of React"}},markdownRemark:{id:"/Users/petr/www/5minreact.audio/src/pages/012-webpack-pnpm-typescript/index.md absPath of file >>> MarkdownRemark",html:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/331989237&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n<ul>\n<li><a href="https://medium.com/webpack/webpack-3-official-release-15fd2dd8f07b">https://medium.com/webpack/webpack-3-official-release-15fd2dd8f07b</a></li>\n<li><a href="https://twitter.com/dan_abramov/status/880457799272210432">https://twitter.com/dan_abramov/status/880457799272210432</a></li>\n<li><a href="https://medium.com/@TheLarkInn/leaving-for-microsoft-4f386c458693">https://medium.com/@TheLarkInn/leaving-for-microsoft-4f386c458693</a></li>\n<li><a href="https://medium.com/pnpm/pnpm-version-1-is-out-935a07af914">https://medium.com/pnpm/pnpm-version-1-is-out-935a07af914</a></li>\n<li><a href="https://github.com/pnpm/awesome-pnpm">https://github.com/pnpm/awesome-pnpm</a></li>\n<li><a href="https://blogs.msdn.microsoft.com/typescript/2017/06/27/announcing-typescript-2-4/">https://blogs.msdn.microsoft.com/typescript/2017/06/27/announcing-typescript-2-4/</a></li>\n<li><a href="http://isfiberreadyyet.com/">http://isfiberreadyyet.com/</a></li>\n</ul>\n<!-- end -->\n<p><strong>Transcript</strong></p>\n<p>The final webpack 3 release is out. I usually don’t rush it with installing versions ending with .0.0, but this time I decided to give webpack 3.0.0 a try.</p>\n<p>There is a new feature description post in the webpack blog, and the so-called Scope Hoisting caught my eye right away. This piece won’t work right away after the upgrade - a special plugin called ModuleConcatenationPlugin has to be added to the configuration. As a result by bundle.js file now only contains 7 functions instead of a hundred tiny module wrappers. Why is it seven and not one? We can get some clues via a certain command line flag which outputs additional information about the module assembly process and helps understand why some modules couldn’t be combined into one.</p>\n<p>As a person who hasn’t dug too deep into webpack algorithms, I can only see that the modules from node_modules folder and the external ones remained apart, but the reason is still to be figured out.</p>\n<p>Another mystery is why adding ModuleConcatenationPlugin causes watch mode to stop. It’s not just me: there is already an issue on Github and many users have run into this problem. In addition, ModuleConcatenationPlugin breaks Hot Module Replacement. </p>\n<p>Actually, adding a new plugin and a new compiler option is so typical of webpack and our whole Javascript ecosystem!</p>\n<p>This matter was recently raised in a small Twitter thread, where Dan Abramov once again claimed that the less configuration, the better.\nQuote:</p>\n<p>Libraries shouldn’t ask users to modify configs. This is unsustainable and often very hard to compose. Very hostile to beginners.\nBeing official, Create React App makes it harder for those libraries to justify this. Helping move ecosystem to less config solutions.</p>\n<p>End quote.</p>\n<p>Getting back to webpack itself.</p>\n<p>One of webpack core developers, Sean Larkin, wrote in his blog that he is getting a new job and will join Microsoft in two weeks to work on Developer Tools for Edge browser! I’m not sure what his previous job was - I may have seen finance industry mentioned somewhere. I do like this kind of transition: if Sean used to work on a project for finance and devise utilities for us developers as a pastime, now he can work on development utilities full-time. As Sean pointed out in his blog, he will have more time to dedicate to webpack in particular.</p>\n<p>As for me, to keep things interesting, along with upgrading to webpack 3, I’ve tested the new pnpm 1.0 package manager release. I have already talked about its specifics compared to npm and yarn in one of the earlier episodes of “5 minutes of React”. For instance, rather than copying files to the node_modules folder, pnpm package manager creates hard links to its cache. This saves a considerable amount of space if multiple projects are using the same packages.</p>\n<p>So I deleted node_modules, added webpack 3.0 to package.json, and launched pnpm install - and it’s impressively fast!</p>\n<p>On the downside, I noticed that the “pnpm outdated” results in the same output as “npm outdated”, which means all my packages are linked and it’s not clear which versions are in fact up-to date.\nI had to use an external tool: npm-check.\nThere is a corresponding ticket on Github issues and looking forward “pnpm outdated” command to be fixed.</p>\n<p>After the installation pnpm generated a shrinkwrap.yaml file for me. To check how shrinkwrap.yaml works for second installation, I deleted node_modules and executed a “time pnpm install” command. The second installation took 4.5 seconds, out of which the packages themselves were linked in about a second, while the rest of the time was spent on webpack post-install scripts, uglifyjs-webpack-plugin, and fsevents.</p>\n<p>I even tried installing the packages in offline mode, just turning off Wi-Fi, then delete node_modules and run “pnpm install” again. The packages got installed just as fast (in a little over a second), but then the fsevents installation script froze while downloading binaries for my operating system.</p>\n<p>How will pnpm develop further on? In a blog post about the version 1.0 there are a few paragraphs shedding some light on this matter.</p>\n<p>First of all, even faster speed! If the packages are already downloaded into cache, pnpm install should be done in no longer than a second.</p>\n<p>Secondly, although the hard link and symlink approach makes it even faster than yarn, there are a few edge cases where yarn still excels. There are plans to handle this so that in the end pnpm is faster in any circumstances.    </p>\n<p>Thirdly, pnpm code base should be simplified, as currently contributing to it is rather complicated.</p>\n<p>Finally, a PR campaign is required (PR as in publicity, not Pull Request). Although pnpm is public for a longer period of time than Yarn, it is far less popular. So more articles, more documentation, and more interesting tools will be created to promote pnpm. Let’s make our awesome list huge!</p>\n<p>The installation is very straightforward: “npm install -g pnpm” - give it a try after this episode!</p>\n<p>But I didn’t stop here. As soon as I upgraded to webpack 3 via pnpm, I realized that TypeScript 2.4 was already out! Dynamic import, string enums, and a some type inference improvements, which are, as always, accompanied by an excellent description and examples in the Typescript blog. Everything worked out of the box in my project after I upgraded to Typescript 2.4.</p>\n<p>All in all, an upgrade of three tools at once to their new cutting-edge versions didn’t bring me any trouble (apart from the broken watch mode in webpack with ModuleConcatenationPlugin). </p>\n<p>Finally, just before recording this episode, I decided to take a look at the isfiberreadyyet.com page - and there are just 4 warning messages left to be fixed! </p>\n<p>Code with React and prosper!</p>',frontmatter:{title:"#12 - webpack 3.0.0, pnpm 1.0, TypeScript 2.4",date:"July 06, 2017"}}},pathContext:{slug:"/012-webpack-pnpm-typescript/",previous:{fields:{slug:"/011-webpack3-babel7-mobx-state-tree-preact-egghead/"},html:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/329453032&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n<ul>\n<li><a href="https://facebook.github.io/react/blog/2017/06/13/react-v15.6.0.html">https://facebook.github.io/react/blog/2017/06/13/react-v15.6.0.html</a></li>\n<li><a href="https://twitter.com/dan_abramov/status/875149571688734721">https://twitter.com/dan_abramov/status/875149571688734721</a></li>\n<li><a href="https://medium.com/webpack/webpack-3-official-release-15fd2dd8f07b">https://medium.com/webpack/webpack-3-official-release-15fd2dd8f07b</a></li>\n<li><a href="https://github.com/babel/notes">https://github.com/babel/notes</a></li>\n<li><a href="https://github.com/mobxjs/mobx-state-tree">https://github.com/mobxjs/mobx-state-tree</a></li>\n<li><a href="https://egghead.io/courses/up-and-running-with-preact">https://egghead.io/courses/up-and-running-with-preact</a></li>\n</ul>\n<!-- end -->\n<p><strong>Transcript</strong></p>\n<p>On the 13th of June a new version of React has been released under the number of 15.6 - not yet 16 and not a fiber, but as mentioned in the accompanying blog post, the team is making some final arrangements and cleaning up in preparation for the big release. </p>\n<p>The new version 15.6 brings a few fixes for input field bugs, especially in IE11.</p>\n<p>Deprecation warnings are now output as console.warning (which was done via console.error in the previous version). The main idea is to avoid confusing the user about which messages are actually important. Deprecation warnings don’t require immediate action and can be fixed later. Standard warnings, on the other hand, still use console.error - for instance, when there is no key attribute specified for repeated elements.</p>\n<p>However, in the nature of things, right after the release a shocking iOS bug was revealed: onChange event didn’t get triggered by radio buttons, and it will be fixed in version 15.6.1.</p>\n<p>Dan Abramov complained on Twitter:</p>\n<p>Also, ugh, releasing 15.x gets harder and harder. Can’t wait to get to 16 and release from master.</p>\n<p>Have you already upgraded to webpack 2? If not, it’s too late to change horses in midstream: the new webpack 3 just have been released!</p>\n<p>In fact, this release is not so major as webpack 2 once was, but the pace of development is exciting. </p>\n<p>By the way the webpack team is accepting donations via the Opencollective website; I have been their subscriber and supporter for a while now, and you are welcome to join - little drops make an ocean.</p>\n<p>The Babel team doesn’t rest either and is putting all their effort into Babel 7, which is already available as alpha 12. Have you heard of Babel Notes, the monthly notes by developers on their progress, plans, and unresolved issues? I’m providing you a link, it is a great read: brief and informative enough to get an idea of where we are heading.</p>\n<p>Guys on the React team used to provide a similar outline called core-notes, but, unfortunately, they are no longer doing it.</p>\n<p>It recently crossed my mind: what about building a project with React 16 master, combined with webpack 3 and Babel 7 alpha? Quite a hardcore pack for a hackathon.</p>\n<p>Moving on, a new version of mobx-state-tree 0.7 was released. It’s a state container created by MobX author which makes use of MobX internally while taking advantage of the best Redux and MobX practices. The good news is that the warning “This package is a work in progress, stay tuned” that was in the Readme just a couple of months ago, is now gone. There is a lot of healthy commit activity by the authors and the project is really great. I’m planning to use it in production soon and I’ll definitely let you know some details on how it goes in this podcast.</p>\n<p>Another update: a new video course on Preact has been published on egghead.io, about an hour of content broken down into 12 parts. I haven’t had time to watch it yet, but the titles are very intriguing. A quick reminder: Preact is an alternative to React which can work as a drop-in replacement, I have talked about it in a one of previous episode of 5 minutes of React and I’ve been using it myself.</p>\n<p>Code with React and prosper!</p>',excerpt:'\n<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/329453032&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n\n- https://facebook.github.io/react/blog/2017/06/13/react-v15.6.0.html\n- https://twitter.com/dan_abramov/status/875149571688734721\n- https://medium.com/webpack/webpack-3-official-release-15fd2dd8f07b\n- https://github.com/babel/notes\n- https://github.com/mobxjs/mobx-state-tree\n- https://egghead.io/courses/up-and-running-with-preact\n\n\n',frontmatter:{title:"#11 - React 15.6, Webpack 3, Babel Notes, mobx-state-tree 0.7, Preact on egghead.io",date:"June 22, 2017"}},next:{fields:{slug:"/013-gastbyjs/"},html:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/333532468&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n<p>Gatsby 1.0 - Blazing-fast static site generator for React.</p>\n<p><a href="https://www.gatsbyjs.org/">https://www.gatsbyjs.org/</a></p>\n<!-- end -->\n<p><strong>Transcript</strong></p>\n<p>The first stable version 1.0 of the static site generator Gatsby has just been released.</p>\n<p>This project is notable for generating static sites from React templates. You’d think static sites and React are like apples and oranges, but let’s start from the beginning.</p>\n<p>I found out about Gatsby a couple of years ago in the context of React conquering all possible niches including static site generation. When I started working on “5 minutes of React”, Gatsby occurred to me as quite a symbolic choice for building the podcast website.  A few ready-made templates were available then, and after some minor tweaks to one of them, I managed to launch a website with no trouble.   </p>\n<p>Technically it works this way: a set of React components make up a website template, and the text for blog entries is stored in a few Markdown files. This is episode 13 of the podcast, so I’ve got 13 Markdown files by now. Executing gatsby build command in the console builds the project,</p>\n<ul>\n<li>in other words, it generates 14 HTML files (including the main index.html and one HTML file for each post).</li>\n<li>In addition, images are compressed, a css file is generated (extended with SASS and PostCSS),</li>\n<li>and, most importantly,  a so-called bundle.js is created.</li>\n</ul>\n<p>With all the files generated, we can upload them to a simple hosting platform such as Github pages.\nWhen a user opens the site via their browser, index.html is loaded containing the whole HTML markup for the main page, just like the other 13 HTML files generated for each post. Thanks to this structure, the site is easily indexed by search engines and works even if javascript is disabled in the browser. </p>\n<p>However, as soon as bundle.js is loaded, the site turns into a single-page application where internal links can be followed without reloading the page and React renders everything right on the client side. This means bundle.js includes all the template components, and, even more remarkably, the content of all the posts on our site is packed inside of it! The more podcast episodes I make, the bulkier bundle.js will get. And that is a problem. Perhaps the user doesn’t plan to browse through all the posts on the site and is simply looking for the home page and the latest podcast episode. But the whole bundle.js will be loaded regardless.</p>\n<p>Some kind of smart code splitting would come in handy, as well as background loading, service workers, Progressive Web Apps, offline first, and so on.</p>\n<p>Finally, Gatsby 1.0 has fulfilled our wildest dreams and even more.</p>\n<p>Here is what 1.0 brings us, apart from route-based code splitting, service workers, and offline support.</p>\n<p>From now on, in addition to markdown files, remote sources such as WordPress, Drupal, and HackerNews are supported as data sources at build time.</p>\n<p>A plugin system has been added, which, in particular, brought about this integration with Wordpress, Drupal, and other sources.     Kyle Mathews, the creator of Gatsby, is hoping for active community engagement in this matter: a wealth of useful and diverse plugins should help Gatsby get even more robust and popular.</p>\n<p>Plugins can also be useful in implementing  Preact and Inferno support, which is especially appealing for lightweight static sites.</p>\n<p>Another notable feature introduced in 1.0 is the use of GraphQL for filling pages with content. Just to make things clear, GraphQL doesn’t run live on the site but rather operates at build time. GraphQL is involved in a whole bunch of tasks: querying data from markdown files, reading Wordpress data via a corresponding plugin, and even fetching the site title from global config. These GraphQL queries are located alongside components, and Gatsby knows which ones are required for every page, so it can perform some smart code splitting, inserting only the necessary data into each js bundle it’s generating. </p>\n<p>All in all, sounds awesome, but what is the real deal?</p>\n<p>In fact, meny of these plugins I’ve described are still at the prototype stage. The template I’m using for “5 minutes of React” website turned out to be incompatible with version 1.0. The documentation includes a guide on migrating to 1.0 which over 9000 items long, so I preferred to pass.  I grabbed another template compatible with 1.0, but it turned out to be quite a complex task, especially these GraphQL queries for each and every reason. For instance, I used to be able to adjust some global parameters just by importing a global config object, and now it has to be done via a GraphQL query to config. No more room for simplicity and playing by the ear. So I ended up postponing the podcast site transition to Gatsby 1.0. My current bundle.js built with the old Gatsby 0.12 version packs 13 podcast episodes and its size of 120Kb is bearable for now.</p>\n<p>To sum it up, Gatsby is a cool and resourceful project, its popularity is surging (illustrated by a graph of downloads in the blog), and its basis is very solid: code splitting, service workers, offline first, and extensibility with plugins. My best wishes to the project and I will be looking forward to more ready-made templates and functional plugins, so a site can be all set in a few clicks by getting the packages together into package.json.</p>\n<p>Build sites with Gatsby and prosper!</p>',excerpt:'\n<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/333532468&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n\nGatsby 1.0 - Blazing-fast static site generator for React.\n\nhttps://www.gatsbyjs.org/\n\n\n',frontmatter:{title:"#13 - Gatsby",date:"July 17, 2017"}}}}}});
//# sourceMappingURL=path---012-webpack-pnpm-typescript-aa5c5792e44471e1ee68.js.map