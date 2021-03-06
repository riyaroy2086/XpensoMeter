import React from "react";
// import ReactDOM from "react-dom";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
// import { Pie } from 'react-chartjs-2';
import useStyles from "./styles";
import useTransactions from '../../useTransactions';

// import chartData from "../useTransactions";

const Details = ({title,subheader }) => {
  const classes = useStyles();
  const {total , chartData} = useTransactions(title);

  

  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} subheader={subheader}/>
      
      <CardContent>
        
        <Typography variant="h5">${total}</Typography>
        {/* <Pie data = {chartData}/> */}
        
        
      </CardContent>
    </Card>
  );
};

export default Details;
