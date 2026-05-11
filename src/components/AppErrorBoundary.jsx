import { Component } from 'react';

export default class AppErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidUpdate(previousProps) {
    if (previousProps.resetKey !== this.props.resetKey && this.state.hasError) {
      this.setState({ hasError: false });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="app-error">
          <p className="eyebrow">Something went wrong</p>
          <h1>Refresh the page and try again.</h1>
          <a className="button-link" href="/">
            Back home
          </a>
        </main>
      );
    }

    return this.props.children;
  }
}
