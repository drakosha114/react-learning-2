var React = requite('react');

require('./NotesGrid.css');

var Note = require('./Note.jsx');

var NotesGrid = React.createClass({
    componentDidMount: function () {
        this.msnry = new Masonry( this.refs.msnry, {
            columnWidth: 200,
            itemSelector: '.notes__note',
            gutter: 20,
            isFitWidth: true
        });
    },
    componentDidUpdate: function (prevProps) {
        if (this.props.notes.length !== prevProps.notes.length) {
            this.msnry.reloadItems();
            this.msnry.layout();
        }
    },
    render: function () {
        var notesDeleteHandler = this.props.onNoteDelete;
        return (

            <div className="notes__grid" ref="msnry">
                {
                    this.props.notes.map(function(note){
                        return <Note key={note._id} color={note.color} title={note.title} onDelete={notesDeleteHandler.bind(null, note)}>{note.text} </Note>;
                    })
                }
            </div>
        )
    }
});

module.exports = NotesGrid;