"use client";

import { userSelectionsAtom } from "@/atoms";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { blue } from "@mui/material/colors";
import { useAtomValue, useSetAtom } from "jotai";
import { useState } from "react";
import InvestmentSelections from "./InvestmentSelections";
import RadioButtonGroup from "./RadioButtonGroup";
import UserInfoField from "./UserInfoField";

export default function FormFieldsWrapper() {
  const [currentScreenCount, setCurrentScreenCount] = useState(0);
  const setUserSelectionAtom = useSetAtom(userSelectionsAtom);
  const selectionValue = useAtomValue(userSelectionsAtom);

  const screens: {
    [key: string]: any;
  }[] = [
    {
      Component: RadioButtonGroup,
      props: {
        label: "Income Range",
        options: [
          { value: "0-49", label: "up to $50,000" },
          { value: "50-100", label: "between $50,000 and $100,000" },
          { value: "100", label: "above $100,000" },
        ],
        value: selectionValue?.incomeRange,
        onChange: (event, value) => {
          setUserSelectionAtom((selections) => ({
            ...selections,
            incomeRange: value,
          }));
        },
      },
    },
    {
      Component: () => (
        <RadioButtonGroup
          label="Investment Goal"
          options={[
            { value: "cash-flow", label: "Cash Flow" },
            { value: "balanced-growth", label: "Balanced Growth" },
            { value: "appreciation", label: "Appreciation" },
          ]}
          value={selectionValue?.investmentGoal}
          onChange={(event, value) => {
            setUserSelectionAtom((selections) => ({
              ...selections,
              investmentGoal: value,
            }));
          }}
        />
      ),
    },
    {
      Component: RadioButtonGroup,
      props: {
        label: "Investment Experience",
        options: [
          { value: "beginner", label: "Beginner" },
          { value: "intermediate", label: "Intermediate" },
          { value: "expert", label: "Expert" },
        ],
        value: selectionValue?.investmentExperience,
        onChange: (event, value) => {
          setUserSelectionAtom((selections) => ({
            ...selections,
            investmentExperience: value,
          }));
        },
      },
    },
    {
      Component: InvestmentSelections,
    },
    {
      Component: UserInfoField,
    },
  ];

  const { Component, props } = screens[currentScreenCount];

  return (
    <Grid
      container
      flexDirection="column"
      alignItems="center"
      margin="0 auto"
      maxWidth="700px"
      border={`1px solid ${blue[100]}`}
      padding="48px"
      justifyContent="space-between"
      gap="24px"
      bgcolor={blue[50]}
      borderRadius={4}
    >
      <Grid container item width="fit-content">
        <Component {...props} />
      </Grid>
      <Grid container item justifyContent="space-between">
        {currentScreenCount !== 0 ? (
          <Button onClick={() => setCurrentScreenCount((prev) => prev - 1)}>
            Previous
          </Button>
        ) : (
          <Box width="10px" />
        )}
        {currentScreenCount !== screens.length - 1 && (
          <Button onClick={() => setCurrentScreenCount((prev) => prev + 1)}>
            Next
          </Button>
        )}
      </Grid>
    </Grid>
  );
}
