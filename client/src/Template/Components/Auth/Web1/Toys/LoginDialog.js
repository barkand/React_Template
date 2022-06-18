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

const AuthState = {
  PhoneNumber: 1,
  ReceivedCode: 2,
};

export default function LoginModal({ openModal, setOpenModal }) {
  const { publicCtx, setPublicCtx } = React.useContext(PublicContext);

  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [receivedCode, setReceivedCode] = React.useState("");
  const [authState, setAuthState] = React.useState(AuthState.PhoneNumber);

  const handleCloseModal = () => {
    setOpenModal(false);
    setAuthState(AuthState.PhoneNumber);
    setReceivedCode("");
  };

  const handleLogin = () => {
    if (authState === AuthState.PhoneNumber) {
      async function _sendPhone() {
        let _result = await SendPhone(phoneNumber);
        if (_result.status === "success") {
          setAuthState(AuthState.ReceivedCode);
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
        let _result = await SendCode(phoneNumber, receivedCode);
        if (_result.status === "success") {
          async function signing() {
            let _login = await LoginAccount(phoneNumber, receivedCode);
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
                disabled={authState !== AuthState.PhoneNumber}
              />
            </Box>
          </Grid>

          <Grid item>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <VpnKeyIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="Code"
                label="Received Code"
                type="password"
                autoComplete="current-password"
                variant="standard"
                value={receivedCode}
                onChange={(event) => {
                  setReceivedCode(event.target.value);
                }}
                disabled={authState !== AuthState.ReceivedCode}
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
              {authState === AuthState.PhoneNumber ? "Send Code" : "Login"}
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
}
