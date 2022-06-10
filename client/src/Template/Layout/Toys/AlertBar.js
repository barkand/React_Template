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
      AlertBar: { open: false, message: "", severity: "info" },
    });
  };

  React.useEffect(() => {
    setOpen(publicCtx.AlertBar.open);
    setMsg(publicCtx.AlertBar.message);
    setSeverity(publicCtx.AlertBar.severity);
  }, [publicCtx.AlertBar]);

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
