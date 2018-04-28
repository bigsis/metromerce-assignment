import React, { Component } from 'react';
import { Button, Label, Input } from 'reactstrap';
import './step1.scss';

export default class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };

    this.onJsonInputChange = this.onJsonInputChange.bind(this);
    this.onSubmitFormat = this.onSubmitFormat.bind(this);
    this.formatJson = this.formatJson.bind(this);
  }

  onSubmitFormat() {
    this.formatJson();
    this.textAreaResize('outputText');
  }

  onJsonInputChange(event) {
    const jsonInput = event.currentTarget.value;

    this.setState({ input: jsonInput });
    this.textAreaResize('inputText');
  }

  textAreaResize(id) {
    const textarea = document.getElementById(id);
    const textareaRows = textarea.value.split('\n');
    const maxHeight = 100;
    let counter = 0;
    if (textareaRows[0] !== 'undefined' && textareaRows.length < maxHeight) {
      counter = textareaRows.length;
    } else if (textareaRows.length >= maxHeight) counter = maxHeight;
    else counter = 1;
    if (counter < 25) counter = 25;
    textarea.rows = counter;
  }

  formatJson() {
    const formatter = JSON.parse(this.state.input);
    const map = {};
    let node;
    const roots = [];
    const temp = [];
    for (const i in formatter) {
      for (const j in formatter[i]) {
        temp.push(formatter[i][j]);
      }
    }

    for (const i in temp) {
      map[temp[i].id] = i;
      temp[i].children = [];
    }
    for (const i in temp) {
      node = temp[i];
      if (node.parent_id !== '0' && node.parent_id !== null) {
        temp[map[node.parent_id]].children.push(node);
      } else {
        roots.push(node);
      }
    }
    const out = JSON.stringify(roots, undefined, 4);
    this.setState({ output: out });
  }

  render() {
    return (
      <div className="step1-content">
        <div className="formatter">
          <section className="input">
            <Label for="exampleText">Input</Label>
            <Input
              type="textarea"
              id="inputText"
              value={this.state.input}
              rows="25"
              onChange={this.onJsonInputChange}
            />
          </section>
          <section className="output">
            <Label for="exampleText">Output</Label>
            <Input
              type="textarea"
              id="outputText"
              rows="25"
              value={this.state.output}
            />
          </section>
        </div>
        <Button onClick={this.onSubmitFormat}>Submit</Button>
      </div>
    );
  }
}
