import classNames from 'classnames';

export type GroomingBannerProps = {
  children?: React.ReactNode;
  className?: string;
};

export const GroomingBanner = (props: GroomingBannerProps) => {
  const { children, className = '', ...rest } = props;

  return (
    <div
      className={classNames(
        className,
        'bg-dog-wiggle flex rounded-3xl bg-orange-300 bg-contain bg-no-repeat p-5 pb-[280px] [background-position:60px_330px,top] md:p-10 md:[background-position:400px_30px,-100px_-80px] lg:min-h-[480px] lg:[background-size:600px,500px] lg:[background-position:700px_20px,-60px_-10px]',
      )}
      {...rest}
    >
      <div className="md:w-1/2 lg:flex lg:w-1/3 lg:flex-col">
        <h2 className="section_title text-white">Записывемся на ноготочки!</h2>
        <p className="my-6 text-base text-white">
          Полный комплекс процедур для красоты и здоровья вашего питомца
        </p>
        <form action="#" className="flex flex-col gap-2.5 lg:mt-auto lg:flex-row lg:gap-0">
          <input
            type="text"
            className="w-full rounded-full p-5 lg:px-5 lg:py-2.5 lg:pr-10"
            placeholder="+7 ___ ___ - __ - __"
          />
          <button
            className="rounded-full bg-green-500 p-5 text-white lg:-ml-8 lg:shrink-0 lg:px-5 lg:py-2.5"
            type="submit"
          >
            Записаться на груминг
          </button>
        </form>
      </div>
    </div>
  );
};
