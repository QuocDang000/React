import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
    return {
      root: {
      },

      wrapper: {
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        backgroundColor: "#fff"
    },

    wrapperColumn: {
        maxWidth: "1024px",
        margin: "auto"
    },

    columnLeft: {
        margin: "auto"
    },
    
    title: {
        marginBottom: "40px"
    },

    content: {
        opacity: "0.5",
        fontSize: "small",
    },

    introduce: {
        textAlign: "left"
    },

 


    };
  });

export default useStyles