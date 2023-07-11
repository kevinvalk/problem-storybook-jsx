import type { Meta, StoryObj } from "@storybook/vue3";
import { App } from "./App";

const meta = {
  component: App,
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const StringTemplate: Story = {
  render: () => ({
    components: { App },
    template: "<div>overwriting with string</div>",
  }),
};

export const JsxTemplate: Story = {
  render: () => ({
    components: { App },
    template: <div>overwriting with jsx</div>,
  }),
};
