import { ReactElement } from 'react';

import Header from './Header';

type LayoutProps = Required<{
  readonly children: ReactElement;
}> & {
  title: string;
};

export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Header title={title} />
      <main>{children}</main>
    </>
  );
}
