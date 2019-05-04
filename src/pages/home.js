import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { withStyles } from '@material-ui/core/styles';
import withRoot from '../components/withRoot';
import GridNotes from '../components/GridNotes';
const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 10,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    width: 200,
  },
});

class Home extends React.Component {
  state = {
    open: false,
    edit: false,
    note: {text: ''},
  };

  index=null
  addNote = () => {
    const {dispatch} = this.props;
    const {note, edit} = this.state;
    console.log(this.index);
    if(edit){
      //edit
      dispatch({
        type:'edit',
        note,
        index:this.index,
      });
    }else{
      //addNote
      dispatch({type:'add', note});
    }

    note.text = '';
    this.setState({note, edit: false});
  };

  handleChange(event){
    const {note} = this.state;
    note.text = event.target.value;

    this.setState({note});
  }

  onChangeColor(color, index){
    const {notes, dispatch} = this.props;
    const note = notes.list[index];

    note.backgroundColor = color;

    dispatch({type:'edit', note})
  }

  onDelete(index){
    console.log('onDelete = home');
    const {dispatch} = this.props;
    dispatch({type:'remove', index});
  }

  preEdit(index){
    const {notes:{list}} = this.props;
    const note = {...list[index]};
    this.index = index;
    this.setState({note, edit: true});
  }

  render() {
    const { classes, notes, dispatch } = this.props;
    const { open, note, edit } = this.state;

    console.log( notes );
    return (
      <div className={classes.root}>
        <Typography variant="h4" gutterBottom>
          Notes
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {edit ? 'Edit note' : 'add note'}
        </Typography>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="standard-name"
            label="Text"
            className={classes.textField}
            value={note.text}
            onChange={this.handleChange.bind(this)}
            margin="normal"
            multiline
            rowsMax="4"
          />
          <Button variant="contained" color="secondary"  disabled={note.text == ''} onClick={this.addNote}>
            {edit ? 'Edit' : 'Add'}
          </Button>
        </form>
        <GridNotes notes={notes} onChangeColor={this.onChangeColor.bind(this)} onDelete={this.onDelete.bind(this)} preEdit={this.preEdit.bind(this)}/>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Home));
