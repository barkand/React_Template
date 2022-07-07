import React from "react";
import { Dialog, Grid, Typography } from "@mui/material";
import jwt_decode from "jwt-decode";

import { PublicContext } from "../../../Context/Public";
import { LoginAccount } from "../Web1/api/Auth";

export default function OauthDialog({ openModal, setOpenModal }) {
  const { publicCtx, setPublicCtx } = React.useContext(PublicContext);
  const divRef = React.useRef(null);

  React.useEffect(() => {
    console.log("useEffect");
    if (openModal) {
      function handleCredentialResponse(response) {
        var user_object = jwt_decode(response.credential);

        if (user_object.email !== undefined) {
          async function signing() {
            let _login = await LoginAccount(user_object.email);
            setPublicCtx({
              ...publicCtx,
              auth: _login.auth,
              alertBar: _login.alert,
            });
            localStorage.setItem("auth", JSON.stringify(_login.auth));

            handleCloseModal();
          }
          signing();
        }
      }

      const initializeGsi = () => {
        /* global google */
        google.accounts.id.initialize({
          client_id: `${process.env.REACT_APP_GOOGLE_CLIENT_ID}`,
          callback: handleCredentialResponse,
        });
        google.accounts.id.renderButton(divRef.current, {
          theme: "outline",
          size: "large",
        });
        google.accounts.id.prompt();
      };

      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.onload = initializeGsi;
      script.async = true;
      script.id = "google-client-script";
      document.querySelector("body")?.appendChild(script);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openModal]);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Dialog open={openModal} onClose={handleCloseModal}>
        <Grid
          container
          direction="column"
          alignItems="center"
          spacing={2}
          sx={{ padding: "100px 100px 150px 100px" }}
        >
          <Grid item sx={{ paddingBottom: "50px" }}>
            <Typography variant="h4" gutterBottom>
              Sign In / Sign Up
            </Typography>
          </Grid>
          <Grid item>
            <div ref={divRef} />
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
}
