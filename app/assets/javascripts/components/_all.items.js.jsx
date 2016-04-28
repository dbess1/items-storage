/* We'll list all the items, which will include making a request to the server to fetch all the items into the component
  using an AJAX request. This will happen when the component gets rendered into the DOM. React has the built in method
  that executes before and after component mounts into the DOM or before and after it dismounts from the DOM. In this case,
  the method that will handle the AJAX request when the component mounts is componentDidMount(). This is called directly
  after the component is mounted.
*/

var AllItems = React.createClass({
  // Before fetching data from the server, we need to initialize the data.
    handleDelete(id) {
        this.props.handleDelete(id);
    },

    onUpdate(item) {
        this.props.onUpdate(item);
    },

  render(){
    /* using the map method to iterate through the items, the map method is similiar to the each method in .erb templates. 
       This iterates through the array of items and displays the items' attributes using bracket notation. The brackets are
       equivalent to Rails' <%= =%> tags. This makes the attributes dynamic.*/
    var items = this.props.items.map((item) => {
      return (
        /* When iterating through the items, we have to identify each item into the component's DOM. Therefore,
           we'll use a unique attribute of each item, called key. This will be in the div tag to wrap the entire item.*/
        <div key={item.id}>
                        <Item item={item}
                              handleDelete={this.handleDelete.bind(this, item.id)}
                              handleUpdate={this.onUpdate}/>
                    </div>
                )
            });

        return(
            <div>
                {items}
            </div>
        )
    }
});