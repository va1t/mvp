var React = require('react');
//var DefaultLayout = require('../routes/layout/master');

class App extends React.Component {

    render() {
        return (
              <div>
                  <h1>{this.props.title}</h1>
              </div>
        );
    }
};

module.exports = App;