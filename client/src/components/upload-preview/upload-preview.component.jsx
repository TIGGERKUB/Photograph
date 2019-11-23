import React from "react";

import "./upload-preview.styles.scss";

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  }
  render() {
    return (
      <div>
        <div className="upload-container">
          <div
            style={{ backgroundImage: `url(${this.state.file})` }}
            className="upload-preview"
          />
        </div>
        <br />
        <input type="file" onChange={this.handleChange} />
      </div>
    );
  }
}
export default Upload;
