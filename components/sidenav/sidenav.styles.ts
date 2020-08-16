import { createStyles } from '@material-ui/core/styles';

export default createStyles({
  host: {
    display: 'flex',
    flex: 1,
    '& .MuiPaper-root': {
      width: '50px',
      '& .MuiAvatar-root': {
        margin: '10px auto',
      }
    },
    '& main': {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      transition: 'margin-left 0.2s ease-in-out'
    },
  },
});
