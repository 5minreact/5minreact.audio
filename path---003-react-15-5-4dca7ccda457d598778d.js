webpackJsonp([0xefa90a31218b],{405:function(e,t){e.exports={data:{site:{siteMetadata:{title:"5 minutes of React",author:"5 minutes of React"}},markdownRemark:{id:"/Users/petr/www/5minreact.audio/src/pages/003-react-15.5/index.md absPath of file >>> MarkdownRemark",html:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/320951134&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n<p>React 15.5 released, Andrew Clark‏ on reactiflux, React London 2017, Twitter mobile PWA, codesandbox.io</p>\n<ul>\n<li><a href="https://facebook.github.io/react/blog/2017/04/07/react-v15.5.0.html">https://facebook.github.io/react/blog/2017/04/07/react-v15.5.0.html</a></li>\n<li><a href="https://twitter.com/acdlite/status/852267670560923648">https://twitter.com/acdlite/status/852267670560923648</a></li>\n<li><a href="https://www.reactiflux.com/transcripts/andrew-clark/">https://www.reactiflux.com/transcripts/andrew-clark/</a></li>\n<li><a href="https://www.youtube.com/channel/UCV4LIEkC0S9KUAPDm2g4mNQ">https://www.youtube.com/channel/UCV4LIEkC0S9KUAPDm2g4mNQ</a></li>\n<li><a href="https://medium.com/@paularmstrong/twitter-lite-and-high-performance-react-progressive-web-apps-at-scale-d28a00e780a3">https://medium.com/@paularmstrong/twitter-lite-and-high-performance-react-progressive-web-apps-at-scale-d28a00e780a3</a></li>\n<li><a href="https://codesandbox.io/">https://codesandbox.io/</a></li>\n</ul>\n<!-- end -->\n<p><strong>Transcript</strong></p>\n<p>The latest version of React 15.5, was released on April 7th. The main aim of this version is the transition to version 16.0. The things which will be removed in 16 are now labeled deprecated and display a corresponding warning message in the console. </p>\n<p>The biggest change is that React.PropTypes and React.createClass were extracted into their own packages. Both are still accessible via the main React object, but using either will log a one-time deprecation warning to the console when in development mode.</p>\n<p>But, it turns out that PropTypes isn’t quite working, that there have been problems. Some on Twitter have even called it PropTypeGate! So version 15.5.1 released, and then .2, .3 and .4! This is reminiscent of old Windows jokes, that you should not install it before the first service pack available.</p>\n<p>By the way, the only 15.5.0 core release is mentioned on the official site and the GitHub repository “releases” tab. Four other patch versions can be found on npm – download them there.</p>\n<p>In other interesting news, there was a question and answer session with Andrew Clark (who is on the core React team) on reactiflux chat.</p>\n<p>He sad  that they did this for a few reasons. It’s not really about code size, since the validators are mostly stripped out in production, anyway.</p>\n<p>One, there’s really nothing React-specific about PropTypes. They are generic runtime type validators. In fact, there were already many packages on npm that mirrored the PropTypes from React (literally just a copy-paste from the React source). Splitting PropTypes out makes it easier for other projects to depend on them, without taking a dependency on React.</p>\n<p>Another reason is that React team wanted to communicate that PropTypes are only one possible way to do type checking in React. You can also use static typing via Flow or TypeScript.</p>\n<p>Finally, splitting PropTypes into a separate repo helps keep the React issue tracker focused on actual React issues.</p>\n<p>There are a couple other questions from the chat session that I’d like to quote.</p>\n<p>Question: Since the purpose of fiber is essentially being able to achieve 60fps on the web, will react ever have some helpers built-in for animation?</p>\n<p>Answer: React team feels we’re not in the business of providing built-in solutions for animation or state management or other areas that can be solved in userland by our awesome community. Fiber will have some really cool scheduling capabilities that will enable animation library authors to do exciting things that aren’t currently possible. I can’t wait to see what y’all build! - said Andrew Clark.</p>\n<p>Question: What’s the most difficult or challenging work left to officially ship v16?</p>\n<p>Answer: React 16 is running for 100% of users on facebook and messenger. So it’s basically done. The biggest remaining step I believe is to figure out our sever-side renderering story. We don’t really use SSR at Facebook, which is why this has come last. And then of course we need to get Fiber rolled on for React Native, too. Hopefully we’ll get 16 out sometime this summer!</p>\n<p>Also, it’s important to note that React 16 is our first Fiber release, but it will be Fiber running in compatibility mode — that is, with synchronous scheduling that mimics how React-of-today works. The more exciting release will be React 17, which will enable async scheduling by default and will help us realize the true promise of the new Fiber architecture. There’s still lots of work to be done on this front. We just this week have first round of meetings to discuss how to incrementally adopt async Fiber internally at Facebook.</p>\n<p>But React 16 will have improved error boundaries and you’ll be able to return arrays and strings from render! So still exciting!</p>\n<ul>\n<li>answered Andrew Clark.</li>\n</ul>\n<p>Take time and read the entire text of this question and answer session, where you can also learn about future versions of recompose, context, rollup, about functional components versus classes, about styles and CSS-in-JS and other things. I’ll include the link in shownotes.</p>\n<p>The React London 2017 conference was held at the end of March, the video has been available for a while, and I’ve watched one thing so far: the question and answer session with React developers. By the way, the format of the interview with unrehearsed questions from the audience is very interesting, you can learn a lot. For example, someone once asked </p>\n<ul>\n<li>Hey Mark! How many push-ups can you do?!</li>\n<li>More than you.\nApparently, Mark won…</li>\n</ul>\n<p>Another interesting I want to point is an article about mobile web version of Twitter from the developers. As you may know, the mobile web version was recently relaunched under the hood with React and Redux, and the article shows some performance optimisations they did. In addition to the usual advice about code splitting and shouldComponentUpdate, there were also a couple of clever tricks: move the heavy calculations from componentWillMount to componentDidMount, don’t use dangerouslySetInnerHTML (which is very slow), delay rendering big components (for example: switching between Search and Home tabs is pretty slow, so the user might think he simply missed the Home button and clicked elsewhere. To give the user instant feedback – first we render the Home button with blue highlighting, which shows that the app has acknowledged the button press, and then, later, we render all the content of your feed.</p>\n<p>Also interesting fact: by removing the draft Tweet state from updating the main Redux state on every keypress and keeping things local in the React component’s state, they were able to reduce the overhead by over 50%.</p>\n<p>Have you tried a new online playground: <a href="https://codesandbox.io/">https://codesandbox.io/</a> - its like jsfiddle, jsbin or codepen, but focused on React! Very usefull for small React experiments and sharing examples. React and React-Dom are immediately available, and it’s easy to add Redux or any npm package, and it supports modern javascript syntax, with a built-in prettifier, and hot reload. The result can be downloaded in a zip file, in the form of a Create React App project. It’s great for demos, which I’d like to show colleagues or use for a question or answer on StackOverflow.</p>\n<p>So that’s the mix of news we have, I hope you’ve heard something interesting.</p>\n<p>Code with React and prosper!</p>',frontmatter:{title:"#3 - React 15.5 and news",date:"May 04, 2017"}}},pathContext:{slug:"/003-react-15.5/",previous:{fields:{slug:"/002-jsx2/"},html:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/320721705&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n<p>The next version of JSX proposals.</p>\n<ul>\n<li><a href="https://github.com/facebook/jsx/issues/65">https://github.com/facebook/jsx/issues/65</a></li>\n<li><a href="https://facebook.github.io/reason/">https://facebook.github.io/reason/</a></li>\n</ul>\n<!-- end -->\n<p><strong>Transcript</strong></p>\n<p>We all like JSX, don’t we? JSX is a markup syntax similar to HTML used for describing component appearance. It has been around since the beginning and practically hasn’t changed. Since then many ideas and suggestions have surged that could improve JSX and streamline the process of writing and reading code. However, releasing a new JSX with the next version of React isn’t so simple, as compatibility could be broken. Just imagine how many external tools rely on the current version! That includes the Babel plugin, the highlight and autofill plugins in such text editors as Sublime, Atom, and Vim, as well as the built-in support in WebStorm and Visual Studio Code; even the TypeScript compiler can convert JSX into native Javascript on its own.</p>\n<p>Introducing these changes requires thorough preparation, along with an extensive collection of features to be implemented all in a single simultaneous release! The release would be huge, and its details should be published in advance to allow the developers of external tools, editors and IDEs some time to adjust. Let’s call this massive update JSX 2.0 - this is the name Sebastian, one of the key React developers, used for his GitHub ticket about a month ago. </p>\n<p>By the way, JSX is not only used by React, but also by Facebook’s own Reason project. Reason is a language that resembles Javascript with a functional twist, built upon the OCaml compiler. The JSX variation there is slightly different from the one we use in React. The Facebook team would like to have React and Reason variations unified as a part of the JSX 2.0 effort.</p>\n<p>Getting back to the ticket number 65 in Facebook’s JSX repository, here are the ideas already suggested there.</p>\n<p>Attribute names should be evaluated. How are the attributes in JSX written at the moment? For instance, I open a tag for MyButton component, write an attribute name such as “text”, followed by an equals sign, and a variable with its value in curly brackets. However, I can’t put a variable to the left of the equals sign in order to set the attribute name to its value at runtime.</p>\n<p>Technically we can already use the “object spread” operator (triple dot) to evaluate attribute names dynamically. JSX 2.0 is, in turn, offering a possibility to specify a variable or a Javascript expression in the left part of the assignment so that its value becomes the attribute name.</p>\n<p>Another suggestion is to add some sugar into passing parameters to a component. How often do you have to write key={key}, item={item}, color={color} in tag attributes, where the attribute name coincides with the name of the variable storing the attribute value? A parallel can be drawn with ES2015 and its handy object creation syntax: variable names are listed in curly brackets separated by commas, resulting in an object whose fields correspond to the specified variables in names and values.</p>\n<p>It would be great to have a similar mechanism in JSX: for example, when I open the MyComponent tag and list a few variables such as key, item, and color, separated by commas in curly brackets right after the tag name, these variables are passed to the component as props named key, item, and color.</p>\n<p>There is another inconvenience here: if an attribute value should be passed as a number, it has to be enclosed in curly brackets, for instance, count={10}. Why not simply write count=10 with no brackets or quotations? Looking forward to get this in JSX 2.0!</p>\n<p>What about if/else branching in JSX? Now, whenever we need to return a component, we have to resort to a ternary operator or a logical AND operator (that is, conjunction, or double ampersand). A more straightforward if construction in Javascript doesn’t return anything, so the current version of JSX doesn’t allow to use a simple if statement in curly brackets. Hence the suggestion to introduce the so-called do expressions that would allow to use if, for, and other purely imperative constructions within JSX.</p>\n<p>Finally, why do we need curly brackets around expressions at all? What if I do following: open a div tag, write an x+y expression, close the div tag. I would see the x+y text wrapped in div. In order for the x+y expression to be evaluated as a sum of two variables, they have to be enclosed in curly brackets. However, as the author of the suggestion points out, experience shows that simple static text is much less common in JSX than computable expressions. Let’s change the syntax so that Javascript expressions don’t require curly brackets, while text should be enclosed in quotation marks. We would thus give up curly brackets in one case and add quotation marks in another, so what is more preferable, more readable? This discussion is still ongoing, and some alternative suggestions can be found in the comments.</p>\n<p>And what do you think of XML namespaces in JSX? One of the arguments in their favor is the following: currently there are two reserved attributes, key and ref, which could belong to their own namespace, and the components themselves could be distributed into namespaces as well. Although, in my view, this can go too far into XML imitation. Just remember the epic XSLT technology!</p>\n<p>I have mentioned just a few basic points from the original ticket number 65. It is followed by a thread of more than a hundred comments linking to other tickets - a perfect read for quiet evenings.</p>\n<p>In any case, when the release day approaches (which isn’t happening any time soon), we will not miss it.</p>\n<p>Code with React and prosper!</p>',excerpt:'\n<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/320721705&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n\nThe next version of JSX proposals.\n- https://github.com/facebook/jsx/issues/65\n- https://facebook.github.io/reason/\n\n',frontmatter:{title:"#2 - JSX 2.0",date:"May 3, 2017"}},next:{fields:{slug:"/004-preact/"},html:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/322073604&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n<p>Preact - Fast 3kB alternative to React with the same ES6 API. My experience.</p>\n<ul>\n<li><a href="https://preactjs.com/">https://preactjs.com/</a></li>\n<li><a href="https://www.youtube.com/watch?v=ETjTVV4qGoY">https://www.youtube.com/watch?v=ETjTVV4qGoY</a> - “React 30” podcast episode about Preact with author of the library Jason Miller</li>\n</ul>\n<!-- end -->\n<p><strong>Transcript</strong></p>\n<p>I have recently tried out the Preact library. P as in letter “P”, “P React”.</p>\n<p>According to the preactjs.com website, it is a faster alternative to React with the same API, packed into merely a 3-kB gzip.</p>\n<p>Respecting our 5-minute format, let’s go over the main features and contrasts with React, and move on to my personal impression and conclusions based on few weeks of in real production.</p>\n<p>Before we get to it, I just recommend you check out an interview with Preact author Jason Miller at “React 30” podcast, where he gets into the details of how it was created and what motivated him.</p>\n<p>So here we go, some basic facts about Preact.</p>\n<p>Take the preact.min.js file, version 8.1 is 8kB in size (not gzipeed), versus React 15.5.4 with its 150 kB - the difference is clear. </p>\n<p>However, Preact itself, as small as 8kB, uses a slightly different API which can’t simply work as a drop-in replacement for React.</p>\n<p>That’s where the preact-compat package comes in, providing a compatibility layer with React API and adding up to 9kB more. Thus the 17kB combo of preact and preact-compat can completely replace React in your application right now - sounds great!</p>\n<p>Now, a fair question: why is it so small? There must be something wrong. The main reason is that Preact is geared exclusively towards working with DOM in a browser, so it has no separate renderers like ReactDOM and React Native, which means no extra abstractions. It’s just as close to the metal as it gets (that is, to the browser).   </p>\n<p>Secondly, Preact doesn’t make use of a synthetic event system like React does, but rather relies on native browser events.</p>\n<p>Just like React, Preact supports all modern browsers including Internet Explorer versions 9 and newer.</p>\n<p>It should also work in older IE versions with the help of es5-shim or babel-polyfill packages.</p>\n<p>So there is a main Preact library and a preact-compat helper library. Here are some points to have in mind when using Preact without the React compatibility layer.</p>\n<p>The render component method explicitly takes props, state, and context as arguments. If needed, props, state, and context can be addressed via this. By the way, that’s the kind of API developers of React themselves are aiming for.</p>\n<p>HTML attribures “class” and “for” are called just “class” and “for” in JSX syntax, rather than “className” and “htmlFor”.</p>\n<p>Given that Preact makes use of native DOM events exclusively, it has no onChange handler so popular in React. Instead, onInput and onClick sould be used. </p>\n<p>Some sugar is added by “linkState” function, initially a core method that has recently been moved to a separate module.</p>\n<p>Another difference is the fact that props.children in Preact is a simple JavaScript array, while React uses a more complex structure.</p>\n<p>As for PropTypes, Preact has none at all.</p>\n<p>The global render() function, which is the basis of our whole application DOM construction, has a third optional parameter here, in contrast with React.</p>\n<p>Preact’s render() is non-destructive, so rendering into <body> is perfectly fine (encouraged, even). This is possible because Preact does not assume it controls the entire root element you pass it. The second argument to render() is actually parent - meaning it’s a DOM element to render into. If you would like to re-render from the root (perhaps for Hot Module Replacement), render() accepts an element to replace as a third argument.</p>\n<p>Simply put, if global render is called with just two parameters, in every subsequent render call, React substitutes the parent element contents, while Preact appends it so that the application multiplies on the screen. To avoid this, a third parameter should be passed to Preact render - for instance, lastElementChild.</p>\n<p>By the way Preact is compatible with React Developer Tools.</p>\n<p>Peract’s core diff algorithm is different from React. Preact compares the current virtual DOM against the real DOM!</p>\n<p>This and other features allow to claim that Preact outperforms React, and some benchmarks have even been established. Yet this is a controversial matter: nowadays each and every virtual DOM implementation gets compared to React and outclasses it in its own contrived benchmarks. Then React Fiber will be released, and we’ll be back to square one. A sort of an endless arms race.</p>\n<p>So much for the short overview, let’s move on to my experience. I delved into Preact for a few weeks, rewriting old code and creating something new, reviewing issues from the Preact repository, reading articles and investigating. </p>\n<p>Firstly, I’d rate the website documentation at a solid C. It inevitably assumes that the developer is already familiar with React, but even with that in mind, the documentation appears superficial and inconsistent, and questions often arise from clear gaps in reasoning. Luckily, there is an official boilerplate repository where I could find some answers and avoid spending time on trial and error.</p>\n<p>Remember I mentioned that there is no synthetic event system in Preact and its library relies on native DOM events? In particular, onInput should be used instead of onChange. Well, how come are there examples involving onChange all over the documentation? onChange is only available with the added React compatibility layer (preact-compat), but these examples don’t clarify this at all. </p>\n<p>The Preact library seems to be presented as a drop-in replacement for React, in other words, the use of preact-compat is implied by default. It’s a great fit for those developers who are already comfortable in the React ecosystem: they are not looking for a new library with a new API, but rather are interested in shrinking downloadable Javascript code in an existing application, hopefully to boost its performance. This can be particularly useful for mobile websites and Progressive Web Apps.</p>\n<p>Another bonus I see as a developer is low risk. If Preact goes down, I can always return to React with no changes in code required (if I use preact-compat ofcause) </p>\n<p>The question remains whether the React compatibility layer is reliable enough for all React ecosystem components to work seamlessly. The developers have clearly set this objective, and I haven’t run into any issues. Although, I figure, some hidden edge cases and bugs are inevitable. </p>\n<p>How difficult can it be to implement this drop-in replacement in an actual project? Would it be hard to reconfigure webpack, babel, or browserify? The website provides a few instructions, although very brief and sketchy. The way I do it is by embedding React via a separate script tag described as externals in webpack config. In this case the website instructions weren’t helpful and I had to figure some of the steps out on my own.</p>\n<p>In addition, I use TypeScript instead of Babel, and there is no mention of it at all on the official page. However, I got it to work with the help of some external resources like webpack-ts-preact boilerplate on github. The official DefinitelyTyped repository doesn’t include any type definitions for Preact, although some links can be found in the issues section of the Preact repository. I ended up turning to React type definitions along with preact-compat compatibility layer, and it’s working out pretty well.</p>\n<p>There is a separate preact-redux library which allows to integrate redux into native Preact with no compatibility layer required. I haven’t tried it out yet, so I’m not sure how it works. If the compatibility layer is used, a separate library is no longer needed.</p>\n<p>I make use of MobX in my projects, and there are two native libraries for it. The first one is outdated, and its Readme clearly suggests to use the second library. The latter, in turn, recommends using the compatibility layer and the official mobx-react library in its Readme. This is what I ended up doing. </p>\n<p>I have been writing small widgets in native Preact and working with the compatibility layer in a bigger React project. Native Preact didn’t strike me as particularly impressive or groundbreaking. There is little more to it than just a decent library with its own API peculiarities and some syntactic sugar.</p>\n<p>From my perspective and from the way Preact is presented, its usage apart from the React compatibility layer is limited to a narrow realm of hobby projects. It is highly unlikely that full-fledged applications relying on React ecosystem will be rewritten into native Preact. The only feasible way to include Preact in a major project is via the compatibility layer.</p>\n<p>To sum it up, could I confirm that the code I translated into Preact showed any performance improvements noticeable to the user? I haven’t taken measurements of the actual interaction with my application, but I have measured the initial render time and found that it went down by a factor of 1.5. This doesn’t include the time it takes to load js files from the server, as my users work in a local network and the scripts have surely been cached in their browsers already. The improvement I am referring to corresponds to the time for script evaluation and initial rendering. </p>\n<p>Thus I’ll keep using Preact along with the compatibility layer, as there are practically no disadvantages to it, and the advantages are clear, although not very significant. When React Fiber is released, we’ll take another look and compare the features once again.</p>\n<p>Was the result worth spending time on investigation, webpack setup, typescript and other arrangements? Not in my case, even considering the initial render speedup. I haven’t really struggled with performance issues so far. As a way of broadening one’s outlook and exploring new areas, Preact hardly pays off, considering the tedious webpack setup. There are far more efficient ways to broaden the outlook and spend time on something truly distinct, like experimenting with Angular 2 or diving into Elm.</p>\n<p>Code with React and prosper!</p>',excerpt:'\n<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/322073604&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n\nPreact - Fast 3kB alternative to React with the same ES6 API. My experience.\n\n- https://preactjs.com/\n- https://www.youtube.com/watch?v=ETjTVV4qGoY - "React 30" podcast episode about Preact with author of the library Jason Miller\n\n',frontmatter:{title:"#4 - Preact",date:"May 11, 2017"}}}}}});
//# sourceMappingURL=path---003-react-15-5-4dca7ccda457d598778d.js.map