import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const advantagesData = [
  {
    title: 'Крепкий иммунитет',
    description: 'Витграсс повышает иммунитет и стимулирует процессы самовосстановления организма',
    img: '/pros2.jpg',
  },
  {
    title: 'Красивые волосы',
    description: 'Витграсс укрепляет волосы, восстанавливает их после выпадения и даже поседения',
    img: '/pros3.jpg',
  },
  {
    title: 'Здоровая кожа',
    description:
      'Регулярное употребление витграсс способствует быстрому омоложению кожи, разглаживанию морщин и лечение кожных заболеваний',
    img: '/pros1.jpg',
  },
  {
    title: 'Опухоли и рак',
    description:
      'Витграсс обеспечивает уменьшение доброкачественных опухолей (миом, липом и пр.), предотвращает развитие злокачественных.',
    img: '/pros4.jpg',
  },
  {
    title: 'Здоровье кишечника',
    description: 'Витграсс нормализует микрофлору кишечника, очищает его без резкого слабительного эффекта',
    img: '/pros5.jpg',
  },
  {
    title: 'Полный детокс',
    description:
      'Сок ростков пшеницы способствует выводению токсинов, избытка холестерина, мочевой кислоты, снижает уровень сахара в крови',
    img: '/pros6.jpg',
  },
  {
    title: 'Лечение Анемии',
    description:
      'Витграсс - идеальное средство для прдотваращения и эффективного лечения анемии, повышения уровня феритина и гемоглобина.',
    img: '/pros7.jpg',
  },
  {
    title: 'Семья и зачатие',
    description:
      'Сок ростков пшеницы благотворно влияет на увеличение количества яйеклеток у женщин и спермотозоидов у мужчин, увеличивая фертильность ',
    img: '/pros8.jpg',
  },
];

const reviews = [
  {
    name: 'Марина',
    img: '/reviewer.jpg',
    source: 'отзыв из VK',
    text: 'Я раньше никогда не пробовала Витграсс, хотя слышала о нем много. Мне очень понравилась внимательность менеджера ГудГрин, который подробнейшим образом все рассказал.',
  },
  {
    name: 'Светлана',
    img: '/reviewer.jpg',
    source: 'отзыв из Instagram',
    text: 'Спасибо ребятам из GoodGreen за их продукцию. Раньше пробовала Витграсс других производителей, и даже представить не могла, что этот сок может быть вкусным и однородным (без всяких хлопьев). ',
  },
  {
    name: 'Танзиля',
    img: '/reviewer.jpg',
    source: 'отзыв из VK',
    text: 'Хорошо, что у нас появился такой производитель, как ГудГрин. Раньше покупала у частников, но всегда переживала за безопасность. Как выяснилось, опаслась не зря. ',
  },
  {
    name: 'Регина',
    img: '/reviewer.jpg',
    source: 'отзыв из VK',
    text: 'Радует, что у вас бесплатная доставка! Вот бы вы еще бесплатно возили за город)) Очень удобно. Так же понравилась упаковка - очень компактная и не занимает много места в морозилке!',
  },
  {
    name: 'Татьяна',
    img: '/reviewer.jpg',
    source: 'отзыв из Telegram',
    text: 'Всегда знала, что Витграсс - это шикарное средство для работы с будущими мамами, но, к сожалению, раньше не могла никого рекомендовать. Хорошо, что появился производитель, со всеми документами о безопасности продукции.',
  },
  {
    name: 'Марат',
    img: '/reviewer.jpg',
    source: 'отзыв из Instagram',
    text: 'Не могу назвать себя ЗОЖником, но, когда попробовал ваш Витграс - был приятно удивлен. Кофе почти не пью теперь. Утром выпиваю Витграсс - и целый день бодрячком! Спасибо!',
  },
];

