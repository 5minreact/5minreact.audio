---
title: "#17 - webpack 4, Cycle.js, Error Boundaries, StackBlitz, Vue2Preact, npmtrends.com"
date: "2017-09-07"
---

<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/341348845&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

Latest posts in webpack blog, egghead courses on Cycle.js and Error Boundaries, StackBlitz — an Online VS Code IDE for Angular & React, transpiler from Polymer or Vue to Preact, npmtrends.com graphs of downloads React vs Angular vs Vue.

- https://medium.com/webpack/stabilizing-webpack-3-week-18-19-e8005c8a02ac
- https://medium.com/webpack/road-to-webpack-4-week-20-21-1641d03ce06e
- https://egghead.io/courses/cycle-js-fundamentals
- https://egghead.io/lessons/react-error-handling-using-error-boundaries-in-react-16
- https://stackblitz.com
- https://medium.com/@ericsimons/stackblitz-online-vs-code-ide-for-angular-react-7d09348497f4
- https://github.com/gothinkster/realworld
- https://twitter.com/_developit/status/898952382960119808
- http://www.npmtrends.com/angular-vs-react-vs-vue

<!-- end -->
**Transcript**

The latest two posts on the webpack blog give us a few updates about webpack 3 and the upcoming version 4. Version 3 has been stabilized, and while ModuleConcatinationPlugin is still considered experimental, it has become a lot smarter. The main focus now is the development of webpack 4, which includes a few backward-incompatible changes for the sake of better performance and general architecture improvements.  One of the goals stated for webpack 4 is the support for WebAssembly brought about by Mozilla's generous $125,000 donation.

As you may recall, webpack is a non-profit project crowdfunded via the OpenCollective platform. Every developer is paid for their code contributions, participation in discussions, code reviews, and pull requests. They are expected to put in a minimum of 12 hours of work. The base hourly rate is $25 and can go up to $40.

Those who can't contribute their code are encouraged to become sponsors via OpenCollective. "5 minutes of React" has recently become a Silver Sponsor along with egghead.io, Open Source Collective, Google Angular Team, and AngularClass. Way too many Angular guys up there, if it weren't for us!

So don't hesitate to support open source projects if you get the opportunity.

Next up: there is a new course on cycle.js at egghead.io authored by André Staltz.

Cycle.js is a functional reactive framework and there was a lot of hype around it at some point thanks to its fresh ideas. I'm going to watch the course - it might offer some takeaways or a whole new perspective. The course is 92 minutes long, which is quite a lot, but luckily the player at egghead.io can double the speed. 

Another interesting new video course at egghead.io has caught my eye. Nik Graf teaches error handling in React 16 with the new Error Boundaries system. Definitely worth watching.

Remember I mentioned CodeSandbox.io in one of the episodes? It's an online sandbox much like jsfiddle or jsbin but geared specifically towards React, offering built-in support for JSX, Create React App and a lot of other stuff we love.

Here is another similar project: StackBlitz — an Online VS Code IDE for Angular & React.

It looks way cooler than anything we've seen before.
 
There is code highlighting, "Go to Definition", Cmd+P command panel and other VS Code key features.
It also automatically takes care of installing dependencies via npm, bundling, and hot reloading as you type.
The app can be launched and debugged in a separate window, no clanky iframes needed.
It's a progressive web application that works offline: a live dev server runs right in the browser and allows for live editing and hot reloading. 
You can drag an entire project folder from the file manager into the browser and StackBlitz will load the source files.
There is also an option to share your code via a widget that can be embedded into your blog posts or docs.
Projects can be exported as apps based on create-react-app or @angular/cli.
According to the developers, this online IDE can handle even bigger projects pretty fast. One example is Real World, a demo Medium clone implemented in various front- and back-end frameworks for showcasing code and features. Not unlike TodoMVC, but resembling real-world functionality.

Jason Miller, the author of Preact, has tweeted a note on a project he's currently working on. It's a compiler that takes Polymer, Vue, or Preact component source code as input and produces a highly optimized Preact component. He is still developing the compiler in a closed repository, so there is no way to give it a try until the release, but the note has sparked a lively conversation on Twitter about its potential use, advantages, and pitfalls. Make sure to take a look if you'd like to know more.

Finally, I'll give you a link to npmtrends.com that I've discovered just recently. The graphs of downloads are fun to browse - for instance, you can compare React with Angular and Vue. Guess who's ahead and how far?

Code with React and prosper.


