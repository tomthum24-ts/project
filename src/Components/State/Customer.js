import React, { Component } from "react";

export class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: props.info,
    };
  }

  ChangeInfo = () => {
    this.setState({
      info: {
        name: "Nguyễn Văn A",
        email: "NguyenVanA@gmail.com",
        comment:
          [
            {
              tilte: "title mới nè",
              content: "Content mới nè",
            },
          ] ?? "null" ,
      },
    });
  };
  ResetInfo = () => {
    this.setState({
      info: this.props.info,
    });
  };
  render() {
    const { name, email, comment } = this.state.info;
    const data = this.state.info.comment.map((item, i) => (
      <li key={i}>
        {item.tilte} {item.content}
      </li>
    ));
    return (
      <div>
        <h1>Tên: {name}</h1>
        <h1>Email: {email}</h1>
        <h1>Comment: {data}</h1>
        <button type={"button"} onClick={this.ChangeInfo}>
          ChangeInfo
        </button>
        <button type={"button"} onClick={this.ResetInfo}>
          ResetInfo
        </button>
      </div>
    );
  }
}

export default Customer;
