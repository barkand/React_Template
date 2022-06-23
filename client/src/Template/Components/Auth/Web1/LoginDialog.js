import React from "react";
import {
  Typography,
  Button,
  Grid,
  Box,
  Dialog,
  FormControl,
  Input,
  InputLabel,
} from "@mui/material";
import {
  Phone as PhoneIcon,
  VpnKey as VpnKeyIcon,
  Mail as MailIcon,
} from "@mui/icons-material";

import { PublicContext } from "../../../Context/Public";
import { SendUserName, SendCode, LoginAccount } from "./api/Auth";
import { PhoneMaskCustom, CodeMaskCustom } from "../../Mask/Mask";

const AuthState = {
  UserName: 1,
  ReceivedCode: 2,
};

export default function LoginModal({ openModal, setOpenModal }) {
  const { publicCtx, setPublicCtx } = React.useContext(PublicContext);

  const [userName, setUserName] = React.useState(
    process.env.REACT_APP_WEB1_AUTH_TYPE === "MOBILE"
      ? `(+${process.env.REACT_APP_COUNTRY_CODE}) 900-000-0000`
      : ""
  );
  const [receivedCode, setReceivedCode] = React.useState("0-0-0-0");
  const [authState, setAuthState] = React.useState(AuthState.UserName);

  const handleCloseModal = () => {
    setOpenModal(false);
    setAuthState(AuthState.UserName);
    setReceivedCode("0-0-0-0");
  };

  const handleLogin = () => {
    if (authState === AuthState.UserName) {
      async function _sendUserName() {
        let _result = await SendUserName(userName);
        if (_result.status === "success") {
          setAuthState(AuthState.ReceivedCode);
        } else {
          setPublicCtx({
            ...publicCtx,
            alertBar: _result.alert,
          });
        }
      }
      _sendUserName();
    } else {
      async function _sendCode() {
        let _result = await SendCode(userName, receivedCode);
        if (_result.status === "success") {
          async function signing() {
            let _login = await LoginAccount(userName);
            setPublicCtx({
              ...publicCtx,
              auth: _login.auth,
              alertBar: _login.alert,
            });

            localStorage.setItem("auth", JSON.stringify(_login.auth));

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
              Sign In / Sign Up
            </Typography>
          </Grid>

          <Grid item>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              {process.env.REACT_APP_WEB1_AUTH_TYPE === "MOBILE" ? (
                <PhoneIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              ) : (
                <MailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              )}

              <FormControl variant="standard">
                <InputLabel htmlFor="input">
                  {process.env.REACT_APP_WEB1_AUTH_TYPE === "MOBILE"
                    ? "Mobile"
                    : "Email"}
                </InputLabel>
                <Input
                  id={process.env.REACT_APP_WEB1_AUTH_TYPE}
                  variant="standard"
                  value={userName}
                  onChange={(event) => {
                    setUserName(event.target.value);
                  }}
                  disabled={authState !== AuthState.UserName}
                  inputComponent={
                    process.env.REACT_APP_WEB1_AUTH_TYPE === "MOBILE"
                      ? PhoneMaskCustom
                      : null
                  }
                />
              </FormControl>
            </Box>
          </Grid>

          <Grid item>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <VpnKeyIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <FormControl variant="standard">
                <InputLabel htmlFor="Code-input">Received Code</InputLabel>
                <Input
                  id="Code"
                  autoComplete="off"
                  variant="standard"
                  value={receivedCode}
                  onChange={(event) => {
                    setReceivedCode(event.target.value);
                  }}
                  disabled={authState !== AuthState.ReceivedCode}
                  inputComponent={CodeMaskCustom}
                />
              </FormControl>
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
              {authState === AuthState.UserName ? "Send Code" : "Login"}
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
}
