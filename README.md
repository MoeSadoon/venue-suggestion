

# Premise
A simple web app that allows you to search from a feed of restaurants from an 'api', and return recommendations based on selected users and their preferences.

### Quickstart
* Install dependencies with `npm install` or `yarn install`
* Run tests with `npm test` or `yarn test`
* Start development server with `npm start` or `yarn start`

### Libraries used
* App was bootstrapped using `create-react-app` for convenience
* `react` and `react-dom` libraries were used to developer the interface and leverage hooks for state and lifecycle management
* `jest` as a the test runner and `enzyme` to test component mounting and rendering

### Iterations and suggested improvements
Due to time constraints, the following desired suggestions had not been implemented:
* More aesthetically pleasing and consistent styling - I concede the style of the web app currently leaves a lot to be desired!
* Mocking React hooks in the enzyme testing for deeper mount render tests
* More efficient search/sort algorithms for the the users and venue data - this wasn't strictly adhered to because of time constraints as well as the very small sample size of data which meant any hits on time/memory complexity would be negligible.
* More robust type checking - I'm a big advocate of TypeScript, but decided it would be overkill for this task.



License
----

MIT

