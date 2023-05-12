import React from 'react';
import {SpanPercent} from "../../styles";
import {DivCompletion, DivCompletionGradient} from "./styles";

interface ICompletionItemProps {
  percent: number
}

const CompletionItem = ({percent}: ICompletionItemProps) => {
  return (
    <td style={{width: 120}}>
      <div>
        <SpanPercent margin={'0'}>
          {percent}%
        </SpanPercent>
        <DivCompletion>
          <DivCompletionGradient percent={percent}/>
        </DivCompletion>
      </div>
    </td>
  );
};

export default CompletionItem;