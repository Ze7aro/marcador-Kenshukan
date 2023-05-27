import React, { useState } from "react";
import { Button, Grid, GridItem, Image } from "@chakra-ui/react";

function UpdateComponent() {
  const [winner, setWinner] = useState("");

  const update = (colour) => {
    /* Ganador */
    if (colour === "Red") {
      setWinner("Red");
    } else if (colour === "w") {
      setWinner("White");
    }

    // Other logic...

    // Enable/disable buttons
    // ...

    // Enable/disable elements by ID
    // ...
  };

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      <GridItem>
        <Button onClick={() => update("Red")}>Red</Button>
        <Image
          id="akaImage"
          src={winner === "Red" ? "./Images/akaAni.gif" : ""}
          alt=""
        />
        {/* Other elements */}
        {/* Enable/disable elements based on winner state */}
        {/* ... */}
      </GridItem>
      <GridItem>
        <Button onClick={() => update("w")}>White</Button>
        <Image
          id="shiroImage"
          src={winner === "White" ? "./Images/shiroAni.gif" : ""}
          alt=""
        />
        {/* Other elements */}
        {/* Enable/disable elements based on winner state */}
        {/* ... */}
      </GridItem>
    </Grid>
  );
}

export default UpdateComponent;
