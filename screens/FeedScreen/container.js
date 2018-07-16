import React, { Component } from "react";
import PropTypes from "prop-types";
import FeedScreen from "./presenter";

class Container extends Component {
    static propTypes = {
        feed: PropTypes.array,
        getFeed: PropTypes.func.isRequired
    };
    state = {
        isFetching: true
    };
    componentWillReceiveProps = nextProps => {
        if (nextProps.feed) {
            this.setState({
                isFetching: false
            });
        }
    };
    render() {
        return <FeedScreen {...this.props} />;
    }
}

export default Container;
