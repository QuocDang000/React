import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
    return {
        root: {},

        left: {
            width: "250px",
            borderRight: `2px solid ${theme.palette.grey[300]}`,
            padding: theme.spacing(1.5)
        },

        right: {
            flex: "1 1 0",
            padding: theme.spacing(1.5)

        },
    };
});

export default useStyles;
