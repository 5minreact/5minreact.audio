---
title: "#20 - Jake Archibald: In The Loop (JSConf.Asia 2018)"
date: "2018-04-03"
---

<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/424143567&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>

The other day I got to watch a few talks from JSConf Asia 2018 on Youtube. There are 39 of them in the playlist, so I picked a random one. And I got so lucky I just had to make this episode about it! The talk was "In the Loop" by Jake Archibald.

Jake is developer advocate for Google Chrome. He's one of the editors of the service worker spec, so he's into offline-first, push messaging and web performance.

- https://www.youtube.com/playlist?list=PL37ZVnwpeshFqN5dcZ704lxI3F5iHDYkl - JSConf.Asia 2018
- https://youtu.be/cCOL7MC4Pl0 - Jake Archibald: In The Loop
- https://youtu.be/rLgBqT_e6Yo - Feross Aboukhadijeh: JavaScript Pranks
- https://twitter.com/jaffathecake

<!-- end -->
**Transcript**

The other day I got to watch a few talks from JSConf Asia 2018 on Youtube. There are 39 of them in the playlist, so I picked a random one. And I got so lucky I just had to make this episode about it! The talk was "In the Loop" by Jake Archibald.

Jake is a well-known figure in the Javascript world: he works at Google, writes articles, and talks at conferences.

"In the Loop", as you can guess from the title, explains how the event loop works in Javascript, in particular in the browser environment.

The event loop has already been discussed in countless articles, talks and lectures. I can't weigh up all of them, but Jake Archibald's talk is definitely a gem. He presents it in a very clear and comprehensible way, and the talk is consistent, logical, and visual.

Here are some things you can learn from it:
— What a task is from the event loop perspective, and what can cause an interface to stutter
— How setTimeout works
— How requestAnimationFrame is different setTimeout
— When exactly requestAnimationFrame gets called and how it fits into the event loop
— Why requestAnimationFrame in peculiar Safari
— What are micro-tasks, what makes them different from ordinary tasks, and how it all ties in with requestAnimationFrame
— Why initiating events via Javascript (for instance, via a click trigger) makes them behave differently compared to a native event set off by the user's actions in the browser, and why all of this can break your tests

In short, it's all very interesting, rigorous, and deep.

And, of course, the animated slides are amazing. And I don't mean any kitty gifs (of which there were none) or mere slide transitions. I'm talking about visualized events within the event loop, the entire algorithm illustrated by a little square rushing through the loop ­— which is very impressive.

Even the chunks of code are presented very thoughtfully. For instance, first we look at the code that uses the setTimeout function, and then Jake invites us to try out the requestAnimationFrame alternative. It's visualized as if we were erasing "setTimeout" with backspace and typing "requestAnimationFrame", which is very intuitive, natural, and easy to follow. For those of you who give talks or prepare slides: definitely check it out, this is a great tip.

Then I felt like watching another video. Apparently the JSConf Asia lineup had a whole series of short 5-minute talks. Again, my random pick was great: a gorgeous demonstration of a prank in Javascript. The speaker was showing small snippets of code that were generating endless alerts, not letting the victim close the window, sticking a cat into the clipboard when this evil page was clicked, etc. These may seem like old tricks, but the page in the last demo had all of this nasty code at once and it was hilarious. With everything bouncing and flying, some videos popping up all the time, with no way of closing anything — it was quite a show, and a great idea for a 5-minute talk. Check it out and have a good laugh!

And that's all I wanted to share for now.

Code with React and prosper!
