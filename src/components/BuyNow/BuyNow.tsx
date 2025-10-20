import React from 'react'
import { styled } from '@theme'
import { Heading, InputQuantity, Button, ButtonContainer, ButtonSelect, Price, Grid, Icon } from '@components'

const BuyWrap = styled('div', {
  dispaly: 'flex',
  position: 'relative',
  width: '100%',
  height: '100%',
  // background: '#000'
})

const BuyContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  position: 'relative',
  width: '100%',
  padding: '0 20px'
})

const HeroWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  position: 'relative',
  width: '100%'
})

const BuyNowHero = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignitems: 'center',
  gap: 16,
  position: 'relative',
  width: '100%',
  padding: '12px 0 0'
})

const BuyNowImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  position: 'relative',
  width: 128,
  minWidth: 128,
  height: 134,
  borderRadius: '$r2',
  overflow: 'hidden',

  img: { 
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }
})

const BuyNowText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
})

const BuyNowTextMain = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  position: 'relative',

  '> *:first-child': {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    '> *:last-child': { lineHeight: '1.3 !important' }
  }
})

const Badges = styled('div', {

})

const BadgeWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative'
})

const DetailButtons = styled('div', {
  position: 'relative',
  width: '100%',
  '> *:first-child': { borderTop: '1px solid #222' },
  '> *:not(:last-child)': { borderBottom: '1px solid #222' }
})

const DetailButton = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: 20,
  position: 'relative',
  width: '100%',
  padding: '16px 0',
  '*': { lineHeight: '1.4 !important' }
})

const DetailButtonLeft = styled('div', {
  position: 'relative',
  width: 60,
  marginTop: 1
})

const DetailButtonMain = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  flex: 1,
  justifyContent: 'space-between',
  position: 'relative'
})

const DetailPayment = styled('div', {
  display: 'flex',
  flexDirecton: 'row',
  alignItems: 'center',
  gap: 8,
  position: 'relative'
})

const MasterCard = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 30,
  height: 24,
  borderRadius: 8,
  background: '#fff',
  img: { width: '70%' }
})

const PayButton = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  width: '100%',

  '> *:last-child': { 
    width: '88%',
    margin: '0 auto',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 1.4
  },

  a: {
    textDecoration: 'underline'
  }
})

const Badge = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 72,
  height: 72,
  borderRadius: '50%',
  border: '1px solid #333'
  // background: '#111'
})

const BadgeImage = styled('div', {
  width: 54,
  img: { display: 'flex' },

  variants: {
    size: {
      l0: { width: 44 },
      l1: { width: 50 }
    }
  }
})

interface BuyProps {

}

export const BuyNow = ({}:BuyProps) => {
  return(

    <BuyWrap>
      <BuyContent>

        <HeroWrap>
          <BuyNowHero>
            <BuyNowImage>
              <img src="/ghouls/static/mystery-box.webp" />
            </BuyNowImage>

            <BuyNowText>
              <BuyNowTextMain>
                <div>
                  <Price />
                  <Heading size="l1" title="Finds x Ghoul Squad Drop The Ghoul Squad Mystery Drop" />
                </div>
                <Heading size="l0" color="secondary" title="Only 8 left" />
              </BuyNowTextMain>

              <InputQuantity />
            </BuyNowText>
          </BuyNowHero>

          <ButtonContainer>
            <ButtonSelect 
              selected 
              image="/ghouls/mystery-box.png"
              title="Single Box"
              price="$27.99"
            />

            <ButtonSelect 
              image="/ghouls/mystery-box.png"
              title="Whole Set"
              price="$111.96"
            />
          </ButtonContainer>
        </HeroWrap>
        
        <Badges>
          <Grid columns={ 4 }>
            <BadgeWrap>
              <Badge><BadgeImage><img src="/badges/badge_collab.png" /></BadgeImage></Badge>
            </BadgeWrap>

            <BadgeWrap>
              <Badge><BadgeImage size="l0"><img src="/ghouls/illus/ghost-trans.png" /></BadgeImage></Badge>
            </BadgeWrap>

            <BadgeWrap>
              <Badge><BadgeImage size="l0"><img src="/badges/pump-badge-inverse.png" /></BadgeImage></Badge>
            </BadgeWrap>

            <BadgeWrap>
              <Badge><BadgeImage size="l1"><img src="/badges/pro_seller.png" /></BadgeImage></Badge>
            </BadgeWrap>
          </Grid>
        </Badges>

        <DetailButtons>
          <DetailButton>
            <DetailButtonLeft>
              <Heading size="l0" color="secondary" title="Address" />
            </DetailButtonLeft>

            <DetailButtonMain>
              <Heading size="l1" title="Isabella, 3743 Park Ln, Carrollton, TX 75220" />
              <Icon size="l1" icon="chevron-right" />
            </DetailButtonMain>
          </DetailButton>

          <DetailButton>
            <DetailButtonLeft>
              <Heading size="l0" color="secondary" title="Pay with" />
            </DetailButtonLeft>

            <DetailButtonMain>
              <DetailPayment>
                <MasterCard><img src="/payment/ma_symbol.svg" /></MasterCard>
                <Heading bold size="l1" title="Ending in 9424" />
              </DetailPayment>
              <Icon size="l1" icon="chevron-right" />
            </DetailButtonMain>
          </DetailButton>

          <DetailButton>
            <DetailButtonLeft>
              <Heading size="l0" color="secondary" title="Est total" />
            </DetailButtonLeft>

            <DetailButtonMain>
              <Heading size="l1" title={ <><strong>$27.99</strong> includes taxes </> } />
              <Icon size="l1" icon="chevron-right" />
            </DetailButtonMain>
          </DetailButton>
        </DetailButtons>

        <PayButton>
          <Button size="l1" title="Place order" onClick={() => alert('hello') } />
          <Heading 
            color="secondary"
            title={
              <>By placing this order, you agree to our <a href="#">Privacy Policy</a> and <a href="#">Terms of use</a>.</>
            } 
          />
        </PayButton>
      </BuyContent>
    </BuyWrap>

  )
}
