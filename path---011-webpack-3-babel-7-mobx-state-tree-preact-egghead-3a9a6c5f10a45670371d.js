webpackJsonp([0xc1e82ad41afa],{413:function(e,t){e.exports={data:{site:{siteMetadata:{title:"5 minutes of React",author:"5 minutes of React"}},markdownRemark:{id:"/Users/petr/www/5minreact.audio/src/pages/011-webpack3-babel7-mobx-state-tree-preact-egghead/index.md absPath of file >>> MarkdownRemark",html:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/329453032&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n<ul>\n<li><a href="https://facebook.github.io/react/blog/2017/06/13/react-v15.6.0.html">https://facebook.github.io/react/blog/2017/06/13/react-v15.6.0.html</a></li>\n<li><a href="https://twitter.com/dan_abramov/status/875149571688734721">https://twitter.com/dan_abramov/status/875149571688734721</a></li>\n<li><a href="https://medium.com/webpack/webpack-3-official-release-15fd2dd8f07b">https://medium.com/webpack/webpack-3-official-release-15fd2dd8f07b</a></li>\n<li><a href="https://github.com/babel/notes">https://github.com/babel/notes</a></li>\n<li><a href="https://github.com/mobxjs/mobx-state-tree">https://github.com/mobxjs/mobx-state-tree</a></li>\n<li><a href="https://egghead.io/courses/up-and-running-with-preact">https://egghead.io/courses/up-and-running-with-preact</a></li>\n</ul>\n<!-- end -->\n<p><strong>Transcript</strong></p>\n<p>On the 13th of June a new version of React has been released under the number of 15.6 - not yet 16 and not a fiber, but as mentioned in the accompanying blog post, the team is making some final arrangements and cleaning up in preparation for the big release. </p>\n<p>The new version 15.6 brings a few fixes for input field bugs, especially in IE11.</p>\n<p>Deprecation warnings are now output as console.warning (which was done via console.error in the previous version). The main idea is to avoid confusing the user about which messages are actually important. Deprecation warnings don’t require immediate action and can be fixed later. Standard warnings, on the other hand, still use console.error - for instance, when there is no key attribute specified for repeated elements.</p>\n<p>However, in the nature of things, right after the release a shocking iOS bug was revealed: onChange event didn’t get triggered by radio buttons, and it will be fixed in version 15.6.1.</p>\n<p>Dan Abramov complained on Twitter:</p>\n<p>Also, ugh, releasing 15.x gets harder and harder. Can’t wait to get to 16 and release from master.</p>\n<p>Have you already upgraded to webpack 2? If not, it’s too late to change horses in midstream: the new webpack 3 just have been released!</p>\n<p>In fact, this release is not so major as webpack 2 once was, but the pace of development is exciting. </p>\n<p>By the way the webpack team is accepting donations via the Opencollective website; I have been their subscriber and supporter for a while now, and you are welcome to join - little drops make an ocean.</p>\n<p>The Babel team doesn’t rest either and is putting all their effort into Babel 7, which is already available as alpha 12. Have you heard of Babel Notes, the monthly notes by developers on their progress, plans, and unresolved issues? I’m providing you a link, it is a great read: brief and informative enough to get an idea of where we are heading.</p>\n<p>Guys on the React team used to provide a similar outline called core-notes, but, unfortunately, they are no longer doing it.</p>\n<p>It recently crossed my mind: what about building a project with React 16 master, combined with webpack 3 and Babel 7 alpha? Quite a hardcore pack for a hackathon.</p>\n<p>Moving on, a new version of mobx-state-tree 0.7 was released. It’s a state container created by MobX author which makes use of MobX internally while taking advantage of the best Redux and MobX practices. The good news is that the warning “This package is a work in progress, stay tuned” that was in the Readme just a couple of months ago, is now gone. There is a lot of healthy commit activity by the authors and the project is really great. I’m planning to use it in production soon and I’ll definitely let you know some details on how it goes in this podcast.</p>\n<p>Another update: a new video course on Preact has been published on egghead.io, about an hour of content broken down into 12 parts. I haven’t had time to watch it yet, but the titles are very intriguing. A quick reminder: Preact is an alternative to React which can work as a drop-in replacement, I have talked about it in a one of previous episode of 5 minutes of React and I’ve been using it myself.</p>\n<p>Code with React and prosper!</p>',frontmatter:{title:"#11 - React 15.6, Webpack 3, Babel Notes, mobx-state-tree 0.7, Preact on egghead.io",date:"June 22, 2017"}}},pathContext:{slug:"/011-webpack3-babel7-mobx-state-tree-preact-egghead/",previous:{fields:{slug:"/010-react-wishlist/"},html:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/328216510&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n<p>Dan Abramov asked his Twitter audience: “What would you want the React team to focus on in the next 6 months? Reply with a new thing, or Iike existing replies”. This request inspired a massive thread of a few hundred tweets…</p>\n<ul>\n<li><a href="https://twitter.com/dan_abramov/status/871406752016863232">https://twitter.com/dan_abramov/status/871406752016863232</a></li>\n<li><a href="https://twitter.com/dan_abramov/status/871769329079025664">https://twitter.com/dan_abramov/status/871769329079025664</a></li>\n<li><a href="https://github.com/Microsoft/TypeScript-React-Starter">https://github.com/Microsoft/TypeScript-React-Starter</a></li>\n<li><a href="https://5minreact.audio/002-jsx2/">https://5minreact.audio/002-jsx2/</a></li>\n<li><a href="https://github.com/facebook/jsx/issues/65">https://github.com/facebook/jsx/issues/65</a></li>\n</ul>\n<!-- end -->\n<p><strong>Transcript</strong></p>\n<p>Dan Abramov asked his Twitter audience: “What would you want the React team to focus on in the next 6 months? Reply with a new thing, or Iike existing replies”. This request inspired a massive thread of a few hundred tweets. People suggested new ideas or liked the ones proposed earlier, while Dan commented and reviewed pretty much every suggestion, so the discussion turned out to be lively and bilateral. The next day Dan compiled and posted a community wishlist. It is definitely not an official roadmap for the team, but it’s nevertheless interesting by itself. Obviously, some points are already on the team’s agenda. The list is brief, so I can outline it:</p>\n<ul>\n<li>\n<p>A new API for components. Functional components need lifecycle methods, and classes make teaching quite hard</p>\n</li>\n<li>\n<p>Smaller bundle size</p>\n</li>\n<li>\n<p>Animation for component mounting and unmounting</p>\n</li>\n<li>\n<p>Fixing the context feature</p>\n</li>\n<li>\n<p>Functional component optimization (as a reminder, right now functional components aren’t optimized for performance, and in some cases they are slower compared to classes, although they seem more lightweight)</p>\n</li>\n<li>\n<p>Better diversity on the team</p>\n</li>\n<li>\n<p>Better typescript support: in particular, official definitions should be released and built into Create React App. I’m personally all for this one. Although the current community versions of TypeScript typings for React are rather decent, and using Typescript with Create React App is a well-established practice. Microsoft even has their own template TypeScript-React-Starter, which relies on Create React App</p>\n</li>\n<li>\n<p>Make setState great again! Just kidding, the idea is to make setState a viable alternative to Redux</p>\n</li>\n<li>\n<p>Official custom rerenderer API. What is a rerenderer? The most well-known examples are ReactDOM and ReactNative. There are also rerenderers aimed at virtual or augmented reality. Any of us can write our own rerenderers as well, but there is no offiicial API for them yet</p>\n</li>\n<li>\n<p>Server-side rendering: fixes for some issues along with Create React App support</p>\n</li>\n<li>\n<p>Official hot reloading mechanism</p>\n</li>\n<li>\n<p>JSX version 2. By the way, I have discussed its new syntax version in the second episode of “5 minutes of React”, and you can check it out for more details. </p>\n</li>\n</ul>\n<p>Our best wishes for the team’s endeavors.</p>\n<p>Code with React and prosper!</p>',excerpt:'\n<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/328216510&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n\nDan Abramov asked his Twitter audience: “What would you want the React team to focus on in the next 6 months? Reply with a new thing, or Iike existing replies”. This request inspired a massive thread of a few hundred tweets...\n\n- https://twitter.com/dan_abramov/status/871406752016863232\n- https://twitter.com/dan_abramov/status/871769329079025664\n- https://github.com/Microsoft/TypeScript-React-Starter\n- https://5minreact.audio/002-jsx2/\n- https://github.com/facebook/jsx/issues/65\n\n\n',frontmatter:{title:"#10 - React Wishlist",date:"June 15, 2017"}},next:{fields:{slug:"/012-webpack-pnpm-typescript/"},html:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/331989237&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n<ul>\n<li><a href="https://medium.com/webpack/webpack-3-official-release-15fd2dd8f07b">https://medium.com/webpack/webpack-3-official-release-15fd2dd8f07b</a></li>\n<li><a href="https://twitter.com/dan_abramov/status/880457799272210432">https://twitter.com/dan_abramov/status/880457799272210432</a></li>\n<li><a href="https://medium.com/@TheLarkInn/leaving-for-microsoft-4f386c458693">https://medium.com/@TheLarkInn/leaving-for-microsoft-4f386c458693</a></li>\n<li><a href="https://medium.com/pnpm/pnpm-version-1-is-out-935a07af914">https://medium.com/pnpm/pnpm-version-1-is-out-935a07af914</a></li>\n<li><a href="https://github.com/pnpm/awesome-pnpm">https://github.com/pnpm/awesome-pnpm</a></li>\n<li><a href="https://blogs.msdn.microsoft.com/typescript/2017/06/27/announcing-typescript-2-4/">https://blogs.msdn.microsoft.com/typescript/2017/06/27/announcing-typescript-2-4/</a></li>\n<li><a href="http://isfiberreadyyet.com/">http://isfiberreadyyet.com/</a></li>\n</ul>\n<!-- end -->\n<p><strong>Transcript</strong></p>\n<p>The final webpack 3 release is out. I usually don’t rush it with installing versions ending with .0.0, but this time I decided to give webpack 3.0.0 a try.</p>\n<p>There is a new feature description post in the webpack blog, and the so-called Scope Hoisting caught my eye right away. This piece won’t work right away after the upgrade - a special plugin called ModuleConcatenationPlugin has to be added to the configuration. As a result by bundle.js file now only contains 7 functions instead of a hundred tiny module wrappers. Why is it seven and not one? We can get some clues via a certain command line flag which outputs additional information about the module assembly process and helps understand why some modules couldn’t be combined into one.</p>\n<p>As a person who hasn’t dug too deep into webpack algorithms, I can only see that the modules from node_modules folder and the external ones remained apart, but the reason is still to be figured out.</p>\n<p>Another mystery is why adding ModuleConcatenationPlugin causes watch mode to stop. It’s not just me: there is already an issue on Github and many users have run into this problem. In addition, ModuleConcatenationPlugin breaks Hot Module Replacement. </p>\n<p>Actually, adding a new plugin and a new compiler option is so typical of webpack and our whole Javascript ecosystem!</p>\n<p>This matter was recently raised in a small Twitter thread, where Dan Abramov once again claimed that the less configuration, the better.\nQuote:</p>\n<p>Libraries shouldn’t ask users to modify configs. This is unsustainable and often very hard to compose. Very hostile to beginners.\nBeing official, Create React App makes it harder for those libraries to justify this. Helping move ecosystem to less config solutions.</p>\n<p>End quote.</p>\n<p>Getting back to webpack itself.</p>\n<p>One of webpack core developers, Sean Larkin, wrote in his blog that he is getting a new job and will join Microsoft in two weeks to work on Developer Tools for Edge browser! I’m not sure what his previous job was - I may have seen finance industry mentioned somewhere. I do like this kind of transition: if Sean used to work on a project for finance and devise utilities for us developers as a pastime, now he can work on development utilities full-time. As Sean pointed out in his blog, he will have more time to dedicate to webpack in particular.</p>\n<p>As for me, to keep things interesting, along with upgrading to webpack 3, I’ve tested the new pnpm 1.0 package manager release. I have already talked about its specifics compared to npm and yarn in one of the earlier episodes of “5 minutes of React”. For instance, rather than copying files to the node_modules folder, pnpm package manager creates hard links to its cache. This saves a considerable amount of space if multiple projects are using the same packages.</p>\n<p>So I deleted node_modules, added webpack 3.0 to package.json, and launched pnpm install - and it’s impressively fast!</p>\n<p>On the downside, I noticed that the “pnpm outdated” results in the same output as “npm outdated”, which means all my packages are linked and it’s not clear which versions are in fact up-to date.\nI had to use an external tool: npm-check.\nThere is a corresponding ticket on Github issues and looking forward “pnpm outdated” command to be fixed.</p>\n<p>After the installation pnpm generated a shrinkwrap.yaml file for me. To check how shrinkwrap.yaml works for second installation, I deleted node_modules and executed a “time pnpm install” command. The second installation took 4.5 seconds, out of which the packages themselves were linked in about a second, while the rest of the time was spent on webpack post-install scripts, uglifyjs-webpack-plugin, and fsevents.</p>\n<p>I even tried installing the packages in offline mode, just turning off Wi-Fi, then delete node_modules and run “pnpm install” again. The packages got installed just as fast (in a little over a second), but then the fsevents installation script froze while downloading binaries for my operating system.</p>\n<p>How will pnpm develop further on? In a blog post about the version 1.0 there are a few paragraphs shedding some light on this matter.</p>\n<p>First of all, even faster speed! If the packages are already downloaded into cache, pnpm install should be done in no longer than a second.</p>\n<p>Secondly, although the hard link and symlink approach makes it even faster than yarn, there are a few edge cases where yarn still excels. There are plans to handle this so that in the end pnpm is faster in any circumstances.    </p>\n<p>Thirdly, pnpm code base should be simplified, as currently contributing to it is rather complicated.</p>\n<p>Finally, a PR campaign is required (PR as in publicity, not Pull Request). Although pnpm is public for a longer period of time than Yarn, it is far less popular. So more articles, more documentation, and more interesting tools will be created to promote pnpm. Let’s make our awesome list huge!</p>\n<p>The installation is very straightforward: “npm install -g pnpm” - give it a try after this episode!</p>\n<p>But I didn’t stop here. As soon as I upgraded to webpack 3 via pnpm, I realized that TypeScript 2.4 was already out! Dynamic import, string enums, and a some type inference improvements, which are, as always, accompanied by an excellent description and examples in the Typescript blog. Everything worked out of the box in my project after I upgraded to Typescript 2.4.</p>\n<p>All in all, an upgrade of three tools at once to their new cutting-edge versions didn’t bring me any trouble (apart from the broken watch mode in webpack with ModuleConcatenationPlugin). </p>\n<p>Finally, just before recording this episode, I decided to take a look at the isfiberreadyyet.com page - and there are just 4 warning messages left to be fixed! </p>\n<p>Code with React and prosper!</p>',excerpt:'\n<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/331989237&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n\n- https://medium.com/webpack/webpack-3-official-release-15fd2dd8f07b\n- https://twitter.com/dan_abramov/status/880457799272210432\n- https://medium.com/@TheLarkInn/leaving-for-microsoft-4f386c458693\n- https://medium.com/pnpm/pnpm-version-1-is-out-935a07af914\n- https://github.com/pnpm/awesome-pnpm\n- https://blogs.msdn.microsoft.com/typescript/2017/06/27/announcing-typescript-2-4/\n- http://isfiberreadyyet.com/\n\n\n',frontmatter:{title:"#12 - webpack 3.0.0, pnpm 1.0, TypeScript 2.4",date:"July 6, 2017"}}}}}});
//# sourceMappingURL=path---011-webpack-3-babel-7-mobx-state-tree-preact-egghead-3a9a6c5f10a45670371d.js.map