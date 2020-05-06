import React from 'react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import { Avatar } from './Avatar';

export default {
  title: 'Design System|Avatar',

  parameters: {
    component: Avatar,
    componentSubtitle:
      'Displays an image that represents a user or organization'
  }
};

export const standard = () => (
  <Avatar
    size='large'
    username='Sam'
    src='https://avatars3.githubusercontent.com/u/5452152'
  />
);

export const sizes = () => (
  <div>
    <Avatar
      size='large'
      username='Sam'
      src='https://avatars3.githubusercontent.com/u/5452152'
    />
    <Avatar
      size='medium'
      username='Sam'
      src='https://avatars3.githubusercontent.com/u/5452152'
    />
    <Avatar
      size='small'
      username='Sam'
      src='https://avatars3.githubusercontent.com/u/5452152'
    />
    <Avatar
      size='tiny'
      username='Sam'
      src='https://avatars3.githubusercontent.com/u/5452152'
    />
  </div>
);

/**
 * Comments doesn't show up in stories
 */
sizes.story = {
  parameters: { docs: { storyDescription: '4 sizes are supported.' } }
};

export const initials = () => (
  <div>
    <Avatar username='Sam' />
    <Avatar username='Don N' />
    <Avatar username='Kalani L' />
    <Avatar username='Minh H' />
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
    <Avatar size='large' username='Sam' />
    <Avatar
      size='large'
      username='Sam'
      src='https://avatars3.githubusercontent.com/u/5452152'
    />
  </div>
);

export const knobs = () => (
  <Avatar
    loading={boolean('Loading')}
    size={select('Size', ['tiny', 'small', 'medium', 'large'])}
    username='Sam'
    src='https://avatars3.githubusercontent.com/u/5452152'
  />
);

knobs.story = {
  decorators: [withKnobs]
};
