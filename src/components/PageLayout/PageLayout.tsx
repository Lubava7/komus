import React, { FC, ReactNode } from 'react';
import BackToTop from '../Navbar/Navbar';

interface Props {
  children?: ReactNode;
}

const PageLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <BackToTop PageChildren={children} />
      {/* {children} */}
    </div>
  );
};

export default PageLayout;
