/* We'll list all the items, which will include making a request to the server to fetch all the items into the component
  using an AJAX request.

var AllItems = React.createClass({
  componentDidMount(){
    console.log('Component Mounted');
  },

  render(){
    return (
      <div>
        <h1>All items component</h1>
        </div>
      )
  }
});