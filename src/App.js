import { useState } from "react";
import "./styles.css";

const destinations = {
  beaches: [
    {
      name: "Pondicherry",
      imageURL:
        "https://images.unsplash.com/photo-1582549023823-b5984434f8f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2052&q=80",
      details:
        "Pondicherry, with its pervasive French heritage, is a union territory on the coast of Tamil Nadu in east India that's ideal for culture vultures. The historic French Quarter in town is a highlight, while nearby Auroville and Paradise beaches are great for swimming. Also check out the pristine beaches at Mahe, Yanam and Karaikal—also part of the Union Territory of Pondicherry."
    },
    {
      name: "Radhanagar Beach",
      imageURL:
        "https://images.unsplash.com/photo-1599325601146-cb847c4064a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2015&q=80",
      details:
        "Once voted Asia's Best Beach by TIME Magazine, Radhanagar Beach is situated on Havelock Island in the Andaman and Nicobar Islands, which are sprinkled across the Bay of Bengal. The islands are a Union Territory of India.Radhanagar Beach (also referred to as beach number seven) is renowned for its calm, still water and fine white sand."
    },
    {
      name: "Varkala",
      imageURL:
        "https://images.unsplash.com/photo-1610817201767-793a9130ce07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=657&q=80",
      details:
        "Varkala beach lies about an hour north of capital Trivandrum in Kerala and provides a relatively peaceful alternative to the now commercialized Kovalam. The setting of this beach is striking enough to take your breath away, with a seemingly endless paved stretch of cliff bordered by shacks on one side and views that extend over the Arabian Sea on the other. It's the perfect place to rest and rejuvenate, with yoga and Ayurveda being popular there."
    }
  ],
  hillStation: [
    {
      name: "Nainital",
      imageURL:
        "https://images.unsplash.com/photo-1610715936287-6c2ad208cdbf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
      details:
        "Nainital is famous for the Naini Lake where it is believed that Lord Shiva performed his tandava. The Naini peak or the China peak is the highest in Nainital with a height of 2611mts. Some of the other places of tourist interest are the Mall, now known as the Govind Ballabh Pant Marg. You can find restaurants, offices and hotels all located in the Mall. Nainital Zoo is a very important tourist spot where you can find rare species of snow leopard, steppe eagle and the Himalayan black bear. The Governor House of the Raj Bhavan with its sprawling gardens is one of the few Raj Bhavnas open for public viewing. Nainital’s latest attraction is the Eco Cave Garden where your children can learn about ecosphere."
    },
    {
      name: "Munnar",
      imageURL:
        "https://images.unsplash.com/photo-1580818135730-ebd11086660b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=739&q=80",
      details:
        "Expansive tea plantations, postcard-worthy views, and the presence of unique and luxurious accommodations have Munnar a top holiday choice for many Indians. In fact, it has emerged as one of the top honeymoon destinations in the country. Home to a thriving variety of flora and fauna, along with expansive stretches of natural beauty and some of the most picturesque sunsets to ever grace the country with their presence, Munnar is the perfect South Indian hill station in every sense of the word."
    },
    {
      name: "Shillong",
      imageURL:
        "https://images.unsplash.com/photo-1613644383947-26a22b8c04f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      details:
        "An easygoing pace that Nature deems fit is characteristic of Shillong hill station. Taking a mild walk or riding slowly a vehicle on the road alongside Khasi hills gives many glimpses of the valley and a clear perception of the beauty epitomized by Nature in the capital of Meghalaya. Showering drizzles and cooling breeze of Shillong bring along an unmatched joy experience. A yearning of being able to see far and beyond the vantage point of the road is only obvious."
    }
  ],
  historic: [
    {
      name: "Taj Mahal",
      imageURL:
        "https://images.unsplash.com/photo-1586168728626-a4656ba1f46d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      details:
        "Taj Mahal is declared as one of the 7 Wonders of the world. Located on the banks of river Yamuna, this ivory-white marble mausoleum was built by Shah Jahan in the memory of his wife Mumtaz. It is a monument of true love as the imperial court depicts the grief of Shah Jahan over Mumtaz’s death. Mumtaz was Shah Jahan’s most beloved wife out of 11 and she died delivering her 14th child. As per the last wish of Mumtaz, Shah Jahan built the Taj Mahal to signify their eternal love."
    },
    {
      name: "The Ruins of Hampi",
      imageURL:
        "https://images.unsplash.com/photo-1581488613801-68d36242d412?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=622&q=80",
      details:
        "This place is a paradise for history and art lovers. It has several beautiful structures and carvings and it is also the place that  recorded the first instance of human settlement which dates all the way back to 1 CE."
    },
    {
      name: "Hawa Mahal",
      imageURL:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      details:
        "Hawa Mahal is considered to be one of the tallest buildings in the world without any foundation. Despite being curved, it still stands firm due to its pyramidal shape. This monument is known for the intricate lattice work on all of its 953 tiny windows. At first glance, it looks like a crown, which is a sight to behold."
    }
  ],
  spiritual: [
    {
      name: "Varanasi",
      imageURL:
        "https://images.unsplash.com/photo-1565354785692-9e7523e5a87b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
      details:
        "Varanasi is one of the seven sacred Hindu cities with a very ancient history. Known as the city of Lord Shiva, the god of creation and destruction, it’s believed that anyone who dies here will be liberated from the cycle of reincarnation"
    },
    {
      name: "Amritsar",
      imageURL:
        "https://images.unsplash.com/photo-1621377099913-ac1ec4848e52?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
      details:
        'Amritsar, in the state of Punjab, was founded in 1577 by Guru Ram Das, the fourth guru of Sikhs. It’s the spiritual capital of the Sikhs and gained its name, meaning "Holy Pool of Nectar", from the body of water around the Golden Temple.'
    },
    {
      name: "Bodhgaya",
      imageURL:
        "https://images.unsplash.com/photo-1622194993926-1801586d460f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      details:
        "Bodhgaya is the most important Buddhist pilgrimage place in the world. Located in the state of Bihar, it’s here that Lord Buddha became enlightened during intense meditation under a Bodhi tree."
    }
  ]
};

const placeArr = Object.keys(destinations);

export default function App() {
  const [categoryClicked, SetCategoryClicked] = useState("beaches");
  function buttonClickHandler(category) {
    console.log(category);
    SetCategoryClicked(category);
  }

  return (
    <div className="App">
      <h1>Travel in India</h1>
      <hr />
      <nav>
        {placeArr.map((item) => (
          <button
            className="category-button"
            onClick={() => buttonClickHandler(item)}
            key={item}
          >
            {item}
          </button>
        ))}
      </nav>
      <hr />
      <ul>
        {destinations[categoryClicked].map((place) => (
          <li key={place.name}>
            <div className="place">
              <h2 className="place-name">{place.name}</h2>
              <img
                className="place-image"
                src={place.imageURL}
                alt={place.name + "-image"}
              />
              <p className="place-details">{place.details}</p>
            </div>
          </li>
        ))}
      </ul>
      {/* <div>{destinations}</div> */}
    </div>
  );
}
