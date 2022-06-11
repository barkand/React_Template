import React from "react";
import { Snackbar, Alert as MuiAlert } from "@mui/material";

import { PublicContext } from "../../Context/Public";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AlertBar() {
  const { publicCtx, setPublicCtx } = React.useContext(PublicContext);

  const [open, setOpen] = React.useState(false);
  const [msg, setMsg] = React.useState("");
  const [severity, setSeverity] = React.useState("info");

  const handleClose = () => {
    setPublicCtx({
      ...publicCtx,
      alertBar: { open: false, message: "", severity: "info" },
    });
  };

  React.useEffect(() => {
    setOpen(publicCtx.alertBar.open);
    setMsg(publicCtx.alertBar.message);
    setSeverity(publicCtx.alertBar.severity);
  }, [publicCtx.alertBar]);

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity={severity} onClose={handleClose} sx={{ width: "100%" }}>
          {msg}
        </Alert>
      </Snackbar>
    </>
  );
}
