import useMediaQuery from 'lib/hooks/useMediaQuery';
import { mdQuery } from 'lib/styles/mq';
import { BackdropIcon } from './icons/BackdropIcon';
import { MenuIcon } from './icons/MenuIcon';
import { NotificationIcon } from './icons/NotificationIcon';
import { StopIcon } from './icons/StopIcon';
import { Text } from './Text';
import { Title } from './Title';

export type FeatureListProps = {
  children?: React.ReactNode;
  className?: string;
};

export let FeatureList = (props: FeatureListProps) => {
  let { children, className = '', ...rest } = props;
  let md = useMediaQuery(mdQuery);

  return (
    <div className="rounded-md bg-gray-light px-2 pt-8 pb-7 md:px-14 md:pl-[82px]" {...rest}>
      <ul className="flex flex-col gap-7 font-normal md:gap-14">
        <li className="flex gap-4 md:gap-7">
          <BackdropIcon className="shrink-0 text-blue" size={md ? 100 : 64}>
            <MenuIcon />
          </BackdropIcon>
          <div>
            <Title className="mb-3 md:mb-4" variant="stroke" size={md ? '2xl' : 'base'}>
              Агрегатор заявок
            </Title>
            <Text size={md ? 'md' : 'sm'}>
              Агрегатор заявок на займ из различных источников (веб-сайтов, партнеров компании и т.д.),
              позволяет более качественно управлять входящими обращениями клиентов
            </Text>
          </div>
        </li>
        <li className="flex gap-4 md:gap-7">
          <BackdropIcon className="shrink-0 text-blue" size={md ? 100 : 64}>
            <NotificationIcon />
          </BackdropIcon>
          <div>
            <Title className="mb-3 md:mb-4" variant="stroke" size={md ? '2xl' : 'base'}>
              Уведомления
            </Title>
            <Text size={md ? 'md' : 'sm'}>
              Sms и Email-уведомления обо всех операциях в компании. Также используется для уведомлений
              клиентам компании о текущем состоянии договора, акциях и скидках
            </Text>
          </div>
        </li>
        <li className="flex gap-4 md:gap-7">
          <BackdropIcon className="shrink-0 text-blue" size={md ? 100 : 64}>
            <StopIcon />
          </BackdropIcon>
          <div>
            <Title className="mb-3 leading-5 md:mb-4" variant="stroke" size={md ? '2xl' : 'base'}>
              Исключаем человеческий фактор
            </Title>
            <Text size={md ? 'md' : 'sm'}>
              XLombard MOD - дополнительные модули позволяют существенно оптимизировать ежедневную работу
              сотрудников. XLombard делает невозможными ошибки, связанные с человеческим фактором при
              оформлении договоров.
            </Text>
          </div>
        </li>
      </ul>
    </div>
  );
};
