import React from 'react';
import './components/imageList.css';
import ImageCard from './components/imageCard';


const ImageList = props => {
    // const images = props.images.map(({ description, id, urls }) => {
    //     return <img key={id} alt={description} src={urls.regular} />
    // });

    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    })
    return <div className='image-list'>{images}</div>
};

export default ImageList;