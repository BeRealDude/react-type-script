import React, { FC, PropsWithChildren } from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps extends PropsWithChildren {
  width?: string;
  height?: string;
  variant: CardVariant;
  onClick: () => void;
}

const Card: FC<CardProps> = ({ width, height, variant, onClick, children }) => {
  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? "1px solid gray" : "none",
        background: variant === CardVariant.primary ? 'black' : ''
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
