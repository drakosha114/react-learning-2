var React = require('react');

require('./Note.css');

var Note = React.createClass({

    render: function () {

        var style = {backgroundColor: this.props.color};

        return (
            <div className="notes__note" style={style}>
                <span className="notes__delete" onClick={this.props.onDelete}>X</span>
                <h3 className="notes__title">{this.props.title}</h3>
                <div className="notes__body">{this.props.children}</div>
            </div>
        );
    }
});


module.exports = Note;