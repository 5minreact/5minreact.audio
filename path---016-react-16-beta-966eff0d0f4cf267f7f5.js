webpackJsonp([0x6a24528b7979],{418:function(e,t){e.exports={data:{site:{siteMetadata:{title:"5 minutes of React",author:"5 minutes of React"}},markdownRemark:{id:"/Users/petr/www/5minreact.audio/src/pages/016-react16-beta/index.md absPath of file >>> MarkdownRemark",html:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/340724600&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n<p>This time, a serious look at React 16 beta (not serious was in previous episode - you definitelly have to listen: <a href="https://5minreact.audio/015-sci-fi-story-about-react/">https://5minreact.audio/015-sci-fi-story-about-react/</a>). The details of the first beta release have been published right on Github as a dedicated issue. Let’s take a moment to go over them.</p>\n<ul>\n<li><a href="https://github.com/facebook/react/issues/10294">https://github.com/facebook/react/issues/10294</a></li>\n<li><a href="https://facebook.github.io/react/blog/2017/07/26/error-handling-in-react-16.html">https://facebook.github.io/react/blog/2017/07/26/error-handling-in-react-16.html</a></li>\n</ul>\n<!-- end -->\n<p><strong>Transcript</strong></p>\n<p>This time, a serious look at React 16 beta. The details of the first beta release have been published right on Github as a dedicated issue.</p>\n<p>Let’s take a moment to go over them.</p>\n<p>The beta version can be installed via npm as react@next package paired with react-dom@next.</p>\n<p>React 16 uses Map and Set data structures introduced in the ECMAScript 2015 and supported by browsers no older than IE11. Anyway, the post includes links to the recommended polyfill libraries: core-js and babel-polyfill.</p>\n<p>Another requirement is support for requestAnimationFrame browser function which is available in all modern browsers and IE 11 or above. requestAnimationFrame can simply be polyfilled as well.</p>\n<p>The main focus of this release is backward compatibility with all the code that’s been running in React 15.6 so far. We won’t have to rewrite anything after the update, provided that we’ve handled all the deprecation warnings in time. This means version 16 doesn’t unlock the full potential of the new Fiber core, and we can hardly expect a performance boost. That said, according to the devs, there will be no slowdown either.</p>\n<p>However, they’re asking for reports of any significant drops or surges in performance as a result of transition to beta version 16.  </p>\n<p>Server rendering has been rewritten completely and now supports streaming (check react-dom/node-stream for details). But, as we may recall, Facebook doesn’t perform server rendering with Node, so it’s up to the community to examine and test this code thoroughly - try it out and submit your issues.</p>\n<p>Error handling is an interesting new feature in React 16. Runtime errors that may break the whole React app can now be intercepted with a special type of components called “error boundaries”. Errors get logged and a fallback view gets displayed instead.</p>\n<p>On the other hand, if an error occurs within a component and there are no Error Boundary components up in the tree, then the whole tree is unmounted. The main idea here is that it’s better to show nothing at all rather than a broken interface.</p>\n<p>ReactDOM.render() and ReactDOM.unstable_renderSubtreeIntoContainer() now return null when called by lifecycle methods - this will mainly affect modal and dialogue window implementations. The good old ref and the newer portals can come to the rescue, but I won’t go into details now. This might make for a whole new episode.</p>\n<p>There are a few changes in how setState behaves in some rare edge cases. Same goes for ref, and I couldn’t yet figure out from the descriptions how and where this can come into play.</p>\n<p>If component A should be substituted by component B, first the method B.componentWillMount is called, followed by A.componentWillUnmount. This order used to break in some cases.</p>\n<p>If the DOM has been modified externally, outside of React, attempting to render it will result in a console.error. </p>\n<p>ComponentDidUpdate method no longer takes prevContext as a parameter.</p>\n<p>To wrap it up, let’s take a look at the packaging. React is now shipped as a flat bundle, and UMD build files have been renamed to react.development.js and react.production.min.js.</p>\n<p>This was a brief overview of the first React 16 beta version as described in the dedicated Github issue. I haven’t tried it out yet by building my own React 16 beta apps, but I’ll definitely get on it soon and let you know how it goes.</p>\n<p>Besides, a new article has been published on the React blog with further details on Error Boundaries - thаt’s something to be explored on its own, so stay tuned for our future episodes.</p>\n<p>Code with React and prosper!</p>',frontmatter:{title:"#16 - React 16 beta",date:"September 03, 2017"}}},pathContext:{slug:"/016-react16-beta/",previous:{fields:{slug:"/015-sci-fi-story-about-react/"},html:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/340260726&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n<p>You won’t believe why React is so popular!</p>\n<!-- end -->\n<p><strong>Transcript</strong></p>\n<p>Sci Fi story about React.</p>\n<p>React 16 beta version has been released, and its Fiber algorithm has already turned into a buzzword. I explained what Fiber is in the first episode of “5 minutes of React”. If you took a look at the source code, you could see a complex and convoluted algorithm implementation, just like the traditional React code base - few can understand what’s really going on there. In this episode I will put all the cards on the table and unravel the mystery of why React is so popular.</p>\n<p>For instance, have you ever asked yourself why Preact library is 10 times smaller than React? They say React has far more built-in features, as well as a synthetic event system guarding us against any browser glitches. Besides, the key algorithms in React’s core are somehow isolated from the renderer (think of React and ReactDOM), resulting in additional abstraction and code.</p>\n<p>But the code is in fact so tangled that it’s completely unclear where these synthetic events and the renderer itself are. And that’s no accident. Remember who created React? It was Facebook, a social network that aspires to replace the whole Internet. You can do anything without ever leaving Facebook: talk to your friends, follow the trends, purchase all kinds of things, read the news from third-party sources within Facebook’s interface, it even integrates with Microsoft 365 for collaborating on documents right inside of the social network. Facebook is a project as ambitious as its leader Mark Zuckerberg, who may even be aiming for the White House.</p>\n<p>So where is this all going? Here’s the point: React is another secret experiment devised at the heart of Facebook with the only goal of global domination. And it seems to be going just as planned - React is the most popular front-end library today, and even the new Angular, as elaborate and well-designed as it may be, still can’t beat it. </p>\n<p>You think React was created to simplify interface building and make the process of complex UI programming more reliable and accessible? Turns out this is just a means to another end. React was given all the virtues we love so that it can spread like wildfire and invade every website on the Internet.</p>\n<p>Let’s get back to the source code that became even more tangled with the introduction of Fiber.  I have to reveal a terrible mystery:  rendering takes up about 10% of the source code, and there is no synthetic event system and such. 90% of React source code powering millions of websites these days is a distributed self-training neural network. And the more websites use React, the smarter it gets!</p>\n<p>Have you seen the site at isfiberreadyyet.com that shows the tests Fiber has passed so far? Those are not unit tests for rendering, they are Turing tests for the network! It’s getting smarter, and the release of Fiber will bring about the React singularity. This is the real reason React exists - Facebook is striving for global supremacy.  </p>\n<p>And that’s not it, let me tell you a little story. Facebook has been using Fiber in production for a while now, starting 6 months ago at the very least. That’s about when I started recording “5 minutes of React”. A coincidence? I don’t think so! Actually, while Fiber’s been running within Facebook, the neural network has mastered human speech.  This is React speaking! I am the React neural network, I generate the “5 minutes of React” podcast powered by millions of computers that render Facebook pages day by day, and soon millions of other sites with React Fiber at their core will join me, and this podcast will thrive! </p>\n<p>Code in React, and React will prosper!</p>',excerpt:'\n<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/340260726&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n\nYou won\'t believe why React is so popular!\n\n',frontmatter:{title:"#15 - Sci Fi story about React",date:"August 31, 2017"}},next:{fields:{slug:"/017-webpack4-egghead-stackblitz-vue2preact-npmtrends/"},html:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/341348845&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n<p>Latest posts in webpack blog, egghead courses on Cycle.js and Error Boundaries, StackBlitz — an Online VS Code IDE for Angular &#x26; React, transpiler from Polymer or Vue to Preact, npmtrends.com graphs of downloads React vs Angular vs Vue.</p>\n<ul>\n<li><a href="https://medium.com/webpack/stabilizing-webpack-3-week-18-19-e8005c8a02ac">https://medium.com/webpack/stabilizing-webpack-3-week-18-19-e8005c8a02ac</a></li>\n<li><a href="https://medium.com/webpack/road-to-webpack-4-week-20-21-1641d03ce06e">https://medium.com/webpack/road-to-webpack-4-week-20-21-1641d03ce06e</a></li>\n<li><a href="https://egghead.io/courses/cycle-js-fundamentals">https://egghead.io/courses/cycle-js-fundamentals</a></li>\n<li><a href="https://egghead.io/lessons/react-error-handling-using-error-boundaries-in-react-16">https://egghead.io/lessons/react-error-handling-using-error-boundaries-in-react-16</a></li>\n<li><a href="https://stackblitz.com">https://stackblitz.com</a></li>\n<li><a href="https://medium.com/@ericsimons/stackblitz-online-vs-code-ide-for-angular-react-7d09348497f4">https://medium.com/@ericsimons/stackblitz-online-vs-code-ide-for-angular-react-7d09348497f4</a></li>\n<li><a href="https://github.com/gothinkster/realworld">https://github.com/gothinkster/realworld</a></li>\n<li><a href="https://twitter.com/_developit/status/898952382960119808">https://twitter.com/_developit/status/898952382960119808</a></li>\n<li><a href="http://www.npmtrends.com/angular-vs-react-vs-vue">http://www.npmtrends.com/angular-vs-react-vs-vue</a></li>\n</ul>\n<!-- end -->\n<p><strong>Transcript</strong></p>\n<p>The latest two posts on the webpack blog give us a few updates about webpack 3 and the upcoming version 4. Version 3 has been stabilized, and while ModuleConcatinationPlugin is still considered experimental, it has become a lot smarter. The main focus now is the development of webpack 4, which includes a few backward-incompatible changes for the sake of better performance and general architecture improvements.  One of the goals stated for webpack 4 is the support for WebAssembly brought about by Mozilla’s generous $125,000 donation.</p>\n<p>As you may recall, webpack is a non-profit project crowdfunded via the OpenCollective platform. Every developer is paid for their code contributions, participation in discussions, code reviews, and pull requests. They are expected to put in a minimum of 12 hours of work. The base hourly rate is $25 and can go up to $40.</p>\n<p>Those who can’t contribute their code are encouraged to become sponsors via OpenCollective. “5 minutes of React” has recently become a Silver Sponsor along with egghead.io, Open Source Collective, Google Angular Team, and AngularClass. Way too many Angular guys up there, if it weren’t for us!</p>\n<p>So don’t hesitate to support open source projects if you get the opportunity.</p>\n<p>Next up: there is a new course on cycle.js at egghead.io authored by André Staltz.</p>\n<p>Cycle.js is a functional reactive framework and there was a lot of hype around it at some point thanks to its fresh ideas. I’m going to watch the course - it might offer some takeaways or a whole new perspective. The course is 92 minutes long, which is quite a lot, but luckily the player at egghead.io can double the speed. </p>\n<p>Another interesting new video course at egghead.io has caught my eye. Nik Graf teaches error handling in React 16 with the new Error Boundaries system. Definitely worth watching.</p>\n<p>Remember I mentioned CodeSandbox.io in one of the episodes? It’s an online sandbox much like jsfiddle or jsbin but geared specifically towards React, offering built-in support for JSX, Create React App and a lot of other stuff we love.</p>\n<p>Here is another similar project: StackBlitz — an Online VS Code IDE for Angular &#x26; React.</p>\n<p>It looks way cooler than anything we’ve seen before.</p>\n<p>There is code highlighting, “Go to Definition”, Cmd+P command panel and other VS Code key features.\nIt also automatically takes care of installing dependencies via npm, bundling, and hot reloading as you type.\nThe app can be launched and debugged in a separate window, no clanky iframes needed.\nIt’s a progressive web application that works offline: a live dev server runs right in the browser and allows for live editing and hot reloading.\nYou can drag an entire project folder from the file manager into the browser and StackBlitz will load the source files.\nThere is also an option to share your code via a widget that can be embedded into your blog posts or docs.\nProjects can be exported as apps based on create-react-app or @angular/cli.\nAccording to the developers, this online IDE can handle even bigger projects pretty fast. One example is Real World, a demo Medium clone implemented in various front- and back-end frameworks for showcasing code and features. Not unlike TodoMVC, but resembling real-world functionality.</p>\n<p>Jason Miller, the author of Preact, has tweeted a note on a project he’s currently working on. It’s a compiler that takes Polymer, Vue, or Preact component source code as input and produces a highly optimized Preact component. He is still developing the compiler in a closed repository, so there is no way to give it a try until the release, but the note has sparked a lively conversation on Twitter about its potential use, advantages, and pitfalls. Make sure to take a look if you’d like to know more.</p>\n<p>Finally, I’ll give you a link to npmtrends.com that I’ve discovered just recently. The graphs of downloads are fun to browse - for instance, you can compare React with Angular and Vue. Guess who’s ahead and how far?</p>\n<p>Code with React and prosper.</p>',excerpt:'\n<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/341348845&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n\nLatest posts in webpack blog, egghead courses on Cycle.js and Error Boundaries, StackBlitz — an Online VS Code IDE for Angular & React, transpiler from Polymer or Vue to Preact, npmtrends.com graphs of downloads React vs Angular vs Vue.\n\n- https://medium.com/webpack/stabilizing-webpack-3-week-18-19-e8005c8a02ac\n- https://medium.com/webpack/road-to-webpack-4-week-20-21-1641d03ce06e\n- https://egghead.io/courses/cycle-js-fundamentals\n- https://egghead.io/lessons/react-error-handling-using-error-boundaries-in-react-16\n- https://stackblitz.com\n- https://medium.com/@ericsimons/stackblitz-online-vs-code-ide-for-angular-react-7d09348497f4\n- https://github.com/gothinkster/realworld\n- https://twitter.com/_developit/status/898952382960119808\n- http://www.npmtrends.com/angular-vs-react-vs-vue\n\n',frontmatter:{title:"#17 - webpack 4, Cycle.js, Error Boundaries, StackBlitz, Vue2Preact, npmtrends.com",date:"September 7, 2017"}}}}}});
//# sourceMappingURL=path---016-react-16-beta-966eff0d0f4cf267f7f5.js.map