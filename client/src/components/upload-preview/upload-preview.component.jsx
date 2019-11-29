import React from "react";
import PicturePlaceholder from "../picture-placeholder/picture-placeholder.component";

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
    //send to parent
    const toParent = event.target.files[0];
    this.props.onUpload(toParent);
  }
  render() {
    const { isUploadProfile, avatar } = this.props;

    return (
      <div>
        {isUploadProfile ? (
          avatar && this.state.file === null ? (
            <PicturePlaceholder file={avatar} isProfilePlaceholder />
          ) : (
            <PicturePlaceholder file={this.state.file} isProfilePlaceholder />
          )
        ) : (
          <PicturePlaceholder file={this.state.file} isPlaceholder />
        )}
        <br />
        {isUploadProfile ? (
          <input type="file" onChange={this.handleChange} />
        ) : (
          <input type="file" onChange={this.handleChange} required />
        )}
      </div>
    );
  }
}
export default Upload;
