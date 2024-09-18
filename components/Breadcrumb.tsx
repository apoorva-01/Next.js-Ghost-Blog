// components/Breadcrumb.tsx
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

const Breadcrumb: FC = () => {
  const router = useRouter();
  const pathArray = router.asPath.split('/').filter((path) => path);

  // Function to capitalize each word
  const capitalize = (str: string): string => {
    return str
      .split('-') // Splitting by dashes to handle kebab-case paths
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumbItem">
          <Link href="/">Home</Link>
        </li>
        {pathArray.map((path, index) => {
          const href = '/' + pathArray.slice(0, index + 1).join('/');
          const isActive = index === pathArray.length - 1; // Check if it's the active breadcrumb
          return (
            <li key={index}  className={`breadcrumbItem ${isActive ? 'active' : ''}`}>
              <Link href={href}>
                {capitalize(decodeURIComponent(path))}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;