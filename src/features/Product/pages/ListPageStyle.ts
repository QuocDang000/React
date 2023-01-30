import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
    return {
      root: {
        position: 'relative',
      },
  
      left: {
        position: 'fixed',
        width: "250px" ,
      },
  
      right: {
        flex: "1 1 0",
      },

      pagination: {
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
        paddingBottom:"20px"
      }
    };
  });

export default useStyles