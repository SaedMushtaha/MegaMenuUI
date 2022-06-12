import * as React from 'react';
import { Stack, IStackTokens } from '@fluentui/react';
import { TextField, MaskedTextField } from '@fluentui/react/lib/TextField';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import "./Button.css";
export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}

// Example formatting
const stackTokens: IStackTokens = { childrenGap: 40 };

export const ButtonUI: React.FunctionComponent<IButtonExampleProps> = props => {
  const { disabled, checked } = props;

  return (
    <Stack horizontal tokens={stackTokens}>
      {/* <DefaultButton text="+ Add Entry" onClick={_alertClicked} allowDisabledFocus disabled={disabled} checked={checked} /> */}
      <PrimaryButton text="+ Add Entry" onClick={_alertClicked} allowDisabledFocus disabled={disabled} checked={checked} />
   <TextField ariaLabel="Required without visible label" required />
   <TextField ariaLabel="Required without visible label" required />
       </Stack>
  );
};

function _alertClicked(): void {
  alert('Clicked');
}
