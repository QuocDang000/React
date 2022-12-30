import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(theme => {
    return {
        root: {
            padding: theme.spacing(2),
            borderTop: `1px solid ${theme.palette.grey[300]}`,
            listStyleType: 'none',
            display: 'flex',


            '& > li': {
                marginRight: theme.spacing(1),
            }
        },
    }
})

export default useStyles;