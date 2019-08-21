# Crypto_Graph

Real-Time Crypto Analysis built with React and NodeJS

This is a demonstration of JavaScript mastery in a full-stack environment, as well as real-time data consumption and manipulation.

#### Logic Breakdown

Since this is going to be a happy place for me while I work on this, I'm going to store notes here.

The server is going to hit the API, pulling down all the relevant information, then route it directly through a websocket that can be hit by an infinite number of users - thus keeping the number of hits I'm doing to the main API at a minimum, while still keeping real-time data flowing for all my users.

The front-end will connect to that websocket that's constantly publishing data and display it using Plotly onto a single dashboard. Users will be able to see Bitcoin as the #1 currency, followed by two popular currencies below it. The left side will contain a fold-out navigation menu, while folded in it will have simple material icons, expanded it will show the text.

**MVP - Minimum Viable Product**

- Users will be able to see real-time crypto data.
- Users will be able to select and view full-screen graphs of single crypto currencies.
- All information fed to the front-end will be in real-time.

**Stretch Goal**

- Users will be able to search for different crypto currencies, using a back-end Restful endpoint that will attach to routes on the website that give access to full-screen graphs of the single crypto currency.
- Users will be able to watch multiple currencies at once, using up to a 2x2 block of graphs.
- A full front-end and back-end testing suite will be in place to check the build requirements.
- A toggle for dark and light theme!
