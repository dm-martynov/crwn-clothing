import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import {
  selectCollectionFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selectors";
import CollectionPage from "../collection/collection.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isCollectionFetching, isCollectionLoaded } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => {
            return (
              <CollectionsOverviewWithSpinner
                isLoading={isCollectionFetching}
                {...props}
              />
            );
          }}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => {
            return (
              <CollectionsPageWithSpinner
                isLoading={!isCollectionLoaded}
                {...props}
              />
            );
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectCollectionFetching,
  isCollectionLoaded: selectIsCollectionsLoaded,
});

export default connect(mapStateToProps, {
  fetchCollectionsStartAsync,
})(ShopPage);
