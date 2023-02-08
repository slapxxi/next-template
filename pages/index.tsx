import * as Accordion from '@radix-ui/react-accordion';
import styles from 'styles/index.module.scss';
import { Button } from '../components/Button';
import { CalculatorPic } from '../components/CalculatorPic';
import { Card, CardContainer } from '../components/Card';
import { AttachmentIcon } from '../components/icons/AttachmentIcon';
import { BackdropIcon } from '../components/icons/BackdropIcon';
import { CheckmarkIcon } from '../components/icons/CheckmarkIcon';
import { ClockIcon } from '../components/icons/ClockIcon';
import { ExternalIcon } from '../components/icons/ExternalIcon';
import { LocationIcon } from '../components/icons/LocationIcon';
import { MailIcon } from '../components/icons/MailIcon';
import { MenuIcon } from '../components/icons/MenuIcon';
import { MessageIcon } from '../components/icons/MessageIcon';
import { PhoneIcon } from '../components/icons/PhoneIcon';
import { PuzzleIcon } from '../components/icons/PuzzleIcon';
import { SendIcon } from '../components/icons/SendIcon';
import { StopIcon } from '../components/icons/StopIcon';
import { TelegramIcon } from '../components/icons/TelegramIcon';
import { UserIcon } from '../components/icons/UserIcon';
import { WhatsappIcon } from '../components/icons/WhatsappIcon';
import { Input } from '../components/Input';
import { Integrations } from '../components/Integrations';
import { Scheme } from '../components/Scheme';
import { SquareIcon } from '../components/SquareIcon';
import { Strong } from '../components/Strong';
import { TextBadge } from '../components/TextBadge';
import { Title } from '../components/Title';

