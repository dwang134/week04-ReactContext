# Tasks:

## Hints

Please take a look at /data/WorldCupDataHelper.ts and /context/WorldCupContext.tsx prior to implementation.

Note: Please feel free to make changes to any file expect the WorldCupDataHelper.ts

## Games

- Games sould be shown directly under the root route (done)
- Display all the world cup games from the contextApi (done)
- Can remove certain world cup game from the contextApi (done)
- form is not adding to the allGames state, probably something wrong with the state

### Bonus:

- Can add new world cup game and store it in the contextApi

## Country

- Display the country name as title
- Add the button to go back to games page
- All games belongs to the country should be shown under the route `/country/{countryName}`
- Filter country function doesn’t consider for case sensitive

## Group

- Display the group name as title
- Add the button to go back to games page
- All games belongs to each country hould be shown under the route `/group/{groupName}`
- Group is made of special type Group A, with a space in the middle 
- Need to make an object with corresponding group X

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
