var Counter = React.createClass({
	
	getInitialState: function(){
		return {
			counter: 0
		};
		
	},
	
	increment: function(){
		this.setState({
			counter: this.state.counter + 1
		});
	},
	
	decrement: function(){
		this.setState({
			counter: this.state.counter - 1
		});
	},
	
	getDefaultProps: function(){
		console.log('default props ' + 'reoccuring contents');
	},
	
	componentWillMount: function() {
		console.log('state and props based operations, ' + 'before render');
	},
	
	componentDidMount: function() {
		console.log('DOM properly loaded, next operations can occure');
	},
	
	componentWillReceiveProps: function(){
		console.log('New props appear, all sorts of operations can be conducted');
	},
	
	shouldComponentUpdate: function(){
		console.log('Can be modified to false, if app should not make changes concudted by states or props changes');
		return true;
	},
	
	componentWillUpdate: function(){
		console.log('Similar to componentWIllMount, can be operated via DOM');
	},
	
	componentWillUnmount: function(){
		console.log('EventListenery can be canceled');
	},
	
	render: function(){
		return (
				React.createElement('div', {className: 'counter'},
					React.createElement('h2', {}, 'Counter'),
					React.createElement('span', {}, 'Counter: ' + this.state.counter),
						React.createElement('div', {}, 
							React.createElement('button', {
								className: 'incr_button', 
								onClick: this.increment},'Increment Counter'),
							
							React.createElement('button', {
								onClick: this.decrement}, 'Decrement Counter')
					)
				)
		);
	}
});

var element = React.createElement('div', {className: 'counters'},
		React.createElement('h1', {}, 'Template of counters'),
		React.createElement(Counter),
		React.createElement(Counter)
	);

ReactDOM.render(element, document.getElementById('app'));