import React from 'react';
import './featuredSection.styles.scss';

const FeaturedSection = () => {
  return (
                <div className="featured-container">
                        <div >
                            <img src="/icons/f-delivery.png" alt=""/>
                            <h4>Free shipping</h4>
                            <p>Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum mal
                                esuada aliquet libero viverra cursus. </p>
                        </div>
                        <div >
                            <img src="/icons/coin.png" alt=""/>
                            <h4>100% Money back </h4>
                            <p>Urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum mal esuada
                                aliquet libero viverra cursus. </p>
                        </div>
                        <div >
                            <img src="/icons/chat.png" alt=""/>
                            <h4>Online support 24/7</h4>
                            <p>Urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum mal esuada
                                aliquet libero viverra cursus. </p>
                        </div>
                </div>
  )
}

export default FeaturedSection
