import { memo } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Spinner = () => ( 
    <CircularProgress color="yellow" />
);

export default memo(Spinner);