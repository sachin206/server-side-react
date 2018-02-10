var React = require('react');

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
            <head>
                <title>{this.props.title}</title>
                <link href="style.css" rel="stylesheet" />
                
                <link href="bootstrap.min.css" rel="stylesheet" />
            </head>

            <body>
                <div className="container">
                    <h1>Product Listing Page</h1>
                    {this.props.children}
                </div>
               
               
            </body>
            <script src="bundle.js" />
            </html>
        );
    }
}

module.exports = DefaultLayout;