import React,{useState,useEffect} from 'react'
import './Produits.css'
import Produitsmap from './Produitsmap'

import Aos from 'aos'
import "aos/dist/aos.css"
const Produits = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
    const[Produits , setProduits]=useState([{
        Name:"Computer Mac" ,Image:"https://images-na.ssl-images-amazon.com/images/I/71pheYd9W0L._AC_SL1500_.jpg", Descraption:"dazkfazofaz dazjfajzodf dazàkfa" ,Prix:15
    },
    {
        Name:"Computer" ,Image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=892&hei=820&&qlt=80&.v=1603332211000", Descraption:"dazkfazofaz dazjfajzodf dazàkfa" ,Prix:15
    },
    {
        Name:"Mouse" ,Image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MLA02?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1564098735372", Descraption:"dazkfazofaz dazjfajzodf dazàkfa" ,Prix:15
    },
    {
        Name:"Telephone" ,Image:"https://assets.swappie.com/iPhone-11-Pro-midnight-green-back.png", Descraption:"dazkfazofaz dazjfajzodf dazàkfa" ,Prix:15
    },
    {
        Name:"Casque" ,Image:"", Descraption:"dazkfazofaz dazjfajzodf dazàkfa" ,Prix:15
    }])
    return (
        <div>
            <div data-Aos="fade-up"  className="Produits"> 
            <p>Nos produits</p>
            </div>
            <div data-Aos="fade-right"  className="ProduitsFlexBox">
                {Produits.slice(1).map((el)=><Produitsmap el={el}/>)}
            </div>
            <div data-Aos="fade-left"   className="ProduitsVoice">
                <button>Voire plus</button>
            </div>
        </div>
    )
}

export default Produits
