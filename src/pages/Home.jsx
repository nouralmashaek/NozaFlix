import Navbar from '../components/nozaflix/Navbar';
import HeroBanner from '../components/nozaflix/HeroBanner';
import MovieGrid from '../components/nozaflix/MovieGrid';
import ComingSoon from '../components/nozaflix/ComingSoon';
import BlogSection from '../components/nozaflix/BlogSection';
import Footer from '../components/nozaflix/Footer';

const recentMovies = [
  { title: 'The Call', type: 'Movie', image: 'https://m.media-amazon.com/images/M/MV5BMjExNDkzNjAwOV5BMl5BanBnXkFtZTcwMDMzMzQwOQ@@._V1_.jpg', href: '/Movies/adults/thecall.html' },
  { title: 'Joker', type: 'Movie', image: 'https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_.jpg', href: '/Movies/adults/Joker.html' },
  { title: '47 Meters Down', type: 'Movie', image: 'https://m.media-amazon.com/images/M/MV5BZWM4ZWQyOGMtYTczMC00MGYyLWIxNjktYzg5MThmYzFhZGI1XkEyXkFqcGc@._V1_.jpg', href: '/Movies/adults/47metersdown.html' },
  { title: '1917', type: 'Movie', image: 'https://m.media-amazon.com/images/M/MV5BYzkxZjg2NDQtMGVjMy00NWZkLTk0ZDEtZWE3NDYwYjAyMTg1XkEyXkFqcGc@._V1_.jpg', href: '/Movies/adults/1917.html' },
  { title: 'Carry On', type: 'Season 1', image: 'https://m.media-amazon.com/images/M/MV5BNTNkMjQzNmQtNzE4ZC00NDlmLTkyYjAtZDZkYTQ5NjBmYThlXkEyXkFqcGc@._V1_.jpg', href: '/Movies/adults/CarryOn.html' },
  { title: 'Bad Boys Ride or Die', type: 'Movie', image: 'https://m.media-amazon.com/images/M/MV5BZWNjZWUwNDgtYTM4ZC00Zjk0LTg3ZWItNGEyZmVkZTIxZDk0XkEyXkFqcGc@._V1_.jpg', href: '/Movies/adults/badboys.html' },
  { title: 'The Fall Guy', type: 'Movie', image: 'https://m.media-amazon.com/images/M/MV5BM2U0MTJiYTItMjNiZS00MzU4LTkxYTAtYTU0ZGY1ODJhMjRhXkEyXkFqcGc@._V1_.jpg', href: '/Movies/adults/fallguy.html' },
  { title: 'Squid Games', type: 'Season 1', image: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20492218_b_v8_ae.jpg', href: '/Movies/adults/squidgames.html' },
  { title: 'Black Adam', type: 'Movie', image: 'https://m.media-amazon.com/images/M/MV5BYmM3OTM4NDktMmI2NS00OWU0LTg4OTQtNjZhMmFkYjhmOGY1XkEyXkFqcGc@._V1_.jpg', href: '/Movies/adults/BlackAdam.html' },
  { title: 'Doctor Strange in Multiverse', type: 'Movie', image: 'https://m.media-amazon.com/images/M/MV5BN2YxZGRjMzYtZjE1ZC00MDI0LThjZmQtZTZmMzVmMmQ2NzBmXkEyXkFqcGc@._V1_.jpg', href: '/Movies/adults/DoctorStrangeMultiverse.html' },
  { title: 'Extraction 2', type: 'Movie', image: 'https://m.media-amazon.com/images/M/MV5BZGQwNDdhODAtY2Y0Ni00YzFhLTk1OGUtY2RkMDAzNzBmZjAxXkEyXkFqcGc@._V1_.jpg', href: '/Movies/adults/Extraction2.html' },
  { title: 'Fall', type: 'Movie', image: 'https://m.media-amazon.com/images/M/MV5BYmZjYjAxMDEtOTE2My00MmM5LTkyYjctOWRjMjgyM2JhMDI0XkEyXkFqcGc@._V1_.jpg', href: '/Movies/adults/fall.html' },
];

const recommendations = [
  { title: 'Avengers Endgame', type: 'Movie', image: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg', href: '/Movies/adults/AvengersEndgame.html' },
  { title: 'Fury', type: 'Movie', image: 'https://m.media-amazon.com/images/M/MV5BMjA4MDU0NTUyN15BMl5BanBnXkFtZTgwMzQxMzY4MjE@._V1_.jpg', href: '/Movies/adults/fury.html' },
  { title: 'Dark Phoenix', type: 'Movie', image: 'https://m.media-amazon.com/images/M/MV5BZjcwMDIyNjctMDVmNS00MzkyLTgxMDMtNTFmNTk0NDkyNzdjXkEyXkFqcGc@._V1_.jpg', href: '/Movies/adults/DarkPhoenix.html' },
  { title: "Don't Breathe", type: 'Movie', image: 'https://m.media-amazon.com/images/M/MV5BNjAxOTJkMmEtNjg4MC00ODk3LTkwYmUtNjM3YzE5YTk1YTFjXkEyXkFqcGc@._V1_.jpg', href: '/Movies/adults/DontBreat.html' },
  { title: 'The Maze Runner', type: 'Movie', image: 'https://m.media-amazon.com/images/M/MV5BMjUyNTA3MTAyM15BMl5BanBnXkFtZTgwOTEyMTkyMjE@._V1_.jpg', href: '/Movies/adults/Themazerunner.html' },
  { title: 'The Flash 2023', type: 'Movie', image: 'https://m.media-amazon.com/images/M/MV5BYmE2NzBjNGUtNTJiMy00N2UxLWEyYzMtYzFjODFhMGZlOTgzXkEyXkFqcGc@._V1_.jpg', href: '/Movies/adults/Theflash2023.html' },
  { title: 'King Arthur', type: 'Movie', image: 'https://m.media-amazon.com/images/M/MV5BMjM3ODY3Njc5Ml5BMl5BanBnXkFtZTgwMjQ5NjM5MTI@._V1_.jpg', href: '/Movies/adults/kingarthur.html' },
  { title: 'My Son', type: 'Movie', image: 'https://m.media-amazon.com/images/M/MV5BNjNjZDM4ZDUtYTQ1Yi00NzkzLTlhYmEtMzFmMjBlYmRkM2UzXkEyXkFqcGc@._V1_.jpg', href: '/Movies/adults/MySon.html' },
  { title: 'Plane 2023', type: 'Movie', image: 'https://m.media-amazon.com/images/M/MV5BNDAyYjZmNjctOWE2Mi00ZDBiLWE2YjEtMWM1YmM0NmYzOGQwXkEyXkFqcGc@._V1_.jpg', href: '/Movies/adults/Plane2023.html' },
  { title: 'Inception', type: 'Movie', image: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg', href: '/Movies/adults/Inception.html' },
  { title: 'Dune 2', type: 'Movie', image: 'https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg', href: '/Movies/adults/Dune2.html' },
  { title: 'Nowhere', type: 'Movie', image: 'https://m.media-amazon.com/images/M/MV5BZmQwODM5NTctYzRkMi00MmIwLWFjODAtMTFiMWY2OWE3MGQyXkEyXkFqcGc@._V1_.jpg', href: '/Movies/adults/nowhere.html' },
  { title: 'Nocebo', type: 'Movie', image: 'https://m.media-amazon.com/images/M/MV5BNDM4YTQwODUtNDhhOS00MzA3LWI1NGQtYzE2NzQ2OGE2N2RjXkEyXkFqcGc@._V1_.jpg', href: '/Movies/adults/Nocebo.html' },
  { title: 'Red Sparrow', type: 'Movie', image: 'https://m.media-amazon.com/images/M/MV5BMTA3MDkxOTc4NDdeQTJeQWpwZ15BbWU4MDAxNzgyNTQz._V1_.jpg', href: '/Movies/adults/RedSparrow.html' },
  { title: 'Sound of Freedom', type: 'Movie', image: 'https://m.media-amazon.com/images/M/MV5BMzU5MmVkODQtZWM5ZC00MjRiLWIwOTMtN2ViZGM5MjU5Nzc1XkEyXkFqcGc@._V1_.jpg', href: '/Movies/adults/SoundofFreedom.html' },
  { title: 'Jumanji Next Level', type: 'Movie', image: 'https://m.media-amazon.com/images/M/MV5BYWFjODExZWEtYzIwYS00M2YwLTk4YTktNDQ5ZmVmOThiNmI1XkEyXkFqcGc@._V1_.jpg', href: '/Movies/adults/Jumanji.html' },
  { title: 'Jurassic World', type: 'Movie', image: 'https://m.media-amazon.com/images/M/MV5BNzIxMjYwNDEwN15BMl5BanBnXkFtZTgwMzk5MDI3NTM@._V1_.jpg', href: '/Movies/adults/Jurassic.html' },
  { title: 'Oxygen', type: 'Movie', image: 'https://m.media-amazon.com/images/M/MV5BY2IyZTFkZGEtM2JiOC00NDMyLThmOTktZDEzYzFlZTc4YzJkXkEyXkFqcGc@._V1_.jpg', href: '/Movies/adults/oxygen.html' },
  { title: 'Split', type: 'Movie', image: 'https://m.media-amazon.com/images/M/MV5BNTZjNmVjMzAtZjg2Mi00MWNmLTk5NTItOTExZDYwNTE2YmExXkEyXkFqcGc@._V1_.jpg', href: '/Movies/adults/split.html' },
  { title: 'Underwater', type: 'Movie', image: 'https://m.media-amazon.com/images/M/MV5BMjE1M2Q4YTktYWJjZi00NDQwLThiNWYtMzVjNDc3YzE3ZTMyXkEyXkFqcGc@._V1_.jpg', href: '/Movies/adults/under_water.html' },
  { title: 'Cocaine Bear', type: 'Movie', image: 'https://m.media-amazon.com/images/M/MV5BMjg3MmNiNWQtOWI1OS00MjE2LWFhYzYtMWY0NWRhZmVkMGFiXkEyXkFqcGc@._V1_.jpg', href: '/Movies/adults/coca.html' },
  { title: 'Vikings Valhalla', type: 'Series', image: 'https://m.media-amazon.com/images/M/MV5BYWFjYmMxMjMtMGE2ZC00YWZhLTgzNDYtYTA3ODA2MDg2NTA4XkEyXkFqcGc@._V1_.jpg', href: '/Movies/adults/VikingsValhalla.html' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Navbar />
      <HeroBanner />

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-noza-gold/30 to-transparent" />

      <div className="bg-[#1a1a1a]">
        <MovieGrid
          title="Recently Updated"
          subtitle="Sunday 16 Mar 2025"
          movies={recentMovies}
        />

        

        <div className="h-px max-w-7xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <MovieGrid
          title="Recommendations"
          subtitle="Curated picks just for you"
          movies={recommendations}
        />
      </div>

      <BlogSection />
      <Footer />
    </div>
  );
}
