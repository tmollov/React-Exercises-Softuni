import React, { Component } from "react";
import PostsList from '../Post/PostsList'

export default class CatalogContainer extends Component {
  render() {
    return (
      <section id="viewCatalog">
        <PostsList />
      </section>
    );
  }
}
