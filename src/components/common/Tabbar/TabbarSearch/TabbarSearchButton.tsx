  import React from "react";
  import SearchIcon from "../../Icons/SearchIcon";

  const TabbarSearchButton = ({ onClick }: any) => {
    return (
      <button className="tabbar__search__button" type="button" onClick={onClick}>
        <SearchIcon />
      </button>
    );
  };

  export default TabbarSearchButton;
