import React from "react";

class MyComponent extends React.Component {
  timeoutId = null; // Store timeout ID

  componentWillUnmount() {
    this.timeoutId = setTimeout(() => {
      console.log("Component is being removed!");
    }, 1000);
  }

  componentDidMount() {
    // Clear timeout if the component is unmounted quickly
    return () => clearTimeout(this.timeoutId);
  }

  render() {
    return <h1>Goodbye!</h1>;
  }
}

export default MyComponent;






