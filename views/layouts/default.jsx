var React = require('react');

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
            <head>
                <title>{this.props.title}</title>
                <link href="style.css" rel="stylesheet" />
            </head>

            <body>
                <h1>Server Side App</h1>
                {this.props.children}
                <div id="root"></div>
            </body>
            <script src="bundle.js" />
            </html>
        );
    }
}

module.exports = DefaultLayout;