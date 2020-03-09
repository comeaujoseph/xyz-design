import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';

import Button from '.';


storiesOf('Button', module)
    .addDecorator(centered)
    .add('base', () => (
        <Button>base button</Button>
    ))
    .add('disabled', () => (
        <Button disabled>disabled button</Button>
    ))
    .add('neutral', () => (
        <Button isNeutral>neutral button</Button>
    ))
    .add('outline', () => (
        <Button isOutline>outline button</Button>
    ))
    .add('theme', () => (
        <Button isTheme>theme button</Button>
    ))
    .add('outline theme', () => (
        <Button isOutlineTheme>o-theme button</Button>
    ))
    .add('destructive', () => (
        <Button isDestructive>destructive button</Button>
    ))
    .add('text destructive', () => (
        <Button isTextDestructive>text destructive button</Button>
    ))
    .add('success', () => (
        <Button isSuccess>success button</Button>
    ))
    .add('full width', () => (
        <Button isFullWidth>full width button</Button>
    ))
    .add('stretch', () => (
        <Button isStretch>stretch button</Button>
    ));
