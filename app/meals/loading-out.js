import React from "react";
import classes from "@/app/loading.module.css";

const MealsLoadingPage = () => {
  return (
    <>
      <p className={classes.loading}>Fetching meals...</p>
    </>
  );
};

export default MealsLoadingPage;
