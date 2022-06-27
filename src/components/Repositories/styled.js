import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
  font-size: 1em;
  width: 100%;
  margin-top: 1em;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 0.25em;
  display: flex;
  margin: 0;
`;

WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)`
  border-radius: 0.7em;
  border: 1px solid rgb(150, 150, 150);
  padding: 0.6em;
  user-select: none;
  cursor: pointer;
  margin: 0 1px 0 0;
  background-color: white;

  &:focus {
    outline: none;
    box-shadow: inset 0 0.4em 0.2em rgba(0, 200, 250, 0.2);
  }

  &.is-selected {
    border-radius: 0;
    border-top-left-radius: 0.7em;
    border-top-right-radius: 0.7em;
    border-bottom: 1px solid white;
  }
`;

WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel)`
  display: none;
  height: auto;
  padding: 0.5em;
  margin-top: -0.3em;
  border-radius: 0.35em;
  border: 1px solid rgb(100, 100, 100);
  box-shadow: 0 0.3em 0.4em rgba(0, 200, 250, 0.2);

  &.is-selected {
    display: block;
  }
`;

WrapperTabPanel.tabsRole = 'TabPanel';

export const WrapperList = styled.div`
  display:flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
`