let IndexPage = () => {
  return (
    <main className={`mt-8 pt-2 text-sm font-medium ${styles.main}`}>
      <div className="px-5">
        <Title size="2xl" variant="decorated" className="mb-5 leading-snug">
          Лучшая программа для автоматизации <em>автоломбарда</em>
        </Title>
        <p className="mb-3">Начните работать в XLombard бесплатно уже сегодня</p>
        <Button variant="fill" className="mb-2 px-3" radius="md">
          Хочу попробовать!
        </Button>
        <p className="mb-2 text-xs text-gray-500">Подберем пакет документов и сделаем базовые настройки</p>
        <Scheme />
      </div>

      <div className="relative z-0 mb-8 bg-gray-light px-6 pt-8 pb-12">
        <Title variant="decorated" decorationColor="hsl(141,60%,78%)" size="2xl" className="mb-4">
          Идеально для любого автоломбарда
        </Title>

        <div className="mb-12 flex flex-col gap-3">
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

        <div className="flex">
          <CalculatorPic />
          <div className="flex flex-col gap-4">
            <Title variant="decorated">Создали специальную конфигурацию для обратного лизинга</Title>
            <p className="font-normal">Учли все тонкости бизнеса и подключили необходимые сервисы</p>
            <Button variant="fill" radius="md" className="self-start px-3">
              Сел и поехал
            </Button>
          </div>
        </div>
      </div>

      <section className="my-12 px-5" id="features">
        <Title variant="decorated" size="2xl" className="mb-4">
          Возможности <em>XLombard BPM System</em>
        </Title>
        <Accordion.Root className="my-4 flex flex-col gap-1" type="single" defaultValue="item-1" collapsible>
          <Accordion.Item className="acc-item" value="item-1">
            <Accordion.AccordionTrigger className="acc-trigger">
              Лидогенерация и обработка заявок
            </Accordion.AccordionTrigger>
            <Accordion.AccordionContent>
              <FeatureList />
            </Accordion.AccordionContent>
          </Accordion.Item>
          <Accordion.Item className="acc-item" value="item-2">
            <Accordion.AccordionTrigger className="acc-trigger">
              Скоринг и комплексная проверка заёмщика
            </Accordion.AccordionTrigger>
            <Accordion.AccordionContent>
              <FeatureList />
            </Accordion.AccordionContent>
          </Accordion.Item>
          <Accordion.Item className="acc-item" value="item-3">
            <Accordion.AccordionTrigger className="acc-trigger">
              Оформление договора и выдача ДС заёмщику
            </Accordion.AccordionTrigger>
            <Accordion.AccordionContent>
              <FeatureList />
            </Accordion.AccordionContent>
          </Accordion.Item>
          <Accordion.Item className="acc-item" value="item-4">
            <Accordion.AccordionTrigger className="acc-trigger">
              Операционный учёт текущих договоров
            </Accordion.AccordionTrigger>
            <Accordion.AccordionContent>
              <FeatureList />
            </Accordion.AccordionContent>
          </Accordion.Item>
          <Accordion.Item className="acc-item" value="item-5">
            <Accordion.AccordionTrigger className="acc-trigger">
              Полный контроль общения с клиентом
            </Accordion.AccordionTrigger>
            <Accordion.AccordionContent>
              <FeatureList />
            </Accordion.AccordionContent>
          </Accordion.Item>
          <Accordion.Item className="acc-item" value="item-6">
            <Accordion.AccordionTrigger className="acc-trigger">
              Управленческие отчёты, аналитика и виджеты
            </Accordion.AccordionTrigger>
            <Accordion.AccordionContent>
              <FeatureList />
            </Accordion.AccordionContent>
          </Accordion.Item>
          <Accordion.Item className="acc-item" value="item-7">
            <Accordion.AccordionTrigger className="acc-trigger">
              Учёт всех расходов и доходов
            </Accordion.AccordionTrigger>
            <Accordion.AccordionContent>
              <FeatureList />
            </Accordion.AccordionContent>
          </Accordion.Item>
          <Accordion.Item className="acc-item" value="item-2">
            <Accordion.AccordionTrigger className="acc-trigger">
              Реализация залогового имущества
            </Accordion.AccordionTrigger>
            <Accordion.AccordionContent>
              <FeatureList />
            </Accordion.AccordionContent>
          </Accordion.Item>
        </Accordion.Root>
        <Button variant="fill" radius="md" className="ml-4">
          Попробовать бесплатно
        </Button>
      </section>

      {/* integrations */}
      <section className="px-7 pb-11">
        <Title size="2xl" variant="decorated" decorationColor="hsl(231,100%,90%)" className="mb-9">
          Интеграции с различными системами{' '}
        </Title>
        <Integrations />
      </section>

      <section className={`relative z-0 px-7 pt-8 pb-8 ${styles.section}`}>
        <Title variant="decorated" size="2xl" decorationColor="hsl(141,60%,78%)" className="mb-3">
          Ни у кого нет — а у нас есть!
        </Title>
        <Button variant="fill" radius="md" className="mb-6">
          Заказать презентацию системы
        </Button>

        <ul className="flex flex-col gap-3 font-normal">
          <li>
            <CardContainer className="p-4">
              <Title variant="stroke" className="mb-2 leading-5">
                Электронный акт осмотра ТС
              </Title>
              <p className="text-gray-500">
                Позволяет фиксировать все повреждения ТС в электронном виде на планшете
              </p>
            </CardContainer>
          </li>
          <li>
            <CardContainer className="p-4">
              <Title variant="stroke" className="mb-2 leading-5">
                Регулярная проверка портфеля по ГИБДД
              </Title>
              <p className="text-gray-500">
                Позволяет оперативно узнавать о новых ограничениях, изменениях регистрационных данных и т.д.
              </p>
            </CardContainer>
          </li>
          <li>
            <CardContainer className="p-4">
              <Title variant="stroke" className="mb-2 leading-5">
                Корсар — куда уходят ваши клиент
              </Title>
              <p className="text-gray-500">
                Позволяет узнать, куда ушёл клиент при отказе от сделки или где перезаложился, если уже был
                залог
              </p>
            </CardContainer>
          </li>
          <li>
            <CardContainer className="p-4">
              <Title variant="stroke" className="mb-2 leading-5">
                GPS-мониторинг текущего портфеля
              </Title>
              <p className="text-gray-500">Узнаем статусы маяков ТС непосредственно из сервисов телематики</p>
            </CardContainer>
          </li>
          <li>
            <CardContainer className="p-4">
              <Title variant="stroke" className="mb-2 leading-5">
                Личный кабинет инвестора
              </Title>
              <p className="text-gray-500">
                Сделали удобный кабинет, где можно наблюдать все начисленные и выплаченные проценты
              </p>
            </CardContainer>
          </li>
        </ul>
      </section>

      <section className="mb-8 px-5" id="summary">
        <Title variant="decorated" size="2xl" className="mb-6">
          Подводим итоги 2022 года
        </Title>
        <div className="mb-6 flex justify-between gap-4">
          <div>
            <div className="mb-3">
              <span className="decorate text-4xl font-bold">+28</span>
            </div>
            <p className="font-normal">городов присутствия нашей программы</p>
          </div>
          <div>
            <div className="mb-3">
              <span className="decorate text-4xl font-bold">+6</span>
            </div>
            <p className="font-normal">новых модулей разработано </p>
          </div>
          <div>
            <div className="mb-3">
              <span className="decorate text-4xl font-bold">+9</span>
            </div>
            <p className="font-normal">новых интеграций добавлено </p>
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-3">
          <div className="flex flex-col justify-between rounded-lg bg-violet-light p-5 text-xs">
            <p>Сделано больших и маленьких доработок уже существующих модулей</p>
            <div className="flex items-center gap-2">
              <PuzzleIcon className="text-violet" />
              <Strong>240</Strong>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg bg-violet-light p-5 text-xs">
            <p>Исправлено недочетов в программе</p>
            <div className="flex items-center gap-2">
              <CheckmarkIcon className="text-violet" />
              <Strong>210</Strong>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg bg-violet-light p-5 text-xs">
            <p>Обработано обращений клиентов в техническую поддержку</p>
            <div className="flex items-center gap-2">
              <MailIcon className="text-violet" />
              <Strong>2 109</Strong>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg bg-violet-light p-5 text-xs">
            <p>Пришло новых людей в коллектив XLombard </p>
            <div className="flex items-center gap-2">
              <UserIcon className="text-violet" />
              <Strong>4</Strong>
            </div>
          </div>
        </div>
      </section>

      <section className={`relative z-0 bg-violet-light ${styles.section2}`}>
        <div className="px-7 pt-8">
          <Title size="2xl" variant="decorated" decorationColor="hsl(231,100%,90%)" className="mb-3">
            Кто нас может порекомендовать
          </Title>
          <Button variant="fill" radius="md" className="mb-8">
            Хочу попробовать!
          </Button>
        </div>
        <div className="flex snap-x snap-mandatory gap-3 overflow-x-scroll px-7 pb-8">
          <CardContainer className="flex min-h-[280px] w-[234px] shrink-0 snap-center flex-col px-6 py-7">
            <img src="image.png" alt="" width={140} className="self-center" />
            <p className="mb-2 font-normal">
              Полностью подходит под нашу специфику деятельности. Лучший продукт на рынке...
            </p>
            <a href="#" className="text-blue-base">
              Читать полностью
            </a>
            <p className="mt-auto">Исполнительный директор Владимир Иванов</p>
          </CardContainer>
          <CardContainer className="flex min-h-[280px] w-[234px] shrink-0 snap-center flex-col px-6 py-7">
            <img src="image.png" alt="" width={140} className="self-center" />
            <p className="mb-2 font-normal">
              Полностью подходит под нашу специфику деятельности. Лучший продукт на рынке...
            </p>
            <a href="#" className="text-blue-base">
              Читать полностью
            </a>
            <p className="mt-auto">Исполнительный директор Владимир Иванов</p>
          </CardContainer>
          <CardContainer className="flex min-h-[280px] w-[234px] shrink-0 snap-center flex-col px-6 py-7">
            <img src="image.png" alt="" width={140} className="self-center" />
            <p className="mb-2 font-normal">
              Полностью подходит под нашу специфику деятельности. Лучший продукт на рынке...
            </p>
            <a href="#" className="text-blue-base">
              Читать полностью
            </a>
            <p className="mt-auto">Исполнительный директор Владимир Иванов</p>
          </CardContainer>
        </div>
      </section>

      <section className="relative z-0 bg-blue-base px-6 pb-7 pt-8 font-normal text-white" id="tech-support">
        <Title variant="decorated" decorationColor="hsl(217,88%,55%)" size="2xl" className="mb-8">
          Техническая поддержка онлайн всегда
        </Title>

        <div className="mb-3 flex gap-3">
          <div className="card card-fade-8 flex gap-2 rounded-lg bg-white p-3 text-xs font-medium text-black">
            <ClockIcon className="shrink-0 translate-y-0.5" size={14} />
            <div className="flex flex-col gap-2">
              Время реакции менее
              <div className="mt-auto flex gap-1.5">
                <Strong size="lg">5</Strong>
                <span className="text-gray-500">минут (в раб. время)</span>
              </div>
            </div>
          </div>
          <div className="card -card-fade-8 flex gap-2 rounded-lg bg-white p-3 text-xs font-medium text-black">
            <ClockIcon className="shrink-0 translate-y-0.5" size={14} />
            <div className="flex flex-col gap-2">
              На линии всегда не менее
              <div className="mt-auto flex gap-1.5">
                <Strong size="lg">3</Strong>
                <span className="text-gray-500">сотрудника онлайн</span>
              </div>
            </div>
          </div>
        </div>
        <p className="mb-5">
          Если возникла какая-либо сложность с программой, то всегда можно написать в месенджеры или позвонить
          по телефону в квалифицированную техническую поддержку.
        </p>

        <div className="mb-8 flex gap-2.5">
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

        <div className="rounded-lg bg-white py-5 px-4 text-black">
          <Title className="mb-5 text-center">
            Статистика за <em>октябрь 2022</em>
          </Title>

          <div className="flex text-xs">
            <div className="decorate-center flex flex-col items-center justify-center">
              <span className="text-blue-base">
                <MailIcon />
              </span>
              <Strong size="lg">408</Strong>
              <p className="text-center font-medium">обращений клиентов обработано</p>
            </div>

            <div className="w-[189px] shrink-0 bg-violet-light p-4">
              <p className="mb-4 font-bold">Сколько раз за месяц нам сказали</p>
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
      </section>

      <section className="px-7">
        <Title variant="decorated" size="2xl" className="mb-3">
          Обновления программы
        </Title>
        <p className="mb-8">Мы постоянно работаем над улучшением системы XLombard</p>

        <div className="mb-8 flex snap-x snap-mandatory gap-4 overflow-x-scroll">
          <div className="flex w-3/4 shrink-0 snap-center flex-col gap-3 rounded-lg bg-gray-light px-5 py-7">
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
          <div className="flex w-3/4 shrink-0 snap-center flex-col gap-3 rounded-lg bg-gray-light px-5 py-7">
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
          <div className="flex w-3/4 shrink-0 snap-center flex-col gap-3 rounded-lg bg-gray-light px-5 py-7">
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

      <section className={`bg-gray-light py-8 px-5 ${styles.section3}`} id="contact">
        <Title variant="decorated" size="2xl" className="mb-5">
          Открыты для общения
        </Title>
        <ul className="flex flex-col gap-4">
          <li className="flex gap-4">
            <BackdropIcon className="shrink-0 text-blue-base" size={72} iconSize={20}>
              <PhoneIcon size={20} />
            </BackdropIcon>
            <div className="flex flex-col gap-2">
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
            <div className="flex flex-col gap-2">
              <Title>Пишите нам</Title>
              <p className="font-normal text-gray-500">с 10-00 до 18-00 по Мск</p>
              <span className="text-xl">+7 (495) 677-95-51</span>
            </div>
          </li>
          <li className="flex gap-4">
            <BackdropIcon className="shrink-0 text-blue-base" size={72}>
              <LocationIcon />
            </BackdropIcon>
            <div className="flex flex-col gap-2">
              <Title>Приезжайте</Title>
              <p className="font-normal text-gray-500">Москва, ул. 3-я Северная линия, д. 14, оф. 2</p>
              <a href="" className="text-blue-base">
                Мы на Яндекс.Картах
              </a>
            </div>
          </li>
        </ul>
      </section>

      <section className="bg-gray-light px-5 py-8">
        <CardContainer className="flex flex-col px-8 py-6">
          <Title size={16} className="mb-2.5">
            Ответим на любые вопросы: <br /> <em>расскажем, покажем и дадим попробовать</em>
          </Title>
          <p className="font-normal">Проведём онлайн демонстрацию по Zoom!</p>

          <div className="my-4 flex flex-col gap-2">
            <Input placeholder="Как к вам обращаться (ваше имя)" value="" />
            <Input placeholder="Телефон, чтобы мы могли перезвонить" value="" />
            <Input placeholder="Электронная почта для отправки ответа" value="" />
            <textarea name="" id="" placeholder="Ваш вопрос" className="rounded-lg border p-2" />
          </div>
          <Button variant="fill" radius="md">
            Отправить сообщение
          </Button>
        </CardContainer>
      </section>
    </main>
  );
};

