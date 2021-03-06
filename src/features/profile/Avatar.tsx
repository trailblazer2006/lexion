/* eslint-disable react/jsx-wrap-multilines */
import { person } from 'ionicons/icons';
import React from 'react';

import { IonAvatar, IonIcon, IonImg } from '@ionic/react';

import { If } from '../../components';

type AvatarProps = {
  photoURL?: string;
};

const Avatar: React.FC<AvatarProps> = ({ photoURL }) => (
  <If
    condition={!!photoURL}
    then={
      <IonAvatar slot="start">
        <IonImg src={photoURL} />
      </IonAvatar>
    }
    else={<IonIcon slot="start" icon={person} />}
  />
);

export default Avatar;
