var React = require('react'),
	ReactRouter = require('react-router'),
	Router = ReactRouter.Router,
	Route = ReactRouter.Route,
	hashHistory = ReactRouter.hashHistory,
	IndexRoute = ReactRouter.IndexRoute,
	Main = require('../components/Main'),
	Home = require("../components/Home"),
	PromptContainer = require("../containers/PromptContainer"),
	ConfirmBattleContainer = require("../containers/ConfirmBattleContainer"),
	ResultsContainer = require("../containers/ResultsContainer");

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main} >
      <IndexRoute component={Home} />
      <Route path='playerOne' header='Player One' component={PromptContainer} />
      <Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
      <Route path='battle' component={ConfirmBattleContainer} />
      <Route path='results' component={ResultsContainer}/>
    </Route>
  </Router>
);

module.exports = routes;