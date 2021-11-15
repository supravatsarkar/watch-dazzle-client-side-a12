import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import banner1 from '../../../images/banner/banner.png'
import banner2 from '../../../images/banner/banner-2.png'

const items = [
    {
        name: 'supravat1',
        description: 'xxxxx',
        img: banner1
    },
    {
        name: 'supravat2',
        description: 'ssssss',
        img: banner2
    },
]

const SharedCarousel = () => {
    return (
        <Carousel
            stopAutoPlayOnHover={false}
            indicatorContainerProps={{
                style: {
                    marginTop: '-50px', // 5
                    position: 'relative', zIndex: '34'
                }
            }}>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

// function Item(props) {
//     return (
//         <div style={{ zIndex: '-1' }}>
//             <h2>{props.item.name}</h2>
//             <p>{props.item.description}</p>
//             <img src={props.item.img} alt="..." />
//         </div>
//     )
// }

function Item(props) {
    const backGroundStyle = {
        // backgroundImage: `url(${banner1})`,
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover "
    }
    return (
        <Paper style={backGroundStyle}>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <img style={{ width: "100%" }} src={props.item.img} alt="..." />
            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default SharedCarousel;