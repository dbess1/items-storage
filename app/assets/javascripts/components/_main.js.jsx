/* This is a .jsx file, which works the same way as html.erb works for Rails; it's an extension used to recognize the view
  files of the React framework. I'll use the render() method to return static html to the page. The render method also
  triggers render() to all child components of the parent component, eventually printing all the components on the page. 
  Each React component can only return one element, so all jsx elements in the return statement need to be in one 
  wrapper div. 
*/

var Main = React.createClass({
            render() {
                return ( <div>
                        <Header /> 
                        <Body />
                        </div>
      )
  }
});