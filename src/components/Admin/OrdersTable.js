import React from "react";
import Title from "./Title";
import {Table, TableBody, TableCell, TableHead, TableRow, Link, Switch} from "@material-ui/core";

const label = { inputProps: { 'aria-label': 'Switch demo' } };

// Generate Order Data
function createData(id, date, name, address, paymentMethod, amount) {
    return { id, date, name, address, paymentMethod, amount};
  }

  const rows = [
    createData(
      0,
      '16 Mar, 2019',
      'Elvis Presley',
      'Tupelo, MS',
      'VISA ⠀•••• 3719',
      312.44,
    ),
    createData(
      1,
      '16 Mar, 2019',
      'Paul McCartney',
      'London, UK',
      'VISA ⠀•••• 2574',
      866.99,
    ),
    createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
    createData(
      3,
      '16 Mar, 2019',
      'Michael Jackson',
      'Gary, IN',
      'AMEX ⠀•••• 2000',
      654.39,
    ),
    createData(
      4,
      '15 Mar, 2019',
      'Bruce Springsteen',
      'Long Branch, NJ',
      'VISA ⠀•••• 5919',
      212.79,
    ),
  ];
  
  function preventDefault(event) {
    event.preventDefault();
  }

const Orders = () => {

  const handleChange = () => {
    console.log('delivery') /*dispatch here */
  };
    return (
        <React.Fragment>
          <Title>Paid Orders</Title>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Address</TableCell>
                {/* <TableCell>Payment Method</TableCell> */}
                <TableCell>Sale Amount</TableCell>
                <TableCell align="right">is Deliveried</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.address}</TableCell>
                  {/* <TableCell>{row.paymentMethod}</TableCell> */}
                  <TableCell>{`$${row.amount}`}</TableCell>
                  <TableCell align="right">
                    <Switch {...label} color="primary"
                    // disabled
                    onChange={handleChange}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
            See more orders
          </Link>
        </React.Fragment>
      );
};

export default Orders;