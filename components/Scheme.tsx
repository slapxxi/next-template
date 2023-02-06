import { useId, useState } from 'react';
import { ChartIcon } from './icons/ChartIcon';
import { CodeIcon } from './icons/CodeIcon';
import { CogIcon } from './icons/CogIcon';
import { MessageIcon } from './icons/MessageIcon';
import { List, ListItem } from './List';
import { Title } from './Title';

type Ids = 'functions' | 'tuning' | 'support' | 'expertise';

export let Scheme = () => {
  let [selectedId, setSelectedId] = useState<Ids>('functions');
  let filterId = useId();

  function handleClick(e: React.MouseEvent<SVGAElement | HTMLAnchorElement>) {
    setSelectedId(e.currentTarget.id as Ids);
  }

  return (
    <div>
      <svg
        fill="none"
        viewBox="0 0 320 337"
        className="relative z-10 text-sm text-blue-base"
        fontFamily="Onest"
      >
        <a
          id="functions"
          className="group data-checked:text-white"
          onClick={handleClick}
          data-checked={selectedId === 'functions'}
        >
          <rect
            width="99"
            height="99"
            fill="#CAD2FF"
            rx="8"
            transform="translate(115 200) rotate(30 45 45) "
            className="group-data-checked:hidden"
          />
          <rect
            width="98"
            height="98"
            fill="#fff"
            stroke="#0862EE"
            rx="7.47"
            className="stroke-2 group-data-checked:hidden"
            transform="translate(115 200) rotate(45 45 45)"
          />
          <rect
            filter={`url(#${filterId})`}
            width="98"
            height="98"
            rx="7.47"
            className="hidden fill-navy stroke-2 group-data-checked:block"
            transform="translate(115 200) rotate(45 45 45)"
          />
          <g
            className="transition-transform duration-75 group-data-checked:translate-y-3 
						group-data-checked:scale-125 group-data-checked:duration-300"
            style={{ transformOrigin: '166px 210px' }}
          >
            <CogIcon size={42} x={140} y={210} />
          </g>
          <text
            fill="currentColor"
            x="118"
            y="272"
            className="transition-opacity group-data-checked:opacity-0"
          >
            Функционал
          </text>
        </a>

        <a
          id="expertise"
          onClick={handleClick}
          className="group data-checked:text-white"
          data-checked={selectedId === 'expertise'}
        >
          <rect
            width="99"
            height="99"
            fill="#CAD2FF"
            rx="8"
            transform="translate(115 20) rotate(30 45 45) "
            className="group-data-checked:hidden"
          />
          <rect
            width="98"
            height="98"
            fill="#fff"
            stroke="#0862EE"
            rx="7.47"
            className="stroke-2 group-data-checked:hidden"
            transform="rotate(45 80 195)"
          />
          <rect
            filter={`url(#${filterId})`}
            width="98"
            height="98"
            rx="7.47"
            className="hidden fill-navy stroke-2 group-data-checked:block"
            transform="translate(116 19) rotate(45 45 45)"
          />
          <g
            className="transition-transform duration-75 group-data-checked:translate-y-3 
						group-data-checked:scale-125 group-data-checked:duration-300"
            style={{ transformOrigin: '153px 30px' }}
          >
            <ChartIcon size={38} x={143} y={30} />
          </g>
          <text
            fill="currentColor"
            x="120"
            y="86"
            className="transition-opacity group-data-checked:opacity-0"
          >
            Экспертиза
          </text>
        </a>

        <a
          id="support"
          onClick={handleClick}
          className="group data-checked:text-white"
          data-checked={selectedId === 'support'}
        >
          <rect
            width="99"
            height="99"
            fill="#CAD2FF"
            rx="8"
            transform="rotate(30 -57 478)"
            className="group-data-checked:hidden"
          />
          <rect
            width="97.92"
            height="97.92"
            y="1.17"
            fill="#fff"
            stroke="#0862EE"
            stroke-width="1.66"
            rx="7.47"
            transform="rotate(45.02 15.62 347.6)"
            className="group-data-checked:hidden"
          />
          <rect
            filter={`url(#${filterId})`}
            width="98"
            height="98"
            rx="7.47"
            className="hidden fill-navy stroke-2 group-data-checked:block"
            transform="translate(205 110) rotate(45 45 45)"
          />
          <g
            className="transition-transform duration-75 group-data-checked:translate-y-3 
						group-data-checked:scale-125 group-data-checked:duration-300"
            style={{ transformOrigin: '241px 120px' }}
          >
            <MessageIcon size={38} x={231} y={120} />
          </g>
          <text
            fill="currentColor"
            x="209"
            y="176"
            className="transition-opacity group-data-checked:opacity-0"
          >
            Поддержка
          </text>
        </a>

        <a id="tuning" onClick={handleClick} className="group" data-checked={selectedId === 'tuning'}>
          <rect
            width="99.57"
            height="99.6"
            fill="#CAD2FF"
            rx="8.3"
            transform="rotate(30.01 -147.15 143.76) skewX(.03)"
          />
          <rect
            width="97.92"
            height="97.92"
            y="1.17"
            fill="#fff"
            stroke="#0862EE"
            stroke-width="1.66"
            rx="7.47"
            transform="rotate(45.02 -73.98 131.36)"
          />
          <CodeIcon size={38} x={50} y={120} />
          <text fill="currentColor" x="33" y="176">
            Доработки
          </text>
        </a>

        <g>
          <path
            stroke="#CAD2FF"
            stroke-linecap="round"
            d="M.5-.5h293.58"
            transform="rotate(45.02 -41.25 96.46)"
          />
          <path
            stroke="#CAD2FF"
            stroke-linecap="round"
            d="M.5-.5h293.58"
            transform="rotate(-45.02 348.6 65.07)"
          />
          <path fill="#0862EE" d="M144.36 145.27h31.53v31.54h-31.53z" />
          <path
            stroke="#fff"
            stroke-linecap="square"
            stroke-width="4.98"
            d="M151.6 151.9v.61l17.04 17.05v.6"
          />
          <path
            stroke="#fff"
            stroke-linecap="square"
            stroke-width="4.98"
            d="M168.64 151.9v.61l-17.04 17.05v.6"
          />
        </g>

        <defs>
          <filter id={filterId} color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feMorphology in="SourceAlpha" radius="12" result="effect1_dropShadow_725_73" />
            <feOffset dx="18.26" dy="18.26" />
            <feGaussianBlur stdDeviation="6.64" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.265761 0 0 0 0 0.679167 0 0 0 0.29 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_725_73" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_725_73" result="shape" />
          </filter>
        </defs>
      </svg>

      <div className="relative z-0 -mt-8 mb-8 overflow-hidden rounded-lg bg-gray-light px-8 pt-12 pb-4 target:bg-blue-base">
        {selectedId === 'functions' && (
          <>
            <Title variant="decorated" size="xl" decorationColor="hsl(231,100%,90%)" className="mb-4">
              Функционал
            </Title>
            <List className="ml-5  text-xs font-normal" variant="disc">
              <ListItem>18 модулей</ListItem>
              <ListItem>Полный цикл управления портфелем</ListItem>
              <ListItem>Безопасность</ListItem>
              <ListItem>CRM</ListItem>
            </List>
          </>
        )}
        {selectedId === 'tuning' && (
          <>
            <Title variant="decorated" size="xl" decorationColor="hsl(231,100%,90%)" className="mb-4">
              Доработки
            </Title>
            <List className="ml-5  text-xs font-normal" variant="disc">
              <ListItem>18 модулей</ListItem>
              <ListItem>Полный цикл управления портфелем</ListItem>
              <ListItem>Безопасность</ListItem>
              <ListItem>CRM</ListItem>
            </List>
          </>
        )}
        {selectedId === 'expertise' && (
          <>
            <Title variant="decorated" size="xl" decorationColor="hsl(231,100%,90%)" className="mb-4">
              Экспертиза
            </Title>
            <List className="ml-5  text-xs font-normal" variant="disc">
              <ListItem>18 модулей</ListItem>
              <ListItem>Полный цикл управления портфелем</ListItem>
              <ListItem>Безопасность</ListItem>
              <ListItem>CRM</ListItem>
            </List>
          </>
        )}
        {selectedId === 'support' && (
          <>
            <Title variant="decorated" size="xl" decorationColor="hsl(231,100%,90%)" className="mb-4">
              Поддержка
            </Title>
            <List className="ml-5  text-xs font-normal" variant="disc">
              <ListItem>18 модулей</ListItem>
              <ListItem>Полный цикл управления портфелем</ListItem>
              <ListItem>Безопасность</ListItem>
              <ListItem>CRM</ListItem>
            </List>
          </>
        )}
      </div>
    </div>
  );
};
