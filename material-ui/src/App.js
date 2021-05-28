import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
       underline: {
              "&&&:before": {
                     borderBottom: "none",
              },
              "&&:after": {
                     borderBottom: "none",
              },
       },
       btn: {
              boxShadow: "none",
              borderWidth: 0,
              borderRadius: 0,
              borderColor: "rgba(0,0,0,0)",
              border: "none",
       },
}));

export default function App() {
       const classes = useStyles();
       return (
              <div>
                     <Button className={classes.underline} color="primary">
                            Bobo
                     </Button>
                     <Button
                            variant="outlined"
                            size="small"
                            color="primary"
                            className={classes.margin}
                     >
                            Small
                     </Button>
              </div>
       );
}
