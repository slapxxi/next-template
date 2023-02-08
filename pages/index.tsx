import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { Button } from 'components/Button';
import { CalculatorPic } from 'components/CalculatorPic';
import { Card, CardContainer } from 'components/Card';
import { FeatureList } from 'components/FeatureList';
import { AttachmentIcon } from 'components/icons/AttachmentIcon';
import { BackdropIcon } from 'components/icons/BackdropIcon';
import { CheckmarkIcon } from 'components/icons/CheckmarkIcon';
import { ClockIcon } from 'components/icons/ClockIcon';
import { ExternalIcon } from 'components/icons/ExternalIcon';
import { LocationIcon } from 'components/icons/LocationIcon';
import { MailIcon } from 'components/icons/MailIcon';
import { MessageIcon } from 'components/icons/MessageIcon';
import { PhoneIcon } from 'components/icons/PhoneIcon';
import { PuzzleIcon } from 'components/icons/PuzzleIcon';
import { TelegramIcon } from 'components/icons/TelegramIcon';
import { UserIcon } from 'components/icons/UserIcon';
import { WhatsappIcon } from 'components/icons/WhatsappIcon';
import { Input } from 'components/Input';
import { Integrations } from 'components/Integrations';
import { Scheme } from 'components/Scheme';
import { SquareIcon } from 'components/SquareIcon';
import { Strong } from 'components/Strong';
import { Text, TextProps } from 'components/Text';
import { TextBadge } from 'components/TextBadge';
import { Title, TitleProps } from 'components/Title';
import useMediaQuery from 'lib/hooks/useMediaQuery';
import { mdQuery } from 'lib/styles/mq';
import styles from 'styles/index.module.scss';
import { TextLink } from '../components/TextLink';

