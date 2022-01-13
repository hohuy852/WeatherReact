import React from "react";
import Home from "./container/Home";
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Some thing went wrong</h1>;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <div className="App bg-weather bg-contain">
      <Home />
    </div>
  );
}

export default App;
