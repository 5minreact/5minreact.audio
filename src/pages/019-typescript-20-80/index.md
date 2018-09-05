---
title: "#19 - TypeScript 20/80"
date: "2018-03-21"
---

<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/417102171&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>

Technicalities aside, here are my overall thoughts on TypeScript.

We all want the best result as fast and cheap as possible, right? But this is not how things work, and we have to strike a balance between development quality and speed...

- https://stateofjs.com/2017/flavors/results/
- https://egghead.io/courses/advanced-static-types-in-typescript
- https://egghead.io/courses/use-types-effectively-in-typescript
- https://radiojs.ru/2018/02/radiojs-51/
- https://www.youtube.com/watch?v=lOo5zB-m6EU

<!-- end -->
**Transcript**

A few days ago I hosted a short TypeScript webinar, and, naturally, I had to do some homework.

When you've worked with a certain technology for a long time, you get used to it and stop noticing many details that could matter to a newbie. Besides, you end up using only a subset of features on a daily basis and gradually forget the rest.

TypeScript is a pretty complex thing: it encompasses a lot of features and techniques. I decided to brush up on it and pick up some new tips and best practices along the way, so I went over a few lessons and courses at egghead.io.

Like many of you listening to this podcast, I got familiar with egghead.io largely thanks to the excellent free course on Redux by Dan Abramov. But most of the courses there are subscription-only, which cost me about $29 per month.

I really enjoy the format of egghead.io lessons. Each course is a series of short videos 5-10 minutes long. There can be just a few or a couple dozen videos per course that, in total, can last from 20 minutes up to an hour or two. Short lessons give it a good rhythm and feel dynamic and intensive. It's easy to navigate between videos on a particular subject.

Out of the 9 courses on TypeScript I found at egghead.io, I've done 5. Here are my two favorites:

1. Advanced Static Types in TypeScript (by Marius Schulz)
2. Use Types Effectively in TypeScript (by Ari Picker)

Both are highly recommended!

And this has served me well. A lot of things were coming back to me as I was watching the videos and thinking: "Yeah, I remember seeing this somewhere in the TypeScript release notes — how come I haven't used this yet?". I tried to imagine how I could apply it to my code base, whether it would pay off, and what kind of errors I could prevent.

Again and again, I was amazed by TypeScript, thinking: "Wow, it's so cool it can do that!". Among other things, I found out that a switch statement could be forced to check every single possible case. This is something functional programmers in Haskell, Elm, or Purescript are so proud of, thanks to their pattern matching.

Technicalities aside, here are my overall thoughts on TypeScript.

We all want the best result as fast and cheap as possible, right? But this is not how things work, and we have to strike a balance between development quality and speed.

I remember reading about software development at NASA: they prioritize quality and performance, so their development costs per line of code end up being truly astronomic. And it's no wonder, as an error could cost even more. Launching rockets into space is a luxury.

We, on the other hand, launch kitten websites, which is no rocket science. However, even front-end development has its critical moments when an error can cost way too much. Imagine a payment form for a huge online marketplace like Amazon. If the form had a bug and users couldn't create any orders or pay for them, any second of disruption would lead to a massive loss.

So it's all about the balance between development quality and speed.

For instance, nearly everybody relies strongly on testing to ensure the quality of their code. When executed properly, tests not only improve quality, but also save us time in the future by preventing regression and making refactoring much easier. Tests are definitely a must-have.

Another good practice in quality assurance is static code analysis. Probably the most popular tool for analyzing JavaScript code these days is ESLint which doesn't only keep style conventions like spaces or brackets in check, but it can also indicate issues that are likely to result in bugs.

Similarly, Typescipt is a tool for static code analysis that helps to spot errors and pitfalls. However, it requires some extra effort of annotating types. TypeScript needs our help to decipher our code and get a proper grasp of how it works.

Type annotations are a drag, aren't they? But so are tests, and we still write them, to one extent or another.

First we invest into writing tests, that is, code that will never be deployed to production and has no direct effect on the end product. But later on, this investment will provide a substantial return. Or not, if we fail to strike the right balance.

When it comes to TypeScript, elaborate code requires type annotations that are just as elaborate. Annotating types properly may well take more time than writing the code itself. That's when you start asking yourself whether it's more trouble than it's worth.

