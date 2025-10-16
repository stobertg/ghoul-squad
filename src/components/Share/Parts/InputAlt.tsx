import React from 'react'
import { styled } from '@theme'

const Input = styled('textarea', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  position: 'relative',
  width: '100%',
  height: '100%',
  background: 'none',
  border: 'none',
  outline: 'none',
  fontSize: '$s2',
  marginTop: 12,
  resize: 'none',
  lineHeight: 1.4
})

interface InputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Fires on each keyDown and change with the current typing state.
   */
  onTypingChange?: (isTyping: boolean) => void
  onFocusChange?: (focused: boolean) => void
}

export const ShareInput: React.FC<InputProps> = ({ onTypingChange, onChange, onKeyDown, onFocusChange, onFocus, onBlur, placeholder = 'Share your story...', ...props }) => {

  const inputRef = React.useRef<HTMLTextAreaElement>(null)

  React.useEffect(() => {
    const initial = inputRef.current?.value ?? ''
    onTypingChange?.(initial.trim().length > 0)
  }, [])

  const handleKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    const value = (e.currentTarget as HTMLTextAreaElement).value
    onTypingChange?.(value.length > 0)
    onKeyDown?.(e)
  }

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const value = e.currentTarget.value
    onTypingChange?.(value.length > 0)
    onChange?.(e)
  }

  const handleFocus: React.FocusEventHandler<HTMLTextAreaElement> = (e) => {
    onFocusChange?.(true)
    onFocus?.(e)
  }

  const handleBlur: React.FocusEventHandler<HTMLTextAreaElement> = (e) => {
    onFocusChange?.(false)
    const value = e.currentTarget.value
    onTypingChange?.(value.trim().length > 0)
    onBlur?.(e)
  }

  return (

    <Input
      placeholder={placeholder}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      defaultValue={"Sir Casper just arrived and he’s even cooler in person. The vibe is Halloween meets designer toy perfection."}
      ref={inputRef}
      {...props}
    />

  )
}
