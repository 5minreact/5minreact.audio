---
title: "#16 - React 16 beta"
date: "2017-09-03"
---

<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/340724600&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

This time, a serious look at React 16 beta (not serious was in previous episode - you definitelly have to listen: https://5minreact.audio/015-sci-fi-story-about-react/). The details of the first beta release have been published right on Github as a dedicated issue. Let's take a moment to go over them.

- https://github.com/facebook/react/issues/10294
- https://facebook.github.io/react/blog/2017/07/26/error-handling-in-react-16.html

<!-- end -->
**Transcript**

This time, a serious look at React 16 beta. The details of the first beta release have been published right on Github as a dedicated issue.

Let's take a moment to go over them.

The beta version can be installed via npm as react@next package paired with react-dom@next.

React 16 uses Map and Set data structures introduced in the ECMAScript 2015 and supported by browsers no older than IE11. Anyway, the post includes links to the recommended polyfill libraries: core-js and babel-polyfill.

Another requirement is support for requestAnimationFrame browser function which is available in all modern browsers and IE 11 or above. requestAnimationFrame can simply be polyfilled as well.

The main focus of this release is backward compatibility with all the code that's been running in React 15.6 so far. We won't have to rewrite anything after the update, provided that we've handled all the deprecation warnings in time. This means version 16 doesn't unlock the full potential of the new Fiber core, and we can hardly expect a performance boost. That said, according to the devs, there will be no slowdown either.

However, they're asking for reports of any significant drops or surges in performance as a result of transition to beta version 16.  

Server rendering has been rewritten completely and now supports streaming (check react-dom/node-stream for details). But, as we may recall, Facebook doesn't perform server rendering with Node, so it's up to the community to examine and test this code thoroughly - try it out and submit your issues.

Error handling is an interesting new feature in React 16. Runtime errors that may break the whole React app can now be intercepted with a special type of components called "error boundaries". Errors get logged and a fallback view gets displayed instead.

On the other hand, if an error occurs within a component and there are no Error Boundary components up in the tree, then the whole tree is unmounted. The main idea here is that it's better to show nothing at all rather than a broken interface.

ReactDOM.render() and ReactDOM.unstable_renderSubtreeIntoContainer() now return null when called by lifecycle methods - this will mainly affect modal and dialogue window implementations. The good old ref and the newer portals can come to the rescue, but I won't go into details now. This might make for a whole new episode.

There are a few changes in how setState behaves in some rare edge cases. Same goes for ref, and I couldn't yet figure out from the descriptions how and where this can come into play.

If component A should be substituted by component B, first the method B.componentWillMount is called, followed by A.componentWillUnmount. This order used to break in some cases.

If the DOM has been modified externally, outside of React, attempting to render it will result in a console.error. 

ComponentDidUpdate method no longer takes prevContext as a parameter.

To wrap it up, let's take a look at the packaging. React is now shipped as a flat bundle, and UMD build files have been renamed to react.development.js and react.production.min.js.

This was a brief overview of the first React 16 beta version as described in the dedicated Github issue. I haven't tried it out yet by building my own React 16 beta apps, but I'll definitely get on it soon and let you know how it goes.

Besides, a new article has been published on the React blog with further details on Error Boundaries - thаt's something to be explored on its own, so stay tuned for our future episodes.

Code with React and prosper!
