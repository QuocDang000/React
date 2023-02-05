import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
    return {
      root: {
        position: 'relative',
      },
  
      left: {
        position: 'fixed',
        width: "250px" ,
        zIndex: '1'
      },
  
      right: {
        width: "calc(100% - 600px)",
        right: '140px',
        position: 'absolute',
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