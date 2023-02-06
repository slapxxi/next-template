import styles from 'styles/index.module.scss';
import { Button } from '../components/Button';
import { CalculatorPic } from '../components/CalculatorPic';
import { Card, CardContainer } from '../components/Card';
import { AttachmentIcon } from '../components/icons/AttachmentIcon';
import { BackdropIcon } from '../components/icons/BackdropIcon';
import { MailIcon } from '../components/icons/MailIcon';
import { MenuIcon } from '../components/icons/MenuIcon';
import { PhoneIcon } from '../components/icons/PhoneIcon';
import { SendIcon } from '../components/icons/SendIcon';
import { StopIcon } from '../components/icons/StopIcon';
import { TelegramIcon } from '../components/icons/TelegramIcon';
import { WhatsappIcon } from '../components/icons/WhatsappIcon';
import { Input } from '../components/Input';
import { Integrations } from '../components/Integrations';
import { Scheme } from '../components/Scheme';
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
        <p className="mb-2 text-xs text-gray-500">Подберем пакет документов и сделаем базовые настройки</p>
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

      <section className="px-5">
        <Title variant="decorated" size="2xl" className="mb-4">
          Возможности <em>XLombard BPM System</em>
        </Title>
        <h2 className="relative z-10 ml-2 rounded-md bg-navy p-4 px-5 py-3 text-white">
          Лидогенерация и обработка заявок
        </h2>

        <div className="-mt-2 rounded-md bg-gray-light px-2 pt-8 pb-7">
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
      </section>

      <section className="mb-8 px-7 text-xs">
        <ul className="mt-2 mb-4 flex flex-col gap-1 text-blue">
          <li>
            <Button radius="md" className="w-full">
              Скоринг и комплексная проверка заёмщика
            </Button>
          </li>
          <li>
            <Button radius="md" className="w-full">
              Оформление договора и выдача ДС заёмщику
            </Button>
          </li>
          <li>
            <Button radius="md" className="w-full">
              Операционный учёт текущих договоров
            </Button>
          </li>
          <li>
            <Button radius="md" className="w-full">
              Полный контроль общения с клиентом
            </Button>
          </li>
          <li>
            <Button radius="md" className="w-full">
              Управленческие отчёты, аналитика и виджеты
            </Button>
          </li>
          <li>
            <Button radius="md" className="w-full">
              Учёт всех расходов и доходов
            </Button>
          </li>
          <li>
            <Button radius="md" className="w-full">
              Реализация залогового имущества
            </Button>
          </li>
        </ul>
        <Button variant="fill" radius="md">
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

      <section className="mb-8 px-5">
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
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none">
                <path
                  stroke="#CAD2FF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19.93 8.43c-.05.32.06.65.3.88l1.56 1.57a2.4 2.4 0 0 1 0 3.4l-1.61 1.62a.98.98 0 0 1-.84.27c-.47-.07-.8-.48-.97-.92a2.5 2.5 0 1 0-3.21 3.21c.44.17.85.5.92.97a.98.98 0 0 1-.27.84l-1.61 1.6a2.4 2.4 0 0 1-3.41 0l-1.57-1.56a1.03 1.03 0 0 0-.88-.3c-.49.08-.84.51-1.02.98a2.5 2.5 0 1 1-3.23-3.24c.46-.18.9-.53.96-1.02a1.03 1.03 0 0 0-.29-.88L3.2 14.28a2.4 2.4 0 0 1 0-3.4l1.52-1.53c.24-.24.58-.35.92-.3.51.07.88.53 1.07 1A2.5 2.5 0 1 0 9.97 6.8c-.48-.2-.93-.56-1-1.07-.06-.34.05-.68.3-.92l1.52-1.53a2.4 2.4 0 0 1 3.4 0l1.57 1.57c.23.23.56.34.88.3.5-.08.84-.51 1.02-.98a2.5 2.5 0 1 1 3.24 3.24c-.47.18-.9.53-.97 1.02v0Z"
                />
              </svg>
              <span className="text-2xl font-bold">240</span>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg bg-violet-light p-5 text-xs">
            <p>Исправлено недочетов в программе</p>
            <div className="flex items-center gap-2">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.9661 22.0537C18.4891 22.0537 22.9661 17.5767 22.9661 12.0537C22.9661 6.53071 18.4891 2.05371 12.9661 2.05371C7.44306 2.05371 2.96606 6.53071 2.96606 12.0537C2.96606 17.5767 7.44306 22.0537 12.9661 22.0537Z"
                  stroke="#CAD2FF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.96606 12.0537L11.9661 14.0537L15.9661 10.0537"
                  stroke="#CAD2FF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="text-2xl font-bold">210</span>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg bg-violet-light p-5 text-xs">
            <p>Обработано обращений клиентов в техническую поддержку</p>
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z"
                  stroke="#CAD2FF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 7L13.03 12.7C12.7213 12.8934 12.3643 12.996 12 12.996C11.6357 12.996 11.2787 12.8934 10.97 12.7L2 7"
                  stroke="#CAD2FF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="text-2xl font-bold">2 109</span>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg bg-violet-light p-5 text-xs">
            <p>Пришло новых людей в коллектив XLombard </p>
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#CAD2FF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.3337 18.8571C18.171 18.269 17.8423 17.7266 17.3744 17.2899C16.6855 16.6469 15.7511 16.2856 14.7768 16.2856H9.26664C8.29237 16.2856 7.35801 16.6469 6.6691 17.2899C6.26283 17.669 5.96154 18.1279 5.78271 18.6271"
                  stroke="#CAD2FF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.0217 12.8569C13.6786 12.8569 15.0217 11.5138 15.0217 9.85693C15.0217 8.20008 13.6786 6.85693 12.0217 6.85693C10.3649 6.85693 9.02173 8.20008 9.02173 9.85693C9.02173 11.5138 10.3649 12.8569 12.0217 12.8569Z"
                  stroke="#CAD2FF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="text-2xl font-bold">4</span>
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
        <div className="flex snap-x gap-3 overflow-x-scroll px-7 pb-8">
          <CardContainer className="flex min-h-[280px] w-[234px] shrink-0 snap-center flex-col px-6 py-7">
            <img src="leasing.jpg" alt="" width={140} className="self-center" />
            <p className="mb-2 font-normal">
              Полностью подходит под нашу специфику деятельности. Лучший продукт на рынке...
            </p>
            <a href="#" className="text-blue-base">
              Читать полностью
            </a>
            <p className="mt-auto">Исполнительный директор Владимир Иванов</p>
          </CardContainer>
          <CardContainer className="flex min-h-[280px] w-[234px] shrink-0 snap-center flex-col px-6 py-7">
            <img src="leasing.jpg" alt="" width={140} className="self-center" />
            <p className="mb-2 font-normal">
              Полностью подходит под нашу специфику деятельности. Лучший продукт на рынке...
            </p>
            <a href="#" className="text-blue-base">
              Читать полностью
            </a>
            <p className="mt-auto">Исполнительный директор Владимир Иванов</p>
          </CardContainer>
          <CardContainer className="flex min-h-[280px] w-[234px] shrink-0 snap-center flex-col px-6 py-7">
            <img src="leasing.jpg" alt="" width={140} className="self-center" />
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

      <section className="relative z-0 bg-blue-base px-6 pb-7 pt-8 font-normal text-white">
        <Title variant="decorated" decorationColor="hsl(217,88%,55%)" size="2xl" className="mb-8">
          Техническая поддержка онлайн всегда
        </Title>

        <div className="mb-3 flex gap-3">
          <div className="card card-fade-8 flex gap-2 rounded-lg bg-white p-3 text-xs font-medium text-black">
            <svg width="14" height="14" fill="none" className="shrink-0 translate-y-1">
              <g stroke="#9DA7E0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.13">
                <path d="M7.03 12.75a5.63 5.63 0 1 0 0-11.26 5.63 5.63 0 0 0 0 11.26Z" />
                <path d="M7.03 3.75v3.37L9.28 6" />
              </g>
            </svg>
            <div className="flex flex-col gap-2">
              Время реакции менее
              <div className="mt-auto flex gap-1.5">
                <Strong>5</Strong>
                <span className="text-gray-500">минут (в раб. время)</span>
              </div>
            </div>
          </div>
          <div className="card -card-fade-8 flex gap-2 rounded-lg bg-white p-3 text-xs font-medium text-black">
            <svg width="14" height="14" fill="none" className="shrink-0 translate-y-1">
              <g stroke="#9DA7E0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.13">
                <path d="M7.03 12.75a5.63 5.63 0 1 0 0-11.26 5.63 5.63 0 0 0 0 11.26Z" />
                <path d="M7.03 3.75v3.37L9.28 6" />
              </g>
            </svg>
            <div className="flex flex-col gap-2">
              На линии всегда не менее
              <div className="mt-auto flex gap-1.5">
                <Strong>3</Strong>
                <span className="text-gray-500">сотрудника онлайн</span>
              </div>
            </div>
          </div>
        </div>
        <p className="mb-5">
          Если возникла какая-либо сложность с программой, то всегда можно написать в месенджеры или позвонить
          по телефону в квалифицированную техническую поддержку.
        </p>

        <div className="mb-8 flex gap-2.5">
          <a href="#" className="flex h-[50px] w-[50px] items-center justify-center bg-blue-light">
            <PhoneIcon />
          </a>
          <a href="#" className="flex h-[50px] w-[50px] items-center justify-center bg-blue-light">
            <TelegramIcon />
          </a>
          <a href="#" className="flex h-[50px] w-[50px] items-center justify-center bg-blue-light">
            <WhatsappIcon />
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
              <Strong>408</Strong>
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

        <div className="mb-8 flex snap-x gap-4 overflow-x-scroll">
          <div className="flex w-3/4 shrink-0 snap-center flex-col gap-3 rounded-lg bg-gray-light px-5 py-7">
            <Title variant="stroke">18.01.2023</Title>
            <p className="font-normal">
              Реализовано доработок: 11 <br /> Исправлено ошибок: 2
            </p>
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" fill="none">
                <path
                  stroke="#0862EE"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.17"
                  d="M10.5 7.82v3.5a1.17 1.17 0 0 1-1.17 1.17H2.92a1.17 1.17 0 0 1-1.17-1.17V4.9a1.17 1.17 0 0 1 1.17-1.16h3.5M8.75 1.99h3.5v3.5M5.83 8.4 12.25 2"
                />
              </svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" fill="none">
                <path
                  stroke="#0862EE"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.17"
                  d="M10.5 7.82v3.5a1.17 1.17 0 0 1-1.17 1.17H2.92a1.17 1.17 0 0 1-1.17-1.17V4.9a1.17 1.17 0 0 1 1.17-1.16h3.5M8.75 1.99h3.5v3.5M5.83 8.4 12.25 2"
                />
              </svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" fill="none">
                <path
                  stroke="#0862EE"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.17"
                  d="M10.5 7.82v3.5a1.17 1.17 0 0 1-1.17 1.17H2.92a1.17 1.17 0 0 1-1.17-1.17V4.9a1.17 1.17 0 0 1 1.17-1.16h3.5M8.75 1.99h3.5v3.5M5.83 8.4 12.25 2"
                />
              </svg>
              <a href="#" className="text-blue-base">
                Релиз 3.48.0.0
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={`bg-gray-light py-8 px-5 ${styles.section3}`}>
        <Title variant="decorated" size="2xl" className="mb-5">
          Открыты для общения
        </Title>
        <ul className="flex flex-col gap-4">
          <li className="flex gap-4">
            <BackdropIcon className="text-blue-base" size={72}>
              <PhoneIcon />
            </BackdropIcon>
            <div className="flex flex-col gap-2">
              <Title>Пишите нам</Title>
              <p className="font-normal text-gray-500">в мессенджеры на +7 (968) 096-59-40</p>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="flex h-[50px] w-[50px] items-center justify-center bg-sky-500 text-white"
                >
                  <TelegramIcon />
                </a>
                <a
                  href="#"
                  className="flex h-[50px] w-[50px] items-center justify-center bg-green-500 text-white"
                >
                  <WhatsappIcon />
                </a>
              </div>
            </div>
          </li>
          <li className="flex gap-4">
            <BackdropIcon className="text-blue-base" size={72}>
              <PhoneIcon />
            </BackdropIcon>
            <div className="flex flex-col gap-2">
              <Title>Пишите нам</Title>
              <p className="font-normal text-gray-500">с 10-00 до 18-00 по Мск</p>
              <span className="text-xl">+7 (495) 677-95-51</span>
            </div>
          </li>
          <li className="flex gap-4">
            <BackdropIcon className="text-blue-base" size={72}>
              <PhoneIcon />
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

export default IndexPage;
