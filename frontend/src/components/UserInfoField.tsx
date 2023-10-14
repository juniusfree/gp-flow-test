"use client";

import { userSelectionsAtom } from "@/atoms";
import { postWaitingList } from "@/db-utils";
import { Alert, Button, Grid, TextField } from "@mui/material";
import { useAtomValue, useSetAtom } from "jotai";
import { useState } from "react";

const UserInfoField = () => {
  const setUserSelectionAtom = useSetAtom(userSelectionsAtom);
  const selectionValue = useAtomValue(userSelectionsAtom);
  const [success, setSuccess] = useState(false);

  const handleOnChange = (event) => {
    setUserSelectionAtom((selections) => ({
      ...selections,
      email: event.target.value,
    }));
  };
  const handleSubmission = () => {
    postWaitingList({
      email: selectionValue.email,
      investmentId: selectionValue.investmentId,
      incomeRange: selectionValue.incomeRange,
    })
      .then(() => setSuccess(true))
      .catch(() => setSuccess(false));
  };
  return (
    <Grid container flexDirection="column">
      <p>Waiting List</p>
      <TextField onChange={handleOnChange} label="email" type="email" />
      <Button onClick={handleSubmission}>Submit</Button>
      {success && <Alert severity="success">Submitted</Alert>}
    </Grid>
  );
};

export default UserInfoField;
