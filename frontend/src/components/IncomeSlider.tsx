"use client";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";

function valuetext(value) {
  return `$${value}`;
}

const marks = [
  {
    value: 0,
    label: "$0",
  },
  {
    value: 50,
    label: "$50K",
  },
  {
    value: 100,
    label: "$100K and above",
  },
];

export default function IncomeSlider() {
  const [value, setValue] = useState([25, 75]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "Income range"}
        value={value}
        onChange={handleChange}
        getAriaValueText={valuetext}
        marks={marks}
        valueLabelDisplay="on"
      />
    </Box>
  );
}
