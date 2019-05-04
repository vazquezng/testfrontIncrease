import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Card from './card';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
});

function GridNotes(props) {
  const { classes, notes, onChangeColor, onDelete, preEdit } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      {notes.list.map((note, index)=>(
        <React.Fragment key={index}>
          <Card note={note} index={index} onChangeColor={onChangeColor} onDelete={onDelete} preEdit={preEdit}/>
        </React.Fragment>
      ))}
    </div>
  );
}

GridNotes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridNotes);
