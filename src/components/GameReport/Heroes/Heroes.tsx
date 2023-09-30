import { useHeroesQueries } from '../../../hooks/useHeroesQueries';
import Hero from './Hero';

function Heroes() {
  useHeroesQueries();
  return (
    <div className="heroes_container bg-mainColor rounded-sm my-6 intenseShadow">
      <Hero />
    </div>
  );
}

export default Heroes;
