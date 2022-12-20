import React from 'react';
import {AvatarGroup, AvatarIconDiv} from "./styles";

interface IMembersItemProps {
  avatars: {
    src: any
    text: string
  }[]
}

const MembersItem = ({avatars}: IMembersItemProps) => {
  return (
    <td>
      <AvatarGroup>
        {avatars.map((e, key) => (
          <AvatarIconDiv style={{left: key * 12}} key={key + '_AvatarIconDiv'}>
            <img src={e.src} alt="avatar"/>
          </AvatarIconDiv>
        ))}
      </AvatarGroup>
    </td>
  );
};

export default MembersItem;