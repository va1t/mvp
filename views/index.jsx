var React = require('react');
var DefaultLayout = require('../routes/layout/default');

class App extends React.Component {

    render() {
        return (
            <DefaultLayout title={this.props.title}>
              <div>
                  <h1>Hello World!</h1>
              </div>
            </DefaultLayout>
        );
    }
}

module.exports = App;