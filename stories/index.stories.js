import React from "react";
import { storiesOf } from "@storybook/react";
import Add from "../src/Components/Add";
import HeaderTable from "../src/Components/HeaderTable";
import Search from "../src/Components/Search";
import Sort from "../src/Components/Sort";
import Table from "../src/Components/Table";

storiesOf("Manage Task", module)
  .add("Add", () => <Add />)
  .add("HeaderTable", () => <HeaderTable />)  
  .add("Search", () => <Search />)  
  .add("Sort", () => <Sort />)  
  .add("Table", () => <Table />)  
