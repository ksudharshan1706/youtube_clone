
import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const SideBar = ({selectedCategory,setselectedCategory}) => (
    <Stack  direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}>
        {/* the complete sidebar is created, all are buttons with its own onClick() function
            which sets the selectedCategory.
        */}
        {categories.map((category) => (
            <button className="category-btn"
                onClick={()=>{setselectedCategory(category.name)}} // here selectedCategory changes everytime we click
                style={{
                  background: category.name === selectedCategory && "#FC1503",
                  color: "white",
                }}
                key={category.name}
            >
              <span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>
                {category.icon}
              </span>
              <span style={{ opacity: category.name === selectedCategory ? "1" : "0.7" }}>
                {category.name}
              </span>
            </button>
        ))}


    </Stack>
  )

export default SideBar