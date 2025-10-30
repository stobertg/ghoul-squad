import React, { useState } from 'react'
import { styled } from '@theme'
import { Heading, Avatar, PhoneHeader, AppBlock, Icon } from '@components'
import { ShareInput } from './Parts/InputAlt'
import { Input } from './Parts/Input'
import { useTheme } from 'next-themes'

const ShareWrap = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	flex: 1,
	position: 'relative',
	height: '100%',
	paddingTop: 50,
	overflow: 'hidden'
})

const ShareContent = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	flex: 1,
	// justifyContent: 'space-between',
	position: 'relative',
	wiidth: '100%'
})

const ShareHeader = styled('div', {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-between',
	position: 'relative',
	width: '100%',
	padding: '0 24px'
})

const ShareKeyboard = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: 8,
	position: 'absolute',
	bottom: 0,
	left: 0,
	width: '100%',
	transform: 'translateY( calc( 100% - 180px ))',
	transition: '$s2',

	variants: {
		active: {
			true: { transform: 'translateY( 0px )' }
		}
	}
})

const Keyboard = styled('div', {
	display: 'flex',
	position: 'relative',
	transform: 'translateY( 50px )',

	variants: {
		active: {
			true: { transform: 'translateY( 0px )' }
		}
	}
})

const KeyboardOptions = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: 12,
	position: 'relative',
	width: '100%',
	padding: '0 16px'
})

const KeyboardMain = styled('div', {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	gap: 12,
	position: 'relative',
	width: '100%'
})

const Community = styled('div', {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	gap: 6,
	position: 'relative',
	padding: '10px 14px 10px 10px',
	border: '1px solid $seperator',
	borderRadius: '$pill'
})

const ArrowButton = styled('button', {
    
})

const InputOptions = styled('div', {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	gap: 8,
	justifyContent: 'space-between',
	position: 'relative',
	width: '100%',
	// padding: '0 0 0 36px'
})

const OptionButton = styled('button', {
	display: 'flex',
	flexDirction: 'row',
	alignItems: 'center',
	justifyContent: 'center',
	gap: 8,
	position: 'relative',
	width: '100%',
	minHeight: 44,
	padding: '10px 16px',
	background: '$pillButton',
  border: '1px solid $pillButtonBorder',
	borderRadius: '$pill',
  transition: '$s1',
  '&:hover': { background: '$pillButtonHover' }
})

const ItemCardWrap = styled('div', {
	position: 'relative',
	width: '100%',
	paddingBottom: 16,
	marginBottom: 4,
	borderBottom: '1px solid $seperator',
	transition: '$s2',
	transitionDelay: '300ms',

	variants: {
		active: {
			true: { 
				opacity: 0, 
				pointerEvents: 'none',
				transition: 'none',
			}
		}
	}
})

const ItemCard = styled('div', {
	display: 'flex',
	flexDirecton: 'row',
	alignItems: 'center',
	gap: 12,
	position: 'relative',
	padding: 8,
	border: '1px solid $seperator',
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

const VideoPostThumb = styled('div', {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	position: 'relative',
	width: 68,
	height: 68,
	borderRadius: '$r1',
	border: '2px solid $bgTert',
	overflow: 'hidden',
	marginTop: 12,

  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 4,
    right: 4,
    width: 20,
    height: 20,
    color: '#fff',
    background: '#000',
    borderRadius: '50%',

    svg: { width: 12 }
  }
})

const ShareInputs = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
	position: 'relative',
	width: '100%',
  height: '100%',
	padding: '0 24px',
	marginTop: 8
})

interface ShareProps {
	onBackClick?: any
	onRecord?: any
  hasMediaThumb?: boolean
  removeThumb?: any
  onPost?: any
}

export const Share = ({ onBackClick, onRecord, hasMediaThumb, removeThumb, onPost }:ShareProps) => {
	const [ typing, setTyping ] = useState(false)
	const [ stage, setStage ] = useState(false)
	const handleFocusChange = (focused: boolean) => { setStage(focused) }

  // theme-aware keyboard image
  const { resolvedTheme } = useTheme()
  const keyboardSrc = resolvedTheme === 'light' ? '/utils/keyboard-light.webp' : '/utils/keyboard.webp'

	return(

		<ShareWrap>
			<PhoneHeader 
				overlay 
				taskDisabled={ !typing }
				task="Post"
				taskFunction={ onPost }
				{...{ onBackClick }}
			/>

			<ShareContent>
        <ShareHeader>
          <Avatar 
            size="l1"
            image="/people/isabella.webp" 
            name="Isabella Marks"
            timeStamp="10.31.2025"
          />
          
          <Community>
            <Icon size="l0" icon="globe" />
            <Heading size="l0" title="Community" />
          </Community>
        </ShareHeader>
        
        <ShareInputs>
          { hasMediaThumb && (
            <VideoPostThumb>
              <img src="/ghouls/unboxing-static.webp" />
              <button onClick={ removeThumb }><Icon icon="x" /></button>
            </VideoPostThumb>
          )}

          <ShareInput
            onTypingChange={(isTyping) => setTyping(isTyping)}
            onFocusChange={handleFocusChange}
          />
        </ShareInputs>

				<ShareKeyboard active={ stage }>
					<KeyboardOptions>
						<ItemCardWrap active={ stage }>
							<ItemCard>
								<ItemImage><img src="/ghouls/static/mystery-box.webp" /></ItemImage>
								<ItemCardText>
									<Heading color="secondary" size="l0" title="Ghoul Squad + Finds Collab" />
									<Heading size="l1" title="Ghoul Squad Mystery Box - Single" />
								</ItemCardText>
							</ItemCard>
						</ItemCardWrap>

						<InputOptions>
							<OptionButton onClick={ onRecord }>
                <Icon icon="video" />
								<Heading bold title="Record video" />
							</OptionButton>

							<OptionButton>
								<Icon size="l1" icon="image" />
								<Heading bold title="Upload media" />
							</OptionButton>
						</InputOptions>
					</KeyboardOptions>

					<Keyboard active={ stage }>
            <img src={keyboardSrc} />
          </Keyboard>
				</ShareKeyboard>
			</ShareContent>
		</ShareWrap>

	)
}