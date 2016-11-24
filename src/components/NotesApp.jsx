var React = require('react');

require('./NotesApp.css');

var NotesEditor = require('./NoteEditor.jsx');
var NotesGrid = require('./NotesGrid.jsx');

var NotesApp = React.createClass({
    getInitialState: function () {
        return {
            notes: []
        }

    },
    handleNoteAdd: function (newNote) {
        var newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({
            notes: newNotes
        });
    },
    componentDidMount: function () {

        var localNotes = JSON.parse(localStorage.getItem('notes'));

        if (localNotes) {
            this.setState({
                notes: localNotes
            })
        }
    },
    componentDidUpdate: function () {
        this._updateLocalStorage();
    },
    _updateLocalStorage: function () {
        var notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    },
    handleNoteDelete: function (note) {
        var id = note._id;
        var newNotes = this.state.notes.filter(function(item){
            return item._id !== id;
        });
        this.setState({
            notes: newNotes
        })
    },
    render: function () {
        return (
            <div className="notes">
                <h2 className="notes_header">Notes App</h2>
                <NotesEditor onNoteAdd={this.handleNoteAdd}/>
                <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete}/>
            </div>
        );
    }
});

module.exports = NotesApp;