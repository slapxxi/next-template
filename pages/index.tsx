import { Button } from 'components/Button';
import { HeroTitle } from 'components/HeroTitle';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { AnimalCard } from '../components/AnimalCard';
import { Header } from '../components/Header';
import { HeroText } from '../components/HeroText';
import { ItemCard } from '../components/ItemCard';
import { SectionTitle } from '../components/SectionTitle';
import { Tag } from '../components/Tag';

const IndexPage = () => {
  return (
    <>
      <Header variant="fill" />

      <div className="">
        <section className="bg-lightBlue-500 text-white">
          <div className="hero">
            <div className="lg:w-1/2">
              <HeroTitle className="my-2.5">Всё для счастья ваших любимцев</HeroTitle>
              <HeroText className="my-2.5">Новые скидки каждый день!</HeroText>
              <Button variant="fill-bright" className="my-5">
                В каталог
                <ArrowRight />
              </Button>
            </div>
          </div>
        </section>

        <div className="bg-lightGray-100 py-px">
          <section className="cont section">
            <div className="grid snap-x snap-mandatory grid-cols-2 gap-2.5 md:flex md:gap-5 md:overflow-x-scroll">
              {[
                { title: 'Для собак', img: 'dog' },
                { title: 'Для кошек', bgColor: 'blue', img: 'cat' },
                { title: 'Для птиц', bgColor: 'rose', img: 'bird' },
                { title: 'Для грызунов', bgColor: 'orange', img: 'hamster' },
                { title: 'Для рыбок', bgColor: 'purple', img: 'fish' },
                { title: 'Груминг', bgColor: 'pink', img: 'grooming' },
              ].map((item) => (
                <Link href="#" className="aspect-square md:aspect-[.84] md:shrink-0 md:basis-1/4 lg:shrink">
                  <AnimalCard
                    title={item.title}
                    img={item.img as any}
                    color={item.bgColor as any}
                    className="h-full w-full"
                  />
                </Link>
              ))}
            </div>
          </section>

          <section className="section_lg lg:section_xl">
            <div className="cont">
              <SectionTitle>Популярные товары</SectionTitle>
            </div>

            <div className="cont my-4 flex gap-2.5 lg:my-5">
              {[{ name: 'Корм', selected: true }, { name: 'Игрушки' }, { name: 'Лежанки' }].map((item, i) => (
                <Tag key={i} selected={item.selected} name={item.name} />
              ))}
            </div>

            <div
              className="lg:cont flex snap-x snap-mandatory grid-cols-4 
              gap-2.5 overflow-x-scroll px-2.5 md:px-5 lg:my-6 lg:grid lg:gap-5"
            >
              {[
                {
                  title: 'FLORIDA',
                  description: 'Корм сухой корм для взрослых стерилизованных кошек с лососем и черникой',
                  price: 3446,
                  discount: 0.5,
                  img: 'florida.png',
                },
                {
                  title: 'ProBalance',
                  description: 'Корм сухой корм для взрослых стерилизованных кошек с лососем и черникой',
                  price: 3446,
                  discount: 0.25,
                  img: 'probalance.webp',
                },
                {
                  title: 'FLORIDA',
                  description: 'Корм сухой корм для взрослых стерилизованных кошек с лососем и черникой',
                  price: 3446,
                  discount: 0.15,
                  img: 'florida.png',
                },
                {
                  title: 'FLORIDA',
                  description: 'Корм сухой корм для взрослых стерилизованных кошек с лососем и черникой',
                  price: 3446,
                  discount: 0.15,
                  img: 'florida.png',
                },
              ].map((item, i) => (
                <ItemCard {...item} key={i} className="w-[155px] shrink-0 snap-center md:w-1/3 lg:w-auto" />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
