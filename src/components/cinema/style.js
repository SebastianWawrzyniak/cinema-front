import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
    createStyles({
        mainContainer: { 
            display: 'flex',
            flexDirection:'column',
        },
        row: {
            display: 'flex',
            flexDirection:'row',
            marginBottom: 6
        },
        rowItem: {
            padding: 4,
            margin: 4
        }
    }),
);