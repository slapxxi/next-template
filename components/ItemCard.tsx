import classNames from 'classnames';
import { clamp } from 'lodash';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useBreakpoints } from '../lib/hooks/useBreakpoints';
import { Button } from './Button';
import { FavButton } from './FavButton';
import { QuantityInput } from './QuantityInput';
import { Responsive } from './Responsive';

export type ItemCardProps = {
  children?: React.ReactNode;
  className?: string;
  title: string;
  price: number;
  previousPrice?: number;
  discount?: number;
  description: string;
  img?: string;
  horizontal?: boolean;
  options?: string[];
};

export const ItemCard = (props: ItemCardProps) => {
  const {
    children,
    className = '',
    title,
    description,
    discount,
    price,
    previousPrice,
    options,
    horizontal = false,
    img = '',
    ...rest
  } = props;
  const [count, setCount] = useState(0);
  let bp = useBreakpoints();

  function handleChange(value: number) {
    setCount(clamp(value, 0, Infinity));
  }

  return (
    <div className={classNames(className, 'item', horizontal && 'item--horizontal')} {...rest}>
      {/* image container */}
      <div className="relative mb-2.5">
        <div className="absolute left-0 right-0 top-0 flex items-center justify-between">
          {discount && (
            <div className="item__discount">
              {new Intl.NumberFormat('ru', { style: 'percent' }).format(-discount)}
            </div>
          )}
          <Responsive component={FavButton} sm={{ size: 18 }} md={{ size: 24 }} className="ml-auto" />
        </div>
        <Link href="/catalogue/example">
          <svg className="mx-auto w-full max-w-xs" viewBox="0 0 100 100">
            <image href={img} width={100} height={100} />
          </svg>
        </Link>
      </div>

      {/* content container */}
      <div className={classNames('flex flex-col', horizontal ? 'p-2.5' : 'flex-1')}>
        <div className="mb-1.5 flex gap-1.5">
          <h2 className="item__price">
            {new Intl.NumberFormat('ru', {
              currency: 'RUB',
              style: 'currency',
              maximumFractionDigits: 0,
            }).format(price)}
          </h2>
          {previousPrice && (
            <h2 className="item__prev_price">
              {new Intl.NumberFormat('ru', {
                currency: 'RUB',
                style: 'currency',
                maximumFractionDigits: 0,
              }).format(previousPrice)}
            </h2>
          )}
        </div>
        <h2 className="mb-1 text-xs font-bold text-black md:text-sm">{title}</h2>
        <p className={classNames('text-2xs mb-3 text-slate-500 md:text-sm', options ? 'mb-3' : 'mb-6')}>
          {description}
        </p>

        {options && (
          <div className="mb-6 flex flex-wrap gap-1">
            {options?.map((o, i) => (
              <span className={classNames('option', i === 0 && 'option--active')} key={o}>
                {o}
              </span>
            ))}
          </div>
        )}

        {/* buttons container */}
        <div className="mt-auto flex items-center justify-between gap-2 md:justify-end md:gap-4">
          {bp.md && <QuantityInput value={count} onChange={handleChange} className="lg:flex-none" />}
          <Responsive
            component={Button}
            variant="fill"
            sm={{ size: 'xs' }}
            md={{ size: 'md' }}
            className="flex-1 md:flex-none lg:flex-1"
          >
            <span>В корзину </span>
            <ShoppingCart size={18} />
          </Responsive>
        </div>
      </div>
    </div>
  );
};
