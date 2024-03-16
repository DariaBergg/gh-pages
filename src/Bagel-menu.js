import React from "react";
import './App.css';
import PlainBagelImg from './img/plain-bagel.jpeg';
import EggBagelImg from './img/egg-bagel.jpeg'
import SourdoughBagelImg from './img/sourdough-bagel.jpeg'
import BluberryBagelImg from './img/blueberry-bagel.jpeg'
import PumpernickelBagelImg from './img/pumpernickel-bagel.jpeg'


   export const bagelItems = [
        {name: 'Plain bagel', 
        description:'the plain bagel does not include any additional toppings besides an egg or starch-wash for color.', 
        price:'65 Kč',
        image: PlainBagelImg
    },
        {name: 'Egg bagel', 
        description:'this humble ingredient can actually elevate the flavor, texture, and color of a plain bagel', 
        price:'70 Kč',
        image: EggBagelImg
    },
        {name:'Sourdough bagel', 
        description:'Sourdough bagels have a much more distinct flavor than other bagels due to the use of a naturally-leavened culture of yeast and bacteria.', 
        price:'65 Kč',
        image: SourdoughBagelImg
    },
        {name:'Blueberry bagel', 
        description:'Blueberry-flavored bagels are less-savory bagels with pockets of tangy, sweet blueberries baked inside. ', 
        price:'80 Kč',
        image: BluberryBagelImg
    },
        {name:'Pumpernickel bagel', 
        description:'Pumpernickel is a type of flour made from the entire rye grain; the grain is usually made into sliced rye bread. Rye grain naturally has very low gluten content compared to other types of flour', 
        price:'75 Kč',
        image: PumpernickelBagelImg
    }
      ];

    const BagelMenu = () => {
      return (
        <div className="bagel-menu">
          {bagelItems.map((bagel, index) => (
            <div key={index} className="bagel-item">
              <img src={bagel.image} alt={bagel.name}/>
              <h3>{bagel.name}</h3>
              <p>{bagel.description}</p>
              <p>{bagel.price}</p>
            </div>
          ))}
        </div>
      )    
}
export default BagelMenu;