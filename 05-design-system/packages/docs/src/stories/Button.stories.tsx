import { ArrowRight } from 'phosphor-react'

import type { StoryObj, Meta } from '@storybook/react'


import { Button, ButtonProps } from '@ignite-ui/react'

export default {
  title: 'Form/Button',
  component: Button,

  args: {
    children: 'Send'
  }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create New'
  }
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel'
  }
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm'
  }
}

export const WhitIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
      Próximo passo
      <ArrowRight  />
      </>
    )
  }
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  }
}