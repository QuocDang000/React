import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(theme => {
    return {
        root: {
            padding: theme.spacing(2, 0, 2, 0),
            borderTop: `1px solid ${theme.palette.grey[300]}`,
        },

        range: {
            display: 'flex',
            margin: theme.spacing(1),

            '& > span': {
                margin: theme.spacing(1),
                display: 'flex',
                alignItems: 'center',
            }
        }
    }
})

export default useStyles;