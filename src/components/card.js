import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  item: {
    borderRadius: 5,
    boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.01), 0 3px 24px rgba(48, 51, 51, 0.09)',
    width: '350px',
    height: '250px',
    margin: '10px 30px',
    padding: '10px',
    wordBreak: 'break-all',
    position: 'relative',
  },
  color: {
    position: 'absolute',
    fontSize: '11px',
    bottom: '5px',
    right: '5px',
  },
  edit:{
    margin: theme.spacing.unit,
    left: 0,
    position: 'absolute',
    bottom: 0,
  },
  delete: {
    margin: theme.spacing.unit,
    left: 70,
    position: 'absolute',
    bottom: 0,
  },
  p: {
    textAlign:'left',
  },
});

function Card({index, classes, note, onChangeColor, onDelete, preEdit}){

  return (
    <div key={index} className={classes.item} style={{backgroundColor:note.backgroundColor }}>
      <p className={classes.p}>{note.text}</p>

      <Fab color="secondary" aria-label="Edit" className={classes.edit} onClick={() => {
        console.log('Edit => Card');
        preEdit(index);
      }} >
        <Icon>edit_icon</Icon>
      </Fab>
      <Fab aria-label="Delete" className={classes.delete} onClick={() => {
        console.log('Delete => Card');
        onDelete(index);
      }}>
        <DeleteIcon />
      </Fab>
      <input type="color" value={note.backgroundColor} className={classes.color} onChange={(e) =>  onChangeColor(e.target.value, index)}/>
    </div>
  );
}


export default withStyles(styles)(Card);
