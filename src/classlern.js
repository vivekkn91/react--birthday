import React, { Component } from "react";
import { firstBook } from "./datamain";
export default class Classlern extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstBook,
      newarray: [],
      textField: "",
    };
  }

  textField = (e) => {
    this.setState({ textField: e.target.value });
  };
  addbutton = (e) => {
    let arrayvariable = this.state.newarray;
    let textvalue = this.state.textField;
    arrayvariable.push(textvalue);
    this.setState({ arrayvariable: textvalue });
  };

  deletefuction = (e) => {
    let arrayvariable = this.state.newarray;
    arrayvariable.splice(e, 1);
    this.setState({ newarray: arrayvariable });
  };
  render() {
    return (
      <div>
        <input type="text" onChange={this.textField} />{" "}
        <button onClick={this.addbutton}>add</button>
        {this.state.newarray.map((itm, k) => {
          return (
            <>
              <h4>{itm}</h4>{" "}
              <button
                onClick={() => {
                  this.deletefuction(k);
                }}
              >
                delete
              </button>
            </>
          );
        })}
      </div>
    );
  }
}
