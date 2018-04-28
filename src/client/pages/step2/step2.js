import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink, Table } from 'reactstrap';
import './step2.scss';

export default class Step2 extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 1 };

    this.onSelectPage = this.onSelectPage.bind(this);
  }

  componentDidMount() {
    fetch('https://api.github.com/repositories?since=1')
      .then(res => res.json())
      .then((data) => {
        this.setState({ repos: data });
      });
  }

  onSelectPage(e) {
    this.setState({ page: Number(e.currentTarget.text) });
  }

  paginationBuilder() {
    const pagination = [];
    for (let i = 1; i <= 10; i++) {
      pagination.push(<PaginationItem active={i === this.state.page} key={i}>
          <PaginationLink onClick={this.onSelectPage}>{i}</PaginationLink>
        </PaginationItem>);
    }

    return <Pagination>{pagination}</Pagination>;
  }

  tableBuilder() {
    const row = [];
    const end = this.state.page * 10;
    const start = end - 9;
    for (let i = start; i <= end; i++) {
      row.push(<tr className="repo-row" active={i === this.state.page} key={i}>
          <th scope="row">{i}</th>
          <td>{this.state.repos[i].id}</td>
          <td>
            <img src={this.state.repos[i].owner.avatar_url} />
          </td>
          <td>{this.state.repos[i].owner.login}</td>
          <td>{this.state.repos[i].name}</td>
          <td>{this.state.repos[i].description}</td>
          <td>
            <a href="{this.state.repos[i].url}">{this.state.repos[i].url}</a>
          </td>
        </tr>);
    }
    return row;
  }

  render() {
    return (
      <div className="step2-content">
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Avatar</th>
              <th>User Name</th>
              <th>Repo Name</th>
              <th>Repo description</th>
              <th>Repo Url</th>
            </tr>
          </thead>
          <tbody>
            {this.state.repos ? (
              this.tableBuilder()
            ) : (
              <h1>Loading.. please wait!</h1>
            )}
          </tbody>
        </Table>
        {this.paginationBuilder()}
      </div>
    );
  }
}
