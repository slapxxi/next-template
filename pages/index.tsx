import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

let IndexPage = () => {
  return (
    <div>
      <section className="hero">
        <div className="mx-auto flex flex-col px-4 pt-12 pb-5 text-white">
          <h2 className="title mb-4 text-center text-4xl">
            биотоник <em>витграсс goodgreen</em>
          </h2>
          <p className="mb-6 text-center uppercase">
            природные активаторы регенерации, укрепления и омоложения организма
          </p>
          <img src="/pack.webp" alt="GoodGreen pack" className="mb-6" />
          <div className="flex flex-col gap-6">
            <h2 className="title text-center text-4xl">
              <em>измени свою жизнь</em> в один клик
            </h2>
            <p className="text-center uppercase">
              иммунитет, здоровье и красота <br /> <strong>всего за 60 рублей в день</strong>
            </p>
            <button className="button self-center">выбрать курс</button>
          </div>
        </div>
      </section>
      {/* what is it */}
      <section className="bg-white px-10 py-6">
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
        <div className="mt-8 flex flex-col items-center gap-7">
          <img src="/nefertiti.webp" alt="Nefertiti" className="w-1/2" />
          <p className="font-cursive text-2xl">
            В Древнем Египте люди считали ростки пшеницы священными и поклонялись их магическим целебным
            свойствам. Более 5000 лет назад там были созданы первые аптекарские формулы, в которых пшеница
            описывалась как источник здоровья.{' '}
          </p>
        </div>
      </section>

      <section className="section py-7 text-white">
        <div className="mb-8 px-10">
          <h2 className="title mb-2 text-2xl">
            из чего состоит <em className="block text-5xl">витграсс</em>
          </h2>
          <p>
            Витграсс содержит огромное количество витаминов, микро- и макроэлементов, незаменимых аминокислот,
            ферментов и протеин.
          </p>
        </div>
        <Swiper slidesPerView={1.2} spaceBetween={20} centeredSlides className="mb-8">
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
        <div className="flex items-center gap-3.5 px-5">
          <div className="shrink-0">
            <img src="/peanuts.jpg" alt="Peanuts" className="h-20 w-20 rounded-full object-cover" />
          </div>
          <p className="font-cursive text-2xl">
            Витграс не содержит глютен, не смотря на то, что его производят из ростков пшеницы
          </p>
        </div>
      </section>

      <section className="bg-white">
        <svg fill="none" viewBox="85 0 330 424">
          <rect width={500} height={280} y={142} fill="#034402" rx={140} />
          <image href="/girl.webp" x="250" transform="translate(-210-2)"></image>
        </svg>
        <div className="mx-10 mt-10">
          <h2 className="font-bold">
            <span className="text-5xl text-gray-800">Идеальная тренировка</span>{' '}
            <em className="mt-2 block text-2xl">и быстрое восстановление</em>
          </h2>
          <div className="my-5 space-y-4">
            <p className="text">
              Первое что ощущается в начале приема – приток энергии и сил даже при минимальном времени на
              отдых.
            </p>
            <p className="text">Поэтому Витграсс отлично подходит спортсменам</p>
            <p className="text">
              Принимайте его перед началом тренировки, что бы повысить выносливость и быстро восстановиться!
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <svg fill="none" viewBox="85 0 330 424">
          <mask id="m">
            <rect width="100%" height="50%" fill="#fff" />
            <rect width={500} height={280} y={142} fill="#fff" rx={140} />
          </mask>
          <rect width={500} height={280} y={142} fill="#034402" rx={140} />
          <g mask="url(#m)">
            <image href="/boy.webp" x={250} transform="translate(-165 40.4)" width={330} />
          </g>
        </svg>
        <div className="mx-10 mt-10">
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
        <div className="my-10 flex flex-col items-center gap-5 px-10">
          <svg className="w-1/2" viewBox="0 0 100 100">
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
      </section>

      <section className="bg-fresh px-2 py-20">
        <div className="rounded-50 bg-black/70 px-5 py-7 text-white">
          <h2 className="text-center text-5xl font-bold">
            30 мл Витграсс
            <em className="my-6 block text-2xl">содержит столько же витаминов и микро-элментов,</em>
            <em className="block">как 1,5 кг овощей</em>
          </h2>
          <p className="my-6 text-center">
            Только представьте, количество витамина А в 5 раз выше, чем в спарже, а содержание витамина В6
            превосходит её почти в 100 раз!
          </p>
          <ul className="my-10 grid grid-cols-2 gap-4">
            {[
              { ing1: 'x11', ing2: 'Ca', description: 'в 11 раз больше кальция, чем в молоке' },
              { ing1: 'x6', ing2: 'C40H56', description: 'в 6 раз больше каротина, чем в шпинате' },
              { ing1: 'x30', ing2: 'B', description: 'в 30 раз больше витамина B, чем в молоке' },
              { ing1: 'x7', ing2: 'C', description: 'в 7 раз больше витамина С, чем в лимоне' },
              { ing1: 'x5', ing2: 'Fe', description: 'в 5 раз больше железа, чем в шпинате' },
              { ing1: 'x9', ing2: 'B9', description: 'в 9 раз больше фолиевой кислоты, чем в брокколи' },
            ].map((item, i) => (
              <li className="flex flex-col items-center" key={i}>
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

      <section className="bg-white py-10">
        <h2 className="title px-10 text-5xl">
          8 причин <em className="block text-2xl">начать ежедневно пить витграсс</em>
        </h2>
        <Swiper slidesPerView={1.5} spaceBetween={14} className="my-11" initialSlide={4} centeredSlides>
          {[
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
              description:
                'Витграсс нормализует микрофлору кишечника, очищает его без резкого слабительного эффекта',
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
          ].map((item, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col gap-4">
                <img src={item.img} alt="Image" className="h-60 w-60 rounded-50 bg-black/10 object-cover" />
                <h2 className="px-2 text-2xl font-bold">{item.title}</h2>
                <p className="px-2">{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex flex-col items-center gap-5 px-10">
          <img src="/granny.jpg" alt="Granny" className="h-32 w-32 rounded-full object-cover" />
          <p className="font-cursive text-2xl">
            Энн Вигмор исцелила себя от рака толстой кишки с помощью витграсса, ее история стала новым толчком
            к исследованиям. В1956 году Энн Вигмор основала Hippocrates health institute, миссией которого
            было помогать больным следуя принципам “врач лечит, природа исцеляет”.
          </p>
        </div>
      </section>

      <section className="bg-grass bg-white px-10 pb-24 pt-10">
        <h2 className="mb-20 pl-5 text-5xl font-bold">
          <span>30 мл Витграсс -</span>
          <em className="block text-2xl font-normal">достаточная норма употребления в сутки</em>
        </h2>
        <p className="mb-4 pl-2">
          Витграсс рекомендуется пить утром на голодный желудок. После чего (спустя 15 минут) желательно
          позавтракать.
        </p>
        <p className="pl-2">
          Если вы прежде не употребляли Витграсс, вы можете почувствовать тошноту или головокружение, это
          связано с непривычнм для организма повышением уровня кислорода в крови. В таком случае первые дни
          попробуйте уменьшить ежедневную дозу до 15–20 мл и увеличить ее до 30 мл, после того, как организм
          адаптируется.
        </p>
      </section>

      <section className="bg-glass py-10 text-white">
        <h2 className="px-10 text-center text-5xl font-bold">Измени свою жизнь в один клик!</h2>
        <Swiper centeredSlides initialSlide={1} slidesPerView={1.2} spaceBetween={12} className="my-10">
          {[{}, {}, {}].map((item, i) => (
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
      </section>

      <section className="isolate bg-white py-px pb-10">
        <div className="px-10">
          <img src="/pack.webp" alt="GoodGreen pack" className="-mt-12 mb-10" />
        </div>
        <h2 className="px-10 text-3xl font-bold text-salad-900">
          Заказ, оплата и бесплатная доставка Витграсс (WheatGrass) Набережные Челны
        </h2>
        <img src="/car.webp" alt="" />
        <div className="text space-y-4 px-10">
          <p>
            Витграсс рекомендуется пить утром на голодный желудок. После чего (спустя 15 минут) желательно
            позавтракать.
          </p>
          <p>
            Если вы прежде не употребляли Витграсс, вы можете почувствовать тошноту или головокружение, это
            связано с непривычнм для организма повышением уровня кислорода в крови. В таком случае первые дни
            попробуйте уменьшить ежедневную дозу до 15–20 мл и увеличить ее до 30 мл, после того, как организм
            адаптируется.
          </p>
        </div>
      </section>

      <section className="bg-greens px-4 py-12">
        <div className="flex flex-col gap-8 rounded-50 bg-black/70 px-8 py-10 text-white">
          <h2 className="text-center text-5xl font-bold">
            Что такое <em>GoodGreen?</em>
          </h2>
          <p className="text-center">
            Это одна из крупнейших сертифицированных эко-ферм и производитель натуральных суперфудов в России.
          </p>
          <ul className="flex flex-col gap-10">
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

      <section className="bg-white px-10 pt-10 pb-8">
        <h2 className="text-5xl font-bold">
          Отзывы клиентов <em className="uppercase">goodgreen</em>
        </h2>
        <p className="text-lg">Свой отзыв вы всегда можете оставить в любой из нашей социальных сетей</p>
        <Swiper className="mt-10">
          {[{}, {}, {}].map((item, i) => (
            <SwiperSlide key={i}>
              <div className="flex gap-7">
                <img src="/reviewer.jpg" alt="User picture" className="h-20 w-20 rounded-full object-cover" />
                <div>
                  <h2 className="text-lg font-bold">Марина</h2>
                  <h3 className="mb-2 text-xs">1 заказ Профи</h3>
                  <p className="text-sm">
                    Я раньше никогда не пробовала Витграсс, хотя слышала о нем много. Мне очень понравилась
                    внимательность менеджера Гудгрин, который подробнейшим образом все рассказал.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default IndexPage;
