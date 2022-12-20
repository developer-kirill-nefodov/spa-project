import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import InputNickname from "./DetailSection/InputNickname";
import ContentMeal from "./DetailSection/ContentMeal";
import ReviewMeat from "./DetailSection/ReviewMeat";
import ItemMeat from "./DetailSection/ItemMeat";

import {useGetDetail} from "../../../utils/hooks/useGraphQL/useGetDetail";
import {useCreateDetail} from "../../../utils/hooks/useGraphQL/useCreateDetail";
import {useUpDateDetail} from "../../../utils/hooks/useGraphQL/useUpDateDetail";

import {IDetailState} from "../../../interfaces/review";

import {ArrReviewMeatData, ReviewMeatData, ReviewDataState} from "../../../utils/initialStates/review";
import {LineMeat, TitleDetail} from "./styles";

const DetailPage = () => {
  const [textState, setTextState] = useState<IDetailState>(ReviewDataState);
  const {register, handleSubmit, formState: {errors}} = useForm<IDetailState>();

  const [createDetail] = useCreateDetail(setTextState);
  const [updateDetail] = useUpDateDetail(setTextState);
  const [,, SchemaInput] = useGetDetail(setTextState);

  const onSubmit = (data: IDetailState) => {
    if (SchemaInput.required) {
      createDetail(data);
    } else {
      updateDetail(Object.assign({id: textState.id}, data));
    }
  };

  return (
    <form className='global-wrap' onSubmit={handleSubmit(onSubmit)}>
      <TitleDetail>Meal Review</TitleDetail>
      <ContentMeal title='Meal Components'>
        {ArrReviewMeatData.map((e, key) => (
          <ItemMeat
            key={"ItemMeat_" + key}
            textState={textState[e.idxName]}
            setTextStates={register(e.idxName, SchemaInput)}
            {...e}
          />
        ))}
      </ContentMeal>
      <LineMeat/>
      <ContentMeal title='Meal Review'>
        <ReviewMeat
          {...ReviewMeatData}
          textState={textState[ReviewMeatData.idxName]}
          setTextStates={register(ReviewMeatData.idxName, SchemaInput)}
        />
      </ContentMeal>
      <InputNickname
        textState={textState.nickname}
        setTextStates={register('nickname', SchemaInput)}
      />
    </form>
  );
}

export default DetailPage;
