import React from "react";
import PicturePlaceholder from '../picture-placeholder/picture-placeholder.component'

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
    const {isUploadProfile} = this.props;
    
    return (
      <div>
        {isUploadProfile ? (
          <PicturePlaceholder file={this.state.file} isProfilePlaceholder />
        ) : (
          <PicturePlaceholder file={this.state.file} isPlaceholder />
        )}
        <br />
        <input type="file" onChange={this.handleChange} />
      </div>
    );
  }
}
export default Upload;
