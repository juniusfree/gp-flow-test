import FormFieldsWrapper from "@/components/FormFieldsWrapper";
import { getInvestments } from "@/db-utils";
import Grid from "@mui/material/Grid";

export default async function Home() {
  return (
    <Grid mt="100px">
      <FormFieldsWrapper />
    </Grid>
  );
}
