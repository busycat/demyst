import { Body1, Button } from '@fluentui/react-components';
import {
  Code16Filled,
  Heart16Filled,
  Link12Filled,
} from '@fluentui/react-icons';
import { FC } from 'react';
export const Footer: FC = () => {
  return (
    <div
      style={{ height: '3rem', padding: '2rem', gap: '1rem', display: 'flex' }}
    >
      <Body1>
        Made with <Heart16Filled /> by{' '}
        <a href="https://www.linkedin.com/in/shubham1100/">Shubham Sharma</a>
      </Body1>
      <div style={{ flexGrow: 1 }} />

      <Button
        onClick={() => {
          window.open('https://github.com/busycat/demyst/');
        }}
        icon={<Code16Filled />}
      >
        Github
      </Button>
      <Button
        onClick={() => {
          window.open('https://www.linkedin.com/in/shubham1100/');
        }}
        icon={<Link12Filled />}
      >
        Linkedin
      </Button>
    </div>
  );
};
