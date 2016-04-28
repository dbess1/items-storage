/* The ref attribute below is similiar to the name attribute in AngularJS, it is used to reference the 
             element in the component-- so instead of using the HTML id or clas fields we use ref. In this case
             the ref will be used to get the value of the text field and send it to the server.*/

var NewItem = React.createClass({
  // var NewItem = ...
  handleClick(){
    var name = this.refs.name.value;
    var description = this.refs.description.value;
    $.ajax({
      url: '/api/v1/items',
      type: 'POST',
      data: {item: { name: name, description: description } },
      success: (item) => {
        this.props.handleSubmit(item);
      }
    });
  },


    render() {
        return ( 
          <div>
          <input ref='name' placeholder='Enter the name of the item' />
          <input ref='description' placeholder='Enter a description' />
            <button onClick={this.handleClick}>Submit</button>
          </div>
        )
    }
});