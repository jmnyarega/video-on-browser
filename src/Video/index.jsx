import React from "react";
import Video from "./video";
import "./index.css";

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

  onChange = (e) => {
    e.preventDefault();
    const xfiles = Array.from(e.target.files)
    let files = [];
    for (let file of xfiles) {
      files = files.concat({
        name: file.name,
        url: `https://127.0.0.1:8080/${file.name}`,
        size: file.size,
        type: file.type,
      });
    }
    this.setState({ files, folder: e.target.value });
    this.setState({
      folder: e.target.value,
    });
  };
  playVideo = (current, name) => this.setState({ current, name });

  render() {
    return (
      <div className="container">
        {!this.state.files.length ? (
          <div className="upload-files">
            <div className="upload-btn-wrapper">
              <button className="btn">Upload a file</button>
              <input
                type="file"
                name="myfile"
                multiple
                onChange={this.onChange}
              />
            </div>
          </div>
        ) : (
          <Video
            files={this.state.files}
            current={this.state.current}
            width="600px"
            height="400px"
            playVideo={this.playVideo}
            poster="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            aspectRatio="16:9"
          />
        )}
      </div>
    );
  }
}

export default App;
