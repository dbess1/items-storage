
var Body = React.createClass({

// Actually moved getInitialState and componentDidMount from _all.items.js.jsx to _body.js.jsx to get the storing on 
// a higher hierarchical level.
getInitialState(){
    return { items: [] }
  },

// Again, this is to mount the component.
componentDidMount(){
    // this will get the data from the server and assign it to the items object.
    $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
    // Use the getJSON method with the URL of the items.json as an argument, and use the setState function
    // of the component to put the response into the items object.
  },

 // getInitialState and componentDidMount
  handleSubmit(item) {
    var newState = this.state.items.concat(item);
    this.setState({ items: newState})
  },

    handleDelete(id) {
        $.ajax({
            url: `/api/v1/items/${id}`,
            type: 'DELETE',
            success:() => {
               this.removeItemClient(id);
            }
        });
    },

    removeItemClient(id) {
        var newItems = this.state.items.filter((item) => {
            return item.id != id;
        });

        this.setState({ items: newItems });
    },

    handleUpdate(item) {
        $.ajax({
                url: `/api/v1/items/${item.id}`,
                type: 'PUT',
                data: { item: item },
                success: () => {
                    this.updateItems(item);

                }
            }
        )},

  updateItems(item){
    var items = this.state.items.filter((i) => { return i.id != item.id });
    items.push(item);

    this.setState({items: items});
  },


// Renders the AllItems and NewItem component

  render(){
    return (
      <div>
        <NewItem handleSubmit = {this.handleSubmit} />
        <AllItems items = {this.state.items} handleDelete={this.handleDelete} onUpdate={this.handleUpdate}/>
      </div>
    )
  }
});
