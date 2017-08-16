import React, {Component,} from 'react';
import TypeConfig, {TypeForm, TypeView} from './Type';
import {Upload, Button, Icon, Row, Col} from 'antd';

@TypeForm
export class ImageTypeForm extends Component {

  handleChange = (a, b, c) => {
    console.log(a, b, c)
  }

  render() {
    const {value, format, imageStyle} = this.props;
    return <div>
      <Upload
        onChange={this.handleChange}
        listType="picture"
        action="//jsonplaceholder.typicode.com/posts/"
        defaultFileList={value}>
        <Button>
          <Icon type="upload"/> Upload
        </Button>
      </Upload>
    </div>
  }
}
@TypeView
export class ImageTypeView extends Component {

  render() {
    const {value} = this.props;
    return <Upload
      listType="picture-card"
      showUploadList={{
        showRemoveIcon: false,
      }}
      disabled={true}
      defaultFileList={value}>
    </Upload>
  }
}
const ImageTypeConfig = {
  ...TypeConfig,
  type: 'ImageType',
}
export default ImageTypeConfig;