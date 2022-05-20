import React from 'react';
import {
  Grid,
  withStyles,
} from '@material-ui/core';
import { capitalizeFirstLetter } from '../../../../utils';

const NodeDetailView = () => (
  <Grid item lg={4} md={4} sm={4} xs={12}
    className={classes.nodeAssignmentGroup}>
    <span className={classes.nodeLabel}>
      <span>
        Assignment:
      </span>
      <span className={classes.nodeAssignment}>
        {capitalizeFirstLetter(node.assignment)}
      </span>
    </span>
    <span className={classes.nodeLabel}>
      Class:
      <span className={classes.nodeClass}>
        {capitalizeFirstLetter(node.class)}
      </span>
    </span>
  </Grid>
);

const styles = ({
  nodeLabel: {
    marginTop: '10px',
    float: 'left',
    color: '#8e8e8e',
    fontWeight: '900',
    marginRight: '5px',
    borderRadius: '100px',
    border: '1px solid #cdcdcd',
    textAlign: 'center',
    padding: '2px 12px',
    background: '#fff',
    fontSize: '12px',
  },
  nodeAssignmentGroup : {
    textAlign: 'right',
  },
  nodeClass: {
    marginLeft: '5px',
    color: '#2982af',
    fontWeight: '500',
  },
  nodeAssignment: {
    marginLeft: '5px',
    color: '#2982af',
    fontWeight: '500',
  },
});

export default withStyles(styles)(NodeDetailView);
