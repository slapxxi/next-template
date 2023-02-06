import { SVGProps, useId, useState } from 'react';
import styles from './Integrations.module.scss';
import { List, ListItem } from './List';
import { Modal } from './Modal';
import { Title } from './Title';

export type IntegrationsProps = {
  children?: React.ReactNode;
  className?: string;
};

export let Integrations = (props: IntegrationsProps) => {
  let { children, className = '', ...rest } = props;
  let filterId = useId();
  let [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div className={`${className}`} {...rest}>
      <Modal open={open} onClose={handleClose}>
        <div className="px-6 text-sm">
          <Title variant="decorated" className="mb-3">
            Отраслевые решения
          </Title>
          <List variant="disc" className="ml-4" gap={3}>
            <ListItem>
              <h2>Base Docs</h2>
              <p className="text-gray-500">{'Мониторинг состояния движимых залогов на предмет ДТП'}</p>
            </ListItem>
            <ListItem>
              <h2>Циклотрон Модуль</h2>
              <p className="text-gray-500">{'Мониторинг состояния движимых залогов на предмет ДТП'}</p>
            </ListItem>
            <ListItem>
              <h2>Модуль Геовизор</h2>
              <p className="text-gray-500">{'Построение рейтинга водителя по стилю езды и нарушений ПДД'}</p>
            </ListItem>
          </List>
        </div>
      </Modal>

      <svg viewBox="0 0 309 183" fill="none" fontFamily="Onest">
        <path
          stroke="#CFE5FF"
          strokeWidth={0.4}
          d="m182.8 148-28-123.4m53.4 111.3-78.7-99m96.3 77-114-55.1m121.5 27.4H105.6M225.9 59l-114.1 54.7M208.4 37l-79.1 98.7m53.7-111L154.7 148"
        />
        <g filter={`url(#${filterId})`}>
          <circle cx={168.5} cy={86.5} r={42.5} fill="#fff" />
        </g>
        <circle
          cx={168.7}
          cy={86.4}
          r={52.4}
          stroke="#A3D2FE"
          strokeDasharray="1.74 1.74"
          strokeWidth={0.4}
        />
        <circle
          cx={168.7}
          cy={86.4}
          r={64.2}
          stroke="#CFE5FF"
          strokeDasharray="1.74 1.74"
          strokeWidth={0.4}
        />

        <a className={`${styles.link}`} onClick={handleClick}>
          <Circle size={18} x={145} y={15}>
            3
          </Circle>
          <Text fontSize={10}>
            <tspan x={99.5} y={8.3}>
              {'IP-телефония'}
            </tspan>
          </Text>
        </a>

        <a className={`${styles.link}`} onClick={handleClick}>
          <Circle size={22} x={172} y={140}>
            4
          </Circle>
          <Text fontSize={10}>
            <tspan x={175.3} y={170.9}>
              {'Телематика'}
            </tspan>
          </Text>
        </a>

        <a className={`${styles.link}`} onClick={handleClick}>
          <Circle size={16} x={174} y={15}>
            2
          </Circle>
          <Text fontSize={10}>
            <tspan x={176.1} y={8.3}>
              {'Кассы'}
            </tspan>
          </Text>
        </a>

        <a className={`${styles.link}`} onClick={handleClick}>
          <Circle size={24} x={197} y={125}>
            5
          </Circle>
          <Text fontSize={10}>
            <tspan x={223} y={142.8}>
              {'GPS-маяки'}
            </tspan>
          </Text>
        </a>

        <a className={`${styles.link}`} onClick={handleClick}>
          <Circle size={18} x={145} y={142}>
            3
          </Circle>
          <Text fontSize={10}>
            <tspan x={13.2} y={171.3}>
              {'Государственные, надзорные'}
            </tspan>
            <tspan x={51.2} y={181.3}>
              {'и системы отчетности'}
            </tspan>
          </Text>
        </a>

        <a className={`${styles.link}`} onClick={handleClick}>
          <Circle size={18} x={120} y={26}>
            3
          </Circle>
          <Text fontSize={10}>
            <tspan x={72.3} y={28.3}>
              {'Системы'}
            </tspan>
            <tspan x={41.8} y={38.3}>
              {'бухучёта (ЕПС)'}
            </tspan>
          </Text>
        </a>

        <a className={`${styles.link}`} onClick={handleClick}>
          <Circle size={30} x={197} y={19}>
            9
          </Circle>
          <Text fontSize={10}>
            <tspan x={226} y={24.7}>
              {'Сервисы'}
            </tspan>
            <tspan x={226} y={34.7}>
              {'проверок'}
            </tspan>
          </Text>
        </a>

        <a className={`${styles.link}`} onClick={handleClick}>
          <Circle size={22} x={218} y={105}>
            5
          </Circle>
          <Text fontSize={10}>
            <tspan x={243.5} y={115.9}>
              {'Банки и'}
            </tspan>
            <tspan x={243.5} y={125.9}>
              {'эквайринг'}
            </tspan>
          </Text>
        </a>

        <a className={`${styles.link}`} onClick={handleClick}>
          <Circle size={14} x={122} y={132}>
            1
          </Circle>
          <Text fontSize={10}>
            <tspan x={12.8} y={139.3}>
              {'Терминалы приёма и'}
            </tspan>
            <tspan x={29.9} y={149.3}>
              {'выдачи наличных'}
            </tspan>
          </Text>
        </a>

        <a className={`${styles.link}`} onClick={handleClick}>
          <Circle size={16} x={103} y={51}>
            2
          </Circle>
          <Text fontSize={10}>
            <tspan x={5.8} y={57.3}>
              {'Системы сквозной'}
            </tspan>
            <tspan x={46.6} y={67.3}>
              {'аналитики'}
            </tspan>
          </Text>
        </a>

        <a className={`${styles.link}`} onClick={handleClick}>
          <Circle size={24} x={216} y={48}>
            6
          </Circle>
          <Text fontSize={10}>
            <tspan x={239.8} y={62.8}>
              {'SMS-сервисы'}
            </tspan>
          </Text>
        </a>

        <a className={`${styles.link}`} onClick={handleClick}>
          <Circle size={20} x={224} y={77}>
            3
          </Circle>
          <Text fontSize={10}>
            <tspan x={247} y={85.1}>
              {'Отраслевые'}
            </tspan>
            <tspan x={247} y={95.1}>
              {'решения'}
            </tspan>
          </Text>
        </a>

        <a className={`${styles.link}`} onClick={handleClick}>
          <Circle size={16} x={102} y={106}>
            2
          </Circle>
          <Text fontSize={10}>
            <tspan x={15.9} y={118.6}>
              {'Лидогенераторы'}
            </tspan>
          </Text>
        </a>

        <a className={`${styles.link}`} onClick={handleClick}>
          <Circle size={16} x={98} y={78}>
            2
          </Circle>
          <Text fontSize={10}>
            <tspan x={21.5} y={85.8}>
              {'Мессенджеры'}
            </tspan>
            <tspan x={43.5} y={95.8}>
              {'и соцсети'}
            </tspan>
          </Text>
        </a>

        <Text x={153} y={111}>
          Lombard
        </Text>
        <Text fill="#0862EE" x={148} y={111}>
          {'\u0425'}
        </Text>
        <Text x={143} y={72}>
          {'\u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438'}
        </Text>
        <path fill="#0862EE" d="m154.9 91 17.5 10 10-17.4L165 73.5 154.9 91Z" opacity={0.2} />
        <path fill="#0862EE" d="M158.6 97.4h20.2V77.2h-20.2v20.2Z" />
        <path
          fill="#fff"
          d="m174.2 91.5.2.2v2.8h-2.7v-1.8l-.2-.2-2.6-3h-.4l-2.6 3-.1.2v1.8H163v-2.8l.2-.2 3.5-4V87l-3.5-4-.1-.2V80h2.6v1.5l.1.3.1.2 2.6 3h.4l2.6-3 .1-.2V80h2.8v2.8l-.2.3-3.5 4v.4l3.5 4Z"
        />
        <defs>
          <filter
            id={filterId}
            width={106.7}
            height={106.7}
            x={115.1}
            y={33.6}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy={0.4} />
            <feGaussianBlur stdDeviation={5.4} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0.0199432 0 0 0 0 0.31703 0 0 0 0 0.779167 0 0 0 0.16 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_654_8444" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_654_8444" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

type CircleProps = {
  children?: React.ReactNode;
  className?: string;
  size?: number;
} & SVGProps<SVGSVGElement>;

let Circle = (props: CircleProps) => {
  let { children, className = '', size = 80, ...rest } = props;
  return (
    <svg className={`${className}`} viewBox="0 0 21 21" width={size} height={size} {...rest}>
      <path fill="#0862EE" d="M16.7 10.2a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Z" />
      <path
        stroke="#0862EE"
        strokeOpacity={0.1}
        strokeWidth={3.5}
        d="M10.2 2a8.2 8.2 0 0 0 0 16.5c4.6 0 8.3-3.7 8.3-8.3 0-4.5-3.7-8.2-8.3-8.2Z"
      />
      <Text fill="white" x={10.5} y={12.5} textAnchor="middle" alignmentBaseline="baseline">
        {children}
      </Text>
    </svg>
  );
};

type TextProps = {
  children?: React.ReactNode;
  className?: string;
} & SVGProps<SVGTextElement>;

let Text = (props: TextProps) => {
  let { children, className = '', ...rest } = props;
  return (
    <text
      fill="currentColor"
      fontFamily="Onest"
      fontSize={7}
      className={`${className} whitespace-pre`}
      {...rest}
    >
      {children}
    </text>
  );
};