let IndexPage = () => {
  return (
    <div>
      <section className="hero lg:px-wrap">
        <div className="mx-auto flex flex-col px-4 pt-12 pb-5 text-white lg:flex-row lg:items-center lg:justify-center lg:pt-20 lg:pb-20">
          <div className="lg:max-w-xs">
            <h2 className="title mb-4 text-center text-4xl">
              биотоник <em>витграсс goodgreen</em>
            </h2>
            <p className="mb-6 text-center uppercase">
              природные активаторы регенерации, укрепления и омоложения организма
            </p>
          </div>
          <div className="mb-6 grid shrink-0 place-items-center lg:[place-items:end_center]">
            <img
              src="/glass.webp"
              alt="GoodGreen pack"
              width={135}
              className="mb-6 hidden lg:col-span-full lg:row-span-full lg:block"
            />
            <img
              src="/pack.webp"
              alt="GoodGreen pack"
              className="lg:col-span-full lg:row-span-full lg:w-[285px]"
            />
          </div>
          <div className="flex flex-col gap-6 lg:max-w-xs">
            <h2 className="title text-center text-4xl">
              <em className="block">измени свою жизнь</em> в один клик
            </h2>
            <p className="text-center uppercase">
              иммунитет, здоровье и красота <br /> <strong>всего за 60 рублей в день</strong>
            </p>
            <button className="button self-center shadow-lg">выбрать курс</button>
          </div>
        </div>
      </section>

      {/* what is it */}
      <section className="section lg:bg-grass-h lg:bg-grass-n-glass bg-white px-10 py-6 lg:flex lg:gap-14 lg:pt-20 lg:pb-40 lg:px-wrap">
        <div className="lg:order-1 lg:max-w-prose">
          <h2 className="title mb-1.5 text-2xl text-secondary">
            что такое <em className="block text-5xl">витграсс</em>
          </h2>
          <p className="text">Витграсс (Wheatgrass) - это сок выжатый из молодых ростков пшеницы</p>
          <ol className="olist my-7">
            <li className="olist__li text-sm">
              Отборные зерна пшеницы проращивают на гдиропонных установках до высоты 10-15 см. После этого
              ростки срезают.
            </li>
            <li className="olist__li text-sm">
              Срезанные промытые ростки отжимают на специальных соковыжималках на низких оборотах.
            </li>
            <li className="olist__li text-sm">
              После отжима свежий Витграсс подвергается шоковой заморозке - так он сохраняет все полезные
              свойства в течение года.
            </li>
          </ol>
        </div>
        <div className="mt-8 flex flex-col items-center gap-7 lg:mt-0 lg:max-w-xs">
          <img src="/nefertiti.webp" alt="Nefertiti" className="w-1/2" />
          <p className="font-cursive text-2xl">
            В Древнем Египте люди считали ростки пшеницы священными и поклонялись их магическим целебным
            свойствам. Более 5000 лет назад там были созданы первые аптекарские формулы, в которых пшеница
            описывалась как источник здоровья.{' '}
          </p>
        </div>
      </section>

      {/* ingredients */}
      <section className="section flex flex-col py-7 text-white lg:py-20">
        <div className="justify-between gap-4 px-10 lg:flex lg:px-wrap">
          <div className="mb-8 flex-1 lg:max-w-md">
            <h2 className="title mb-2 text-2xl">
              из чего состоит <em className="block text-5xl">витграсс</em>
            </h2>
            <p>
              Витграсс содержит огромное количество витаминов, микро- и макроэлементов, незаменимых
              аминокислот, ферментов и протеин.
            </p>
          </div>
          <div className="-mb-10 hidden shrink-0 lg:block">
            <img src="/glass.webp" alt="" width={135} />
          </div>
          <div className="lg:arrow mt-6 hidden flex-1 gap-3.5 lg:order-2 lg:flex lg:max-w-md">
            <div className="shrink-0">
              <img src="/peanuts.jpg" alt="Peanuts" className="h-20 w-20 rounded-full object-cover" />
            </div>
            <p className="font-cursive text-2xl">
              Витграс не содержит глютен, не смотря на то, что его производят из ростков пшеницы
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[1200px]">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            centeredSlides
            className="mb-8"
            initialSlide={1}
            breakpoints={{ 1024: { slidesPerView: 4, centeredSlides: false, spaceBetween: 10 } }}
          >
            {[
              {
                value: '17+',
                name: 'аминокислоты',
                description:
                  'Аминокислоты - это основа синтеза белка в организме. Витграсс содержит 17 незаменимых: BCAA (лейцин, изолейцин, валин), лизин, триптофан, фенилаланин, а-амино-b-оксимасляная кислота, метионин, аланин, аргинин, аспарагиновая кислота, глутаминовая кислота, аминоуксусная кислота, гистидин, пролин, серин и тирозин.',
              },
              {
                value: '70%',
                name: 'хлорофилл',
                description:
                  'Хлорофилла всего на один атом отличается от гемоглобина и это главное богаство Витграсс. Он укрепляет клеточные мембраны, заживляет язвы и раны, укрепляет иммунитет, предотвращает изменения молекул ДНК, блокирует этап превращения здоровых клеток в раковые, повышает уровень кислорода в крови.',
              },
              {
                value: '400+',
                name: 'ферментов',
                description:
                  'Цитохромоксидаза - антиоксидант, необходимый для нормального дыхания клетки.  Липаза - жирорасщепляющий фермент.<br/><br/> Так же Витграсс содержит: супероксиддисмутазу (СОД), трансгидрогеназу, протеазу, амилазу, каталазу, протеазу и друге..',
              },
              {
                value: '400+',
                name: 'витаминов и микро-элементов',
                description:
                  '<strong>Витамины</strong>: <br/> А, В1, В2, В3, В4, В5, В6, В7, В8, B9, В12, С, Е, K, PP, U<br/><br/> <strong>Микро- и макроэлементы</strong>: бета-каротин, бетаин триметилглицин, железо, фосфор, кальций, калий, цинк, , магний, натрий, селен, йод, сера.',
              },
            ].map((item, i) => (
              <SwiperSlide key={i} className="!h-auto">
                <div className="flex h-full flex-col rounded-[30px] bg-gradient-to-b from-green-600/50 to-black/50 px-6 py-10">
                  <h2
                    className="mb-4 inline-flex items-center justify-center
                    self-start rounded-full bg-salad-600 px-4 py-2 text-4xl font-bold text-white"
                  >
                    {item.value}
                  </h2>
                  <h3 className="title mt-auto mb-3 border-b-2 text-2xl">{item.name}</h3>
                  <p className="text-sm" dangerouslySetInnerHTML={{ __html: item.description }} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex items-center gap-3.5 px-5 lg:order-2 lg:hidden">
          <div className="shrink-0">
            <img src="/peanuts.jpg" alt="Peanuts" className="h-20 w-20 rounded-full object-cover" />
          </div>
          <p className="font-cursive text-2xl">
            Витграс не содержит глютен, не смотря на то, что его производят из ростков пшеницы
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="lg:pb-20 lg:pl-wrap lg:[background:url('/grass-h.webp')_top_60px_right_-200px/350px_no-repeat]">
          <div className="lg:flex lg:gap-8">
            <svg fill="none" viewBox="85 0 330 424" className="lg:hidden">
              <rect width={500} height={280} y={142} fill="#034402" rx={140} />
              <image href="/girl.webp" x="250" transform="translate(-210-2)"></image>
            </svg>
            <div className="hidden w-1/3 max-w-[500px] shrink-0 lg:block">
              <svg fill="none" viewBox="0 0 500 424">
                <rect width={500} height={280} y={142} fill="#034402" rx={140} />
                <image href="/girl.webp" x="250" transform="translate(-210-2)"></image>
              </svg>
            </div>
            <div className="mx-10 mt-10 lg:mx-0 lg:w-1/3">
              <h2 className="font-bold">
                <span className="text-5xl text-gray-800">Идеальная тренировка</span>
                <em className="mt-2 block text-2xl">и быстрое восстановление</em>
              </h2>
              <div className="my-5 space-y-4">
                <p className="text">
                  Первое что ощущается в начале приема – приток энергии и сил даже при минимальном времени на
                  отдых.
                </p>
                <p className="text">Поэтому Витграсс отлично подходит спортсменам</p>
                <p className="text">
                  Принимайте его перед началом тренировки, что бы повысить выносливость и быстро
                  восстановиться!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="lg:flex lg:justify-end lg:gap-8 lg:pb-40 lg:pr-wrap 
          lg:[background:url('/grass-h.webp')_bottom_left_-320px/550px_no-repeat]"
        >
          <svg fill="none" viewBox="85 0 330 424" className="lg:hidden">
            <rect width={500} height={280} y={142} fill="#034402" rx={140} />
            <image href="/boy.webp" x={250} transform="translate(-165 40.4)" width={330} />
          </svg>
          <div className="mx-10 mt-10 lg:mx-0 lg:w-1/3">
            <h2 className="font-bold">
              <span className="text-5xl text-gray-800">Биотоник Витграсс -</span>
              <em className="mt-2 block text-2xl">помощник для школьника и студента</em>
            </h2>
            <div className="my-5 space-y-4">
              <p className="text">
                Витграсс содержит почти все витамины группы В, и один из ярких представителей этого витамина -
                холин (В4).
              </p>
              <p className="text">
                Этот витамин крайне важен для нормальной работы нервной системы, полезен при стрессах, имеет
                успокаивающее действие, помогает мыслительным способностям.
              </p>
            </div>
          </div>
          <div className="hidden w-1/3 max-w-[500px] shrink-0 lg:block">
            <svg fill="none" viewBox="0 0 500 424">
              <rect width={500} height={280} y={142} fill="#034402" rx={140} />
              <image href="/boy.webp" x={250} transform="translate(-165 40.4)" width={330} />
            </svg>
          </div>
        </div>

        <div className="lg:px-wrap">
          <div className="my-10 flex flex-col items-center gap-5 px-10 lg:ml-auto lg:-mt-2 lg:max-w-xl lg:flex-row lg:px-0">
            <svg className="w-1/2 shrink-0 lg:w-36" viewBox="0 0 100 100">
              <clipPath id="circle">
                <circle cx="50" cy="50" r="50%" />
              </clipPath>
              <g clipPath="url(#circle)">
                <image href="/portrait.jpg" width="100%" height="100%" transform="scale(2) translate(-20)" />
              </g>
            </svg>
            <p className="font-cursive text-2xl text-salad-900">
              31 июля 1930 года агрохимик Чарльз Шнабель собрал 126 яиц от 106 больных умирающий наседок,
              которых он в течение месяца кормил исключительно ростками пшеницы.
            </p>
          </div>
        </div>
      </section>

      {/* nutrients */}
      <section className="bg-fresh px-2 py-20">
        <div className="mx-auto max-w-[800px] rounded-50 bg-black/70 px-5 py-7 text-white lg:px-20 lg:py-20">
          <h2 className="text-center text-5xl font-bold lg:text-left">
            30 мл Витграсс
            <em className="my-6 block text-2xl lg:my-2">содержит столько же витаминов и микро-элментов,</em>
            <em className="block">как 1,5 кг овощей</em>
          </h2>
          <p className="my-6 text-center lg:text-left">
            Только представьте, количество витамина А в 5 раз выше, чем в спарже, а содержание витамина В6
            превосходит её почти в 100 раз!
          </p>
          <ul className="my-10 grid grid-cols-2 gap-4 lg:mb-0 lg:flex">
            {[
              { ing1: 'x11', ing2: 'Ca', description: 'в 11 раз больше кальция, чем в молоке' },
              { ing1: 'x6', ing2: 'C40H56', description: 'в 6 раз больше каротина, чем в шпинате' },
              { ing1: 'x30', ing2: 'B', description: 'в 30 раз больше витамина B, чем в молоке' },
              { ing1: 'x7', ing2: 'C', description: 'в 7 раз больше витамина С, чем в лимоне' },
              { ing1: 'x5', ing2: 'Fe', description: 'в 5 раз больше железа, чем в шпинате' },
              { ing1: 'x9', ing2: 'B9', description: 'в 9 раз больше фолиевой кислоты, чем в брокколи' },
            ].map((item, i) => (
              <li className="flex flex-1 flex-col items-center" key={i}>
                <div className="mb-2 flex w-min flex-col items-center justify-center gap-2 rounded-full border-[4px] py-5 px-4 text-3xl font-bold">
                  <span style={{ fontSize: 100 / (item.ing1.length + 1) }}>{item.ing1}</span>
                  <span style={{ fontSize: 100 / (item.ing2.length + 1) }}>{item.ing2}</span>
                </div>
                <p className="my-auto text-center text-xs">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-10 lg:py-20">
        <div className="lg:flex lg:gap-4 lg:px-wrap">
          <h2 className="title shrink-0 px-10 text-5xl lg:max-w-xs lg:px-0">
            8 причин <em className="block text-2xl">начать ежедневно пить витграсс</em>
          </h2>
          <div className="lg:hidden">
            <Swiper slidesPerView={1.5} spaceBetween={14} className="my-11" initialSlide={4} centeredSlides>
              {advantagesData.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="flex flex-col gap-4">
                    <img
                      src={item.img}
                      alt="Image"
                      className="h-60 w-60 rounded-50 bg-black/10 object-cover"
                    />
                    <h2 className="px-2 text-2xl font-bold">{item.title}</h2>
                    <p className="px-2">{item.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="lg:arrow lg:arrow--green flex flex-col items-center gap-5 px-10 lg:flex-row lg:px-0">
            <img src="/granny.jpg" alt="Granny" className="h-32 w-32 shrink-0 rounded-full object-cover" />
            <p className="font-cursive text-2xl text-salad-900">
              Энн Вигмор исцелила себя от рака толстой кишки с помощью витграсса, ее история стала новым
              толчком к исследованиям. В1956 году Энн Вигмор основала Hippocrates health institute, миссией
              которого было помогать больным следуя принципам “врач лечит, природа исцеляет”.
            </p>
          </div>
        </div>
        <ul className="my-20 mx-auto hidden grid-cols-4 gap-10 px-wrap lg:grid">
          {advantagesData.map((item, i) => (
            <li className="flex flex-col gap-4" key={i}>
              <img
                src={item.img}
                alt="Image"
                className="aspect-square w-60 rounded-50 bg-black/10 object-cover"
              />
              <h2 className="px-2 text-2xl font-bold">{item.title}</h2>
              <p className="px-2">{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-grass lg:bg-splash bg-white px-10 pb-24 pt-10 lg:bg-neutral-200">
        <div className="mx-auto max-w-3xl lg:flex lg:gap-10 lg:pt-40 lg:pb-20">
          <img
            src="pack-in-grass.webp"
            alt="pack in grass"
            width={290}
            className="hidden self-start lg:block"
          />
          <div>
            <h2 className="mb-20 pl-5 text-5xl font-bold lg:pl-0">
              <span>30 мл Витграсс -</span>
              <em className="block text-2xl font-normal">достаточная норма употребления в сутки</em>
            </h2>
            <p className="mb-4 pl-2">
              Витграсс рекомендуется пить утром на голодный желудок. После чего (спустя 15 минут) желательно
              позавтракать.
            </p>
            <p className="pl-2">
              Если вы прежде не употребляли Витграсс, вы можете почувствовать тошноту или головокружение, это
              связано с непривычнм для организма повышением уровня кислорода в крови. В таком случае первые
              дни попробуйте уменьшить ежедневную дозу до 15–20 мл и увеличить ее до 30 мл, после того, как
              организм адаптируется.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-glass py-10 text-white">
        <h2 className="px-10 text-center text-5xl font-bold">Измени свою жизнь в один клик!</h2>
        <div className="lg:px-wrap">
          <Swiper
            centeredSlides
            initialSlide={1}
            slidesPerView={1.2}
            spaceBetween={12}
            className="my-10"
            breakpoints={{ 1024: { slidesPerView: 4, centeredSlides: false, spaceBetween: 14 } }}
          >
            {[{}, {}, {}, {}].map((_item, i) => (
              <SwiperSlide key={i}>
                <div className="hit flex flex-col rounded-30 bg-gradient-to-b from-salad-700 to-black px-3.5 pt-14 pb-4">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold">Профи</h2>
                    <h3>курс на 6 месяцев</h3>
                  </div>
                  <svg className="my-6 h-[2px] w-full fill-white px-4">
                    <rect width="100%" height="100%" />
                  </svg>
                  <div className="space-y-2.5 text-center">
                    <h2 className="text-2xl">
                      <strong className="text-3xl">70</strong> р/шт
                    </h2>
                    <h3 className="text-2xl font-bold">180 шт</h3>
                    <p className="text-sm">6 бесплатных доставок</p>
                  </div>
                  <svg className="my-6 h-[2px] w-full fill-white px-4">
                    <rect width="100%" height="100%" />
                  </svg>
                  <div className="mb-8 grid grid-cols-2 gap-4 px-8 text-sm">
                    <div>1 платеж</div>
                    <div>5 000 руб</div>
                    <div>2 платеж</div>
                    <div>4 000 руб</div>
                    <div>3 платеж</div>
                    <div>3 200 руб</div>
                  </div>
                  <button className="button text-2xl font-bold">заказать</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="lg:bg-grass isolate bg-white py-px pb-10">
        <div className="-mt-12 mb-10 px-10">
          <img src="/pack.webp" alt="GoodGreen pack" className="mx-auto lg:w-80" />
        </div>
        <div className="gap-5 lg:flex lg:pb-10 lg:px-wrap">
          <div className="px-10 lg:max-w-xl lg:px-0">
            <h2 className="text-3xl font-bold text-salad-900 lg:text-neutral-800">
              Заказ, оплата и бесплатная доставка Витграсс (WheatGrass) Набережные Челны
            </h2>
            <p className="hidden lg:block">
              Доставку по городу мы осуществялем абсолютно бесплатно. Витграсс перевозится в специальных
              изотермических контейнерах.
            </p>
            <ol className="olist my-10 hidden lg:flex">
              <li className="olist__li">
                Вы оставляется заявку, при этом сообщаете, какую подписку вы хотите оформить, по какому адресу
                и в какое время вам удобно получить первую доставку.
              </li>
              <li className="olist__li">
                С вами свяжется менеджер, который, уточнит время и место доставки и другие детали связанные с
                вашим заказом.
              </li>
              <li className="olist__li">
                Оплата производится непосредственно курьеру (оплата возможна картой или наличными).{' '}
              </li>
            </ol>
            <p className="hidden lg:block">
              Доставка продукции за пределы города возможна, но расчитывается индивиудально.
            </p>
          </div>
          <div className="shrink-0">
            <img src="/car.webp" className="lg:hidden" />
            <img src="/car-lg.webp" className="hidden lg:block" width={682} />
          </div>
          <div className="text space-y-4 px-10 lg:hidden">
            <p>
              Витграсс рекомендуется пить утром на голодный желудок. После чего (спустя 15 минут) желательно
              позавтракать.
            </p>
            <p>
              Если вы прежде не употребляли Витграсс, вы можете почувствовать тошноту или головокружение, это
              связано с непривычнм для организма повышением уровня кислорода в крови. В таком случае первые
              дни попробуйте уменьшить ежедневную дозу до 15–20 мл и увеличить ее до 30 мл, после того, как
              организм адаптируется.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-greens px-4 py-12">
        <div className="mx-auto flex max-w-4xl flex-col gap-8 rounded-50 bg-black/70 px-8 py-10 text-white lg:py-10 lg:px-20">
          <h2 className="text-center text-5xl font-bold">
            Что такое <em>GoodGreen?</em>
          </h2>
          <p className="text-center">
            Это одна из крупнейших сертифицированных эко-ферм и производитель натуральных суперфудов в России.
          </p>
          <ul className="flex flex-col gap-10 lg:grid lg:grid-cols-2">
            <li className="flex gap-7">
              <img src="/icon1.png" alt="icon" className="h-12 w-12 translate-y-2 object-contain" />
              <div>
                <h2 className="mb-2 text-2xl font-bold">
                  1500 м<sup>2</sup>
                </h2>
                <p className="text-sm">посадок пшеницы в экологически чистом районе Татарстана</p>
              </div>
            </li>
            <li className="flex gap-7">
              <img src="/icon2.png" alt="icon" className="h-12 w-12 translate-y-2 object-contain" />
              <div>
                <h2 className="mb-2 text-2xl font-bold">Лаборатория</h2>
                <p className="text-sm">собственная лаборатория, для контроля качества продукции</p>
              </div>
            </li>
            <li className="flex gap-7">
              <img src="/icon3.png" alt="icon" className="h-12 w-12 translate-y-2 object-contain" />
              <div>
                <h2 className="mb-2 text-2xl font-bold">Технологии</h2>
                <p className="text-sm">полностью втоматизированный процесс производства</p>
              </div>
            </li>
            <li className="flex gap-7">
              <img src="/icon4.png" alt="icon" className="h-12 w-12 translate-y-2 object-contain" />
              <div>
                <h2 className="mb-2 text-2xl font-bold">Исследования</h2>
                <p className="text-sm">
                  исследовательская деятельность в области натуральных продуктов для здоровья
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="lg:bg-spoon bg-white px-10 pt-10 pb-8">
        <div className="lg:pl-[500px]">
          <h2 className="text-5xl font-bold">
            Отзывы клиентов <em className="uppercase">goodgreen</em>
          </h2>
          <p className="text-lg">Свой отзыв вы всегда можете оставить в любой из нашей социальных сетей</p>
        </div>
        <ul className="hidden grid-cols-3 gap-8 pt-56 pb-20 lg:grid">
          {reviews.map((r, i) => (
            <div className="flex gap-7" key={i}>
              <img src={r.img} alt="User picture" className="h-20 w-20 rounded-full object-cover" />
              <div>
                <h2 className="text-lg font-bold">{r.name}</h2>
                <h3 className="mb-2 text-xs">{r.source}</h3>
                <p className="text-sm">{r.text}</p>
              </div>
            </div>
          ))}
        </ul>
        <div className="lg:hidden">
          <Swiper className="mt-10">
            {reviews.map((r, i) => (
              <SwiperSlide key={i}>
                <div className="flex gap-7">
                  <img src={r.img} alt="User picture" className="h-20 w-20 rounded-full object-cover" />
                  <div>
                    <h2 className="text-lg font-bold">{r.name}</h2>
                    <h3 className="mb-2 text-xs">{r.source}</h3>
                    <p className="text-sm">{r.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default IndexPage;
