import React, { useState } from 'react';
import { Tabs, Tab, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab: {
    position: 'relative',
    padding: theme.spacing(3),
    height: '100%',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: theme.palette.primary.main,
      zIndex: -1,
      borderRadius: '20px',
    },
    '& .MuiTab-label': {
      zIndex: 1,
      position: 'relative',
      color: theme.palette.common.white,
    },
    '&.Mui-selected .MuiTab-label': {
      fontWeight: 'bold',
    },
  },
  curvedPoint: {
    '&::before': {
      clipPath: 'polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%, 10% 50%)',
    },
  },
}));

const ArrowTabs = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs value={value} onChange={handleChange} aria-label="Arrow Tabs">
        <Tab className={`${classes.tab} ${classes.curvedPoint}`} label="View Job Post" />
        <Tab className={`${classes.tab} ${classes.curvedPoint}`} label="Review Proposals" />
        <Tab className={`${classes.tab} ${classes.curvedPoint}`} label="Hire" />
      </Tabs>
    </div>
  );
};

export default ArrowTabs;