export type FeatureListProps = {
  children?: React.ReactNode;
  className?: string;
};

export let FeatureList = (props: FeatureListProps) => {
  let { children, className = '', ...rest } = props;
  return (
    <div className="-mt-2 rounded-md bg-gray-light px-2 pt-8 pb-7" {...rest}>
      <ul className="flex flex-col gap-7">
        <li className="flex gap-4">
          <BackdropIcon className="shrink-0 text-blue" size={64}>
            <MenuIcon />
          </BackdropIcon>
          <div>
            <Title className="mb-3" variant="stroke">
              Агрегатор заявок
            </Title>
            <p className="font-normal">
              Агрегатор заявок на займ из различных источников (веб-сайтов, партнеров компании и т.д.),
              позволяет более качественно управлять входящими обращениями клиентов
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <BackdropIcon className="shrink-0 text-blue" size={64}>
            <SendIcon />
          </BackdropIcon>
          <div>
            <Title className="mb-3" variant="stroke">
              Уведомления
            </Title>
            <p className="font-normal">
              Sms и Email-уведомления обо всех операциях в компании. Также используется для уведомлений
              клиентам компании о текущем состоянии договора, акциях и скидках
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <BackdropIcon className="shrink-0 text-blue" size={64}>
            <StopIcon />
          </BackdropIcon>
          <div>
            <Title className="mb-3 leading-5" variant="stroke">
              Исключаем человеческий фактор
            </Title>
            <p className="font-normal">
              XLombard MOD - дополнительные модули позволяют существенно оптимизировать ежедневную работу
              сотрудников. XLombard делает невозможными ошибки, связанные с человеческим фактором при
              оформлении договоров.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default IndexPage;
