import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  headerBackground: {
    backgroundImage: (props) => "url(" + props.headerImage + ")",
    height: "70vh",
    backgroundPosition: "center",
  },
  backgroundBlackOverlay: {
    background: "rgb(0,0,0)",
    background: "linear-gradient(0deg, rgba(0,0,0,1) 4%, rgba(0,0,0,0.5466561624649859) 64%, rgba(0,0,0,0.21332282913165268) 100%)",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "white",
    fontWeight: "bold",
    lineHeight: "50px",
  },
});

export default useStyles;
