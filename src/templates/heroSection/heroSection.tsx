import './heroSection.scss'
import { heroSectionString } from './../../utils/heroSectionStrings'

const HeroSection = () => {
    return (
        <>
            <div className="hero">
                <div data-speed="2" className="hero-inner">
                </div>
            </div>
            <section className='event' id='main-event-section'>
                <div className='event-container'>
                    <div className='event-title'>
                        <h1 >
                            We're back!
                        </h1>
                    </div>
                    <div className='event-heroSectionString'>
                        <p>{heroSectionString.firstParagraph}</p>
                        <p>{heroSectionString.secondParagraph}</p>
                        <p>{heroSectionString.thirdParagraph}</p>
                        <p>{heroSectionString.fourthParagraph}</p>
                        <p>{heroSectionString.fifthParagraph}</p>
                        <p>{heroSectionString.sixthParagraph}</p>
                        <p>{heroSectionString.seventhParagraph}</p>
                        <p>{heroSectionString.eighthParagraph}</p>
                        <p>{heroSectionString.ninethParagraph}</p>
                        <p>{heroSectionString.tenthParagraph}</p>
                        <p>{heroSectionString.eleventhParagraph}</p>
                    </div>
                </div>
                <div className='event-img'></div>
            </section>

        </>
    )
}

export default HeroSection;