'use client';

import clsx from 'clsx';
import {useParams} from 'next/navigation';
import {ChangeEvent, ReactNode, useRef, useTransition} from 'react';
import {useRouter, usePathname} from '../../../navigation';
import globe from '../../../../public/images/globe.svg'

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;

    startTransition(() => {
      router.replace(
        // @ts-expect-error
        {pathname, params},
        {locale: nextLocale.replace('_', '-')}
      );
    });
  }

  const selectRef = useRef<HTMLSelectElement>(null);

  const handleLabelClick = (event: React.MouseEvent<HTMLLabelElement>) => {
    event.stopPropagation(); // Stop event propagation
    
    selectRef.current && selectRef.current.focus();
  };

  return (
    <label
      className={clsx(
        'relative  flex items-center align-middle cursor-pointer hover:opacity-80 group',
        isPending && 'transition-opacity [&:disabled]:opacity-30'
      )}
    >
      <p className="sr-only">{label}</p>
      <div style={{maskImage: `url("${globe.src}")`}} className="block w-4 h-4 group-hover:opacity-80 bg-black dark:bg-white svgMask absolute top-[1px]"></div>
      <select
        ref={selectRef}
        style={{direction: 'rtl'}}
        className="inline-flex items-center justify-center appearance-none cursor-pointer bg-transparent rounded-xl  pl-5 focus-visible:outline-none direc z-10"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </label>
  );
}
