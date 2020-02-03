# Crypto Graph

Real-Time Crypto Analysis built with React and NodeJS

This is a demonstration of JavaScript mastery in a full-stack environment, as well as real-time data consumption and manipulation.

**In order to log-in you'll need to use the provided dummy logins under "Dummy Logins" below**

[Deployment](https://happy-archimedes-9b9973.netlify.com) -- Please view it at 1920x1080, it's not made for anything lower at the moment.

The deployment is currently in development state, so it will take you directly to the dashboard. To see the login features and landing page, you'll have to logout. I'll keep this updated for any future changes to this portion of the functionality.

Backend will now be part of the MVP - it will generate random numbers that are stored in the schema that will be pushed to the front-end as part of a makeshift API. This will allow the simulation of real-time data flow without having a real-time data flow to attach to.

Backend will be it's own separate repository to allow for front-end deployments - this will be added when the back is properly split from the front for the sake of deployment. For now both will live in the same repository under secondary folders.

**Useful Comands for development:**

- `npm start` - starts the local react server
- `npm run scss` - starts the local scss compiler

All styling is handled through `./src/styles/`, scss is compiled from the `scss` folder into the `css` folder.

**Styling Breakdown:**

All styling is done by hand, with the exception of the charts - which use Apexcharts.

- `Global` - Contains all the global styling, typically used to reset anchor tags and handle the font-family.
- `Mixins` - Colors, Images, and other styling bits that are used consistently.
- `Misc` - Specific classNames that are used around the page to perform small tasks.
- `Light Theme` - All the styling used in the light theme, it is used to overwrite the base styling where needed.
- `Components` - All components that are used in the page, all components have a comment above to identify them.
- `Shared Components` - Components that are shared and used multiple times - modals, buttons, navigation, etc.
- `Pchart` - Chart overrides, given the chart is the only imported styling on the page.

!! [ApexCharts Documentation](https://apexcharts.com/docs/installation/) !!

## The Board

| **Front End**                                                        | Started | Merged | Blocked |  Completed  |
| -------------------------------------------------------------------- | :-----: | :----: | :-----: | :---------: |
| Front-End needs to be built and designed (wireframe)                 |   Yes   |  Yes   |         | `Completed` |
| Cleanup SCSS files, reused wrappers should be one class name         |   Yes   |  Yes   |         | `Completed` |
| Dark and Light Theme transition                                      |   Yes   |  Yes   |         | `Completed` |
| Users can login                                                      |   Yes   |  Yes   |         | `Completed` |
| Login requires password                                              |   Yes   |  Yes   |         | `Completed` |
| Error when logging in with the wrong username / password (Dynamic)   |   Yes   |  Yes   |         | `Completed` |
| Login state should persist across reloads (No Automatic Logout)      |   Yes   |   No   | Blocked |             |
| "Remember me" button for option login persist                        |   No    |   No   | Blocked |             |
| Dashboard routing should be different from the landing page          |   Yes   |   No   | Blocked |             |
| Finish Account Page                                                  |   Yes   |  Yes   |         | `Completed` |
| Finish Settings Page                                                 |   No    |   No   | Blocked |             |
| Finish Graphs Page                                                   |   Yes   |   No   |         |             |
| Find use for News Feed                                               |   No    |   No   |         |             |
| Polish Account Page                                                  |   No    |   No   | Blocked |             |
| Polish Settings Page                                                 |   No    |   No   | Blocked |             |
| Polish Graphs Page                                                   |   No    |   No   | Blocked |             |
| Front-End needs to be polished                                       |   No    |   No   | Blocked |             |
| Graphs should take-in data via API call (MVP)                        |   No    |   No   | Blocked |             |
| Graphs should take-in data via websocket (stretch)                   |   No    |   No   | Blocked |             |
| All graphs should have the same component, only taking in props      |   No    |   No   |         |             |
| API calls should be handled via a shared action function             |   No    |   No   |         |             |
| Single graphs should pull data through the same function as the main |   No    |   No   |         |             |
| _Add Frontend Tasks_                                                 |   --    |   --   |   --    |     --      |
| --                                                                   |   --    |   --   |   --    |     --      |

---

| **Back End**                                                             | Started | Merged | Blocked | Completed |
| ------------------------------------------------------------------------ | :-----: | :----: | :-----: | :-------: |
| Back-end server should use NodeJS                                        |   No    |   No   |         |           |
| Back-end server should use GraphQL                                       |   No    |   No   |         |           |
| Back-end server should contain a RNG for the crytpo data                 |   No    |   No   |         |           |
| A single graph should be visible on a set endpoint (per currency)        |   No    |   No   |         |           |
| All data should be held in the back-end                                  |   No    |   No   |         |           |
| API can properly return data                                             |   No    |   No   |         |           |
| User cookies are stored and acknolwedged by the login system (persist)   |   No    |   No   |         |           |
| Data should come in blocks from each endpoint based on what is requested |   No    |   No   |         |           |
| New crypto data should be created, but should not overwrite old data     |   No    |   No   |         |           |
| _Add Backend Tasks_                                                      |   --    |   --   |   --    |    --     |
| --                                                                       |   --    |   --   |   --    |    --     |

`Blocked` = Blocked by a future dated feature or task.

`Completed` = Feature complete or ticket requirements are filled and tested.

### Dummy Logins

| Username | Password | Name  |   Coin   | Theme |
| :------: | :------: | :---: | :------: | :---: |
|   kjol   |   pass   | Kevin | Bitcoin  | Dark  |
|  jcoop   | notpass  | Jared | Dogecoin | Light |

**Note that themes are not currently working with different accounts**
**This feature is future dated, it's a work-in-progress**

### How to use it

`npm run scss` - starts the scss watcher, compiles everything from scss into css.

`yarn start` - starts the react local server

Currently there is no working back-end, I will update the readme when it's properly functional.

### Future Dated

Move all SCSS from `styles.scss` into separate files, re-import into the main for clean style management.

Login persistence will require a contained backend, currently the backend doesn't exist and is being run through a singular json file, so in order to properly persist login through cookies we'll need to create a backend that works. This is future dated until I create a backend.

### Known Bugs

- Logging out via anywhere but the homescreen does not reroute the user to the landing page, it will reroute once you hit any link or reload the page.
- Theme does not persist when logging into secondary accounts.
- Props are not passed to account page on reload?
- Create Account functions exactly like the login equivalent.

### Logic Breakdown

Since this is going to be a happy place for me while I work on this, I'm going to store notes here.

The front-end will pull chart-level data every (x) seconds, updating the graph and allowing users to see their prefered currency on the main dashboard, defaulting to Bitcoin if not already set.

The back-end will randomly generate crypto data every (x) seconds, adding the new number to an array of data. This array of data will be acquired by the front-end and pruned down into the last (x) numbers, which will be used to show current cypto information.

**MVP - Minimum Viable Product**

- Users will be able to see real-time crypto data.
- Users will be able to select and view full-screen graphs of single crypto currencies.
- All information fed to the front-end will be in real-time.

**Stretch Goal**

- Users will be able to search for different crypto currencies, using a back-end Restful endpoint that will attach to routes on the website that give access to full-screen graphs of the single crypto currency.
- Users will be able to watch multiple currencies at once, using up to a 2x2 block of graphs.
- A full front-end and back-end testing suite will be in place to check the build requirements.
- A toggle for dark and light theme!
