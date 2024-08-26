import React from 'react'

export default function Productsadvert() {
    const adverb = [
        'https://data2.nssmag.com/images/galleries/9646/thumbs/balmaingif.gif',
        'https://media.glamour.com/photos/569663ebeaefd309768dbd7c/master/pass/fashion-2015-09-michael-main.gif',
        'https://dazedprod.blob.core.windows.net/dazed-prod/1080/9/1089497.gif'
    ]
  return (
    <div className='Products-adverb-container'>
      {adverb.map(adv => {
        return <div className='products-advert-item' style={{background : `url(${adv}) no-repeat top / cover`}}></div>
      })}
    </div>
  )
}
