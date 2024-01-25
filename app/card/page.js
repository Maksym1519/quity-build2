import c from './cardPage.module.scss';
import CardPresentation from './cardPresentation/cardPresentation';
import CardInfo from './cardInfo/cardInfo';


export default function CardPage() {
     return (
        <div className={c.wrapper}>
          <div className='container'>
             <div className={c.cardPage__body}>
               <CardPresentation />
               <CardInfo />
             </div>
          </div>
        </div>
    )
}