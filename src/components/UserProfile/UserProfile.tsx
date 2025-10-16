import React from 'react'
import { styled } from '@theme'
import { PhoneHeader, AppBlock, Heading, Icon, Tabs, Text, ButtonIcon, Avatar, Level, ItemCarousel } from '@components' 
import { Input } from './Parts/Input'

const ProfileWrap = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%',
  padding: '40px 0 32px',
  background: '$bgPrimary',
  overflow: 'scroll'
})

const ProfileContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
  position: 'relative',
  width: '100%',
})

const Hero = styled('div', {
  position: 'relative',
  width: '100%',
  // paddingTop: 64,
})

const HeroImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: 120,
  borderRadius: '$r3',
  overflow: 'hidden',

  '&:after': {
    content: '',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '50%',
    background: 'linear-gradient(0deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);'
  },

  img: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }
})

const HeroBottom = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 20,
  position: 'relative',
  width: '100%',
  padding: '0 24px'
})

const HeroAvatar = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignitems: 'center',
  position: 'relative',
  width: 100,
  height: 100,
  borderRadius: '50%',
  overflow: 'hidden',
  border: '2px solid #fff'
})

const UserStats = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 20,
  position: 'relative',
  marginBottom: 6,
})

const UserStat = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
  // color: '$textSecondary'
})


const SocialFeed = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  position: 'relative',
  width: '100%',
  padding: '0 20px'
})

const Post = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  position: 'relative',
  width: '100%',
  padding: 12,
  border: '1px solid $border',
  borderRadius: '$r2'
})

const PostHeader = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%'
})

const PostContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  position: 'relative',
  width: '100%'
})

const PostVideo = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: 280,
  borderRadius: '$r2',
  overflow: 'hidden',
  video: { width: '100%', paddingTop: 100 }
})

const UserStatWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 8,
  position: 'relative'
})

const ItemCardWrap = styled('div', {
	position: 'relative',
	width: '100%',
	transition: '$s2',
	transitionDelay: '300ms'
})

const ItemCard = styled('div', {
	display: 'flex',
	flexDirecton: 'row',
	alignItems: 'center',
	gap: 12,
	position: 'relative',
	padding: 8,
	border: '1px solid #333',
	// background: '$borderActive',
	borderRadius: '$r2'
})

const ItemCardText = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: 4,
	position: 'relative',
})

const ItemImage = styled('div', {
	display: 'flex',
	width: 50,
	height: 50,
	borderRadius: '$r1',
	overflow: 'hidden'
})

const ShareWrap = styled('div', {
  position: 'relative',
  width: '100%',
})

const ShareContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  padding: '0 8px 16px'
})

const ShareItem = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 4,
  position: 'relative'
})

const ShareMain = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 16,
  position: 'relative'
})

const CollectionWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 50,
  position: 'relative',
  width: '100%',
})

const CollectionMain = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  poition: 'relative',
  width: '100%',
  padding: '0 24px'
})

const CollectionCard = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 12,
  position: 'relative',
  padding: 12,
  border: '1px solid $border',
  borderRadius: '$r2'
})

const ColImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 100,
  height: 100,
  borderRadius: '$r1',
  overflow: 'hidden'
})

const ColText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8
})

const ColTextMain = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 4
})

const AddMore = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: 140,
  border: '1px dashed $border',
  borderRadius: '$r2'
})

const AddMoreContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 8,
  position: 'relative'
})

const IconWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 40,
  height: 40,
  borderRadius: '50%',
  border: '1px solid $border'
})

interface UserProps {

}

