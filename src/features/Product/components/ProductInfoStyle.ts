import { grey, red } from "@mui/material/colors";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
    return {
        root: {
            textAlign: 'initial',
        },

        description: {
            margin: (theme).spacing(2, 0)
        },

        priceBox: {
            padding: (theme).spacing(2),
            backgroundColor: (theme).palette.grey[100]
        },

        salePrice: {
            fontSize: theme.typography.h4.fontSize,
            marginRight: theme.spacing(3),
            color: red[500],
            fontWeight: 'bold',
        },

        originalPrice: {
            marginRight: theme.spacing(2),
            textDecoration: 'line-through solid ',
            textDecorationColor: grey[500],
            fontSize: theme.typography.h6.fontSize,

        },

        promotionPercent: {
            fontSize: theme.typography.h6.fontSize,
            color: red[500],

        }
    };
});

export default useStyles;
