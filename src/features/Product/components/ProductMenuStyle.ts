import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
    return {
        menu: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            listStyleType: "none",
            padding: 0,

            "& > li": {
                padding: theme.spacing(2),
            },

            "& > li > a": {
                textDecoration: "none",
                color: theme.palette.grey[700]
            },

            "& > li > a.active": {
                textDecoration: "underline",
                color: theme.palette.primary.main
            },
        },
    };
});

export default useStyles;