export const UserProfile = ({}:UserProps) => {
  return(

    <ProfileWrap>
      <PhoneHeader overlay />
      <ProfileContent>
        <AppBlock>
          <Hero>
            {/* <HeroImage><img src='/ghouls/hero.jpg' /></HeroImage> */}
            <HeroBottom>
              <HeroAvatar><img src="/people/isabella.webp" /></HeroAvatar>
              <Heading bold title="Isabella Marks" />
              <UserStats>
                <UserStatWrap>
                  <UserStat>
                    {/* <Icon size="l0" icon="star" /> */}
                    <Heading bold size="l2" title="1" />
                  </UserStat>
                  <Heading size="l0" title="Collectables" />
                </UserStatWrap>

                <UserStatWrap>
                  <UserStat>
                    {/* <Icon size="l0" icon="users" /> */}
                    <Heading bold size="l2" title="78" />
                  </UserStat>
                  <Heading size="l0" title="Followers" />
                </UserStatWrap>

                <UserStatWrap>
                  <UserStat>
                    {/* <Icon size="l0" icon="user-star" /> */}
                    <Heading bold size="l2" title="101" />
                  </UserStat>
                  <Heading size="l0" title="Following" />
                </UserStatWrap>
              </UserStats>
            </HeroBottom>
          </Hero>
        </AppBlock>

        <AppBlock>
          <Level />
        </AppBlock>


          <Tabs 
            tabSize="tiny"
            triggers={[
              { title: 'Posts' },
              { title: 'My Collection' },
              { title: 'Wishlist' }
            ]}
            tabContent={[
              { content: 
                
                <SocialFeed>
                  <Input />
                  <Post>
                    <PostHeader>
                      <Avatar size="l1" image="/people/isabella.webp" name="Isabella Marks" timeStamp='10.31.25' /> 
                      <ButtonIcon size="l0" icon="more" />
                    </PostHeader>

                    <PostContent>
                      <Text fontSize="l1">
                        Sir Casper just arrived and he&apos;s even cooler in person. The vibe is Halloween meets designer 
                        toy perfection.
                      </Text>

                      <PostVideo>
                        <video
                          src="/ghouls/unboxing2.mp4"
                          autoPlay
                          muted
                          playsInline
                          loop
                          preload="auto"
                        />
                      </PostVideo>

                      <ItemCardWrap>
                        <ItemCard>
                          <ItemImage><img src="/ghouls/static/mystery-box.webp" /></ItemImage>
                          <ItemCardText>
                            <Heading color="secondary" size="l0" title="Ghoul Squad + Finds Collab" />
                            <Heading size="l1" title="Ghoul Squad Mystery Box - Single" />
                          </ItemCardText>
                        </ItemCard>
                      </ItemCardWrap>

                      <ShareWrap>
                        <ShareContent>
                          <ShareMain>
                            <ShareItem>
                              <Icon size="l1" icon="message-circle" />
                              <Heading size="l0" title="12" />
                            </ShareItem>

                            <ShareItem>
                              <Icon size="l1" icon="heart" />
                              <Heading size="l0" title="101" />
                            </ShareItem>

                            <ShareItem>
                              <Icon size="l1" icon="repeat-2" />
                              <Heading size="l0" title="2" />
                            </ShareItem>
                          </ShareMain>

                          <Icon size="l1" icon="share" />
                        </ShareContent>
                      </ShareWrap>
                    </PostContent>
                  </Post>
                </SocialFeed>

              },
              {  content:
                
                <CollectionWrap>
                  <CollectionMain>
                    <CollectionCard>
                      <ColImage><img src="/ghouls/static/mystery-box.webp" /></ColImage>
                      <ColText>
                        <ColTextMain>
                          <Heading bold title="Ghoul Squad" />
                          <Heading size="l0" title="Finds + Ghoul Squad Drop" />
                          <Heading size="l0" title="Release 2025" />
                        </ColTextMain>
                        <Heading bold size="l2" title="$111.96" />
                      </ColText>
                    </CollectionCard>

                    <AddMore>
                      <AddMoreContent>
                        <IconWrap><Icon icon="plus" /></IconWrap>
                        <Heading size="l0" color="secondary" title="Add more" />
                      </AddMoreContent>
                    </AddMore>
                  </CollectionMain>

                  <ItemCarousel 
                    items={[
                      {
                        image: "/ghouls/static/mystery-box.webp",
                        title: "Ghoul Squad Mystery Drop collaboration with Finds",
                        price: "$111.96"
                      },
                      {
                        image: "/ghouls/static/pump.webp",
                        title: "Sir Pump Blind Box",
                        price: "$27.99"
                      },
                      {
                        image: "/ghouls/static/casper.webp",
                        title: "Sir Casper Blind Box",
                        price: "$27.99"
                      },
                      {
                        image: "/ghouls/static/frank.webp",
                        title: "Sir Frank Blind Box",
                        price: "$27.99"
                      },
                      {
                        image: "/ghouls/static/vamp.webp",
                        title: "Sir Vamp Blind Box",
                        price: "$27.99"
                      },
                      {
                        image: "/ghouls/static/jeremy.webp",
                        title: "Jeremy Blind Box",
                        price: "$27.99"
                      },
                    ]}
                  />
                </CollectionWrap>

              }
            ]}
          />  

      </ProfileContent>
    </ProfileWrap>

  )
}