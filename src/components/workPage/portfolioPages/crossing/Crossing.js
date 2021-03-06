import React from 'react'
import './crossing.css'
import './responsiveCrossing.css'
import HeaderComp from '../../../headerComp/HeaderComp'
import crossingArrowBlackDown from '../../../../images/arrowBlackDown.png'
import crossingOldLogo from '../../../../images/crossingOldLogo.png'
import crossingNewLogo from '../../../../images/crossingNewLogo.png'
import crossingsImage1 from '../../../../images/crossingsImage1.png'
import crossingsImage2 from '../../../../images/crossingsImage2.png'
import crossingsImage3 from '../../../../images/crossingsImage3.png'
import crossingsImage4 from '../../../../images/crossingsImage4.png'
import crossingsImage1Mobile from '../../../../images/crossingsImage1Mobile.png'
import crossingsImage2Mobile from '../../../../images/crossingsImage2Mobile.png'
import crossingsImage3Mobile from '../../../../images/crossingsImage3Mobile.png'
import crossingsImage4Mobile from '../../../../images/crossingsImage4Mobile.png'
import crossingsOldLogoMobile from '../../../../images/crossingsOldLogoMobile.png'
import crossingsNewLogoMobile from '../../../../images/crossingsNewLogoMobile.png'


class Crossing extends React.Component {
    constructor() {
        super()
        this.state={
            counter: 0,
            imageList: [crossingsImage1, crossingsImage2, crossingsImage3, crossingsImage4],
            mobileImageList: [crossingsImage1Mobile, crossingsImage2Mobile, 
                            crossingsImage3Mobile, crossingsImage4Mobile]
        }
    }

    imageChange = () => {
        if (this.state.counter >=3) {
            this.setState({counter:0})
        } else {
            this.setState({counter: this.state.counter + 1})
        }
    }

    render() {
        const imageNo = this.state.counter 
        const imageList = this.state.imageList 
        const mobileImageList = this.state.mobileImageList
        let imageIndex
        return (
            <div className='crossingContainer'>
                <div className='slide crossing'>
                    <HeaderComp />
                    <p className='crossingCaption'>
                        CREATING AN INCLUSIVE SPACE
                        OF INTERSECTION
                    </p>
                    <img 
                        className='crossingArrowDown'
                        src={crossingArrowBlackDown} 
                        alt='arrow pointing down'
                    />
                </div>
                <div className='crossingDetails'>
                    <h1 className='crossingHeading'>
                        Better Together
                    </h1>
                    <div className='crossingOriginalLogoDiv'>
                        <img className='crossingOriginalLogo' src={crossingOldLogo} alt='original crossing logo'/>
                        <img className='crossingsOldLogoMobile' src={crossingsOldLogoMobile} alt='original logo mobile' />
                        <p className='crossingOriginalLogoCaption'>Old Logo</p>
                    </div>
                    <p className='crossingOriginalLogoDescription'>
                        This project was done in collaboration with Purposefully Soulful Business consultancy.
                        The aim was to rebrand Crossing Dance to create a brand that is inclusive, modern and 
                        wholesome. <br/><br/>
                        Stemming from religious roots. Crossing Dance hoped to retain the spiritual element into 
                        their logo without being off-putting to a greater market. Successfully the logo was created 
                        served as both meaning intersections as well as Christ.
                    </p>
                    <div className='crossingNewLogoDiv'>
                        <img className='crossingNewLogo' src={crossingNewLogo} alt='new crossing logo'/>
                        <img className='crossingsNewLogoMobile' src={crossingsNewLogoMobile} alt='new crossing logo mobile'/>
                        <p className='crossingNewLogoCaption'>New Logo</p>
                    </div>
                    <p className='crossingNewLogoDescription'>
                    "We have always been, and will continue to be, a place of intersection between: faith and art,
                    tradition and innovation, and technique artistry... <br/><br/>
                    Our logos draws from art history. The circle and intersecting threads represent unity, wholeness,
                    infinity and God. The lines in our logo carry forward this theme and represent movement, dance, 
                    intersections and the interactions of the community at Crossings Dance. The cross at the centre 
                    represents our roots as a faith-based dance school and our mission to nurture the whole dancer." 
                    <span> Crossing Dance Studio, Calgary</span>
                    </p>
                    <p className='logoUtil'>
                        The Logo has been utilized in retail, signage, programs, web, social media 
                        and in advertising
                    </p>
                    <div className='crossingImageContainer' onClick={this.imageChange}>
                        <img 
                            className='crossingImage'
                            src={imageList[imageNo]}
                            alt='crossings dance'/>

                        <div className='crossingDotContainer'>
                            {imageList.map(imageDot => {
                                imageIndex=imageList.indexOf(imageDot)
                                if(imageIndex === imageNo) {
                                    return (
                                        <span key={imageNo} className='dot'></span>
                                    )
                                }
                                    return (
                                        <span key={imageIndex} className='dotClear'></span>
                                    )
                            })}
                        </div>

                    </div>
                    <div className='crossingImageContainerMobile' onClick={this.imageChange}>
                        <img
                            className='crossingImageMobile'
                            src={mobileImageList[imageNo]}
                            alt='crossing dance designs'
                        />
                            <div className='crossingDotContainerMobile'>
                                {mobileImageList.map(img => {
                                    imageIndex=mobileImageList.indexOf(img)
                                    if(imageIndex === imageNo) {
                                        return (
                                            <span key={imageNo} className='crossingDotMobile'></span>
                                        )
                                    }
                                        return (
                                            <span key={imageIndex} className='crossingDotClearMobile'></span>
                                        )
                                })}
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Crossing