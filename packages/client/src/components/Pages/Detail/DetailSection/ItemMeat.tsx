import React from 'react';

import PopularMeat from "./PopularMeat";

import {IItemMeat} from "../../../../interfaces/review";

import {InputMeat, ItemMeatDiv} from "../styles";

const ItemMeat = (item: IItemMeat | any) => {
  return (
    <ItemMeatDiv>
      <PopularMeat {...item}/>
      <InputMeat
        {...item.setTextStates}
        type="text"
        defaultValue={item.textState}
        placeholder='Your thoughts about the component'
      />
    </ItemMeatDiv>
  );
};

export default ItemMeat;