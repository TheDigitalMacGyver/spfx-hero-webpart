import * as React from 'react';
import { Stack, Text, PrimaryButton } from '@fluentui/react';
import { IHeroProps } from './IHeroProps';

const Hero: React.FC<IHeroProps> = ({ title }) => {
  return (
    <Stack horizontalAlign="center" verticalAlign="center" verticalFill styles={{ root: { padding: 40, backgroundColor: '#f4f4f4' } }}>
      <Text variant="xxLarge">{title}</Text>
      <Text variant="large">Welcome to Digital MacGyver</Text>
      <PrimaryButton text="Learn More" onClick={() => window.alert('Button clicked!')} />
    </Stack>
  );
};

export default Hero;
