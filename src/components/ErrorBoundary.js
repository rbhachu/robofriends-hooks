import React, { Component } from 'react';


class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = { hasError: false }
    }

    componentDidCatch(error, info) { // catches if there is an error (react builtin function)
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) { // if error
            return <h1>Ooops, that is not good</h1>
        }
        return this.props.children // if no error
    }

}

export default ErrorBoundary;