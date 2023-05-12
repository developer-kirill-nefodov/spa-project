import React from 'react';
import {SpanPercent} from "../../styles";

interface IBudgetItemProps {
  money: string
}

const BudgetItem = ({money}: IBudgetItemProps) => {
  return (
    <td>
      <SpanPercent>
        {money}
      </SpanPercent>
    </td>
  );
};

export default BudgetItem;