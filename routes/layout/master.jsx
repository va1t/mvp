var React = require('react');

class MasterLayout extends React.Component {
    render() {
        return (
            <!DOCTYPE html>
            <html lang='en'>
                <head>
                    <meta charset="UTF-8">
                    <title>{this.props.title}</title>
                </head>
                <body>
                    {this.props.children}
                </body>
            </html>
        ]);
    }
};

module.exports = MasterLayout;