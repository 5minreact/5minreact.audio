---
title: "#18 - Prettier"
date: "2017-09-16"
---

<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/342594364&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

Quick overview of Prettier - an opinionated code formatter (ES2017, JSX, Flow, TypeScript, CSS, ...) and my experience of integration Prettier with Idea (PhpStorm/WebStorm).

https://prettier.io/

<!-- end -->
**Transcript**

I've finally had the opportunity to test Prettier, a JavaScript code formatter that's gaining more and more traction and turning into a de-facto standard.

Prettier is a console utility written in JavaScript that beautifies JavaScript code including ES2017, JSX, Flow, and TypeScript, as well as CSS, LESS, SCSS, JSON, and GraphQL.

Prettier first parses the source code into an abstract syntax tree and then reassembles it as well-formatted text, keeping intact some of the custom formatting you may have done by hand for practical reasons, such as empty lines (no more than one in a row) or multiline object descriptions.

However, beauty is in the eyes of the beholder. The main advantage and benefit of automatic formatting is consistency.

If we stick to the same formatting rules, we'll eventually internalize them and get better and faster at reading code.

One of the key features of Prettier is that it takes the maximum line length into account when reprinting code. For instance, if all the function parameters fit into one line, that's the way they will be formatted. However, if any symbol goes beyond the maximum line length, then each parameter will be printed on a separate line.

James Long started this project at the end of 2016, and since the public release in January 2017 a lot of developers have made their contributions. Commit activity is lively, and Prettier has already been adopted by a few prominent projects such as React, Jest, Yarn, Babel, Zeit, and Webpack.

Prettier can be launched via the console for a particular file or folder. By default it ignores the node_modules folder to avoid formatting any third-party dependency code, which is handy. Files can be rewritten in-place with a --write parameter, so simply running Prettier by itself won't overwrite any of your code.

A plugin called eslint-plugin-prettier allows for useful integration with eslint. Formatting can be conveniently triggered as a pre-commit hook.

A special comment prettier-ignore turns off the formatting for the node it precedes (that is, an actual instruction or expression on the line following the comment, which is represented as a node of the abstract syntactic tree).

The original idea was to provide the developers with a common style guide so that we don't have to bother and reinvent it for ourselves. Prettier later evolved to offer options and parameters that help us tweak the formatting to our liking.

A curious fact: indentation is done with spaces instead of tabs, and single quotes are used in place of the double ones. However, there is an exception: Prettier chooses either single or double quotes in order to minimize escaping. In other words, if a string contains a double-quoted word, the formatted string literal will be enclosed in single quotes to avoid escaping the internal double ones.

Enthusiasts have already integrated Prettier into various editors and IDEs, including Atom, Emacs, Vim, Sublime Text, Visual Studio Code, and Visual Studio IDE.

There is no plugin for the Jetbrains IDEs such as IDEA, WebStorm, PhpStorm, or PyCharm, but a guide is available.

Idea has an External Tools feature that allows to add a Prettier console tool with a --write parameter and a special macro. You can have this external tool at your fingertips by mapping it to a hotkey.

Prettier can be invoked whenever a file is saved via an editor function called "File Watchers".

I use the PhpStorm IDE. Like all IDEA-based IDEs, it is shipped with a built-in "Reformat code" option. Code formatting runs automatically as soon as a brace encloses a code block, or when a code fragment copied from elsewhere is pasted into the editor. Additionally, there is an option to format the code of the modified files before committing them - provided that you commit via the internal IDEA interface. The hotkey for that is Ctrl + Alt + L on Windows and Cmd + Alt + L on macOS.

Built-in formatting is handy as a single hotkey and a single checkbox apply to all the file types in the commit window: both client-side JavaScript or Typescript and server-side PHP.

Formatting for every language in the IDE is configured individually, and templates are available for common coding styles. My PhpStorm, for example, offers three standards for JavaScript: the so-called "JavaScript Standard Style", "Google JavaScript Style Guide", and "Drupal JavaScript Style". What's lacking here is a "Prettier JavaScript style" - it would be great to use it with the built-in formatting functionality to get the same result as with the Prettier external tool. That would be possible if the internal Idea formatting engine had all the settings and checkbox options necessary to mimic the output of Prettier. I've submitted a request about it in the WebStorm issue tracker. However, in order to tweak their formatter, the guys at JetBrains would need some kind of documentation of Prettier styles. There is none at the moment, and the project is in full swing, so it essentially has to be reverse-engineered. I doubt they will ever pick up on my request.

On the other hand, this summer Prettier itself took the initiative of better integration with code editors. In particular, a selected code fragment can now be formatted independently and the cursor position is tracked so that it stays in place after formatting.

Bottom line, I set up my PhpStorm to format Typescript code in Prettier with a dedicated hotkey. However, if I happen to click the default Cmd+Alt+L out of habit and launch the built-in formatting engine, there won't be any conflict as the internal formatter is a bit more relaxed. It won't be an issue as long Prettier and PhpStorm have no discrepancies in the core formatting setup such as indentation, spacing, and bracket placement.

That turned out to be pretty handy and cutting-edge!

Format your code with Prettier and prosper!
