import classNames from 'classnames';
import { clamp } from 'lodash';
import { ShoppingCart } from 'lucide-react';
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
  discount?: number;
  description: string;
  img?: string;
};

export const ItemCard = (props: ItemCardProps) => {
  const { children, className = '', title, description, discount, img = '', price, ...rest } = props;
  const [count, setCount] = useState(0);
  let bp = useBreakpoints();

  function handleChange(value: number) {
    setCount(clamp(value, 0, Infinity));
  }

  return (
    <div
      className={classNames(className, 'relative flex flex-col rounded-2xl bg-white p-2.5 shadow-sm')}
      {...rest}
    >
      <div className="absolute left-2.5 right-2.5 top-2.5 flex items-center justify-between">
        {discount && (
          <div
            className="text-2xs top-2.5 left-2.5 flex items-center rounded-full 
            bg-orange-400 p-1 px-2 font-semibold leading-none text-white md:text-xs"
          >
            {new Intl.NumberFormat('ru', { style: 'percent' }).format(-discount)}
          </div>
        )}
        <Responsive component={FavButton} sm={{ size: 18 }} md={{ size: 24 }} />
      </div>

      <img src={img} className="mb-2.5 aspect-square object-contain" />

      <div className="mb-3 flex gap-1.5">
        <h2 className="text-med font-bold text-mediumBlue-500 md:text-lg">
          {new Intl.NumberFormat('ru', {
            currency: 'RUB',
            style: 'currency',
            maximumFractionDigits: 0,
          }).format(price)}
        </h2>
        <h2 className="text-xs font-bold text-slate-400 line-through md:text-sm">
          {new Intl.NumberFormat('ru', {
            currency: 'RUB',
            style: 'currency',
            maximumFractionDigits: 0,
          }).format(price)}
        </h2>
      </div>

      <h2 className="mb-1.5 text-xs font-bold text-black md:text-sm">{title}</h2>
      <p className="text-2xs my-1.5 mb-6 text-slate-500 md:text-sm">{description}</p>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-2">
        {bp.md && <QuantityInput value={count} onChange={handleChange} className="lg:flex-none" />}
        <Responsive
          component={Button}
          variant="fill"
          sm={{ size: 'xs' }}
          md={{ size: 'md' }}
          className="flex-1 md:flex-none lg:flex-1"
        >
          В корзину <ShoppingCart size={18} />
        </Responsive>
      </div>
    </div>
  );
};
