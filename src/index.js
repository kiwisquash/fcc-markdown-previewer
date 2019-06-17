import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import './index.css';


class Editor extends React.Component {

	handleChange(e) {
	}

	render() {
		return (
			<textarea id="editor" onChange={this.props.onChange} value={this.props.value} />
		);
	}
}

function Preview(props) {

	return (
		<div id="preview" dangerouslySetInnerHTML={{__html: marked(props.value)}}/>
	)
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "this is a test",
		}
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(event) {
		this.setState({
			text: event.target.value, 
		})			
	}

	render() {


		return (
			<div id="app">
				<Editor value={this.state.text} onChange={this.handleChange}/>
				<Preview value={this.state.text}/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));

