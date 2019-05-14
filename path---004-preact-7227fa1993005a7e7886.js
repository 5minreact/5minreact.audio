webpackJsonp([55268350050820],{406:function(e,t){e.exports={data:{site:{siteMetadata:{title:"5 minutes of React",author:"5 minutes of React"}},markdownRemark:{id:"/Users/petr/www/5minreact.audio/src/pages/004-preact/index.md absPath of file >>> MarkdownRemark",html:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/322073604&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n<p>Preact - Fast 3kB alternative to React with the same ES6 API. My experience.</p>\n<ul>\n<li><a href="https://preactjs.com/">https://preactjs.com/</a></li>\n<li><a href="https://www.youtube.com/watch?v=ETjTVV4qGoY">https://www.youtube.com/watch?v=ETjTVV4qGoY</a> - “React 30” podcast episode about Preact with author of the library Jason Miller</li>\n</ul>\n<!-- end -->\n<p><strong>Transcript</strong></p>\n<p>I have recently tried out the Preact library. P as in letter “P”, “P React”.</p>\n<p>According to the preactjs.com website, it is a faster alternative to React with the same API, packed into merely a 3-kB gzip.</p>\n<p>Respecting our 5-minute format, let’s go over the main features and contrasts with React, and move on to my personal impression and conclusions based on few weeks of in real production.</p>\n<p>Before we get to it, I just recommend you check out an interview with Preact author Jason Miller at “React 30” podcast, where he gets into the details of how it was created and what motivated him.</p>\n<p>So here we go, some basic facts about Preact.</p>\n<p>Take the preact.min.js file, version 8.1 is 8kB in size (not gzipeed), versus React 15.5.4 with its 150 kB - the difference is clear. </p>\n<p>However, Preact itself, as small as 8kB, uses a slightly different API which can’t simply work as a drop-in replacement for React.</p>\n<p>That’s where the preact-compat package comes in, providing a compatibility layer with React API and adding up to 9kB more. Thus the 17kB combo of preact and preact-compat can completely replace React in your application right now - sounds great!</p>\n<p>Now, a fair question: why is it so small? There must be something wrong. The main reason is that Preact is geared exclusively towards working with DOM in a browser, so it has no separate renderers like ReactDOM and React Native, which means no extra abstractions. It’s just as close to the metal as it gets (that is, to the browser).   </p>\n<p>Secondly, Preact doesn’t make use of a synthetic event system like React does, but rather relies on native browser events.</p>\n<p>Just like React, Preact supports all modern browsers including Internet Explorer versions 9 and newer.</p>\n<p>It should also work in older IE versions with the help of es5-shim or babel-polyfill packages.</p>\n<p>So there is a main Preact library and a preact-compat helper library. Here are some points to have in mind when using Preact without the React compatibility layer.</p>\n<p>The render component method explicitly takes props, state, and context as arguments. If needed, props, state, and context can be addressed via this. By the way, that’s the kind of API developers of React themselves are aiming for.</p>\n<p>HTML attribures “class” and “for” are called just “class” and “for” in JSX syntax, rather than “className” and “htmlFor”.</p>\n<p>Given that Preact makes use of native DOM events exclusively, it has no onChange handler so popular in React. Instead, onInput and onClick sould be used. </p>\n<p>Some sugar is added by “linkState” function, initially a core method that has recently been moved to a separate module.</p>\n<p>Another difference is the fact that props.children in Preact is a simple JavaScript array, while React uses a more complex structure.</p>\n<p>As for PropTypes, Preact has none at all.</p>\n<p>The global render() function, which is the basis of our whole application DOM construction, has a third optional parameter here, in contrast with React.</p>\n<p>Preact’s render() is non-destructive, so rendering into <body> is perfectly fine (encouraged, even). This is possible because Preact does not assume it controls the entire root element you pass it. The second argument to render() is actually parent - meaning it’s a DOM element to render into. If you would like to re-render from the root (perhaps for Hot Module Replacement), render() accepts an element to replace as a third argument.</p>\n<p>Simply put, if global render is called with just two parameters, in every subsequent render call, React substitutes the parent element contents, while Preact appends it so that the application multiplies on the screen. To avoid this, a third parameter should be passed to Preact render - for instance, lastElementChild.</p>\n<p>By the way Preact is compatible with React Developer Tools.</p>\n<p>Peract’s core diff algorithm is different from React. Preact compares the current virtual DOM against the real DOM!</p>\n<p>This and other features allow to claim that Preact outperforms React, and some benchmarks have even been established. Yet this is a controversial matter: nowadays each and every virtual DOM implementation gets compared to React and outclasses it in its own contrived benchmarks. Then React Fiber will be released, and we’ll be back to square one. A sort of an endless arms race.</p>\n<p>So much for the short overview, let’s move on to my experience. I delved into Preact for a few weeks, rewriting old code and creating something new, reviewing issues from the Preact repository, reading articles and investigating. </p>\n<p>Firstly, I’d rate the website documentation at a solid C. It inevitably assumes that the developer is already familiar with React, but even with that in mind, the documentation appears superficial and inconsistent, and questions often arise from clear gaps in reasoning. Luckily, there is an official boilerplate repository where I could find some answers and avoid spending time on trial and error.</p>\n<p>Remember I mentioned that there is no synthetic event system in Preact and its library relies on native DOM events? In particular, onInput should be used instead of onChange. Well, how come are there examples involving onChange all over the documentation? onChange is only available with the added React compatibility layer (preact-compat), but these examples don’t clarify this at all. </p>\n<p>The Preact library seems to be presented as a drop-in replacement for React, in other words, the use of preact-compat is implied by default. It’s a great fit for those developers who are already comfortable in the React ecosystem: they are not looking for a new library with a new API, but rather are interested in shrinking downloadable Javascript code in an existing application, hopefully to boost its performance. This can be particularly useful for mobile websites and Progressive Web Apps.</p>\n<p>Another bonus I see as a developer is low risk. If Preact goes down, I can always return to React with no changes in code required (if I use preact-compat ofcause) </p>\n<p>The question remains whether the React compatibility layer is reliable enough for all React ecosystem components to work seamlessly. The developers have clearly set this objective, and I haven’t run into any issues. Although, I figure, some hidden edge cases and bugs are inevitable. </p>\n<p>How difficult can it be to implement this drop-in replacement in an actual project? Would it be hard to reconfigure webpack, babel, or browserify? The website provides a few instructions, although very brief and sketchy. The way I do it is by embedding React via a separate script tag described as externals in webpack config. In this case the website instructions weren’t helpful and I had to figure some of the steps out on my own.</p>\n<p>In addition, I use TypeScript instead of Babel, and there is no mention of it at all on the official page. However, I got it to work with the help of some external resources like webpack-ts-preact boilerplate on github. The official DefinitelyTyped repository doesn’t include any type definitions for Preact, although some links can be found in the issues section of the Preact repository. I ended up turning to React type definitions along with preact-compat compatibility layer, and it’s working out pretty well.</p>\n<p>There is a separate preact-redux library which allows to integrate redux into native Preact with no compatibility layer required. I haven’t tried it out yet, so I’m not sure how it works. If the compatibility layer is used, a separate library is no longer needed.</p>\n<p>I make use of MobX in my projects, and there are two native libraries for it. The first one is outdated, and its Readme clearly suggests to use the second library. The latter, in turn, recommends using the compatibility layer and the official mobx-react library in its Readme. This is what I ended up doing. </p>\n<p>I have been writing small widgets in native Preact and working with the compatibility layer in a bigger React project. Native Preact didn’t strike me as particularly impressive or groundbreaking. There is little more to it than just a decent library with its own API peculiarities and some syntactic sugar.</p>\n<p>From my perspective and from the way Preact is presented, its usage apart from the React compatibility layer is limited to a narrow realm of hobby projects. It is highly unlikely that full-fledged applications relying on React ecosystem will be rewritten into native Preact. The only feasible way to include Preact in a major project is via the compatibility layer.</p>\n<p>To sum it up, could I confirm that the code I translated into Preact showed any performance improvements noticeable to the user? I haven’t taken measurements of the actual interaction with my application, but I have measured the initial render time and found that it went down by a factor of 1.5. This doesn’t include the time it takes to load js files from the server, as my users work in a local network and the scripts have surely been cached in their browsers already. The improvement I am referring to corresponds to the time for script evaluation and initial rendering. </p>\n<p>Thus I’ll keep using Preact along with the compatibility layer, as there are practically no disadvantages to it, and the advantages are clear, although not very significant. When React Fiber is released, we’ll take another look and compare the features once again.</p>\n<p>Was the result worth spending time on investigation, webpack setup, typescript and other arrangements? Not in my case, even considering the initial render speedup. I haven’t really struggled with performance issues so far. As a way of broadening one’s outlook and exploring new areas, Preact hardly pays off, considering the tedious webpack setup. There are far more efficient ways to broaden the outlook and spend time on something truly distinct, like experimenting with Angular 2 or diving into Elm.</p>\n<p>Code with React and prosper!</p>',frontmatter:{title:"#4 - Preact",date:"May 11, 2017"}}},pathContext:{slug:"/004-preact/",previous:{fields:{slug:"/003-react-15.5/"},html:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/320951134&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n<p>React 15.5 released, Andrew Clark‏ on reactiflux, React London 2017, Twitter mobile PWA, codesandbox.io</p>\n<ul>\n<li><a href="https://facebook.github.io/react/blog/2017/04/07/react-v15.5.0.html">https://facebook.github.io/react/blog/2017/04/07/react-v15.5.0.html</a></li>\n<li><a href="https://twitter.com/acdlite/status/852267670560923648">https://twitter.com/acdlite/status/852267670560923648</a></li>\n<li><a href="https://www.reactiflux.com/transcripts/andrew-clark/">https://www.reactiflux.com/transcripts/andrew-clark/</a></li>\n<li><a href="https://www.youtube.com/channel/UCV4LIEkC0S9KUAPDm2g4mNQ">https://www.youtube.com/channel/UCV4LIEkC0S9KUAPDm2g4mNQ</a></li>\n<li><a href="https://medium.com/@paularmstrong/twitter-lite-and-high-performance-react-progressive-web-apps-at-scale-d28a00e780a3">https://medium.com/@paularmstrong/twitter-lite-and-high-performance-react-progressive-web-apps-at-scale-d28a00e780a3</a></li>\n<li><a href="https://codesandbox.io/">https://codesandbox.io/</a></li>\n</ul>\n<!-- end -->\n<p><strong>Transcript</strong></p>\n<p>The latest version of React 15.5, was released on April 7th. The main aim of this version is the transition to version 16.0. The things which will be removed in 16 are now labeled deprecated and display a corresponding warning message in the console. </p>\n<p>The biggest change is that React.PropTypes and React.createClass were extracted into their own packages. Both are still accessible via the main React object, but using either will log a one-time deprecation warning to the console when in development mode.</p>\n<p>But, it turns out that PropTypes isn’t quite working, that there have been problems. Some on Twitter have even called it PropTypeGate! So version 15.5.1 released, and then .2, .3 and .4! This is reminiscent of old Windows jokes, that you should not install it before the first service pack available.</p>\n<p>By the way, the only 15.5.0 core release is mentioned on the official site and the GitHub repository “releases” tab. Four other patch versions can be found on npm – download them there.</p>\n<p>In other interesting news, there was a question and answer session with Andrew Clark (who is on the core React team) on reactiflux chat.</p>\n<p>He sad  that they did this for a few reasons. It’s not really about code size, since the validators are mostly stripped out in production, anyway.</p>\n<p>One, there’s really nothing React-specific about PropTypes. They are generic runtime type validators. In fact, there were already many packages on npm that mirrored the PropTypes from React (literally just a copy-paste from the React source). Splitting PropTypes out makes it easier for other projects to depend on them, without taking a dependency on React.</p>\n<p>Another reason is that React team wanted to communicate that PropTypes are only one possible way to do type checking in React. You can also use static typing via Flow or TypeScript.</p>\n<p>Finally, splitting PropTypes into a separate repo helps keep the React issue tracker focused on actual React issues.</p>\n<p>There are a couple other questions from the chat session that I’d like to quote.</p>\n<p>Question: Since the purpose of fiber is essentially being able to achieve 60fps on the web, will react ever have some helpers built-in for animation?</p>\n<p>Answer: React team feels we’re not in the business of providing built-in solutions for animation or state management or other areas that can be solved in userland by our awesome community. Fiber will have some really cool scheduling capabilities that will enable animation library authors to do exciting things that aren’t currently possible. I can’t wait to see what y’all build! - said Andrew Clark.</p>\n<p>Question: What’s the most difficult or challenging work left to officially ship v16?</p>\n<p>Answer: React 16 is running for 100% of users on facebook and messenger. So it’s basically done. The biggest remaining step I believe is to figure out our sever-side renderering story. We don’t really use SSR at Facebook, which is why this has come last. And then of course we need to get Fiber rolled on for React Native, too. Hopefully we’ll get 16 out sometime this summer!</p>\n<p>Also, it’s important to note that React 16 is our first Fiber release, but it will be Fiber running in compatibility mode — that is, with synchronous scheduling that mimics how React-of-today works. The more exciting release will be React 17, which will enable async scheduling by default and will help us realize the true promise of the new Fiber architecture. There’s still lots of work to be done on this front. We just this week have first round of meetings to discuss how to incrementally adopt async Fiber internally at Facebook.</p>\n<p>But React 16 will have improved error boundaries and you’ll be able to return arrays and strings from render! So still exciting!</p>\n<ul>\n<li>answered Andrew Clark.</li>\n</ul>\n<p>Take time and read the entire text of this question and answer session, where you can also learn about future versions of recompose, context, rollup, about functional components versus classes, about styles and CSS-in-JS and other things. I’ll include the link in shownotes.</p>\n<p>The React London 2017 conference was held at the end of March, the video has been available for a while, and I’ve watched one thing so far: the question and answer session with React developers. By the way, the format of the interview with unrehearsed questions from the audience is very interesting, you can learn a lot. For example, someone once asked </p>\n<ul>\n<li>Hey Mark! How many push-ups can you do?!</li>\n<li>More than you.\nApparently, Mark won…</li>\n</ul>\n<p>Another interesting I want to point is an article about mobile web version of Twitter from the developers. As you may know, the mobile web version was recently relaunched under the hood with React and Redux, and the article shows some performance optimisations they did. In addition to the usual advice about code splitting and shouldComponentUpdate, there were also a couple of clever tricks: move the heavy calculations from componentWillMount to componentDidMount, don’t use dangerouslySetInnerHTML (which is very slow), delay rendering big components (for example: switching between Search and Home tabs is pretty slow, so the user might think he simply missed the Home button and clicked elsewhere. To give the user instant feedback – first we render the Home button with blue highlighting, which shows that the app has acknowledged the button press, and then, later, we render all the content of your feed.</p>\n<p>Also interesting fact: by removing the draft Tweet state from updating the main Redux state on every keypress and keeping things local in the React component’s state, they were able to reduce the overhead by over 50%.</p>\n<p>Have you tried a new online playground: <a href="https://codesandbox.io/">https://codesandbox.io/</a> - its like jsfiddle, jsbin or codepen, but focused on React! Very usefull for small React experiments and sharing examples. React and React-Dom are immediately available, and it’s easy to add Redux or any npm package, and it supports modern javascript syntax, with a built-in prettifier, and hot reload. The result can be downloaded in a zip file, in the form of a Create React App project. It’s great for demos, which I’d like to show colleagues or use for a question or answer on StackOverflow.</p>\n<p>So that’s the mix of news we have, I hope you’ve heard something interesting.</p>\n<p>Code with React and prosper!</p>',excerpt:'\n<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/320951134&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n\nReact 15.5 released, Andrew Clark‏ on reactiflux, React London 2017, Twitter mobile PWA, codesandbox.io\n\n- https://facebook.github.io/react/blog/2017/04/07/react-v15.5.0.html\n- https://twitter.com/acdlite/status/852267670560923648\n- https://www.reactiflux.com/transcripts/andrew-clark/\n- https://www.youtube.com/channel/UCV4LIEkC0S9KUAPDm2g4mNQ\n- https://medium.com/@paularmstrong/twitter-lite-and-high-performance-react-progressive-web-apps-at-scale-d28a00e780a3\n- https://codesandbox.io/\n\n',frontmatter:{title:"#3 - React 15.5 and news",date:"May 4, 2017"}},next:{fields:{slug:"/005-idiomatic-redux/"},html:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/322367043&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n<p>Mark Erikson, one of Redux contributors, has published an article in his Idiomatic Redux series: “The Tao of Redux, Part 1 - Implementation and Intent.” Thoughts on what Redux requires, how Redux is intended to be used, and what is possible with Redux.</p>\n<ul>\n<li><a href="http://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/">http://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/</a></li>\n<li><a href="http://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-2/">http://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-2/</a></li>\n</ul>\n<!-- end -->\n<p><strong>Transcript</strong></p>\n<p>Mark Erikson, one of Redux contributors, has published another article in his Idiomatic Redux series.</p>\n<p>The article is called “The Tao of Redux, Part 1 - Implementation and Intent”. It was a great read; Mark has made a considerable effort to study older discussions of Redux issues on Github as well as various posts and comments by Dan Abramov to tell us about the original ideas, goals, and decisions that emerged from designing Redux. This turned out to be a very thorough and detailed overview.</p>\n<p>In this podcast I will indicate the main points of the article. So let’s get going!</p>\n<p>First of all, Mark debunks a few myths about some of the basic redux requirements.</p>\n<p>Let’s start by taking a look at the now-famous Three Principles of Redux:</p>\n<ol>\n<li>Single source of truth: The state of your whole application is stored in an object tree within a single store.</li>\n<li>State is read-only: The only way to change the state is to emit an action, an object describing what happened.</li>\n<li>Changes are made with pure functions: To specify how the state tree is transformed by actions, you write pure reducers.</li>\n</ol>\n<p>In a very real sense, each one of those statements is a lie!</p>\n<p>“Single source of truth” is wrong, because (per the Redux FAQ), you don’t have to put everything into Redux, the store state doesn’t have to be an object, and you don’t even have to have a single store.\n“State is read-only” is wrong, because there’s nothing that actually prevents the rest of the application from modifying the current state tree.\nAnd “Changes are made by pure functions” is wrong, because the reducer functions could also mutate the state tree directly, or kick off other side effects.</p>\n<p>These principles aren’t fixed rules or literal statements about the implementation of Redux. Rather, they form a statement of intent about how Redux should be used.</p>\n<p>Moreover, the immutability of the state tree itself is a cornerstone of Redux as it contains a few smart optimizations that involve a simple comparison of objects by reference. It happens twice: first in the Redux itself before any calls to subscribers, and then independently in the react-redux package as a part of the connect method which also performs a shallow comparison of all current component props with previous props. Redux itself won’t break if state is mutated. Redux will just not notify subscribers (when the whole state object reference is the same), or connected components won’t be rerendered (when particular slice of the state is mutated so it’s shallow equal).</p>\n<p>We also know that action objects should be serializable, in other words, they shouldn’t contain symbols, promises, and such. In fact, this is not an actual Redux requirement, but rather a recommendation that is meant to facilitate debugging and is crucial for time travel debugger.</p>\n<p>Redux’s primary goal is to make state mutations predictable.</p>\n<p>Constraints like immutability and serializability largely exist to make those development use cases possible, as well as making it easier for developers to trace data flow and update logic.</p>\n<p>Redux combines those multiple “stores” into a single state tree to make debugging, state persistence, and features like undo/redo easier to work with.</p>\n<p>Intended design and use of Redux was following:</p>\n<ul>\n<li>Redux Was Built As A Flux Architecture Implementation</li>\n<li>State Update Maintainability Is The Main Priority</li>\n<li>Action History Should Have Semantic Meaning:  action types should have some kind of meaning and information. The Redux DevTools and other logging utilities display the type field for each dispatched action. If only a single action type is used across the entire codebase (like SET_DATA), it will be harder to track down where a particular action was dispatched from, and the history log will be less readable.</li>\n<li>Redux Is Intended To Introduce Functional Programming Principles: this includes FP basics such as immutability and pure functions and ideas such as composing functions together to achieve a larger task. But not going deep into abstract FP concepts like “monads” or “endofunctors”.</li>\n<li>Redux Promotes Testable Code</li>\n<li>Reducer Functions Should Be Organized By State Slice</li>\n<li>Update Logic And Data Flow Are Explicit: Redux does not contain any “magic”, everything is intended to be explicit, clear, and traceable, with minimal abstraction.</li>\n<li>Redux’s API Should Be Minimal: The best API is often no API. </li>\n<li>Redux Should Be As Extensible As Possible. This ties in with the “minimal API” goal.</li>\n</ul>\n<p>Mark, the author of the article, has certainly dedicated a lot of time to researching and reading back through early issues and discussions.</p>\n<p>A substantial list of links to the sources is provided at the end of the article.</p>\n<p>Read the full article to get more info.\n<a href="http://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/">http://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/</a>\n<a href="http://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-2/">http://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-2/</a></p>\n<p>Thank you, Mark, for your effort and for your excellent content!</p>\n<p>Code with React and prosper!</p>',excerpt:'\n<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/322367043&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n\nMark Erikson, one of Redux contributors, has published an article in his Idiomatic Redux series: "The Tao of Redux, Part 1 - Implementation and Intent." Thoughts on what Redux requires, how Redux is intended to be used, and what is possible with Redux.\n\n- http://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/\n- http://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-2/\n\n',frontmatter:{title:"#5 - Idiomatic Redux",date:"May 13, 2017"}}}}}});
//# sourceMappingURL=path---004-preact-7227fa1993005a7e7886.js.map