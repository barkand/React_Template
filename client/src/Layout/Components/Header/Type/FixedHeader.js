import AppBarComponent from "./AppBar";

export default function FixedHeader() {
  return (
    <>
      <AppBarComponent position="fixed" />
      <div style={{ marginTop: "50px" }} />
    </>
  );
}
