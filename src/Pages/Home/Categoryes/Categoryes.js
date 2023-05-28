import React from 'react';
import dev from '../../../assets/icons/category/dev.png'
import bus from '../../../assets/icons/category/bus.png'
import it from '../../../assets/icons/category/it.png'
import ui from '../../../assets/icons/category/ui.png'
import mer from '../../../assets/icons/category/mer.png'
import pho from '../../../assets/icons/category/pho.png'
import gra from '../../../assets/icons/category/gra.png'
import Category from './Category';

const Categoryes = () => {
    const categories=[
        {
            id:1,
            name:'Development',
            logo: dev,
            background:'#EDEEF3'


        },
        {
            id:2,
            name:'Business',
            logo: bus,
            background:'#EDEEF3'


        },
        {
            id:3,
            name:'IT and Software',
            logo: it,
            background:'#EDEEF3'


        },
        {
            id:4,
            name:'UI Design',
            logo: ui,
            background:'#EDEEF3'


        },
        {
            id:5,
            name:'UX Design',
            logo: bus,
            background:'#EDEEF3'


        },
        {
            id:6,
            name:'Marketing',
            logo: mer,
            background:'#EDEEF3'


        },
        {
            id:7,
            name:'Photography',
            logo: pho,
            background:'#EDEEF3'


        },
        {
            id:8,
            name:'Graphic Design',
            logo: gra,
            background:'#EDEEF3'


        }
    ] 
    return (
        <div className='mx-auto p-8'>
            <div className='grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
                {categories.map(category=><Category
                key={category.id}
                category={category}
                
                ></Category>)}
            </div>
            
        </div>
    );
};

export default Categoryes;