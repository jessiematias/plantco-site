import React from 'react'
import { Card, CardsContainer, IconContainer, CardsText } from './CardsStyles'
import { FaMoneyBillWave, FaTruckMoving } from 'react-icons/fa'
import { RiCustomerService2Line, RiSecurePaymentLine } from "react-icons/ri";

const Cards = () => {
  return (
      <CardsContainer> 
          <Card>
              <IconContainer><FaMoneyBillWave/></IconContainer>
              <CardsText>
                  <p>MONEY BACK GUARANTEE</p>
                  <span>30 days to get your money back</span>
              </CardsText>
          </Card>
          <Card>
          <IconContainer><FaTruckMoving/></IconContainer>
          <CardsText>
                  <p>FAST DELIVERY ANYWHERE</p>
                  <span>30 days to get your money back</span>
              </CardsText>
          </Card>
          <Card>
          <IconContainer><RiCustomerService2Line/></IconContainer>
          <CardsText>
                  <p>24/7 CUSTOMER SUPPORT</p>
                  <span>30 days to get your money back</span>
              </CardsText>
          </Card>
          <Card>
          <IconContainer><RiSecurePaymentLine/></IconContainer>
          <CardsText>
                  <p>ALL PROTECTED PAYMENT</p>
                  <span>Pay with your credit or debit card</span>
              </CardsText>
          </Card>
      </CardsContainer>
  
  )
}

export default Cards 
