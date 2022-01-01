import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';

const story = { title: 'Welcome' };

export default story;

export const toStorybook = () => <Welcome showApp={linkTo('Button')} />;
