import React from "react";
import {
  Typography,
  Button,
  Grid,
  TextField,
  Box,
  Dialog,
} from "@mui/material";
import { Phone as PhoneIcon, VpnKey as VpnKeyIcon } from "@mui/icons-material";

import { PublicContext } from "../../../../Context/Public";
import { SendPhone, SendCode, LoginAccount } from "../LoginWeb1";

export default function LoginModal({ openModal, setOpenModal }) {
  const { publicCtx, setPublicCtx } = React.useContext(PublicContext);

  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [recieveCode, setRecieveCode] = React.useState("");
  const [state, setState] = React.useState(1);

  const handleCloseModal = () => {
    setOpenModal(false);
    setState(1);
    setRecieveCode("");
  };

  const handleLogin = () => {
    if (state === 1) {
      async function _sendPhone() {
        let _result = await SendPhone(phoneNumber);
        if (_result.status === "success") {
          setState(2);
        } else {
          setPublicCtx({
            ...publicCtx,
            alertBar: _result.alert,
          });
        }
      }
      _sendPhone();
    } else {
      async function _sendCode() {
        let _result = await SendCode(phoneNumber, recieveCode);
        if (_result.status === "success") {
          async function signing() {
            let _login = await LoginAccount(phoneNumber, recieveCode);
            setPublicCtx({
              ...publicCtx,
              auth: _login.auth,
              alertBar: _login.alert,
            });

            handleCloseModal();
          }
          signing();
        } else {
          setPublicCtx({
            ...publicCtx,
            alertBar: _result.alert,
          });
        }
      }
      _sendCode();
    }
  };

  return (
    <>
      <Dialog open={openModal} onClose={handleCloseModal}>
        <Grid
          container
          direction="column"
          alignItems="center"
          spacing={2}
          sx={{ padding: "60px" }}
        >
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Login
            </Typography>
          </Grid>

          <Grid item>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <PhoneIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="Phone"
                label="Phone"
                variant="standard"
                value={phoneNumber}
                onChange={(event) => {
                  setPhoneNumber(event.target.value);
                }}
                disabled={state !== 1}
              />
            </Box>
          </Grid>

          <Grid item>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <VpnKeyIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="Code"
                label="Recieve Code"
                type="password"
                autoComplete="current-password"
                variant="standard"
                value={recieveCode}
                onChange={(event) => {
                  setRecieveCode(event.target.value);
                }}
                disabled={state !== 2}
              />
            </Box>
          </Grid>

          <Grid item sx={{ marginTop: "20px" }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ minWidth: "120px" }}
              onMouseDown={handleLogin}
            >
              {state === 1 ? "Send Code" : "Login"}
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
}
