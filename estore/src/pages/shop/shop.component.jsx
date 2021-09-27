import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { fecthCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionsFetching } from '../../redux/shop/shop.selectors';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import withSpinner from '../../components/with-spinner/with-spinner.component.jsx';

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fecthCollectionsStartAsync } = this.props;
    fecthCollectionsStartAsync();
  }

  render() {
    const { match, isCollectionsFetching } = this.props;

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionsFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionsPageWithSpinner
              isLoading={isCollectionsFetching}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionsFetching: selectIsCollectionsFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fecthCollectionsStartAsync: () => dispatch(fecthCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