let IndexPage = () => {
  let md = useMediaQuery(mdQuery);
  let titleSize: TitleProps['size'] = md ? '4xl' : '2xl';
  let textSize: TextProps['size'] = md ? 'md' : 'sm';

  return (
    <main className={`mt-8 pt-2 text-sm font-medium ${styles.main}`}>
      <section className="cont gap-2 md:mb-12 md:flex">
        <div className="md:flex-1">
          <Title size={md ? '6xl' : '2xl'} variant="decorated" className="mb-5 leading-snug">
            Лучшая программа для автоматизации <em>автоломбарда</em>
          </Title>
          <Text className="mb-3 md:mb-12 md:py-7 md:text-3xl">
            Начните работать в XLombard бесплатно уже сегодня
          </Text>
          <div className="flex flex-col items-start md:flex-row md:items-center md:gap-7">
            <Button
              variant="fill"
              className="mb-2 px-3 md:flex-1 md:justify-center"
              radius="md"
              size={md ? 'lg' : undefined}
            >
              Хочу попробовать!
            </Button>
            <Text className="mb-2 md:flex-1" subtle size={md ? 'md' : 'xs'}>
              Подберем пакет документов и сделаем базовые настройки
            </Text>
          </div>
        </div>

        <Scheme className="md:flex-1" />
      </section>

      <section className={`relative z-0 mb-8 bg-gray-light pt-8 pb-12 md:my-24 ${styles.section}`}>
        <div className="cont">
          <div className="md:my-14 md:flex md:gap-8">
            <Title
              variant="decorated"
              decorationColor="green-medium"
              size={titleSize}
              className="mb-4 md:w-min"
            >
              Идеально для любого автоломбарда
            </Title>
            <div className="mb-12 flex flex-col gap-3 md:flex-row md:gap-4">
              <Card
                title="Обратный лизинг"
                description="Описание типа ломбарда на две строки"
                footer={
                  <div className="flex items-center gap-2">
                    <AttachmentIcon strokeOpacity=".9" />
                    <strong>ДКП + ДФА</strong>
                  </div>
                }
              />
              <Card
                title="Ломбард Classic"
                description="Описание типа ломбарда на две строки"
                footer={
                  <div className="flex items-center gap-2">
                    <AttachmentIcon strokeOpacity=".9" />
                    <strong>Залоговый билет</strong>
                  </div>
                }
              />
              <Card
                title="МФО или КПК"
                description="Описание типа ломбарда на две строки"
                footer={
                  <div className="flex items-center gap-2">
                    <AttachmentIcon strokeOpacity=".9" />
                    <strong>ЗАЙМ+ЗАЛОГ</strong>
                  </div>
                }
              />
            </div>
          </div>

          <div className="flex md:my-20 md:gap-24">
            <CalculatorPic
              className="w-[120px] md:w-[200px]"
              offsetX={md ? undefined : 20}
              offsetY={md ? 30 : 15}
            />
            <div className="flex flex-col gap-4">
              <Title variant="decorated" size={titleSize}>
                Создали специальную конфигурацию для обратного лизинга
              </Title>
              <Text className="font-normal" size="lg">
                Учли все тонкости бизнеса и подключили необходимые сервисы
              </Text>
              <Button variant="fill" radius="lg" className="self-start" size="lg">
                Сел и поехал
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="cont my-12 px-5" id="features">
        <div className="mb-4 items-center justify-between md:my-14 md:flex">
          <Title variant="decorated" size={titleSize}>
            Возможности <em>XLombard BPM System</em>
          </Title>
          <Button variant="fill" radius="xl" size="lg" className="hidden md:ml-0 md:block">
            Попробовать бесплатно
          </Button>
        </div>

        {!md && (
          <Accordion.Root
            className="relative my-4 flex flex-col gap-1 md:gap-2"
            type="single"
            defaultValue="item-1"
            collapsible={!md}
          >
            <Accordion.Item className="acc-item" value="item-1">
              <Accordion.AccordionTrigger className="acc-trigger">
                Лидогенерация и обработка заявок
              </Accordion.AccordionTrigger>
              <Accordion.AccordionContent className="acc-content">
                <FeatureList />
              </Accordion.AccordionContent>
            </Accordion.Item>
            <Accordion.Item className="acc-item" value="item-2">
              <Accordion.AccordionTrigger className="acc-trigger">
                Скоринг и комплексная проверка заёмщика
              </Accordion.AccordionTrigger>
              <Accordion.AccordionContent className="acc-content">
                <FeatureList />
              </Accordion.AccordionContent>
            </Accordion.Item>
            <Accordion.Item className="acc-item" value="item-3">
              <Accordion.AccordionTrigger className="acc-trigger">
                Оформление договора и выдача ДС заёмщику
              </Accordion.AccordionTrigger>
              <Accordion.AccordionContent className="acc-content">
                <FeatureList />
              </Accordion.AccordionContent>
            </Accordion.Item>
            <Accordion.Item className="acc-item" value="item-4">
              <Accordion.AccordionTrigger className="acc-trigger">
                Операционный учёт текущих договоров
              </Accordion.AccordionTrigger>
              <Accordion.AccordionContent className="acc-content">
                <FeatureList />
              </Accordion.AccordionContent>
            </Accordion.Item>
            <Accordion.Item className="acc-item" value="item-5">
              <Accordion.AccordionTrigger className="acc-trigger">
                Полный контроль общения с клиентом
              </Accordion.AccordionTrigger>
              <Accordion.AccordionContent className="acc-content">
                <FeatureList />
              </Accordion.AccordionContent>
            </Accordion.Item>
            <Accordion.Item className="acc-item" value="item-6">
              <Accordion.AccordionTrigger className="acc-trigger">
                Управленческие отчёты, аналитика и виджеты
              </Accordion.AccordionTrigger>
              <Accordion.AccordionContent className="acc-content">
                <FeatureList />
              </Accordion.AccordionContent>
            </Accordion.Item>
            <Accordion.Item className="acc-item" value="item-7">
              <Accordion.AccordionTrigger className="acc-trigger">
                Учёт всех расходов и доходов
              </Accordion.AccordionTrigger>
              <Accordion.AccordionContent className="acc-content">
                <FeatureList />
              </Accordion.AccordionContent>
            </Accordion.Item>
            <Accordion.Item className="acc-item" value="item-8">
              <Accordion.AccordionTrigger className="acc-trigger">
                Реализация залогового имущества
              </Accordion.AccordionTrigger>
              <Accordion.AccordionContent className="acc-content">
                <FeatureList />
              </Accordion.AccordionContent>
            </Accordion.Item>
          </Accordion.Root>
        )}

        {md && (
          <Accordion.Root className="flex gap-6" type="single" defaultValue="item-1">
            <div className="flex w-[287px] shrink-0 flex-col gap-4">
              <Accordion.Item className="acc-item" value="item-1">
                <Accordion.AccordionTrigger className="acc-trigger big-shadow">
                  <Text>Лидогенерация и обработка заявок</Text>
                </Accordion.AccordionTrigger>
              </Accordion.Item>
              <Accordion.Item className="acc-item" value="item-2">
                <Accordion.AccordionTrigger className="acc-trigger">
                  <Text>Скоринг и комплексная проверка заёмщика</Text>
                </Accordion.AccordionTrigger>
              </Accordion.Item>
              <Accordion.Item className="acc-item" value="item-3">
                <Accordion.AccordionTrigger className="acc-trigger">
                  <Text>Оформление договора и выдача ДС заёмщику</Text>
                </Accordion.AccordionTrigger>
              </Accordion.Item>
            </div>
            <div>
              <Accordion.Item className="acc-item" value="item-1">
                <Accordion.AccordionContent className="acc-content">
                  <FeatureList />
                </Accordion.AccordionContent>
              </Accordion.Item>
              <Accordion.Item className="acc-item" value="item-2">
                <Accordion.AccordionContent className="acc-content">
                  <FeatureList />
                </Accordion.AccordionContent>
              </Accordion.Item>
              <Accordion.Item className="acc-item" value="item-3">
                <Accordion.AccordionContent className="acc-content">
                  <FeatureList />
                </Accordion.AccordionContent>
              </Accordion.Item>
            </div>
          </Accordion.Root>
        )}

        <Button variant="fill" radius="md" className="ml-4 md:ml-0 md:hidden">
          Попробовать бесплатно
        </Button>
      </section>

      {/* integrations */}
      <section className="cont my-12">
        <Title size={titleSize} variant="decorated" decorationColor="blue-light" className="mb-9 md:mb-20">
          Интеграции с различными системами
        </Title>
        <Integrations />
      </section>

      <section className={`relative z-0 my-12 pt-8 pb-8 ${styles.section}`}>
        <div className="cont">
          <div className="items-center justify-between md:mb-16 md:flex">
            <Title variant="decorated" size={titleSize} decorationColor="green-medium" className="mb-3">
              Ни у кого нет — <em>а у нас есть</em>!
            </Title>
            <Button variant="fill" radius="md" className="mb-6">
              Заказать презентацию системы
            </Button>
          </div>
          <ul className="flex grid-cols-3 flex-col gap-3 font-normal md:grid">
            <li>
              <CardContainer className={classNames(styles.cardContainer)}>
                <Title variant="stroke" className="mb-title leading-5">
                  Электронный акт осмотра ТС
                </Title>
                <Text subtle size={md ? 'md' : 'sm'} className="mt-auto">
                  Позволяет фиксировать все повреждения ТС в электронном виде на планшете
                </Text>
              </CardContainer>
            </li>
            <li>
              <CardContainer className={classNames(styles.cardContainer)}>
                <Title variant="stroke" className="mb-title leading-5">
                  Регулярная проверка портфеля по ГИБДД
                </Title>
                <Text subtle size={md ? 'md' : 'sm'}>
                  Позволяет оперативно узнавать о новых ограничениях, изменениях регистрационных данных и т.д.
                </Text>
              </CardContainer>
            </li>
            <li>
              <CardContainer className={classNames(styles.cardContainer)}>
                <Title variant="stroke" className="mb-title leading-5">
                  Корсар — куда уходят ваши клиент
                </Title>
                <Text subtle size={md ? 'md' : 'sm'}>
                  Позволяет узнать, куда ушёл клиент при отказе от сделки или где перезаложился, если уже был
                  залог
                </Text>
              </CardContainer>
            </li>
            <li>
              <CardContainer className={classNames(styles.cardContainer)}>
                <Title variant="stroke" className="mb-title leading-5">
                  Полностью адаптивный интерфейс
                </Title>
                <Text subtle size={md ? 'md' : 'sm'}>
                  Настройка отображения только необходимы данных для работы конкретного сотрудника или роли
                </Text>
              </CardContainer>
            </li>
            <li>
              <CardContainer className={classNames(styles.cardContainer)}>
                <Title variant="stroke" className="mb-title leading-5">
                  GPS-мониторинг текущего портфеля
                </Title>
                <Text subtle>Узнаем статусы маяков ТС непосредственно из сервисов телематики</Text>
              </CardContainer>
            </li>
            <li>
              <CardContainer className={classNames(styles.cardContainer)}>
                <Title variant="stroke" className="mb-title leading-5">
                  Личный кабинет инвестора
                </Title>
                <Text subtle size={md ? 'md' : 'sm'}>
                  Сделали удобный кабинет, где можно наблюдать все начисленные и выплаченные проценты
                </Text>
              </CardContainer>
            </li>
          </ul>
        </div>
      </section>

      <section className="cont mb-8" id="summary">
        <Title variant="decorated" size={md ? '4xl' : '2xl'} className="mb-6 md:mb-20">
          Подводим итоги 2022 года
        </Title>

        <div className="mb-6 flex justify-between gap-4 md:mb-16 md:gap-8">
          <div className="items-center gap-4 md:flex md:w-min md:flex-1">
            <div className="mb-3 md:mb-0">
              <Strong className="decorate" size={md ? 80 : 'md'}>
                +28
              </Strong>
            </div>
            <Text size={md ? 'md' : 'sm'} className="md:mb-4">
              городов присутствия нашей программы
            </Text>
          </div>
          <div className="items-center gap-4 md:flex md:flex-1">
            <div className="mb-3 md:mb-0">
              <Strong className="decorate" size={md ? 80 : 'md'}>
                +6
              </Strong>
            </div>
            <Text size={md ? 'md' : 'sm'} className="md:mb-4">
              новых модулей разработано
            </Text>
          </div>
          <div className="items-center gap-4 md:flex md:flex-1">
            <div className="mb-3 md:mb-0">
              <Strong className="decorate" size={md ? 80 : 'md'}>
                +9
              </Strong>
            </div>
            <Text size={md ? 'md' : 'sm'} className="md:mb-4">
              новых интеграций добавлено
            </Text>
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-3 md:grid-cols-4 md:grid-rows-1">
          <div className="flex flex-col justify-between rounded-lg bg-violet-light p-5 text-xs">
            <Text size={md ? 'md' : 'sm'} className="md:mb-4">
              Сделано больших и маленьких доработок уже существующих модулей
            </Text>
            <div className="flex items-center gap-2 md:gap-4">
              <PuzzleIcon className="text-violet" size={md ? 48 : 24} />
              <Strong size={md ? 'xl' : 'md'}>240</Strong>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg bg-violet-light p-5 text-xs">
            <Text size={md ? 'md' : 'sm'} className="md:mb-4">
              Исправлено недочетов в программе
            </Text>
            <div className="flex items-center gap-2 md:gap-4">
              <CheckmarkIcon className="text-violet" size={md ? 48 : 24} />
              <Strong size={md ? 'xl' : 'md'}>210</Strong>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg bg-violet-light p-5 text-xs">
            <Text size={md ? 'md' : 'sm'} className="md:mb-4">
              Обработано обращений клиентов в техническую поддержку
            </Text>
            <div className="flex items-center gap-2 md:gap-4">
              <MailIcon className="text-violet" size={md ? 48 : 24} />
              <Strong size={md ? 'xl' : 'md'}>2 109</Strong>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg bg-violet-light p-5 text-xs">
            <Text size={md ? 'md' : 'sm'} className="md:mb-4">
              Пришло новых людей в коллектив XLombard
            </Text>
            <div className="flex items-center gap-2 md:gap-4">
              <UserIcon className="text-violet" size={md ? 48 : 24} />
              <Strong size={md ? 'xl' : 'md'}>4</Strong>
            </div>
          </div>
        </div>
      </section>

      <section className={`relative z-0 bg-violet-light font-normal ${styles.section2}`} id="recommended-by">
        <div className="cont pt-8 md:pt-16">
          <div className="mb-4 items-center justify-between pt-8 md:mb-16 md:flex">
            <Title size={titleSize} variant="decorated" decorationColor="blue-light" className="mb-3 md:mb-0">
              Кто нас может порекомендовать
            </Title>
            <Button variant="fill" radius="md" className="mb-8 md:mb-0">
              Хочу попробовать!
            </Button>
          </div>
        </div>

        <div className="pb-24">
          <div className="flex snap-x snap-mandatory scroll-px-32 gap-3 overflow-x-scroll px-[max(calc((100%-1200px)/2-10px),20px)] pb-8">
            <CardContainer className="flex min-h-[280px] w-[234px] shrink-0 snap-center flex-col gap-2 px-6 py-7 md:w-[390px]">
              <img src="image.png" alt="" width={140} className="mb-2 self-center md:mb-10" />
              <Text className="mb-2" size={md ? 'md' : 'sm'}>
                Полностью подходит под нашу специфику деятельности. Лучший продукт на рынке...
              </Text>
              <TextLink href="#" className="md:mb-10">
                <Text size={md ? 'md' : 'sm'}>Читать полностью</Text>
              </TextLink>
              <Strong className="mt-auto" size={md ? 'xs' : '2xs'}>
                Исполнительный директор Владимир Иванов
              </Strong>
            </CardContainer>
            <CardContainer className="flex min-h-[280px] w-[234px] shrink-0 snap-center flex-col gap-2 px-6 py-7 md:w-[390px]">
              <img src="image.png" alt="" width={140} className="mb-2 self-center md:mb-10" />
              <Text className="mb-2" size={md ? 'md' : 'sm'}>
                Полностью подходит под нашу специфику деятельности. Лучший продукт на рынке...
              </Text>
              <TextLink href="#" className="md:mb-10">
                <Text size={md ? 'md' : 'sm'}>Читать полностью</Text>
              </TextLink>
              <Strong className="mt-auto" size={md ? 'xs' : '2xs'}>
                Исполнительный директор Владимир Иванов
              </Strong>
            </CardContainer>
            <CardContainer className="flex min-h-[280px] w-[234px] shrink-0 snap-center flex-col gap-2 px-6 py-7 md:w-[390px]">
              <img src="image.png" alt="" width={140} className="mb-2 self-center md:mb-10" />
              <Text className="mb-2" size={md ? 'md' : 'sm'}>
                Полностью подходит под нашу специфику деятельности. Лучший продукт на рынке...
              </Text>
              <TextLink href="#" className="md:mb-10">
                <Text size={md ? 'md' : 'sm'}>Читать полностью</Text>
              </TextLink>
              <Strong className="mt-auto" size={md ? 'xs' : '2xs'}>
                Исполнительный директор Владимир Иванов
              </Strong>
            </CardContainer>
            <CardContainer className="flex min-h-[280px] w-[234px] shrink-0 snap-center flex-col gap-2 px-6 py-7 md:w-[390px]">
              <img src="image.png" alt="" width={140} className="mb-2 self-center md:mb-10" />
              <Text className="mb-2" size={md ? 'md' : 'sm'}>
                Полностью подходит под нашу специфику деятельности. Лучший продукт на рынке...
              </Text>
              <TextLink href="#" className="md:mb-10">
                <Text size={md ? 'md' : 'sm'}>Читать полностью</Text>
              </TextLink>
              <Strong className="mt-auto" size={md ? 'xs' : '2xs'}>
                Исполнительный директор Владимир Иванов
              </Strong>
            </CardContainer>
            <CardContainer className="flex min-h-[280px] w-[234px] shrink-0 snap-center flex-col gap-2 px-6 py-7 md:w-[390px]">
              <img src="image.png" alt="" width={140} className="mb-2 self-center md:mb-10" />
              <Text className="mb-2" size={md ? 'md' : 'sm'}>
                Полностью подходит под нашу специфику деятельности. Лучший продукт на рынке...
              </Text>
              <TextLink href="#" className="md:mb-10">
                <Text size={md ? 'md' : 'sm'}>Читать полностью</Text>
              </TextLink>
              <Strong className="mt-auto" size={md ? 'xs' : '2xs'}>
                Исполнительный директор Владимир Иванов
              </Strong>
            </CardContainer>
          </div>
        </div>
      </section>

      <section
        className="relative z-0 bg-blue-base pb-7 pt-8 font-normal text-white md:pt-24 md:pb-24"
        id="tech-support"
      >
        <div className="cont gap-6 md:flex">
          <div className="md:flex-1">
            <Title
              variant="decorated"
              decorationColor="blue-base-light"
              size={titleSize}
              className="mb-8 md:mb-10"
            >
              Техническая поддержка онлайн всегда
            </Title>

            <div className="mb-3 flex gap-3 md:mb-12">
              <div className="card card-fade-8 flex gap-2 rounded-lg bg-white p-3 text-xs font-medium text-black md:flex-1">
                <ClockIcon className="shrink-0 translate-y-0.5" size={md ? 24 : 14} />
                <div className="flex flex-col gap-2">
                  <Text size={textSize}>Время реакции менее</Text>
                  <div className="mt-auto flex items-center gap-1.5">
                    <Strong size="lg">5</Strong>
                    <span className="text-gray-500">минут (в раб. время)</span>
                  </div>
                </div>
              </div>
              <div className="card -card-fade-8 flex gap-2 rounded-lg bg-white p-3 text-xs font-medium text-black md:flex-1">
                <ClockIcon className="shrink-0 translate-y-0.5" size={md ? 24 : 14} />
                <div className="flex flex-col gap-2">
                  <Text size={textSize}>На линии всегда не менее</Text>
                  <div className="mt-auto flex items-center gap-1.5">
                    <Strong size={md ? 'xl' : 'lg'}>3</Strong>
                    <span className="text-gray-500">сотрудника онлайн</span>
                  </div>
                </div>
              </div>
            </div>

            <Text className="mb-5" size={textSize}>
              Если возникла какая-либо сложность с программой, то всегда можно написать в месенджеры или
              позвонить по телефону в квалифицированную техническую поддержку.
            </Text>

            <div className="mb-8 flex gap-2.5 md:mb-0">
              <a href="#">
                <SquareIcon className="fill-blue-light">
                  <PhoneIcon />
                </SquareIcon>
              </a>
              <a href="#">
                <SquareIcon className="fill-blue-light">
                  <TelegramIcon />
                </SquareIcon>
              </a>
              <a href="#">
                <SquareIcon className="fill-blue-light">
                  <WhatsappIcon />
                </SquareIcon>
              </a>
            </div>
          </div>

          <div className="flex-col rounded-lg bg-white py-5 px-4 text-black md:flex md:flex-1 md:p-14">
            <Title className="mb-5 text-center md:mb-12" size={md ? '3xl' : 'lg'}>
              Статистика за <em>октябрь 2022</em>
            </Title>
            <div className="mt-auto flex text-xs md:mt-0 md:text-base">
              <div className="decorate-center flex w-1/3 flex-1 flex-col items-center justify-center gap-2 md:gap-2.5">
                <MailIcon className="text-blue-base" size={md ? 48 : 24} />
                <Strong size={md ? 'xl' : 'lg'}>408</Strong>
                <Text className="text-center font-medium" size={textSize}>
                  обращений клиентов обработано
                </Text>
              </div>

              <div className="w-2/3 shrink-0 rounded-xl bg-violet-light p-4">
                <Title className="mb-4 font-bold">Сколько раз за месяц нам сказали</Title>
                <div className="grid grid-cols-[auto_1fr] gap-2 font-medium">
                  <div className="flex items-start justify-end">
                    <TextBadge>133</TextBadge>
                    &nbsp;&#8211;
                  </div>
                  <div> Большое спасибо</div>
                  <div className="flex items-start justify-end">
                    <TextBadge>23</TextBadge>
                    &nbsp;&#8211;
                  </div>
                  <div> Отлично</div>
                  <div className="flex items-start justify-end">
                    <TextBadge>4</TextBadge>
                    &nbsp;&#8211;
                  </div>
                  <div> Супер</div>
                  <div className="flex items-start justify-end">
                    <TextBadge>2</TextBadge>
                    &nbsp;&#8211;
                  </div>
                  <div> Ох?уенно</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-20" id="updates">
        <div className="cont items-center justify-between md:mb-12 md:flex">
          <Title variant="decorated" size={titleSize} className="mb-3 md:mb-0">
            Обновления программы
          </Title>
          <Text className="mb-8 max-w-[430px] md:mb-0 md:text-right" size={textSize}>
            Мы постоянно работаем над улучшением <br className="hidden md:block" /> системы XLombard
          </Text>
        </div>

        <div className="mb-8 flex snap-x snap-mandatory gap-4 overflow-x-scroll px-[max(calc((100%-1200px)/2-10px),20px)]">
          <div
            className="flex shrink-0 snap-center flex-col justify-center gap-3 rounded-lg bg-gray-light px-5 py-7 
            md:rounded-xl md:p-10"
          >
            <Title variant="stroke">18.01.2023</Title>
            <p className="font-normal">
              Реализовано доработок: 11 <br /> Исправлено ошибок: 2
            </p>
            <div className="flex items-center gap-1">
              <ExternalIcon className="text-blue-base" size={16} />
              <a href="#" className="text-blue-base">
                Релиз 3.48.0.0
              </a>
            </div>
          </div>
          <div
            className="flex shrink-0 snap-center flex-col justify-center gap-3 rounded-lg bg-gray-light px-5 py-7 
            md:rounded-xl md:p-10"
          >
            <Title variant="stroke">18.01.2023</Title>
            <p className="font-normal">
              Реализовано доработок: 11 <br /> Исправлено ошибок: 2
            </p>
            <div className="flex items-center gap-1">
              <ExternalIcon className="text-blue-base" size={16} />
              <a href="#" className="text-blue-base">
                Релиз 3.48.0.0
              </a>
            </div>
          </div>
          <div
            className="flex shrink-0 snap-center flex-col justify-center gap-3 rounded-lg bg-gray-light px-5 py-7 
            md:rounded-xl md:p-10"
          >
            <Title variant="stroke">18.01.2023</Title>
            <p className="font-normal">
              Реализовано доработок: 11 <br /> Исправлено ошибок: 2
            </p>
            <div className="flex items-center gap-1">
              <ExternalIcon className="text-blue-base" size={16} />
              <a href="#" className="text-blue-base">
                Релиз 3.48.0.0
              </a>
            </div>
          </div>
          <div
            className="flex shrink-0 snap-center flex-col justify-center gap-3 rounded-lg bg-gray-light px-5 py-7 
            md:rounded-xl md:p-10"
          >
            <Title variant="stroke">18.01.2023</Title>
            <p className="font-normal">
              Реализовано доработок: 11 <br /> Исправлено ошибок: 2
            </p>
            <div className="flex items-center gap-1">
              <ExternalIcon className="text-blue-base" size={16} />
              <a href="#" className="text-blue-base">
                Релиз 3.48.0.0
              </a>
            </div>
          </div>
          <div
            className="flex shrink-0 snap-center flex-col justify-center gap-3 rounded-lg bg-gray-light px-5 py-7 
            md:rounded-xl md:p-10"
          >
            <Title variant="stroke">18.01.2023</Title>
            <p className="font-normal">
              Реализовано доработок: 11 <br /> Исправлено ошибок: 2
            </p>
            <div className="flex items-center gap-1">
              <ExternalIcon className="text-blue-base" size={16} />
              <a href="#" className="text-blue-base">
                Релиз 3.48.0.0
              </a>
            </div>
          </div>
          <div
            className="flex shrink-0 snap-center flex-col justify-center gap-3 rounded-lg bg-gray-light px-5 py-7 
            md:rounded-xl md:p-10"
          >
            <Title variant="stroke">18.01.2023</Title>
            <p className="font-normal">
              Реализовано доработок: 11 <br /> Исправлено ошибок: 2
            </p>
            <div className="flex items-center gap-1">
              <ExternalIcon className="text-blue-base" size={16} />
              <a href="#" className="text-blue-base">
                Релиз 3.48.0.0
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={classNames(styles.section, 'relative z-0 bg-gray-light')} id="contact">
        <div className="mx-auto max-w-[1200px] gap-4 pt-12 md:flex md:pb-12">
          <div className="my-12 flex-1 px-5 md:my-0 md:px-0">
            <Title variant="decorated" size={titleSize} className="mb-5 md:mb-12">
              Открыты для общения
            </Title>
            <ul className="flex flex-col gap-4 md:gap-6">
              <li className="flex gap-4">
                <BackdropIcon className="shrink-0 text-blue-base" size={72} iconSize={20}>
                  <PhoneIcon size={20} />
                </BackdropIcon>
                <div className="flex flex-col gap-2 pt-4">
                  <Title>Пишите нам</Title>
                  <p className="font-normal text-gray-500">в мессенджеры на +7 (968) 096-59-40</p>
                  <div className="flex gap-2 text-white">
                    <a href="#">
                      <SquareIcon className="fill-telegram">
                        <TelegramIcon />
                      </SquareIcon>
                    </a>
                    <a href="#">
                      <SquareIcon className="fill-whatsapp">
                        <WhatsappIcon />
                      </SquareIcon>
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex gap-4">
                <BackdropIcon className="shrink-0 text-blue-base" size={72}>
                  <MessageIcon dots />
                </BackdropIcon>
                <div className="flex flex-col gap-2 pt-4">
                  <Title>Пишите нам</Title>
                  <p className="font-normal text-gray-500">с 10-00 до 18-00 по Мск</p>
                  <span className="text-xl">+7 (495) 677-95-51</span>
                </div>
              </li>
              <li className="flex gap-4">
                <BackdropIcon className="shrink-0 text-blue-base" size={72}>
                  <LocationIcon />
                </BackdropIcon>
                <div className="flex flex-col gap-2 pt-4">
                  <Title>Приезжайте</Title>
                  <p className="font-normal text-gray-500">Москва, ул. 3-я Северная линия, д. 14, оф. 2</p>
                  <a href="" className="text-blue-base">
                    Мы на Яндекс.Картах
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="my-12 max-w-xl flex-1 px-5 md:my-0 md:px-0">
            <CardContainer className="flex flex-col px-8 py-6 font-normal">
              <Title size={md ? '2xl' : 'base'} className="mb-2.5">
                Ответим на любые вопросы: <br /> <em>расскажем, покажем и дадим попробовать</em>
              </Title>
              <Text size={textSize} className="mb-2">
                Проведём онлайн демонстрацию по Zoom!
              </Text>
              <div className="my-4 flex flex-col gap-2 md:gap-4">
                <Input placeholder="Как к вам обращаться (ваше имя)" value="" />
                <Input placeholder="Телефон, чтобы мы могли перезвонить" value="" />
                <Input placeholder="Электронная почта для отправки ответа" value="" />
                <textarea name="" id="" placeholder="Ваш вопрос" className="rounded-lg border p-2" />
              </div>
              <Button variant="fill" radius="md" className="mt-3" center>
                Отправить сообщение
              </Button>
            </CardContainer>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IndexPage;
