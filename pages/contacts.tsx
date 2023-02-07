import { Text } from 'components/Text';
import { Title } from 'components/Title';
import { Block } from '../components/Block';
import { Button } from '../components/Button';
import { Divider } from '../components/Divider';
import { BackdropIcon } from '../components/icons/BackdropIcon';
import { DownloadIcon } from '../components/icons/DownloadIcon';
import { SendIcon } from '../components/icons/SendIcon';
import { List, ListItem } from '../components/List';
import { TextLink } from '../components/TextLink';

let Contacts = () => {
  return (
    <div>
      <section className="my-12 px-5">
        <Title size="3xl" variant="decorated" decorationColor="blue-light" className="my-8">
          H1-Текстовая страница
        </Title>
        <Title size="2xl" variant="decorated" decorationColor="green-light" className="my-6">
          Н2-Подзаголовок
        </Title>
        <Title size="xl" variant="decorated" decorationColor="violet" className="my-4">
          Н3-Подзаголовок
        </Title>
        <Title className="my-2">Н4-Заголовок блоков, карточек, разделов</Title>

        <div className="flex flex-col gap-6">
          <Text>
            Основной текст. XLombard MOD - дополнительные модули позволяют существенно оптимизировать
            ежедневную работу сотрудников. XLombard делает невозможными ошибки, связанные с человеческим
            фактором при оформлении договоров.{' '}
          </Text>
          <Text>
            XLombard - система комплексной автоматизации компаний, предоставляющих услуги краткосрочного
            кредитования под залог автомобиля. XLombard - система, которая подходит для максимального
            количества автоломбардов за счет простоты использования и гибкой системы настроек, позволяющих
            настроить программу под любые требования клиента.
          </Text>
          <Text>
            XLombard - документоборот + KPI-система = точная и оперативная информация об эффективности
            компании. BaseDocs - подходит для любой компании, в бизнес-процессах которой предусмотрена
            процедура осмотра траспортного средства с последующей обработкой полученных данных. BaseDocs -
            подходит для любой компании, в бизнес-процессах которой предусмотрена процедура осмотра
            траспортного средства с последующей обработкой полученных данных.{' '}
          </Text>
          <Title className="px-5" variant="stroke">
            Выноска Агрегатор заявок на займ из различных источников (веб-сайтов, партнеров компании и т.д.),
            позволяет более качественно управлять входящими обращениями клиентов
          </Title>
          <Text>
            Основной текст. XLombard MOD - дополнительные модули позволяют существенно оптимизировать
            ежедневную работу сотрудников. XLombard делает невозможными ошибки, связанные с человеческим
            фактором при оформлении договоров. XLombard - система комплексной автоматизации компаний,
            предоставляющих услуги краткосрочного кредитования под залог автомобиля.
          </Text>
          <List variant="list">
            <ListItem>Общие сведения о программе</ListItem>
            <ListItem>Установка и настройка</ListItem>
            <ListItem>Авторизация в системе</ListItem>
            <ListItem>Базовые принципы работы с программой</ListItem>
            <ListItem>Роли пользователей</ListItem>
            <ListItem>Модуль Автоломбард</ListItem>
            <ListItem>Модуль Автосалон</ListItem>
            <ListItem>Модуль Касса</ListItem>
            <ListItem>Модуль Кассовая книга</ListItem>
            <ListItem>Модуль Отчетность</ListItem>
            <ListItem>Конфигурация системы</ListItem>
          </List>
          <Text>
            Основной текст. XLombard MOD - дополнительные модули позволяют существенно оптимизировать
            ежедневную работу сотрудников. XLombard делает невозможными ошибки, связанные с человеческим
            фактором при оформлении договоров. XLombard - система комплексной автоматизации компаний,
            предоставляющих услуги краткосрочного кредитования под залог автомобиля.
          </Text>
          <List variant="ordered">
            <ListItem>XL.Check: проверка ТС и собственника</ListItem>
            <ListItem>Распознавание паспортов</ListItem>
            <ListItem>XLombard Web</ListItem>
            <ListItem>Заявки</ListItem>
            <ListItem>Уведомления</ListItem>
            <ListItem>Партнеры</ListItem>
            <ListItem>Инвесторы</ListItem>
            <ListItem>Синхронизация 1С</ListItem>
          </List>
          <Text>
            Основной текст. XLombard MOD - дополнительные модули позволяют существенно оптимизировать
            ежедневную работу сотрудников. XLombard делает невозможными ошибки, связанные с человеческим
            фактором при оформлении договоров. XLombard - система комплексной автоматизации компаний,
            предоставляющих услуги краткосрочного кредитования под залог автомобиля.
          </Text>
        </div>
        <div className="my-8 flex flex-col items-start gap-3">
          <Button variant="fill" size="lg">
            <DownloadIcon />
            <span>Кнопка с иконкой</span>
          </Button>
          <Button variant="fill" size="lg">
            Основная кнопка
          </Button>
          <Button className="text-blue-base">Основная кнопка</Button>
        </div>
      </section>

      <section className="my-12 px-5">
        <Block className="flex gap-4">
          <BackdropIcon className="shrink-0 text-blue-base" size={48}>
            <SendIcon />
          </BackdropIcon>
          <div className="flex flex-col gap-4">
            <Title variant="stroke">Акцентный блок в тексте</Title>
            <Text size="sm">
              Описание. Агрегатор заявок на займ из различных источников (веб-сайтов, партнеров компании и
              т.д.), позволяет более качественно управлять входящими обращениями клиентов. Агрегатор заявок на
              займ из различных источников (веб-сайтов, партнеров компании и т.д.), позволяет более
              качественно управлять входящими обращениями клиентов.
            </Text>
          </div>
        </Block>
      </section>

      <section className="my-12 flex flex-col gap-6 px-5">
        <Text>
          Основной текст. XLombard MOD - дополнительные модули позволяют существенно оптимизировать ежедневную
          работу сотрудников. XLombard делает невозможными ошибки, связанные с человеческим фактором при
          оформлении договоров. XLombard - система комплексной автоматизации компаний, предоставляющих услуги
          краткосрочного кредитования под залог автомобиля.
        </Text>
        <TextLink href="#">Ссылки на допресурсы</TextLink>
        <Block className="flex gap-4">
          <BackdropIcon className="shrink-0 text-blue-base" size={48}>
            <DownloadIcon />
          </BackdropIcon>
          <div>
            <TextLink href="#">Ссылка на прикрепленный файл.pdf</TextLink>
            <Text subtle size="sm">
              140 Кб
            </Text>
          </div>
        </Block>
      </section>

      <Divider className="mx-auto" />

      <section className="px-5">
        <Text>
          Основной текст. XLombard MOD - дополнительные модули позволяют существенно оптимизировать ежедневную
          работу сотрудников. XLombard делает невозможными ошибки, связанные с человеческим фактором при
          оформлении договоров. XLombard - система комплексной автоматизации компаний, предоставляющих услуги
          краткосрочного кредитования под залог автомобиля.
        </Text>
      </section>

      <section className="my-12 flex flex-col gap-10 px-5">
        <div>
          <Title size="xl">Пример блока с карточками</Title>
          <Text subtle>Цены актуальны до 01.06.23</Text>
        </div>
        <div className="grid grid-cols-1 gap-5">
          <Block className="flex flex-col gap-3">
            <div>
              <Title variant="stroke">12 000 ₽</Title>
              <Text size="sm">ежемесячно за 1 филиал</Text>
            </div>
            <Title>Лицензия XLombard</Title>
            <Text subtle size="xs">
              Базовая лицензия распространяется на 1 филиал. Количество рабочих мест в филиале не ограничено.
              Филиалом считаем пункт обслуживания клиентов.
            </Text>
          </Block>
          <Block className="flex flex-col gap-3">
            <div>
              <Title variant="stroke">20 000 ₽</Title>
              <Text size="sm">разово</Text>
            </div>
            <Title>Базовая установка и настройка системы</Title>
            <Text subtle size="xs">
              Регистрация нового сервера, подключение интеграционных модулей (телефония, смс, проверки и т.
              д.), настройка 1 пакета документов.
            </Text>
          </Block>
          <Block className="flex flex-col gap-3" bg="green-light">
            <div>
              <Title variant="stroke">12 000 ₽</Title>
              <Text size="sm">ежемесячно за 1 филиал</Text>
            </div>
            <Title>Лицензия XLombard</Title>
            <Text subtle size="xs">
              Базовая лицензия распространяется на 1 филиал. Количество рабочих мест в филиале не ограничено.
              Филиалом считаем пункт обслуживания клиентов.
            </Text>
          </Block>
          <Block className="flex flex-col gap-3" bg="green-light">
            <div>
              <Title variant="stroke">12 000 ₽</Title>
              <Text size="sm">ежемесячно за 1 филиал</Text>
            </div>
            <Title>Лицензия XLombard</Title>
            <Text subtle size="xs">
              Базовая лицензия распространяется на 1 филиал. Количество рабочих мест в филиале не ограничено.
              Филиалом считаем пункт обслуживания клиентов.
            </Text>
          </Block>
          <Block className="flex flex-col gap-3">
            <div>
              <Title variant="stroke">20 000 ₽</Title>
              <Text size="sm">разово</Text>
            </div>
            <Title>Базовая установка и настройка системы</Title>
            <Text subtle size="xs">
              Регистрация нового сервера, подключение интеграционных модулей (телефония, смс, проверки и т.
              д.), настройка 1 пакета документов.
            </Text>
          </Block>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
