import { ToggleButton, ToggleButtonGroup, IconButton } from "@mui/material";
import { useState } from "react";

type Props = {
  value: string;
  options: {
    icon: React.ComponentType;
    label: string;
  }[];
  ariaLabel: string;
};

const Icon = ({
  ComponentAsProp,
}: {
  ComponentAsProp: React.ComponentType;
}) => {
  return <ComponentAsProp />;
};

export const ViewSwitch = (props: Props) => {
  const [currentOption, setCurrentOption] = useState<string>(props.value);
  const handleCurrentOption = (
    event: React.MouseEvent<HTMLElement>,
    newOption: string
  ) => {
    if (newOption !== null) {
      setCurrentOption(newOption);
    }
  };
  return (
    <ToggleButtonGroup
      value={currentOption}
      exclusive
      onChange={handleCurrentOption}
      aria-label={props.ariaLabel}
    >
      {props.options.map((option) => (
        <ToggleButton
          key={option.label}
          value={option.label}
          aria-label={option.label}
          className="view-switch"
        >
          <Icon ComponentAsProp={option.icon} />
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
