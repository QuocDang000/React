import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
    return {
        root: {
            padding: theme.spacing(1),
            borderTop: `1px solid ${theme.palette.grey[300]}`,
            textAlign: "initial",
            display: "flex",

        },

        outlinedInput: {
            width: '60px',

            '&> input': {
                padding: theme.spacing(0.5, 1.6)
            }
        },

        button: {
            marginTop: '10px',
            display: "flex",
        }
    };
});

export default useStyles;