Once again, let's draw a parallel with automated testing. Imagine a simple function that sums up all elements of an array. How can we test it? We could come up with a few examples where the outcomes are known in advance and write a unit test. Or we could take it further and generate a few thousand examples, design some property-based tests, genetic or mutation tests, fuzzing tests and so on. Testing would take us a great deal longer than writing the actual function. All of this — perhaps only to find out in the end that the code was correct all along. And even if this array summing function were used on an Amazon payment form, let's face it: these tests would be overkill, development would take way too long and set us back a small fortune.

Similarly, type annotations in Typescript can turn out to be overkill. Simple typing via primitive types and interfaces helps avoid the most basic errors and slip-ups. Then you could dive deeper into generics, unions and intersections, discriminated unions and other intricacies. TypeScript has a lot of them — it's been in active development for quite a while, and fresh versions are still coming out, delivering new features every few months. Using all the bells and whistles in Typescript would be rather difficult and hardly practical. To maximize your return on investment, you need to find a balance .

And the sense of balance comes with experience. TypeScript can be tough in this regard. For instance, I've heard that Flow handles type inference much better. 

Choosing the right tool for type-based static code analysis is not an easy task. Different teams end up using different tools. According to the State of JavaScript 2017 survey, TypeScript is more than three times as popular as Flow: out of a total of 20000 respondents, 8000 claimed to be using TypeScript, as opposed to 2400 using Flow. 

What if static typing is ultimately a lost cause? If out of 20000 developers only 8000 use TypeScript and 2400 use Flow, all the rest, which is more than 10000 people, don't use any static typing tool at all.  

Here's my take on it: using TypeScript or any other static type checker is completely worth it. You are probably familiar with the Pareto principle: 20% of the effort provides 80% of the result. Let's say, we've invested our 20% into test coverage and got an 80% return in the form of better code quality, reliability, and a sense of security. We could go on testing and squeeze every last drop out of it, or, instead, we could switch to a different tool such as static type analysis. Try annotating your code with primitive types and interfaces, and you'll see the difference right away, you'll feel relief. Throw in a few generics and union types, an you'll get 80% of your desired result from just 20% of the effort. Should you go on? Depending on your objectives, it may be worth it to get deeper down the rabbit hole of TypeScript and describe more elaborate and thus more precise types for your code. If you're working for NASA and developing a navigation system for a fancy satellite, you don't have any other choice.

Seriously though, we need a balance in whatever we do, including working with TypeScript. You don't have to turn it into a new Haskell or write 100% type-safe or formally verifiable code.

This reminds me of an interview I heard in some podcast with Richard Feldman, an Elm language advocate. When asked about the advantages of Elm over TypeScript, he replied that there is no type Any in Elm, which means no dirty hacks. I'd put it the other way around — thank goodness we've got type Any in TypeScript! On one hand, it takes away all static guarantees and brings us back into the wilderness of dynamically typed JavaScript. On the other hand, it allows us to ease off on type annotations when we see fit. The Any type is precisely what helps us find a balance and avoid pushing beyond those 20% of effort.

That said, if you take a look at typings for popular libraries, they are truly hardcore, with all the features imaginable at work. Check out the typings for lodash, or even React and Redux. Obviously, when a library is used by millions of developers, investing a lot into proper type annotations does pay off on a large scale.

Now, is there anything wrong with TypeScript? There are a few flaws TypeScript critics like to point out.

First, annotating types can be a drag, or it can complicate things too much. But as we've seen earlier, if you don't overdo it, the benefits will outweigh the costs.

Another concern is that type checking doesn't happen at runtime, so annotating types in TypeScript offers no guarantees whatsoever. What if the server responds with a JSON with completely different types of elements? It will break everything and TypeScript won't be of any help at all.

While it's true that everything can break at runtime, it has little to do with the advantages or the disadvantages of TypeScript itself. TypeScript is a tool for static code analysis, with emphasis on "static". It works at compile time only and doesn't have any control over runtime. There are other tools and libraries for performing additional runtime checks such as dynamic JSON Schema validators or React PropTypes.

TypeScript is like a hammer — is it a bad tool per se? If you are chopping a tree, obviously, it's useless. You need a different tool for chopping a tree, and there is nothing to blame the hammer for, it's just how things work.

A woodworker hammering a nail with anything other than a hammer, like a stone or his own fist, would be a bizarre sight, to say the least, and the same goes for a programmer who doesn't write any tests or doesn't use any tools for static code analysis.

The third target of criticism is the poor quality or the complete lack of type definitions for libraries. If none are available at all, there is little we can do except use the Any type. Luckily, when it comes to the availability of type definitions, TypeScript is already a cut above its competitors.                                           .

