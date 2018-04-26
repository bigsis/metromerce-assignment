import React, { Component } from 'react';
import { Button, Label, Input } from 'reactstrap';
import './step1.scss';

export default class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="step1-content">
        <div className="formatter">
          <section className="input">
            <Label for="exampleText">Input</Label>
            <Input type="textarea" id="exampleText" />
          </section>
          <section className="output">
            <Label for="exampleText">Output</Label>
            <Input type="textarea" id="exampleText" />
          </section>
        </div>
        <Button>Submit</Button>
      </div>
    );
  }
}
