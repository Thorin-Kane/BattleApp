var React = require('react');
var PropTypes = React.PropTypes,
	ConfirmBattle = require('../components/ConfirmBattle'),
	githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		return {
			isLoading: true,
			playersInfo: []
		}
	},
	componentDidMount: function() {
		var query = this.props.location.query;

		githubHelpers.getPlayersInfo([query.playerOne, query.PlayerTwo])
			.then(function (players){
				console.log('PLAYERS', players);
				this.setState({
					isLoading: false,
					playersInfo: [players[0], players[1]]
				})
			}.bind(this))
	},
	handleInitiateBattle: function() {
		this.context.router.push({
			pathname: '/results',
			state: {
				playersInfo: this.state.playersInfo
			}
		})
	},
	render: function() {
		return (
			<ConfirmBattle isLoading={this.state.isLoading}
			 onInitiateBattle={this.handleInitiateBattle}
			 playersInfo={this.state.playersInfo}/>
		)
	}
});

module.exports = ConfirmBattleContainer;