import React, {useState} from "react";
import PropTypes from 'prop-types';
import {Box, Tabs, Tab, Typography} from "@material-ui/core"
import Pets from "./Pets";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
  
function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}


const AccountTab = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
    setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="My pets" {...a11yProps(0)} />
            <Tab label="History" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Pets />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      </Box>
    )
};

export default AccountTab