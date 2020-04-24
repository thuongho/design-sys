import React from 'react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import { Avatar } from './Avatar';

export default {
  title: 'Design System|Avatar',

  parameters: {
    component: Avatar,
  },
};

export const standard = () => (
  <Avatar
    size='large'
    username='Tom Coleman'
    src='https://avatars2.githubusercontent.com/u/132554'
  />
);

export const sizes = () => (
  <div>
    <Avatar
      size='large'
      username='Tom Coleman'
      src='https://avatars2.githubusercontent.com/u/132554'
    />
    <Avatar
      size='medium'
      username='Tom Coleman'
      src='https://avatars2.githubusercontent.com/u/132554'
    />
    <Avatar
      size='small'
      username='Tom Coleman'
      src='https://avatars2.githubusercontent.com/u/132554'
    />
    <Avatar
      size='tiny'
      username='Tom Coleman'
      src='https://avatars2.githubusercontent.com/u/132554'
    />
  </div>
);

export const initials = () => (
  <div>
    <Avatar username='Tom Coleman' />
    <Avatar username='Dominic Nguyen' />
    <Avatar username='Kyle Suss' />
    <Avatar username='Michael Shilman' />
  </div>
);

export const loading = () => (
  <div>
    <Avatar size='large' loading />
    <Avatar size='medium' loading />
    <Avatar size='small' loading />
    <Avatar size='tiny' loading />
  </div>
);

export const large = () => (
  <div>
    <Avatar loading size='large' />
    <Avatar size='large' username='Tom Coleman' />
    <Avatar
      size='large'
      username='Tom Coleman'
      src='https://avatars2.githubusercontent.com/u/132554'
    />
  </div>
);

export const knobs = () => (
  <Avatar
    loading={boolean('Loading')}
    size={select('Size', ['tiny', 'small', 'medium', 'large'])}
    username='Sam'
    src='https://avatars3.githubusercontent.com/u/5452152?s=400&u=753fe2deefeea20a487819959e94630ae34f0e7c&v=4'
  />
);

knobs.story = {
  decorators: [withKnobs],
};