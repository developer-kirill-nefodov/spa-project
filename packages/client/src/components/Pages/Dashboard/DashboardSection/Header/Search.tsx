import React from 'react';

import icon_search from '../../../../../utils/assets/svg/icons8-search.svg';

import * as S from "./styles";

const Search = () => {
  return (
    <S.SearchWrapper>
      <S.SearchIconWrapper>
        <img
          src={icon_search}
          alt={icon_search}
        />
      </S.SearchIconWrapper>
      <S.SearchInput
        type="text"
        placeholder="Type here..."
      />
    </S.SearchWrapper>
  );
};

export default Search;