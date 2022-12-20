import React from 'react';

import CompaniesItem from "./CompaniesItem";
import MembersItem from "./MembersItem";
import BudgetItem from "./BudgetItem";
import CompletionItem from "./Completion.Item";

import {TableComponent} from "./styles";

const avatar_1 = {text: "Ryan", src: 'https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-1.jpg'};
const avatar_2 = {text: "Romina", src: 'https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-2.jpg'};
const avatar_3 = {text: "Alexander", src: 'https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-3.jpg'};
const avatar_4 = {text: "Jessica", src: 'https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-4.jpg'};

const arr = [
  {img: {src: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/small-logos/logo-xd.svg", text: "Soft UI XD Version"},
    avatars: [avatar_1, avatar_2, avatar_3, avatar_4], money: "$14,000", percent: 60},
  {img: {src: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/small-logos/logo-atlassian.svg", text: "Add Progress Track"},
    avatars: [avatar_2, avatar_4], money: "$3,000", percent: 10},
  {img: {src: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/small-logos/logo-slack.svg", text: "Fix Platform Errors"},
    avatars: [avatar_3, avatar_1], money: "Not set", percent: 100},
  {img: {src: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/small-logos/logo-spotify.svg", text: "Launch our Mobile App"},
    avatars: [avatar_4, avatar_3, avatar_2, avatar_1], money: "$20,500", percent: 100},
  {img: {src: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/small-logos/logo-jira.svg", text: "Add the New Pricing Page"},
    avatars: [avatar_4], money: "$500", percent: 25},
  {img: {src: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/small-logos/logo-invision.svg", text: "Redesign New Online Shop"},
    avatars: [avatar_1, avatar_4], money: "$2,000", percent: 40},
]

const TableProject = () => {
  return (
    <TableComponent>
      <thead>
      <tr>
        <th>COMPANIES</th>
        <th>MEMBERS</th>
        <th>BUDGET</th>
        <th>COMPLETION</th>
      </tr>
      </thead>
      <tbody>
      {arr.map((e, key) => (
        <tr key={key + '_tbody'}>
          <CompaniesItem {...e.img}/>
          <MembersItem avatars={e.avatars}/>
          <BudgetItem money={e.money}/>
          <CompletionItem percent={e.percent}/>
        </tr>
      ))}
      </tbody>
    </TableComponent>
  );
};

export default TableProject;