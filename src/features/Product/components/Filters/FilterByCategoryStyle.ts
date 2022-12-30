import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
    return {
        root: {
            padding: theme.spacing(1)
        },

        menu: {
            padding: 0,
            margin: 0,
            listStyleType: 'none',

            '& > li': {
                marginTop: theme.spacing(1),

                '&:hover': {
                    color: theme.palette.primary.dark,
                    cursor: 'pointer'
                }
            }
        }
    }
})


export default useStyles;