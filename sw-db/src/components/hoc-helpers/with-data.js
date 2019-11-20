import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';
import Loader from '../loader';

const withData = (View, getData) => {
    return class extends Component {
        state = {
            data: null,
            hasError: false,
        };
    
        componentDidMount() {
            const { pathName = 'vehicles' } = this.props;
            getData(pathName)
            .then((response) => {
                console.log(response);
                this.setState({ data: response });
            });
        };
    
        componentDidCatch() {
            this.setState({
                hasError: true,
            });
        }

        render() {
            const { data, hasError } = this.state;
        
            if (hasError) {
                return <ErrorIndicator />
            }

            if (!data) {
                return <Loader />
            }

            return (
                <View { ...this.props } data={ data } />
            );
        }
    };
}

export default withData;