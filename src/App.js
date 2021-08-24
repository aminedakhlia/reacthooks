import './App.css';
import MovieCard from './Components/MovieCard'; 
import MovieList from './Components/MovieList'
import { useState } from 'react';
import { Nav} from "react-bootstrap";
import Filter from './Components/Filter';
import AddMovie from './Components/AddMovie';

function App() {
  const [movie,setMovie]=useState( [
    {
    'title': "harry potter",
    'description': "Harry Potter is an Orphaned Boy who defeats Voldemort, one of the greatest Dark Wizards of all time and loses some people he loves along the way. ",
    'posterUrl': "https://www.betanews.fr/wp-content/uploads/2021/07/harry-potter-films-ordre-758x426.jpg", 
    'rating': "4.9"
    },
    {
      'title': "mickey mouse",
      'description': "Mickey Mouse is a cartoon character created in 1928 by The Walt Disney Company, who also serves as the brand's mascot. An anthropomorphic mouse who typically wears red shorts, large yellow shoes, and white gloves, Mickey is one of the world's most recognizable fictional characters.",
      'posterUrl': "https://static.rogerebert.com/uploads/blog_post/primary_image/features/book-review-walt-disneys-mickey-mouse-the-ultimate-history/mickey-mouse.jpg",
      'rating': "4.8"
      },
      {
        'title': "tom&jerry ",
        'description': " Tom and Jerry is an American cartoon series about a hapless cat's never-ending pursuit of a clever mouse. Tom is the scheming cat, and Jerry is the spunky mouse. The series was driven entirely by action and visual humour; the characters almost never spoke. ",
        'posterUrl': "https://upload.wikimedia.org/wikipedia/en/5/5f/TomandJerryTitleCardc.jpg",
        'rating': "4.6"
        },
   
    {
      'title': "Dumbo",
      'description': "Dumbo (film) A baby circus elephant is born with huge ears, and named Dumbo. He and his mother suffer humiliation from the other elephants and from the kids visiting the circus. But humiliation turns to triumph as Dumbo is surprised to discover through the help of his faithful mouse friend, Timothy, that he can use the oversized ears to fly. Released on October 23, 1941. Directed by Ben Sharpsteen. From a story by Helen Aberson and Harold Pearl. 64 min.",
      'posterUrl': "https://i.pinimg.com/originals/47/94/ce/4794cec6bbea574a06f4a932debaf826.jpg",
      'rating': "4.7"
      },
      {
        'title': "miraculous",
        'description': "The series revolves around modern-day Paris and teenagers Marinette Dupain-Cheng and Adrien Agreste who transform into their superhero personas, Ladybug and Cat Noir respectively, using magical jeweled objects known as the Miraculous, when evil arises." ,
        'posterUrl': "https://upload.wikimedia.org/wikipedia/en/5/5f/Miraculous-original-title-card.png",
        'rating': "4"
        },
     
          {
            'title': "Peter Pan",
            'description': " Story of the magical boy who wouldn’t grow up who teaches the three Darling children—Wendy, John, and Michael—to fly to Never Land with him where they embark on adventures with the chief inhabitants, Captain Hook and his crew of pirates. The fairy, Tinker Bell, is jealous of Peter’s attentions to Wendy, and duped into helping Captain Hook. After rescuing the Indian princess, Tiger Lily, Peter must save his band, the Lost Boys, and the Darlings from Hook. Released on February 5, 1953. ",
            'posterUrl': "https://m.media-amazon.com/images/I/71+02eGfm6L._AC_SY606_.jpg",
            'rating': "5"
            },
         
        {
          'title': "spongebob",
          'description': "Spongebob Squarepants is a talking square sponge who lives in a pineapple under the sea. His relentless cheerfulness gets on the nerves of his grumpy neighbor, Squidward Tentacles. Spongebob works as a fry cook at the Krusty Krab, owned by the kind but greedy Mr. Krabs.",
          'posterUrl': "https://m.media-amazon.com/images/I/61bQK9TywiL._AC_.jpg",
          'rating': "3.8"
          },
            
              {
                'title': "Pinocchio",
                'description': " Geppetto, a poor Italian carpenter, makes out of a piece of wood a puppet that weeps, laughs and talks like a child, a puppet that he names Pinocchio and that he loves like the son he never had. Disobedient, sometimes a liar, Pinocchio will find himself drawn into many adventures. ",
                'posterUrl': "https://lumiere-a.akamaihd.net/v1/images/p_pinocchio_19879_d6304938.jpeg",
                'rating': "4.5"
                },
                {
                  'title': "Toy Story",
                  'description': "is a 2014 romantic comedy-drama film directed by Christian Ditter from a screenplay by Juliette Towhidi, based on the 2004 novel Where Rainbows End by Irish author Cecelia Ahern.",
                  'posterUrl': "https://m.media-amazon.com/images/I/61E15fy6nxL._AC_SL1000_.jpg",
                  'rating': "4.7"
                  },
    ])
    const [searchMovie,setSearchMovie]= useState(movie)
    const handleSearch=(search)=>{
        setSearchMovie(movie.filter((item) => { return item.title.toLowerCase().includes(search.toLowerCase()) || item.rating === search; }))
      // setSearchMovie(movie.filter((item) => { return item.rating === search}));
      }

    const addMovie=(film)=>{
      setMovie([...movie, film]);
      }
  return (
    <div>
    <br></br>
    <Filter movies={movie} FnSearch={handleSearch} ></Filter>
    <br></br>
    <AddMovie addMovie={addMovie}></AddMovie>
    <br></br>
   <MovieList movies={searchMovie}></MovieList>  
  </div>
);
}
export default App;
