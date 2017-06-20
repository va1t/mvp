var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Navbar = ReactBootstrap.Navbar;
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;

class DefaultLayout extends React.Component {
    render() {
        return (
                <html lang="en">
                    <head>
                        <meta charset="utf-8" />
                        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <meta name="author" content="Peter Maxcy"/>
                        <link rel="icon" href="../../favicon.ico"/>
                        <title>{this.props.title}</title>

                        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
                        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
                    </head>
                    <body>
                        <Navbar>
                            <Nav>
                                <NavItem eventKey={1} href="#">Link</NavItem>
                                <NavItem eventKey={2} href="#">Link</NavItem>
                            </Nav>
                        </Navbar>
                        {this.props.children}
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/<react-version>/react.min.js"></script>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/<react-version>/react-dom.min.js"></script>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/<version>/react-bootstrap.min.js"></script>
                    </body>
                </html>
        );
    }
}

module.exports = DefaultLayout;