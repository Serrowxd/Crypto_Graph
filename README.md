# Crypto Graph

Real-Time Crypto Analysis built with React and NodeJS

This is a demonstration of JavaScript mastery in a full-stack environment, as well as real-time data consumption and manipulation.

**UPDATE**

Backend will now be part of the MVP - it will generate random numbers that are stored in the schema that will be pushed to the front-end as part of a makeshift API. This will allow the simulation of real-time data flow without having a real-time data flow to attach to.

## The Board

| Task List                                                            | Started | Merged |
| -------------------------------------------------------------------- | :-----: | :----: |
| **!! Front End !!**                                                  |   --    |   --   |
| Front-End needs to be built and designed (wireframe)                 |   Yes   |   No   |
| Front-End needs to be built and designed (polish)                    |   No    |   No   |
| Graphs should take-in data via API call (MVP)                        |   No    |   No   |
| Graphs should take-in data via websocket (stretch)                   |   No    |   No   |
| All graphs should have the same component, only taking in props      |   No    |   No   |
| API calls should be handled via a shared action function             |   No    |   No   |
| Single graphs should pull data through the same function as the main |   No    |   No   |
| **!! Back-End !!**                                                   |   --    |   --   |
| Back-end server should contain a RNG based API and schema            |   No    |   No   |
| Back-end server should use GraphQL                                   |   No    |   No   |
| A single graph should be visible on a dynamic route                  |   No    |   No   |
| _Add Backend Tasks_                                                  |   No    |   No   |
| --                                                                   |   --    |   --   |

### How to use it

`npm run scss` - starts the scss watcher, compiles everything from scss into css.

`yarn start` - starts the react local server

Currently there is no working back-end, I will update the readme when it's properly functional.

### Future Dated

Move all SCSS from `styles.scss` into separate files, re-import into the main for clean style management.

### Logic Breakdown

Since this is going to be a happy place for me while I work on this, I'm going to store notes here.

The server is going to hit the API, pulling down all the relevant information, then route it directly through a websocket that can be hit by an infinite number of users - thus keeping the number of hits I'm doing to the main API at a minimum, while still keeping real-time data flowing for all my users.

The front-end will connect to that websocket that's constantly publishing data and display it using a graphing service onto a single dashboard. Users will be able to see their prefered as the #1 currency, or if it's not set they'll see Bitcoin, followed by two popular currencies below it. The left side will contain a fold-out Navigation menu, while folded in it will have simple material icons, expanded it will show the text.

**MVP - Minimum Viable Product**

- Users will be able to see real-time crypto data.
- Users will be able to select and view full-screen graphs of single crypto currencies.
- All information fed to the front-end will be in real-time.

**Stretch Goal**

- Users will be able to search for different crypto currencies, using a back-end Restful endpoint that will attach to routes on the website that give access to full-screen graphs of the single crypto currency.
- Users will be able to watch multiple currencies at once, using up to a 2x2 block of graphs.
- A full front-end and back-end testing suite will be in place to check the build requirements.
- A toggle for dark and light theme!
