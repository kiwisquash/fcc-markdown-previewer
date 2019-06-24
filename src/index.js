import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import './index.css';


const startingText = `

# h1 header

## Make headers using "#"

The header level equals the number of "#"s you use.

## Code blocks

Use \` for codeblocks.

Here is inline code: \`<App />\`

\`\`\`
// this is multi-line code:

def factorial(num):
  prod = 1
  i = 2
  while i <= num:
    prod *= i
    i+=1
  return prod

\`\`\`

## Formatting

- Italic like this *italic* or _italic_
- Bold like this **bold**
- Cross out with ~cross out~

> This is a blockquote, btw.

## Links

You can do [links](https://www.freecodecamp.com).

## Image

![React Logo w/ Text](https://goo.gl/Umyytc)

`

marked.setOptions({ 
	breaks: true
});

const myRenderer = new marked.Renderer();

myRenderer.link = function(href, title, text) {
	return `<a target='_blank' href='${href}' title='${title}'>${text}</a>`;
}

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
		<div id="preview" dangerouslySetInnerHTML={{__html: marked(props.value, {renderer: myRenderer})}}/>
	)
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: startingText
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

