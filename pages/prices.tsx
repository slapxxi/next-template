import { Button } from 'components/Button';
import { CardContainer } from 'components/Card';
import { DownloadIcon } from 'components/icons/DownloadIcon';
import { PhoneIcon } from 'components/icons/PhoneIcon';
import { TelegramIcon } from 'components/icons/TelegramIcon';
import { WhatsappIcon } from 'components/icons/WhatsappIcon';
import { SquareIcon } from 'components/SquareIcon';
import { Text } from 'components/Text';
import { Title } from 'components/Title';
import styles from 'styles/prices.module.scss';
import { Dot } from '../components/Dot';
import { Strong } from '../components/Strong';

let Prices = () => {
  return (
    <div>
      <section className={`mb-8 flex flex-col gap-6 px-5 pt-8 ${styles.section}`}>
        <Title variant="decorated" size="2xl">
          Тарифы и цены
        </Title>
        <p className="text-sm">
          Все наши цены обозначены в прайс-листах, но, если у вас есть вопросы вы всегда можете писать и
          звонить нам.
        </p>
        <p className="text-sm">Мы будем рады вам помочь!</p>
        <div className="flex gap-2.5 text-white">
          <a href="">
            <SquareIcon className="fill-blue-dark">
              <PhoneIcon />
            </SquareIcon>
          </a>
          <a href="">
            <SquareIcon className="fill-whatsapp">
              <WhatsappIcon />
            </SquareIcon>
          </a>
          <a href="">
            <SquareIcon className="fill-telegram">
              <TelegramIcon />
            </SquareIcon>
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <Button variant="fill" radius="md" className="flex justify-center gap-2">
            <DownloadIcon />
            <span>Скачать полный прайс</span>
          </Button>
          <Text size="sm" subtle>
            Прайс на базовые и дополнительные услуги в размере мобильного, в формате PDF
          </Text>
        </div>
      </section>

      <section id="price-list" className="my-8 px-5">
        <Title variant="decorated" decorationColor="green-light">
          Прайс-лист базовых услуг
        </Title>
        <Text size="sm" subtle>
          Цены актуальны до 01.06.23
        </Text>
        <ul className="my-2 flex flex-col gap-4">
          <li>
            <CardContainer className="flex flex-col gap-2 p-5">
              <Title>Лицензия XLombard</Title>
              <div>
                <Strong className="leading-none">12 000</Strong>
                <Text size="sm" subtle>
                  ежемесячно за 1 филиал
                </Text>
              </div>
              <Text size="sm">
                Базовая лицензия распространяется на 1 филиал. Количество рабочих мест в филиале не
                ограничено. Филиалом считаем пункт обслуживания клиентов.
              </Text>
            </CardContainer>
          </li>
          <li>
            <CardContainer className="flex flex-col gap-2 p-5">
              <Title>Базовая установка и настройка системы</Title>
              <div>
                <Strong className="leading-none">20 000</Strong>
                <Text size="sm" subtle>
                  ежемесячно за 1 филиал
                </Text>
              </div>
              <Text size="sm">
                Регистрация нового сервера, подключение интеграционных модулей (телефония, смс, проверки и т.
                д.), настройка 1 пакета документов.
              </Text>
            </CardContainer>
          </li>
          <li>
            <CardContainer className="relative flex flex-col gap-2 p-5">
              <Title>Техническая поддержка</Title>
              <div>
                <Strong size="sm" className="text-green-500">
                  бесплатно!
                </Strong>
              </div>
              <Text size="sm">
                Мы обеспечиваем поддержку наших клиентов по WhatsApp, email и телефону. Любой сотрудник вашей
                компании может обратиться за оперативной помощью
              </Text>
              <Dot className="absolute top-0 left-0 m-2.5 fill-green-500" size={8} />
            </CardContainer>
          </li>
          <li>
            <CardContainer className="relative flex flex-col gap-2 p-5">
              <Title>Проверки TotalReport.ru</Title>
              <div>
                <Strong size="sm" className="text-green-500">
                  бесплатно!
                </Strong>
              </div>
              <Text size="sm">
                Проверки ФССП, ФМС, ФЕДРЕСУРС, ГИБДД, ИНН, РеестрЗалогов, Финмониторинг. 200 проверок входят в
                базовую лицензию XLombard.
              </Text>
              <Dot className="absolute top-0 left-0 m-2.5 fill-green-500" size={8} />
            </CardContainer>
          </li>
          <li>
            <CardContainer className="relative flex flex-col gap-2 p-5">
              <Title>Сервисы проверок</Title>
              <div>
                <Strong size="sm" className="text-green-500">
                  бесплатно!
                </Strong>
              </div>
              <Text size="sm">
                Скориста, НБКИ, Одисей, Инфосфера — оплачиваются по прямым договорам с указанными сервисами.
                Подключение к XLombard — бесплатно.
              </Text>
              <Dot className="absolute top-0 left-0 m-2.5 fill-green-500" size={8} />
            </CardContainer>
          </li>
          <li>
            <CardContainer className="relative flex flex-col gap-2 p-5">
              <Title>Интеграции с внешними сервисами</Title>
              <div>
                <Strong size="sm" className="text-green-500">
                  бесплатно!
                </Strong>
              </div>
              <Text size="sm">
                Телефония, смс-сервисы, лидогенераторы (и прочие{' '}
                <a href="#" className="link">
                  интеграции
                </a>{' '}
                с внешними системами) — оплачиваются по прямым договорам с указанными сервисами. Подключение к
                XLombard - бесплатно.
              </Text>
              <Dot className="absolute top-0 left-0 m-2.5 fill-green-500" size={8} />
            </CardContainer>
          </li>
          <li>
            <CardContainer className="relative flex flex-col gap-2 p-5">
              <Title>Система моментальных платежей</Title>
              <div>
                <Strong className="leading-none">1%</Strong>
                <Text size="sm" subtle>
                  от суммы оборота
                </Text>
              </div>
              <Text size="sm">
                Работаем с банком Тинькофф. Деньги моментально зачисляются на карты клиентов. Нет лимитов на
                перечисление денежных средств в месяц. В том числе рекурентные платежи.
              </Text>
            </CardContainer>
          </li>
          <li>
            <CardContainer className="relative flex flex-col gap-2 p-5">
              <Title>Электронный акт осмотра</Title>
              <div>
                <Strong size="sm" className="text-green-500">
                  бесплатно!
                </Strong>
              </div>
              <Text size="sm">
                Заполнение актов на планшете на месте осмотра, определение состояние салона и кузова,
                добавление фотографий. Акты автоматически прикрепляются к договору.
              </Text>
              <Dot className="absolute top-0 left-0 m-2.5 fill-green-500" size={8} />
            </CardContainer>
          </li>
          <li>
            <CardContainer className="relative flex flex-col gap-2 p-5">
              <Title>Настройка дополнительного пакета документов</Title>
              <div>
                <Strong className="leading-none">20 000</Strong>
                <Text size="sm" subtle>
                  за каждый пакет
                </Text>
              </div>
              <Text size="sm">
                Если в компании несколько видов деятельности (например ломбард, обратный лизинг, МКК), то
                необходимо сформировать дополнительные пакеты документов.
              </Text>
            </CardContainer>
          </li>
          <li>
            <CardContainer className="relative flex flex-col gap-2 p-5">
              <Title>Учётная запись агента</Title>
              <div>
                <Strong className="leading-none">1 600 ₽</Strong>
                <Text size="sm" subtle>
                  ежемесячно за агента
                </Text>
              </div>
              <Text size="sm">
                Применяется компаниями, не имеющими физических офисов, а работающих через агентскую сеть
                представителей. Покупается пакетом по 10 учетных записей.
              </Text>
            </CardContainer>
          </li>
          <li>
            <CardContainer className="relative flex flex-col gap-2 p-5">
              <Title>Разработка аналитических отчётов</Title>
              <div>
                <Strong className="leading-none">25 000 ₽</Strong>
                <Text size="sm" subtle>
                  за отчет
                </Text>
              </div>
              <Text size="sm">
                Когда базовых возможностей системы отчетности не хватает для ваших запросов, мы всегда можем
                разработать любой отчет с любыми данными на заказ.
              </Text>
            </CardContainer>
          </li>
        </ul>
      </section>

      <section id="price-list" className="my-8 px-5">
        <Title variant="decorated" decorationColor="violet">
          Дополнительные модули
        </Title>
        <Text size="sm" subtle>
          Цены актуальны до 01.01.23
        </Text>
        <ul className="my-2 flex flex-col gap-4">
          <li>
            <CardContainer className="flex flex-col gap-2 p-5">
              <Title>Кабинет заёмщика на сайте</Title>
              <div>
                <Strong className="leading-none">50 000</Strong>
                <Text size="sm" subtle>
                  разово за подключение
                </Text>
              </div>
              <Text size="sm">
                На вашем сайте размещается готовый модуль, который позволяет заемщикам просматривать текущие
                займы, оплачивать платежи online через эквайринг.
              </Text>
            </CardContainer>
          </li>
          <li>
            <CardContainer className="flex flex-col gap-2 p-5">
              <Title>Модуль “Циклотрон”</Title>
              <div>
                <Strong className="leading-none">24 ₽</Strong>
                <Text size="sm" subtle>
                  ежемесячно за 1 договор
                </Text>
              </div>
              <Text size="sm">
                Мониторинг кредитного портфеля на предмет смены регистрационных данных, ДТП, ограничений,
                стоп-учета. Каждый договор проверяется не менее 4-х раз в месяц.
              </Text>
            </CardContainer>
          </li>
          <li>
            <CardContainer className="flex flex-col gap-2 p-5">
              <Title>Интеграция WhatsApp</Title>
              <div>
                <Strong className="leading-none">6 000 ₽</Strong>
                <Text size="sm" subtle>
                  ежемесячно за 1 канал
                </Text>
              </div>
              <Text size="sm">
                Общение с клиентами в WhatsApp непосредственно из интерфейса XLombard. Начинать общение может
                менеджер компании. Стоимость за 1 канал.
              </Text>
            </CardContainer>
          </li>
          <li>
            <CardContainer className="flex flex-col gap-2 p-5">
              <Title>Мониторинг GPS-маяков</Title>
              <div>
                <Strong className="leading-none">10 000 ₽</Strong>
                <Text size="sm" subtle>
                  разово за подключение
                </Text>
              </div>
              <Text size="sm">
                GPS-контроль позволяет оперативно узнавать о чрезвычайных ситуациях с авто (выезд за зону
                эксплуатации, потерю связи).
              </Text>
            </CardContainer>
          </li>
          <li>
            <CardContainer className="flex flex-col gap-2 p-5">
              <Title>Модуль выгрузки данных в НБКИ / ФедРесурс / Реестр залогов /РФМ</Title>
              <div>
                <Strong className="leading-none">5 000 ₽</Strong>
                <Text size="sm" subtle>
                  разово за подключение
                </Text>
              </div>
              <Text size="sm">
                Подключение одной выгрузки данных подразумевает создание файла шаблонов и добавление его в
                систему, чтобы можно было генерировать файлы данных для последующей загрузки в кабинеты
                систем.
              </Text>
            </CardContainer>
          </li>
          <li>
            <CardContainer className="flex flex-col gap-2 p-5">
              <Title>Платежный календарь</Title>
              <div>
                <Strong className="leading-none">1 000 ₽</Strong>
                <Text size="sm" subtle>
                  ежемесячно
                </Text>
              </div>
              <Text size="sm">
                Модуль отображает планируемые поступления от заёмщиков и регулярные расходы компании
              </Text>
            </CardContainer>
          </li>
          <li>
            <CardContainer className="flex flex-col gap-2 p-5">
              <Title>Модуль “Корсар”</Title>
              <div>
                <Strong className="leading-none">2 000 ₽</Strong>
                <Text size="sm" subtle>
                  ежемесячно
                </Text>
              </div>
              <Text size="sm">
                Мониторинг закрытых договоров с целью выявления перезалога у конкурентов. Источники данных:
                ФНП, ФедРесурс.
              </Text>
            </CardContainer>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Prices;
