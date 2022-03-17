import React from "react";
import Grid from "@mui/material/Grid";
import JournalItem from "./JournalItem";
import Wrapper from "./Wrapper";
import Logo from "../img/mamaminia_logo.png";

const Items = [
  {
    title: "My website is deployed!",
    img: Logo,
    desc: "Hello to my new website!",
    href: "/journal",
  },
  {
    title: "My website is deployed!",
    img: Logo,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "/journal",
  },
  {
    title: "My website is deployed!",
    img: Logo,
    desc: "Hello to my new website!",
    href: "/journal",
  },
];

function Journal() {
  return (
    <Wrapper title="Journal">
      <Grid container spacing={6} justifyContent="center">
        {Items.map((journalItem) => (
          <Grid item xs={12} md={6} lg={4}>
            <JournalItem {...journalItem} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default Journal;
