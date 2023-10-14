import { userSelectionsAtom } from "@/atoms";
import { getInvestments } from "@/db-utils";
import { Card, CardActionArea, Grid } from "@mui/material";
import { useAtomValue, useSetAtom } from "jotai";
import { use } from "react";
import Image from "next/image";

const investments = getInvestments();

const InvestmentSelections = () => {
  const data = use(investments);
  const setUserSelectionAtom = useSetAtom(userSelectionsAtom);
  const selectionValue = useAtomValue(userSelectionsAtom);
  const { investmentExperience, investmentGoal } =
    useAtomValue(userSelectionsAtom);
  const mainSuggestion = data.filter(
    (i) =>
      i.experienceLevel === investmentExperience &&
      i.investmentType === investmentGoal
  )[0];
  const otherSuggestions = data.filter(
    (i) =>
      (i.experienceLevel === investmentExperience ||
        i.investmentType === investmentGoal) &&
      i.id !== mainSuggestion.id
  );
  const handleSelection = (investmentId) => () =>
    setUserSelectionAtom((selections) => ({
      ...selections,
      investmentId,
    }));
  const isSelected = (id) => selectionValue.investmentId === id;
  return (
    <Grid>
      <Grid>
        Top suggestion
        <Card
          sx={{
            position: "relative",
            outline: "1ps solid blue",
          }}
        >
          <CardActionArea
            onClick={handleSelection(mainSuggestion.id)}
            sx={{
              height: "200px",
              width: "100%",
              background: isSelected(mainSuggestion.id) && "gray",
            }}
          >
            <Image
              src={mainSuggestion.image}
              alt={mainSuggestion.name}
              height={24}
              width={24}
            />
            <p>{mainSuggestion.name}</p>
            <p>
              {mainSuggestion.experienceLevel} - {mainSuggestion.investmentType}
            </p>
          </CardActionArea>
        </Card>
      </Grid>
      Other recommendations
      <Grid container gap="8px" justifyContent="space-between">
        {otherSuggestions.map(
          ({ id, name, image, investmentType, experienceLevel }) => (
            <Card
              sx={{
                position: "relative",
              }}
            >
              <CardActionArea
                onClick={handleSelection(id)}
                sx={{
                  height: "150px",
                  width: "150px",
                  background: isSelected(id) && "gray",
                }}
              >
                <Image src={image} alt={name} height={24} width={24} />
                <p>{name}</p>
                <p>
                  {experienceLevel} - {investmentType}
                </p>
              </CardActionArea>
            </Card>
          )
        )}
      </Grid>
    </Grid>
  );
};

export default InvestmentSelections;
