import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      current: "",
      folder: "",
      name: "",
    };
    this.fileInput = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let files = [];
    for (let file of this.fileInput.current.files) {
      files = files.concat({
        name: file.name,
        url: `http://127.0.0.1:8080/${this.state.folder}/${file.name}`,
        size: file.size,
        type: file.type,
      });
    }
    this.setState({files, folder: e.target.value});
  }

  onChange = e => {
    e.preventDefault();
    this.setState({
      folder: e.target.value,
    })
  }

  playVideo = (current, name)  => {
    this.setState({ current, name });
  }

  render () {
    return (
      <div className="video-app">
        <fieldset className="upload">
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="folder" id="folder" onChange={this.onChange} />
            <input
              type="file"
              ref={this.fileInput}
              multiple
            />
            <button type="submit"> Add </button>
          </form>
        </fieldset>
        <fieldset className="play">
          {this.state.files && this.state.files.map((x, i) => {
            return(
              <div key={x.name}>
                <span> {i} </span>
                <a
                  key={x.name}
                  onClick={() => this.playVideo(x.url, x.name)}
                  href="#">
                  {x.name}
                </a>
              </div>
            )
          })}
        </fieldset>
        <fieldset>
          <legend>{this.state.name}</legend>
          <video src={this.state.current} controls autoPlay  width="500"/>
        </fieldset>
      </div>
    );
  }
}

export default App;