Poorly written type definitions are a different story: it's extremely annoying to see error messages pop up when, in fact, the code is correct. Sometimes when everything looks completely fine, as soon as you update the definitions via npm, it just goes wild. This can happen for two reasons. First, your code may have been bad all along, but the old type definitions were too relaxed for TypeScript to spot the problems. But this is a good thing: now that you've got the best typings, you can focus on fixing your code. However, the opposite happens as well: perhaps there are bugs or incompatible changes in the new typings and TypeScript is simply throwing errors for no good reason. You then waste your precious time poring over these useless messages and trying to get rid of them, although any npm package update may lead to a mess like that if its developer fails to comply with SemVer or simply makes a mistake. And all of us make mistakes, including library authors and type definition writers. It's a lot like that question about tests: what if the tests themselves are wrong? Is anyone going to test the tests?

Speaking of solving the problems, what if  you downloaded some faulty typings? You could always revert to the previous version. However, this is not always the best option. The new version may introduce a lot of useful improvements and only a couple nasty bugs. Error messages in TypeScript can simply be suppressed with the help of the Any type. You can redefine a few problematic types in your project. For instance, you can declare several function signatures and even make them completely contradictory — TypeScript won't go crazy, but will simply accept several possible ways to call these functions and consider all these signatures correct. Finally, there is the hardest but, at the same time, the most helpful solution for the whole ecosystem: you can send a pull request to the type definitions repository.

And, of course, you can just let it be and disregard any inaccurate error messages in Typescript if they don't bother you or pop up too often. They might go away with the next version of typings if the underlying bugs are fixed. What's important is that, regardless of any TypeScript error messages, your code is compiled to pure JavaScript anyway. Essentially, a message like that is more of a warning than an error, unless you set the noEmitOnError parameter in the tsconfig.json file. I hardly ever use noEmitOnError and I often ignore the error messages — this is my way of finding the balance, and the manner of using TypeScript I chose for myself. In any case it's better than raw JavaScript.

However, if successful static code analysis is required by the CI server as a build step, letting the errors be is not an option.

The fourth problem of TypeScript its critics point out is that it started as an extension of JavaScript that added typing to it, but now it's turning into some kind of separate language that will be diverging from ESNEXT more an more. What if it ends up just like CoffeeScript? Does it even make sense to get into it?

Differences in syntax are indeed arising, for example, in private variable declarations. But it's definitely too early to draw any parallels with CoffeeScript. TypeScript is being actively developed and a growing number of projects start out written in TypeScript right away. It may lose its edge 10 years from now if static typing gets incorporated into JavaScript: in that case, TypeScript will likely face the same fate as CoffeeScript.

But right now, in 2018, this concern is a rather lame excuse for avoiding TypeScript. Your product will probably die much sooner than TypeScript. As for all the syntactic differences and extras that are turning TypeScript into a separate language so distant from JavaScript, you are free to ignore any of them if you don't like them. You can simply stay within the subset of features you feel comfortable with. If your thing is TypeScript 1.0 from back in the day when it was JavaScript with a little typing sugar, you can keep using it in your code as if it were version 1.0. And you'd automatically enjoy all the power of type inference provided in the latest versions, as well as carefully written type definitions for popular libraries, even if their syntax looks intimidating.

Let's sum it all up:
- To make our code better and our development process more productive, we use all kinds of tools like state-of-the-art text editors and IDEs, debuggers, automated testing frameworks, Continuous Integration, and so on. TypeScript is just another tool, and it performs static code analysis based on the information about data types.
- TypeScript tries to infer the type information on its own but the programmer still has to describe most of it using a particular syntax, and this task is the most labor-intensive.
- To avoid disappointment when dealing with types, you should take care not to overexert yourself and get a good idea of how thorough your type annotation really needs to be. 20% of effort provides 80% of the result, and your code doesn't have to be perfectly type-safe or verifiable. If you are really into hardcore typing and formal verification, what you need isn't TypeScript but something like Haskell, PureScript, or Elm.
- Don't shy away from using the Any type: it can save you a lot of time and allow you to focus on those 20% of effort without overdoing it.
- We're talking about static analysis, not dynamic, so there is no point in expecting TypeScript to do something it wasn't designed for
- TypeScript currently beats its competitors in popularity and availability of typings, articles, and answers at Stack Overflow. This is what makes it the most effective tool for type-based static analysis of JavaScript code in terms of costs and benefits.   

Code in TypeScript and prosper!
