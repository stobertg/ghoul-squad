import React from 'react'
import { styled } from '@theme'
import { Icon, Button, ButtonIcon } from '@components'

const RecordWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  position: 'relative',
  width: '100%',
  height: '100%'
})

const RecordTop = styled('div', {
  position: 'relative',
  width: '100%',
  marginTop: '72px',
  
})

const RecordHeader = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%',
  padding: '0 16px 12px 16px'
})

const RecordMain = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  flex: 1,
  position: 'relative',
  width: '100%',
  height: '100%'
})

const RecordBottom = styled('div', {
  position: 'relative',
  width: '100%'
})

const RecordBottomContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%',
  padding: '0 32px 68px 32px'
})

const RecordButton = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 60,
  height: 60,
  borderRadius: '50%',
  border: '4px solid #fff',

  '&:before': {
    content: '',
    position: 'absolute',
    width: 22,
    height: 22,
    borderRadius: 6,
    background: 'red'
  }
})

const ImageThumb = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  positiom: 'relative',
  width: 40,
  height: 40,
  borderRadius: 4,
  overflow: 'hidden'
})

const IconWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 40,
  height: 40
})

const RecordVideo = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: 'calc( 100% - 50px )',

  video: { 
    width: '110%',
    height: '100%' 
  }
})

interface RecordProps {
  onClose?: any
  onDone?: any
}

export const Record = ({
    onClose,
    onDone
  }:RecordProps) => {
  
  return(

    <RecordWrap>
      <RecordTop>
        <RecordHeader>
          <ButtonIcon icon="x" onClick={ onClose } />
          <Button size="l0" title="Done" onClick={ onDone } />
        </RecordHeader>
      </RecordTop>
      
      <RecordMain>
        <RecordVideo>
          <video
            src="/ghouls/unboxing.mp4"
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
          />
        </RecordVideo>

        <RecordBottom>
          <RecordBottomContent>
            <ImageThumb><img src="/ghouls/static/mystery-box.webp" /></ImageThumb>
            <RecordButton />
            <IconWrap><Icon size="l3" icon="flip" /></IconWrap>
          </RecordBottomContent>
        </RecordBottom>
      </RecordMain>
    </RecordWrap>

  )
}