import React, {Component} from 'react';
import {Row, Form, Col, Layout} from 'antd';
import {config} from "configs/TestConfig"
import * as Types from "components/types";

const TypeComponent = (props) => {
  let type = `${props.type}View`;
  if (props.action === "form")
    type = props.type + "Form";
  const Comp = Types[type];
  if (Comp)
    return <Comp {...props}/>
  return <div>Type {type} error. Can't find component</div>
}

export default class Test extends Component {
  state = {
    test: '',
    action: "view",
  }

  render() {
    const {action} = this.state;
    return (<Form>
        {config.map((row, rowID) => {
          return <Row key={`row-${rowID}`} gutter={16}>
            {row.map((col, colID) => {
              return <Col span={24} style={col.style}
                          key={`row-${rowID}-col-${colID}`}>
                <Form.Item label={col.label}>
                  <TypeComponent {...col} action={action}/>
                </Form.Item>
              </Col>
            })}
          </Row>
        })}
      </Form>
    );
  }
}