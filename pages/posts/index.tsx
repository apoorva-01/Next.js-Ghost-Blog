import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/posts/page/1',
      permanent: false, // Set to true for permanent redirect
    },
  };
};

export default function RedirectToFirstPage() {
  return null; // This component won't render anything because the page is redirected
}