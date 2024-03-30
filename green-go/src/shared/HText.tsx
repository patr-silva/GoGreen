import React from "react";

type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return <h1 className='title text-dark-green'>{children}</h1>;
};

export default HText;
