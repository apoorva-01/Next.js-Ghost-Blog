import { GetStaticProps } from 'next';

export default function RedirectToFirstPage() {
  return null; // This page will never be rendered because of the redirect
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      destination: '/posts/page/1',
      permanent: true, // Make it permanent if you don't want this route to exist at all
    },
  };
};