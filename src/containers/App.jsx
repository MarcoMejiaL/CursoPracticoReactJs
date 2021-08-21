import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carrousel from '../components/Carrousel';
import CarrouselItem from '../components/CarrouselItem';
import Footer from '../components/Footer'
import '../assets/styles/App.scss'

const App =()=>{
    const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });
    

    useEffect(()=>{
        fetch('http://localhost:3000/initalState')
        .then(response=> response.json())
        .then(data => setVideos(data));
    }, []);
    
    return(

        

    <div className="App">
        <Header/>
        <Search/>
        
        {videos.mylist.length <0 &&
        <Categories title="Mi Lista">
        <Carrousel>
            <CarrouselItem/>
            
        </Carrousel>
    </Categories>
    
        }
        

        <Categories title="Tendencias">
            <Carrousel>
                {videos.trends.map(item=>

                    <CarrouselItem key={item.id} {...item}/>
                )

                }
                
            </Carrousel>
        </Categories>


        <Categories title="Originales de Platzi Video">
            <Carrousel>
                <CarrouselItem/>
                
            </Carrousel>
        </Categories>

        <Footer/>



    </div>




);
    }

export default App;