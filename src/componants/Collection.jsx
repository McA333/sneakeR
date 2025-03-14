import React from 'react';
import SneakeR from './SneakeR';

const Collection = () => {
  return (
    <div>
        <SneakeR img="https://sothebys-md.brightspotcdn.com/dims4/default/491acc6/2147483647/strip/true/crop/2000x2000+0+0/resize/385x385!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fmedia-desk%2Fwebnative%2Fimages%2F79%2Fa3%2F861eb356400bbfad4efc96989383%2Fpf2453-cpf4j-t1-04.jpg"
        title="Nike Dunk High Supreme 'FLOM Livestrong' Sample | US 9"
        price= "80,000$."
        caption="Seulement une vingtaine de paires produites"
        />
        <SneakeR img="https://i.ebayimg.com/images/g/-nkAAOSwIy5kQzLN/s-l400.jpg"
        title= "Nike Air Mag de Marty McFly"
        price="50,000$"
        caption="seulement 89 exemplaires"
        />
        <SneakeR img="https://sneakersculture.fr/wp-content/uploads/2024/03/3d41bbd24488ad9f57636b93e3c01b6b63f74167-1100x7354812123880409813171-1.jpg?w=580"
        title= "Jordan 1 Family"
        caption= "moins de 100 exemplaires produits"
        />
    </div>
  );
}

export default Collection;
