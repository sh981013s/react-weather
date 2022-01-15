import React from 'react';
import Card from '../components/home/Card';

export default {
  title: 'HomeCard',
  component: Card,
};

//👇 We create a “template” of how args map to rendering
const STORY_TEXT = 'I love Storybook!';

export const Default = () => <Card>{STORY_TEXT}</Card>;

export const Red = () => <Card color="red">{STORY_TEXT}</Card>;

export const Italic = () => <Card italic>{STORY_TEXT}</Card>;

export const Underline = () => <Card underline>{STORY_TEXT}</Card>;
