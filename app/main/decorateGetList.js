import React, {PureComponent} from 'react';

const NUMBER_ROW = 20;

function decorateGetList(WrappedComponent, getListApi, params = {}) {
  class DecorateGetList extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        loadingFirst: true,
        loadingOlder: false,
        loadingNewer: false,
        page: 1,
        numberPage: 1,
        data: [],
      };

      this.getNewer = this.getNewer.bind(this);
      this.getOlder = this.getOlder.bind(this);
      this.getPages = this.getPages.bind(this);
      this.startGettingList = this.startGettingList.bind(this);
      this.getNewerSuccess = this.getNewerSuccess.bind(this);
      this.getNewerFailure = this.getNewerFailure.bind(this);
      this.getOlderSuccess = this.getOlderSuccess.bind(this);
      this.getOlderFailure = this.getOlderFailure.bind(this);
    }

    componentDidMount() {
      this.getNewer(params);
    }

    getNewer(params = {}) {
      const {page} = this.state;
      Object.assign(params, {page});
      this.startGettingList(
        'newer',
        getListApi(params, this.getNewerSuccess, this.getNewerFailure),
      );
    }

    getOlder(params = {}) {
      const {page, numberPage} = this.state;
      if (numberPage === page) {
        return;
      }
      Object.assign(params, {page: page + 1});
      this.startGettingList(
        'older',
        getListApi(params, this.getOlderSuccess, this.getOlderFailure),
      );
    }

    getNewerSuccess(response) {
      const {data} = response;
      if (data.length === 0) {
        this.setState({loadingFirst: false, loadingNewer: false});
        return;
      }
      const {items, total} = data;
      this.getPages(total);
      this.setState({data: items, loadingFirst: false, loadingNewer: false});
    }

    getNewerFailure() {
      this.setState({loadingFirst: false, loadingNewer: false});
    }

    getOlderSuccess(response) {
      const {data} = response;
      const {items} = data;
      this.setState((preState) => ({
        data: preState.data.concat(items),
        page: preState.page + 1,
        loadingOlder: false,
      }));
    }

    getOlderFailure() {
      this.setState({loadingOlder: false});
    }

    startGettingList(status, callBack) {
      if (status === 'newer') {
        this.setState({loadingNewer: true}, callBack);
      }

      if (status === 'older') {
        this.setState({loadingOlder: true}, callBack);
      }
    }

    getPages(total) {
      let totalPage = 1;
      const number = total / NUMBER_ROW;
      if (number === parseInt(number)) {
        totalPage = number;
      }

      if (number > parseInt(number)) {
        totalPage = parseInt(number) + 1;
      }
      this.setState({numberPage: totalPage, page: 1});
    }

    render() {
      const {
        loadingOlder,
        loadingNewer,
        loadingFirst,
        data,
        page,
        numberPage,
      } = this.state;
      return (
        <WrappedComponent
          data={data}
          loadingFirst={loadingFirst}
          loadingOlder={loadingOlder}
          loadingNewer={loadingNewer}
          getNewer={this.getNewer}
          getOlder={this.getOlder}
          isGetDataFull={page === numberPage}
          {...this.props}
        />
      );
    }
  }

  return DecorateGetList;
}

export default decorateGetList;
