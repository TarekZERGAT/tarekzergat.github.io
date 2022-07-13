import React from 'react';
import { Config } from 'types';
import { Email, GitHub, LinkedIn, Resume } from 'icons';

const config: Config = {
  name: {
    display: 'Tarek ZERGAT',
    aria: 'My name is Tarek ZERGAT',
  },
  title: {
    display: 'Senior Software Engineer',
    aria: 'I am a senior software engineer',
  },
  buttons: [
    {
      display: 'GitHub',
      aria: 'Visit my GitHub profile',
      icon: <GitHub />,
      href: 'https://github.com/TarekZERGAT/',
    },
    {
      display: 'LinkedIn',
      aria: 'Visit my LinkedIn profile',
      icon: <LinkedIn />,
      href: 'https://www.linkedin.com/in/tarekzergat/',
    },
    {
      display: 'Resume',
      aria: 'View my resume in Google Drive',
      icon: <Resume />,
      href: 'https://drive.google.com/drive/folders/1iZPr8jleyKytRPJLr8F5EZuCuZUMu-4x?usp=sharing',
    },
    {
      display: 'Email',
      aria: 'Send me an email',
      icon: <Email />,
      href: 'mailto:t.zergat@gmail.com',
    },
  ],
};

export default config;
