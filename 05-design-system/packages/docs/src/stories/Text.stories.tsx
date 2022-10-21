import type { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    size: 'md',
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, repudiandae. Error delectus sint sit culpa mollitia, harum corrupti ut rerum a. Explicabo, architecto minus! Esse libero sapiente quia velit tempora.'
  },
  argTypes: {
    variant: {
      options: ['xx', 'xs', 'sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  }
}


