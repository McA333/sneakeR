import React from 'react';
import SneakeR from './SneakeR';
import { Stack } from '@mui/material';

const Collection = () => {
  const collection = [
    {
      img: "https://sothebys-md.brightspotcdn.com/dims4/default/491acc6/2147483647/strip/true/crop/2000x2000+0+0/resize/385x385!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fmedia-desk%2Fwebnative%2Fimages%2F79%2Fa3%2F861eb356400bbfad4efc96989383%2Fpf2453-cpf4j-t1-04.jpg",
      title: "Nike Dunk High Supreme 'FLOM Livestrong' Sample | US 9",
      price: "80.000$",
      caption: "Only about twenty pairs produced",
    },
    {
      img: "https://cdn.lesitedelasneaker.com/wp-content/images/2018/05/off-white-air-jordan-1-unc-aq0818-148-5-1100x1100.jpg",
      title: "Off-White x Air Jordan 1 UNC (University Blue)",
      price: "1406.92$",
      caption: "Nike 'The Ten' collection",
    },
    {
      img: "https://images.wave.fr/images/1916/10/sneakers-les-plus-rares-sothebys-1.jpg",
      title: "Bernard Buffet x Nike SB Dunk Low Pro “Paris” Sample",
      price: "$75,000.",
      caption: "collaboration between Dunk and artists from around the world",
    }
  ]

  return (
    <Stack spacing={5} paddingTop={5}>
      {
        collection.map(sneakers => <SneakeR
          img={sneakers.img}
          title={sneakers.title}
          price={sneakers.price}
          caption={sneakers.caption}
        />)
      }
    </Stack>
  );
}

export default Collection;
