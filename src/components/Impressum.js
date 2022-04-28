import React from "react";
import Typography from "@mui/material/Typography";
import Wrapper from "./Wrapper";

function Impressum() {
  return (
    <Wrapper title="Impressum">
      <Typography color="text.primary" textAlign="center">
        <h3>Izabela Ograbek - art. design. web. by mamaminia</h3>
        <p>
          Izabela Ograbek
          <br />
          Bergstr. 1<br />
          53578 Windhagen
          <br />
          Germany
        </p>
        <p>
          Mobile: +49 1578 2785218
          <br />
          Mail: contact@mamaminia.art
        </p>
        <p>VAT ID (USt-IdNr.): DE350572741</p>
      </Typography>
    </Wrapper>
  );
}

export default Impressum;
