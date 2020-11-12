# Springbox Exercise

You tasked me with working for four hours on the compelling pieces to this page and to focus my attention on these interactions.

I presumed you want to learn from this:

1. The state of my general coding style, and skills
2. How I use my time when tasked with building a site from a comp
3. What I identify as needing to be addressed in the first four hours of a new site
4. How I address and build complex animated features.

I found the large number of scroll-based animations compelled me to braodly tackle them all to see what, if I was taking this site to fruition, would require further investment. Ultimately they were all very straightforward and would just need a final polish with some detailed comps and assets.

## Overview

To that end, I approached this as if I had just gotten this comp from a designer, and I needed to build a quick working prototype. Something that quickly touched on as many of the macro features and worked out simply which interaction and animations might pose immediate problems while laying a groundwork that could be be iterated upon and polished.

My goal was to knock out the bones of the site and high-level animation work and leave the more straightforward issues of dropping in assets, aligning the styles to a style guide, etc. either to my future self, or another dev who'd be coming in behind me. The idea was to quickly get a grasp on everything this site would need to do so that if there were any interactions that would pose big problems, I could raise a flag. Furthermore, operating in this iterative manner allows us to get the site into our hands sooner to sort out UX issues.

I should also note I only built this to work at the breakpoint that the comps showed. I'd approach many of these animations and components differently given comps for different breakpoints.

While y'all gave me a bunch of PNGs, they weren't exactly what I'd need to create the hero animation, which was the animation which most immediately caught my eye. It wasn't hard to figure out which site this was, and I ripped the SVGs off of that one so that I could more closely create the animation as described in the motion comp. They're not perfect, as I see the animation changed between the comp and production, but I laid the groundwork for the original interaction. Also worth mentioning I saw the backgrounds got baked into the SVGs in the production version, but I'd built my version to support the background crossfade from the video.

Overall, I've created a broad interactive wireframe that address most of the immediate interactions and animations I'd want to make sure work if I was starting this myself. I mean to demonstrate my thinking when beginning a project, and demonstrate my animation chops without investing too much time in a level of polish I couldn't acheive without more support from designers and style guides.

## Process

Here was my thought process creating this.

1. I used `create-react-app` to quickly put together a React app.
2. I installed my usual arsenal of libraries, `react-router-dom`, `framer-motion`, `styled-components`, and seeing there would be a large amount of scroll-based animations, `react-scrollmagic`.
3. I carry over a rough bootstrap of a `styled-components` Theme from project to project, so I got that up and running.
4. Next, I created a series of basic components so that I could have a header, footer, and main page layout. In each step, I tried to comment out where components would go, or just leave words in a div so I'd have placeholders to follow up with.
5. The Hero was a obvious place to start, as it involved serveral animated components that needed to animate with the user's scroll, as well as being a sticky element. These techniques would be used later on in the page as well for the "platform for potential" section so it was a great two-for-one feature to focus on.
6. My initial instinct was to toss the ScrollMagic parts into a wrapper component that could provide context for the animations down the chain, but I quickly ran into an issue with multiple instances of this component using the same ScrollMagic controller (the child the controller looks at is the context provider in this case, I'll need to look at doing that differently) and abandoned my component to fix later and not go down a rabbit hole.
7. I created the hero experience with two stacked `100vh` stages and a sticky element on the right that stays centered in the viewport so long as the parent is as well. I fed ScrollMagic's progress prop through to the different animation layers, using `framer-motions`'s `transform` to map the progress to the values I wanted to animate over.
8. I intially used boxes to represent the layers, but ended up stealing the SVGs from the live site. They're certainly not a perfect fit in my version and would need some positioning love among other things, but they demonstrate the animation we want to achieve.
9. Next, I repeated the process with ScrollMagic for the partner section, feeding the scroll value into the left offset of the partners list to mimic the effect in the motion comp.
10. Then I did the small progress bar detail at the bottom there. Used placeholder details and colors, as I'd normally have a comp and style guide to get details from.
11. Then I moved onto the solutions section. I noticed that the graphics in each section overlap so I wanted to be sure I captured that the image portion of these need to have negative margins to facilitate that effect, as well as each being on a different `z-index`.
12. I wired up the scroll-in animation with manual offsets to stagger them, though I'd like to see about doing that more cleanly.
13. I got a little distracted with the CTAs here, as I had an idea of a hover effect. The half-rectangle seems like it ought to zoom into place to cover the whole area, so I set up a 200% high background gradient and animated the background position on hover. I also made sure that works on focus for keyboard users.
14. Finally, I was closing in on four hours and filled the rest of the page with large `100vh` placeholder sections, primarily so that the solutions section could get high enough in the viewport to see the end of that effect.

Given another four hours, I think I could have gotten the rest of the elements on this page to a similar level of wireframe fidelity.

## Next Steps / Alternate Reality

### Style Guide

In the reality where I'm making this as an employee of Springbox, I would have begun this by filling out `Theme.js` with all the values from a style guide. As it stands, these are values from the last project I used this bootstrap on, and are close enough for a wireframe. This would have instantly brought this wireframe into a higher level of fidelty and ensured that everything coded could be used moving forward. I imagine that intial stage of setting up the style guide would have taken 2hrs.

### Component Library

Similarly, had I had a broader overview of the full scope of the site, this effort could have been a focused motion prototype that could be developed parallel with high fidelity components. Once I worked out the macro animation requirements for each page, a refactoring phase could follow to place in completed components.

This is an especially good time to review usability and accessiblity, a last check before the paint really goes on.

### Polish

Once the site was animating correctly with components based on the style guide, I could continue with a pass ensuring that all the assembled parts correctly matched the comps. This would include matching sizings, spacing, and a more detailed look at fine details of the animations, as well as prepping assets. Unless final copy was provided at the beginning, this is usually when I'd expect to flow in our final copy.

### A note on assets

I noticed many of these animations were done directly to inline SVGs on the live site, rather than to containers using SVGs as backgrounds. While my method works well for a motion comp, in an ideal world the SVGs would be integrated from the get-go.

### Estimate

Just for fun, based on what it took me to get this page to this place, if I was given a full arsenal of style guides, assets, and copy, I imagine I could have this page completed inside two days.

## Hosting

Finally, for the bonus points promised, I will be deploying this on Netlify and making my Github repo for this project public for your review. I've used Netlify several times recently, and it's just the right host for a small project like this.
