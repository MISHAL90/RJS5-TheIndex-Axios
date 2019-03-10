import React, { Component } from "react";

class BookRow extends Component {
  render() {
    const book = this.props.book;
    const author = this.props.author;
    const name = this.props.name;
    return (
      <tr>
        <td>{book.title}</td>
        <td>
          {author.first_name} {author.last_name}
        </td>
        <td>
          <button className="btn" style={{ backgroundColor: book.color }} />
        </td>
      </tr>
    );
  }
}

export default BookRow;
