import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
    return {
        root: {
            padding: theme.spacing(2),
            borderTop: `1px solid ${theme.palette.grey[300]}`,
            textAlign: "initial",
        },

        list: {
            padding: 0,
            margin: 0,
            listStyleType: "none",

            "& > li": {
                margin: 0,
            },
        },
    };
});

export default useStyles;
