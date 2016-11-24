var React = requite('react');

require('./NoteEditor.css');

var NoteEditor = React.createClass({
    getInitialState: function () {
        return {
            text: '',
            title: ''
        }
    },
    onChangeTitleHandler: function (event) {
        this.setState({
            title: event.target.value
        });
    },
    onChangeTextHandler: function (event) {
        this.setState({
            text: event.target.value
        });
    },
    addNoteHandler: function () {

        this.props.onNoteAdd({
            text: this.state.text,
            title: this.state.title,
            color: 'yellow',
            _id: Date.now()
        });

        this.setState({ text: '', title: '' });
    },
    render: function () {
        return (
            <div className="notes__editor">
                <div>
                    <input className="notes__inputTitle" placeholder="Enter your note title here..." type="text" value={this.state.title} onChange={this.onChangeTitleHandler}/>
                </div>
                <div>
                    <textarea className="notes__inputText" placeholder="Enter your note here..." rows={5} value={this.state.text} onChange={this.onChangeTextHandler}/>
                </div>
                <div className="notes__right">
                    <buttin type="button" className="notes__add" onClick={this.addNoteHandler}>Add</buttin>
                </div>

            </div>
        );
    }
});

module.exports = NoteEditor;