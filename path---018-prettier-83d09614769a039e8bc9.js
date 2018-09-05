webpackJsonp([58204212059634],{416:function(e,t){e.exports={data:{site:{siteMetadata:{title:"5 minutes of React",author:"5 minutes of React"}},markdownRemark:{id:"/Users/petr/www/5minreact.audio/src/pages/018-prettier/index.md absPath of file >>> MarkdownRemark",html:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/342594364&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n<p>Quick overview of Prettier - an opinionated code formatter (ES2017, JSX, Flow, TypeScript, CSS, …) and my experience of integration Prettier with Idea (PhpStorm/WebStorm).</p>\n<p><a href="https://prettier.io/">https://prettier.io/</a></p>\n<!-- end -->\n<p><strong>Transcript</strong></p>\n<p>I’ve finally had the opportunity to test Prettier, a JavaScript code formatter that’s gaining more and more traction and turning into a de-facto standard.</p>\n<p>Prettier is a console utility written in JavaScript that beautifies JavaScript code including ES2017, JSX, Flow, and TypeScript, as well as CSS, LESS, SCSS, JSON, and GraphQL.</p>\n<p>Prettier first parses the source code into an abstract syntax tree and then reassembles it as well-formatted text, keeping intact some of the custom formatting you may have done by hand for practical reasons, such as empty lines (no more than one in a row) or multiline object descriptions.</p>\n<p>However, beauty is in the eyes of the beholder. The main advantage and benefit of automatic formatting is consistency.</p>\n<p>If we stick to the same formatting rules, we’ll eventually internalize them and get better and faster at reading code.</p>\n<p>One of the key features of Prettier is that it takes the maximum line length into account when reprinting code. For instance, if all the function parameters fit into one line, that’s the way they will be formatted. However, if any symbol goes beyond the maximum line length, then each parameter will be printed on a separate line.</p>\n<p>James Long started this project at the end of 2016, and since the public release in January 2017 a lot of developers have made their contributions. Commit activity is lively, and Prettier has already been adopted by a few prominent projects such as React, Jest, Yarn, Babel, Zeit, and Webpack.</p>\n<p>Prettier can be launched via the console for a particular file or folder. By default it ignores the node_modules folder to avoid formatting any third-party dependency code, which is handy. Files can be rewritten in-place with a —write parameter, so simply running Prettier by itself won’t overwrite any of your code.</p>\n<p>A plugin called eslint-plugin-prettier allows for useful integration with eslint. Formatting can be conveniently triggered as a pre-commit hook.</p>\n<p>A special comment prettier-ignore turns off the formatting for the node it precedes (that is, an actual instruction or expression on the line following the comment, which is represented as a node of the abstract syntactic tree).</p>\n<p>The original idea was to provide the developers with a common style guide so that we don’t have to bother and reinvent it for ourselves. Prettier later evolved to offer options and parameters that help us tweak the formatting to our liking.</p>\n<p>A curious fact: indentation is done with spaces instead of tabs, and single quotes are used in place of the double ones. However, there is an exception: Prettier chooses either single or double quotes in order to minimize escaping. In other words, if a string contains a double-quoted word, the formatted string literal will be enclosed in single quotes to avoid escaping the internal double ones.</p>\n<p>Enthusiasts have already integrated Prettier into various editors and IDEs, including Atom, Emacs, Vim, Sublime Text, Visual Studio Code, and Visual Studio IDE.</p>\n<p>There is no plugin for the Jetbrains IDEs such as IDEA, WebStorm, PhpStorm, or PyCharm, but a guide is available.</p>\n<p>Idea has an External Tools feature that allows to add a Prettier console tool with a —write parameter and a special macro. You can have this external tool at your fingertips by mapping it to a hotkey.</p>\n<p>Prettier can be invoked whenever a file is saved via an editor function called “File Watchers”.</p>\n<p>I use the PhpStorm IDE. Like all IDEA-based IDEs, it is shipped with a built-in “Reformat code” option. Code formatting runs automatically as soon as a brace encloses a code block, or when a code fragment copied from elsewhere is pasted into the editor. Additionally, there is an option to format the code of the modified files before committing them - provided that you commit via the internal IDEA interface. The hotkey for that is Ctrl + Alt + L on Windows and Cmd + Alt + L on macOS.</p>\n<p>Built-in formatting is handy as a single hotkey and a single checkbox apply to all the file types in the commit window: both client-side JavaScript or Typescript and server-side PHP.</p>\n<p>Formatting for every language in the IDE is configured individually, and templates are available for common coding styles. My PhpStorm, for example, offers three standards for JavaScript: the so-called “JavaScript Standard Style”, “Google JavaScript Style Guide”, and “Drupal JavaScript Style”. What’s lacking here is a “Prettier JavaScript style” - it would be great to use it with the built-in formatting functionality to get the same result as with the Prettier external tool. That would be possible if the internal Idea formatting engine had all the settings and checkbox options necessary to mimic the output of Prettier. I’ve submitted a request about it in the WebStorm issue tracker. However, in order to tweak their formatter, the guys at JetBrains would need some kind of documentation of Prettier styles. There is none at the moment, and the project is in full swing, so it essentially has to be reverse-engineered. I doubt they will ever pick up on my request.</p>\n<p>On the other hand, this summer Prettier itself took the initiative of better integration with code editors. In particular, a selected code fragment can now be formatted independently and the cursor position is tracked so that it stays in place after formatting.</p>\n<p>Bottom line, I set up my PhpStorm to format Typescript code in Prettier with a dedicated hotkey. However, if I happen to click the default Cmd+Alt+L out of habit and launch the built-in formatting engine, there won’t be any conflict as the internal formatter is a bit more relaxed. It won’t be an issue as long Prettier and PhpStorm have no discrepancies in the core formatting setup such as indentation, spacing, and bracket placement.</p>\n<p>That turned out to be pretty handy and cutting-edge!</p>\n<p>Format your code with Prettier and prosper!</p>',frontmatter:{title:"#18 - Prettier",date:"September 16, 2017"}}},pathContext:{slug:"/018-prettier/",previous:{fields:{slug:"/017-webpack4-egghead-stackblitz-vue2preact-npmtrends/"},html:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/341348845&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n<p>Latest posts in webpack blog, egghead courses on Cycle.js and Error Boundaries, StackBlitz — an Online VS Code IDE for Angular &#x26; React, transpiler from Polymer or Vue to Preact, npmtrends.com graphs of downloads React vs Angular vs Vue.</p>\n<ul>\n<li><a href="https://medium.com/webpack/stabilizing-webpack-3-week-18-19-e8005c8a02ac">https://medium.com/webpack/stabilizing-webpack-3-week-18-19-e8005c8a02ac</a></li>\n<li><a href="https://medium.com/webpack/road-to-webpack-4-week-20-21-1641d03ce06e">https://medium.com/webpack/road-to-webpack-4-week-20-21-1641d03ce06e</a></li>\n<li><a href="https://egghead.io/courses/cycle-js-fundamentals">https://egghead.io/courses/cycle-js-fundamentals</a></li>\n<li><a href="https://egghead.io/lessons/react-error-handling-using-error-boundaries-in-react-16">https://egghead.io/lessons/react-error-handling-using-error-boundaries-in-react-16</a></li>\n<li><a href="https://stackblitz.com">https://stackblitz.com</a></li>\n<li><a href="https://medium.com/@ericsimons/stackblitz-online-vs-code-ide-for-angular-react-7d09348497f4">https://medium.com/@ericsimons/stackblitz-online-vs-code-ide-for-angular-react-7d09348497f4</a></li>\n<li><a href="https://github.com/gothinkster/realworld">https://github.com/gothinkster/realworld</a></li>\n<li><a href="https://twitter.com/_developit/status/898952382960119808">https://twitter.com/_developit/status/898952382960119808</a></li>\n<li><a href="http://www.npmtrends.com/angular-vs-react-vs-vue">http://www.npmtrends.com/angular-vs-react-vs-vue</a></li>\n</ul>\n<!-- end -->\n<p><strong>Transcript</strong></p>\n<p>The latest two posts on the webpack blog give us a few updates about webpack 3 and the upcoming version 4. Version 3 has been stabilized, and while ModuleConcatinationPlugin is still considered experimental, it has become a lot smarter. The main focus now is the development of webpack 4, which includes a few backward-incompatible changes for the sake of better performance and general architecture improvements.  One of the goals stated for webpack 4 is the support for WebAssembly brought about by Mozilla’s generous $125,000 donation.</p>\n<p>As you may recall, webpack is a non-profit project crowdfunded via the OpenCollective platform. Every developer is paid for their code contributions, participation in discussions, code reviews, and pull requests. They are expected to put in a minimum of 12 hours of work. The base hourly rate is $25 and can go up to $40.</p>\n<p>Those who can’t contribute their code are encouraged to become sponsors via OpenCollective. “5 minutes of React” has recently become a Silver Sponsor along with egghead.io, Open Source Collective, Google Angular Team, and AngularClass. Way too many Angular guys up there, if it weren’t for us!</p>\n<p>So don’t hesitate to support open source projects if you get the opportunity.</p>\n<p>Next up: there is a new course on cycle.js at egghead.io authored by André Staltz.</p>\n<p>Cycle.js is a functional reactive framework and there was a lot of hype around it at some point thanks to its fresh ideas. I’m going to watch the course - it might offer some takeaways or a whole new perspective. The course is 92 minutes long, which is quite a lot, but luckily the player at egghead.io can double the speed. </p>\n<p>Another interesting new video course at egghead.io has caught my eye. Nik Graf teaches error handling in React 16 with the new Error Boundaries system. Definitely worth watching.</p>\n<p>Remember I mentioned CodeSandbox.io in one of the episodes? It’s an online sandbox much like jsfiddle or jsbin but geared specifically towards React, offering built-in support for JSX, Create React App and a lot of other stuff we love.</p>\n<p>Here is another similar project: StackBlitz — an Online VS Code IDE for Angular &#x26; React.</p>\n<p>It looks way cooler than anything we’ve seen before.</p>\n<p>There is code highlighting, “Go to Definition”, Cmd+P command panel and other VS Code key features.\nIt also automatically takes care of installing dependencies via npm, bundling, and hot reloading as you type.\nThe app can be launched and debugged in a separate window, no clanky iframes needed.\nIt’s a progressive web application that works offline: a live dev server runs right in the browser and allows for live editing and hot reloading.\nYou can drag an entire project folder from the file manager into the browser and StackBlitz will load the source files.\nThere is also an option to share your code via a widget that can be embedded into your blog posts or docs.\nProjects can be exported as apps based on create-react-app or @angular/cli.\nAccording to the developers, this online IDE can handle even bigger projects pretty fast. One example is Real World, a demo Medium clone implemented in various front- and back-end frameworks for showcasing code and features. Not unlike TodoMVC, but resembling real-world functionality.</p>\n<p>Jason Miller, the author of Preact, has tweeted a note on a project he’s currently working on. It’s a compiler that takes Polymer, Vue, or Preact component source code as input and produces a highly optimized Preact component. He is still developing the compiler in a closed repository, so there is no way to give it a try until the release, but the note has sparked a lively conversation on Twitter about its potential use, advantages, and pitfalls. Make sure to take a look if you’d like to know more.</p>\n<p>Finally, I’ll give you a link to npmtrends.com that I’ve discovered just recently. The graphs of downloads are fun to browse - for instance, you can compare React with Angular and Vue. Guess who’s ahead and how far?</p>\n<p>Code with React and prosper.</p>',excerpt:'\n<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/341348845&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>\n\nLatest posts in webpack blog, egghead courses on Cycle.js and Error Boundaries, StackBlitz — an Online VS Code IDE for Angular & React, transpiler from Polymer or Vue to Preact, npmtrends.com graphs of downloads React vs Angular vs Vue.\n\n- https://medium.com/webpack/stabilizing-webpack-3-week-18-19-e8005c8a02ac\n- https://medium.com/webpack/road-to-webpack-4-week-20-21-1641d03ce06e\n- https://egghead.io/courses/cycle-js-fundamentals\n- https://egghead.io/lessons/react-error-handling-using-error-boundaries-in-react-16\n- https://stackblitz.com\n- https://medium.com/@ericsimons/stackblitz-online-vs-code-ide-for-angular-react-7d09348497f4\n- https://github.com/gothinkster/realworld\n- https://twitter.com/_developit/status/898952382960119808\n- http://www.npmtrends.com/angular-vs-react-vs-vue\n\n',frontmatter:{title:"#17 - webpack 4, Cycle.js, Error Boundaries, StackBlitz, Vue2Preact, npmtrends.com",date:"September 7, 2017"}},next:{fields:{slug:"/019-typescript-20-80/"},html:'<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/417102171&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>\n<p>Technicalities aside, here are my overall thoughts on TypeScript.</p>\n<p>We all want the best result as fast and cheap as possible, right? But this is not how things work, and we have to strike a balance between development quality and speed…</p>\n<ul>\n<li><a href="https://stateofjs.com/2017/flavors/results/">https://stateofjs.com/2017/flavors/results/</a></li>\n<li><a href="https://egghead.io/courses/advanced-static-types-in-typescript">https://egghead.io/courses/advanced-static-types-in-typescript</a></li>\n<li><a href="https://egghead.io/courses/use-types-effectively-in-typescript">https://egghead.io/courses/use-types-effectively-in-typescript</a></li>\n<li><a href="https://radiojs.ru/2018/02/radiojs-51/">https://radiojs.ru/2018/02/radiojs-51/</a></li>\n<li><a href="https://www.youtube.com/watch?v=lOo5zB-m6EU">https://www.youtube.com/watch?v=lOo5zB-m6EU</a></li>\n</ul>\n<!-- end -->\n<p><strong>Transcript</strong></p>\n<p>A few days ago I hosted a short TypeScript webinar, and, naturally, I had to do some homework.</p>\n<p>When you’ve worked with a certain technology for a long time, you get used to it and stop noticing many details that could matter to a newbie. Besides, you end up using only a subset of features on a daily basis and gradually forget the rest.</p>\n<p>TypeScript is a pretty complex thing: it encompasses a lot of features and techniques. I decided to brush up on it and pick up some new tips and best practices along the way, so I went over a few lessons and courses at egghead.io.</p>\n<p>Like many of you listening to this podcast, I got familiar with egghead.io largely thanks to the excellent free course on Redux by Dan Abramov. But most of the courses there are subscription-only, which cost me about $29 per month.</p>\n<p>I really enjoy the format of egghead.io lessons. Each course is a series of short videos 5-10 minutes long. There can be just a few or a couple dozen videos per course that, in total, can last from 20 minutes up to an hour or two. Short lessons give it a good rhythm and feel dynamic and intensive. It’s easy to navigate between videos on a particular subject.</p>\n<p>Out of the 9 courses on TypeScript I found at egghead.io, I’ve done 5. Here are my two favorites:</p>\n<ol>\n<li>Advanced Static Types in TypeScript (by Marius Schulz)</li>\n<li>Use Types Effectively in TypeScript (by Ari Picker)</li>\n</ol>\n<p>Both are highly recommended!</p>\n<p>And this has served me well. A lot of things were coming back to me as I was watching the videos and thinking: “Yeah, I remember seeing this somewhere in the TypeScript release notes — how come I haven’t used this yet?“. I tried to imagine how I could apply it to my code base, whether it would pay off, and what kind of errors I could prevent.</p>\n<p>Again and again, I was amazed by TypeScript, thinking: “Wow, it’s so cool it can do that!“. Among other things, I found out that a switch statement could be forced to check every single possible case. This is something functional programmers in Haskell, Elm, or Purescript are so proud of, thanks to their pattern matching.</p>\n<p>Technicalities aside, here are my overall thoughts on TypeScript.</p>\n<p>We all want the best result as fast and cheap as possible, right? But this is not how things work, and we have to strike a balance between development quality and speed.</p>\n<p>I remember reading about software development at NASA: they prioritize quality and performance, so their development costs per line of code end up being truly astronomic. And it’s no wonder, as an error could cost even more. Launching rockets into space is a luxury.</p>\n<p>We, on the other hand, launch kitten websites, which is no rocket science. However, even front-end development has its critical moments when an error can cost way too much. Imagine a payment form for a huge online marketplace like Amazon. If the form had a bug and users couldn’t create any orders or pay for them, any second of disruption would lead to a massive loss.</p>\n<p>So it’s all about the balance between development quality and speed.</p>\n<p>For instance, nearly everybody relies strongly on testing to ensure the quality of their code. When executed properly, tests not only improve quality, but also save us time in the future by preventing regression and making refactoring much easier. Tests are definitely a must-have.</p>\n<p>Another good practice in quality assurance is static code analysis. Probably the most popular tool for analyzing JavaScript code these days is ESLint which doesn’t only keep style conventions like spaces or brackets in check, but it can also indicate issues that are likely to result in bugs.</p>\n<p>Similarly, Typescipt is a tool for static code analysis that helps to spot errors and pitfalls. However, it requires some extra effort of annotating types. TypeScript needs our help to decipher our code and get a proper grasp of how it works.</p>\n<p>Type annotations are a drag, aren’t they? But so are tests, and we still write them, to one extent or another.</p>\n<p>First we invest into writing tests, that is, code that will never be deployed to production and has no direct effect on the end product. But later on, this investment will provide a substantial return. Or not, if we fail to strike the right balance.</p>\n<p>When it comes to TypeScript, elaborate code requires type annotations that are just as elaborate. Annotating types properly may well take more time than writing the code itself. That’s when you start asking yourself whether it’s more trouble than it’s worth.</p>\n<p>Once again, let’s draw a parallel with automated testing. Imagine a simple function that sums up all elements of an array. How can we test it? We could come up with a few examples where the outcomes are known in advance and write a unit test. Or we could take it further and generate a few thousand examples, design some property-based tests, genetic or mutation tests, fuzzing tests and so on. Testing would take us a great deal longer than writing the actual function. All of this — perhaps only to find out in the end that the code was correct all along. And even if this array summing function were used on an Amazon payment form, let’s face it: these tests would be overkill, development would take way too long and set us back a small fortune.</p>\n<p>Similarly, type annotations in Typescript can turn out to be overkill. Simple typing via primitive types and interfaces helps avoid the most basic errors and slip-ups. Then you could dive deeper into generics, unions and intersections, discriminated unions and other intricacies. TypeScript has a lot of them — it’s been in active development for quite a while, and fresh versions are still coming out, delivering new features every few months. Using all the bells and whistles in Typescript would be rather difficult and hardly practical. To maximize your return on investment, you need to find a balance .</p>\n<p>And the sense of balance comes with experience. TypeScript can be tough in this regard. For instance, I’ve heard that Flow handles type inference much better. </p>\n<p>Choosing the right tool for type-based static code analysis is not an easy task. Different teams end up using different tools. According to the State of JavaScript 2017 survey, TypeScript is more than three times as popular as Flow: out of a total of 20000 respondents, 8000 claimed to be using TypeScript, as opposed to 2400 using Flow. </p>\n<p>What if static typing is ultimately a lost cause? If out of 20000 developers only 8000 use TypeScript and 2400 use Flow, all the rest, which is more than 10000 people, don’t use any static typing tool at all.  </p>\n<p>Here’s my take on it: using TypeScript or any other static type checker is completely worth it. You are probably familiar with the Pareto principle: 20% of the effort provides 80% of the result. Let’s say, we’ve invested our 20% into test coverage and got an 80% return in the form of better code quality, reliability, and a sense of security. We could go on testing and squeeze every last drop out of it, or, instead, we could switch to a different tool such as static type analysis. Try annotating your code with primitive types and interfaces, and you’ll see the difference right away, you’ll feel relief. Throw in a few generics and union types, an you’ll get 80% of your desired result from just 20% of the effort. Should you go on? Depending on your objectives, it may be worth it to get deeper down the rabbit hole of TypeScript and describe more elaborate and thus more precise types for your code. If you’re working for NASA and developing a navigation system for a fancy satellite, you don’t have any other choice.</p>\n<p>Seriously though, we need a balance in whatever we do, including working with TypeScript. You don’t have to turn it into a new Haskell or write 100% type-safe or formally verifiable code.</p>\n<p>This reminds me of an interview I heard in some podcast with Richard Feldman, an Elm language advocate. When asked about the advantages of Elm over TypeScript, he replied that there is no type Any in Elm, which means no dirty hacks. I’d put it the other way around — thank goodness we’ve got type Any in TypeScript! On one hand, it takes away all static guarantees and brings us back into the wilderness of dynamically typed JavaScript. On the other hand, it allows us to ease off on type annotations when we see fit. The Any type is precisely what helps us find a balance and avoid pushing beyond those 20% of effort.</p>\n<p>That said, if you take a look at typings for popular libraries, they are truly hardcore, with all the features imaginable at work. Check out the typings for lodash, or even React and Redux. Obviously, when a library is used by millions of developers, investing a lot into proper type annotations does pay off on a large scale.</p>\n<p>Now, is there anything wrong with TypeScript? There are a few flaws TypeScript critics like to point out.</p>\n<p>First, annotating types can be a drag, or it can complicate things too much. But as we’ve seen earlier, if you don’t overdo it, the benefits will outweigh the costs.</p>\n<p>Another concern is that type checking doesn’t happen at runtime, so annotating types in TypeScript offers no guarantees whatsoever. What if the server responds with a JSON with completely different types of elements? It will break everything and TypeScript won’t be of any help at all.</p>\n<p>While it’s true that everything can break at runtime, it has little to do with the advantages or the disadvantages of TypeScript itself. TypeScript is a tool for static code analysis, with emphasis on “static”. It works at compile time only and doesn’t have any control over runtime. There are other tools and libraries for performing additional runtime checks such as dynamic JSON Schema validators or React PropTypes.</p>\n<p>TypeScript is like a hammer — is it a bad tool per se? If you are chopping a tree, obviously, it’s useless. You need a different tool for chopping a tree, and there is nothing to blame the hammer for, it’s just how things work.</p>\n<p>A woodworker hammering a nail with anything other than a hammer, like a stone or his own fist, would be a bizarre sight, to say the least, and the same goes for a programmer who doesn’t write any tests or doesn’t use any tools for static code analysis.</p>\n<p>The third target of criticism is the poor quality or the complete lack of type definitions for libraries. If none are available at all, there is little we can do except use the Any type. Luckily, when it comes to the availability of type definitions, TypeScript is already a cut above its competitors.                                           .</p>\n<p>Poorly written type definitions are a different story: it’s extremely annoying to see error messages pop up when, in fact, the code is correct. Sometimes when everything looks completely fine, as soon as you update the definitions via npm, it just goes wild. This can happen for two reasons. First, your code may have been bad all along, but the old type definitions were too relaxed for TypeScript to spot the problems. But this is a good thing: now that you’ve got the best typings, you can focus on fixing your code. However, the opposite happens as well: perhaps there are bugs or incompatible changes in the new typings and TypeScript is simply throwing errors for no good reason. You then waste your precious time poring over these useless messages and trying to get rid of them, although any npm package update may lead to a mess like that if its developer fails to comply with SemVer or simply makes a mistake. And all of us make mistakes, including library authors and type definition writers. It’s a lot like that question about tests: what if the tests themselves are wrong? Is anyone going to test the tests?</p>\n<p>Speaking of solving the problems, what if  you downloaded some faulty typings? You could always revert to the previous version. However, this is not always the best option. The new version may introduce a lot of useful improvements and only a couple nasty bugs. Error messages in TypeScript can simply be suppressed with the help of the Any type. You can redefine a few problematic types in your project. For instance, you can declare several function signatures and even make them completely contradictory — TypeScript won’t go crazy, but will simply accept several possible ways to call these functions and consider all these signatures correct. Finally, there is the hardest but, at the same time, the most helpful solution for the whole ecosystem: you can send a pull request to the type definitions repository.</p>\n<p>And, of course, you can just let it be and disregard any inaccurate error messages in Typescript if they don’t bother you or pop up too often. They might go away with the next version of typings if the underlying bugs are fixed. What’s important is that, regardless of any TypeScript error messages, your code is compiled to pure JavaScript anyway. Essentially, a message like that is more of a warning than an error, unless you set the noEmitOnError parameter in the tsconfig.json file. I hardly ever use noEmitOnError and I often ignore the error messages — this is my way of finding the balance, and the manner of using TypeScript I chose for myself. In any case it’s better than raw JavaScript.</p>\n<p>However, if successful static code analysis is required by the CI server as a build step, letting the errors be is not an option.</p>\n<p>The fourth problem of TypeScript its critics point out is that it started as an extension of JavaScript that added typing to it, but now it’s turning into some kind of separate language that will be diverging from ESNEXT more an more. What if it ends up just like CoffeeScript? Does it even make sense to get into it?</p>\n<p>Differences in syntax are indeed arising, for example, in private variable declarations. But it’s definitely too early to draw any parallels with CoffeeScript. TypeScript is being actively developed and a growing number of projects start out written in TypeScript right away. It may lose its edge 10 years from now if static typing gets incorporated into JavaScript: in that case, TypeScript will likely face the same fate as CoffeeScript.</p>\n<p>But right now, in 2018, this concern is a rather lame excuse for avoiding TypeScript. Your product will probably die much sooner than TypeScript. As for all the syntactic differences and extras that are turning TypeScript into a separate language so distant from JavaScript, you are free to ignore any of them if you don’t like them. You can simply stay within the subset of features you feel comfortable with. If your thing is TypeScript 1.0 from back in the day when it was JavaScript with a little typing sugar, you can keep using it in your code as if it were version 1.0. And you’d automatically enjoy all the power of type inference provided in the latest versions, as well as carefully written type definitions for popular libraries, even if their syntax looks intimidating.</p>\n<p>Let’s sum it all up:</p>\n<ul>\n<li>To make our code better and our development process more productive, we use all kinds of tools like state-of-the-art text editors and IDEs, debuggers, automated testing frameworks, Continuous Integration, and so on. TypeScript is just another tool, and it performs static code analysis based on the information about data types.</li>\n<li>TypeScript tries to infer the type information on its own but the programmer still has to describe most of it using a particular syntax, and this task is the most labor-intensive.</li>\n<li>To avoid disappointment when dealing with types, you should take care not to overexert yourself and get a good idea of how thorough your type annotation really needs to be. 20% of effort provides 80% of the result, and your code doesn’t have to be perfectly type-safe or verifiable. If you are really into hardcore typing and formal verification, what you need isn’t TypeScript but something like Haskell, PureScript, or Elm.</li>\n<li>Don’t shy away from using the Any type: it can save you a lot of time and allow you to focus on those 20% of effort without overdoing it.</li>\n<li>We’re talking about static analysis, not dynamic, so there is no point in expecting TypeScript to do something it wasn’t designed for</li>\n<li>TypeScript currently beats its competitors in popularity and availability of typings, articles, and answers at Stack Overflow. This is what makes it the most effective tool for type-based static analysis of JavaScript code in terms of costs and benefits.   </li>\n</ul>\n<p>Code in TypeScript and prosper!</p>',
excerpt:'\n<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/417102171&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>\n\nTechnicalities aside, here are my overall thoughts on TypeScript.\n\nWe all want the best result as fast and cheap as possible, right? But this is not how things work, and we have to strike a balance between development quality and speed...\n\n- https://stateofjs.com/2017/flavors/results/\n- https://egghead.io/courses/advanced-static-types-in-typescript\n- https://egghead.io/courses/use-types-effectively-in-typescript\n- https://radiojs.ru/2018/02/radiojs-51/\n- https://www.youtube.com/watch?v=lOo5zB-m6EU\n\n',frontmatter:{title:"#19 - TypeScript 20/80",date:"March 21, 2018"}}}}}});
//# sourceMappingURL=path---018-prettier-83d09614769a039e8bc9.js.map