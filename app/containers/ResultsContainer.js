var React = require('react'),
	PropTypes = React.PropTypes,
	Results = require('../components/Results'),
	githubHelpers = require('../utils/githubHelpers');

ResultsContainer = React.createClass({
	getInitialState: function() {
		return {
			isLoading: true,
			scores: []
		}
	},
	componentDidMount: function () {
	    githubHelpers.battle(this.props.location.state.playersInfo)
	      .then(function (scores) {
	        this.setState({
	          scores: scores,
	          isLoading: false
	        })
	      }.bind(this))
  },
	render: function(){
		console.log(this.state.scores);
		return(
			<Results 
			playersInfo={this.props.location.state.playersInfo}
			isLoading={this.state.isLoading} 
			scores={this.state.scores}/>
		)
	}
	
});

module.exports = ResultsContainer;