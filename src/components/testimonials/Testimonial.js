import React, { useState } from 'react';
import { QuotesContainer, QuoteParagraph, CirclesContainer, Circle, QuotePerson, TestimonialsTitle, Quote, ArrowRight, Arrow } from './TestimonialStyles';
import styled from 'styled-components';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { useTransition, animated } from 'react-spring';
//testimonials responsive carousel on home page
const TestimonialCard = () => {

    const quotes = {
        0: {
            client: 'John Doe',
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi totam nulla necessitatibus id quae quam, at, nihil ipsum voluptas deleniti sequi. Distinctio voluptatibus asperiores nesciunt, nihil quidem nostrum laboriosam repudiandae.',
            key: 0
        },
        1: {
            client: 'Jane Doe',
            quote: 'um voluptas deleniti sequi. Distinctio voluptatibus asperiores nesciunt, nihil quidem nostrum laboriosam repudiandae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo necessitatibus minima expedita at odio ratione corporis eius mollitia par',
            key: 1
        },
        2: {
            client: 'Juan del Campo',
            quote: 'it amet consectetur adipisicing elit. Commodi totam nulla necessitatibus id quae quam, at, nihil ipsum voluptas deleniti sequi. Distinctio Lorem, ipsum dolor sit ',
            key: 2
        },
        3: {
            client: 'Juanita del Campo',
            quote: 'nihil ipsum voluptas deleniti sequi. Distinctio voluptatibus asperiores nesciunt, nihil quidem nostrum laboriosam repudiandae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo necessitatibus minima',
            key: 3
        }
    }


    const [current, setCurrent] = useState(quotes[0])
    let [active, setActive] = useState(0)

    //since active is initially set to 0 the first quote that will display is the one indicated by the index position

    const transitions = useTransition(current, item => item.key, {
        from: {position: 'absolute', width: '70vw', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    const Circles = styled(Circle)`
    &[data-quote="${active}"]::before {
        background-color: #45454d;
    }
    `

    const handlePreviousClick = e => {
        if (active) {
            setActive(active = active - 1)
            setCurrent(quotes[active])
        } else {
            setActive(0)
            setCurrent(quotes[0])
        }
    }

    const handleNextClick = e => {
        if (active < Object.keys(quotes).length - 1) {
            setActive(active = active + 1)
            setCurrent(quotes[active])

        } else {
            setActive(0)
            setCurrent(quotes[0])
        }
    }

    const handleSetClick = e => {
        const currentItem = parseInt(e.target.getAttribute("data-quote"))
        setCurrent(quotes[currentItem])
        setActive(currentItem)
    }  
    
    return (
        <>
        <TestimonialsTitle>WHAT CUSTOMERS ARE SAYING</TestimonialsTitle>
        <QuotesContainer>
  <Arrow onClick={handlePreviousClick}>{'<'}</Arrow>

  {transitions.map(({ item, props, key }) =>
    <animated.div 
      key={key} 
      style={props}>
      <QuoteParagraph>
            <Quote>
                 <FaQuoteLeft />
             </Quote>{item.quote}
             <Quote>
                 <FaQuoteRight />
             </Quote>
         </QuoteParagraph>
        <QuotePerson>-{item.client}</QuotePerson>       
    </animated.div>)}
  <ArrowRight onClick={handleNextClick}>{'>'}</ArrowRight>
</QuotesContainer>
<div style={{display: 'flex', justifyContent: 'center'}}>
    <CirclesContainer>
             {Object.keys(quotes).map(index => (
                <Circles 
                    onClick={event => handleSetClick(event)}
                    data-quote={index}
                    key={index}
                />
            ))}
        </CirclesContainer>
        </div>

</>
    )

// return (
//     <QuotesContainer>
//         <Arrow onClick={handlePreviousClick}>{'<'}</Arrow>
//         <TestimonialsTitle>What customers are saying</TestimonialsTitle>
//         <QuoteParagraph>
//             <Quote>
//                 <FaQuoteLeft />
//             </Quote>{current.quote}
//             <Quote>
//                 <FaQuoteRight />
//             </Quote>
//         </QuoteParagraph>
//         <QuotePerson>{current.client}</QuotePerson>
//         <CirclesContainer>
//             {Object.keys(quotes).map(index => (
//                 <Circles
//                     onClick={event => handleSetClick(event)}
//                     data-quote={index}
//                     key={index}
//                 />
//             ))}
//         </CirclesContainer>
//         <Arrow onClick={handleNextClick}>{'>'}</Arrow>
//     </QuotesContainer>
// )
}

export default TestimonialCard