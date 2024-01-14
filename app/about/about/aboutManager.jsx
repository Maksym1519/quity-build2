import a from './about.module.scss';
import Image from 'next/image';
import { aboutInfo } from '@/lib/features/about/aboutSlice';
import { useAppSelector } from '@/lib/hooks';
import { useEffect, useState } from 'react';

const AboutManager = () => {
  const [dataFromServer, setDataFromServer] = useState()
  const [managerImage, setManagerImage] = useState()
  const [quote, setQuote] = useState()
  const [author, setAuthor] = useState()
  const dataFromRedux = useAppSelector(aboutInfo)
  useEffect(() => {
    if (dataFromRedux && dataFromRedux !== null)
    setDataFromServer(dataFromRedux)
  },[dataFromRedux])
  
  useEffect(() => {
   if (dataFromServer && dataFromServer !== null) {
     setManagerImage(dataFromServer[0].attributes.managerImage.data.attributes.url)
     setQuote(dataFromServer[0].attributes.managerQuote)
     setAuthor(dataFromServer[0].attributes.author)
     }
  },[dataFromServer])
    return (
        <div className={a.aboutManager__body}>
           <div className={a.managerImage__wrapper}>
             <Image src={managerImage} width={296} height={280} className={a.managerImage}/>
           </div>
           <div className={a.info__wrapper}>
             <p className={a.text}>{quote}</p>
             <p className={a.author}>{author}</p>
           </div>
        </div>
    )
}

export default AboutManager;