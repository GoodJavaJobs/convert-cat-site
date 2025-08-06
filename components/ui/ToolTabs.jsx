import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

function ToolTabs({ children }) {
  return (
    <Tabs>
      <TabList>
        <Tab>Customize</Tab>
        <Tab>Install</Tab>
      </TabList>

      {children}
    </Tabs>
  );
}

export default ToolTabs;
