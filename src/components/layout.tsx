import { ReactElement } from 'react';
import Head from 'next/head';

import Header from './Header';

type LayoutProps = Required<{
  readonly children: ReactElement;
}> & {
  title: string;
};

export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <Header title={title} />
        <title>{title}</title>
      </Head>
      <main>{children}</main>
    </>
  );
}
