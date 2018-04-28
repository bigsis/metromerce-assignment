import React, { Component } from 'react';
import { Button, Label, Input } from 'reactstrap';
import './step1.scss';

export default class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };

    this.onJsonInputChange = this.onJsonInputChange.bind(this);
  }

  onJsonInputChange(event) {
    const jsonInput = event.currentTarget.value;
    this.setState({ input: jsonInput });
  }

  render() {
    return (
      <div className="step1-content">
        <div className="formatter">
          <section className="input">
            <Label for="exampleText">Input</Label>
            <Input
              type="textarea"
              id="exampleText"
              value={this.state.input}
              onChange={this.onJsonInputChange}
            />
          </section>
          <section className="output">
            <Label for="exampleText">Output</Label>
            <Input type="textarea" id="exampleText" disabled />
          </section>
        </div>
        <Button>Submit</Button>
      </div>
    );
  }
}
