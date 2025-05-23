import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colorGreyShark } from '@tds/core-colours'

const StyledMiddleControlButton = styled.button(({ isHidden, iconLeftOffsetPx }) => ({
  width: 64,
  height: 64,
  borderRadius: '50%',
  transition: 'opacity 0.4s',
  opacity: isHidden ? 0 : 1,
  background: colorGreyShark,
  display: 'flex',
  justifyContent: 'center',
  color: 'inherit',
  border: 'none',
  padding: 0,
  font: 'inherit',
  cursor: 'pointer',
  alignItems: 'center',
  svg: {
    marginLeft: iconLeftOffsetPx,
  },
}))

const MiddleControlButton = ({ icon, iconLeftOffsetPx, isHidden, onClick, onFocus, label }) => {
  return (
    <StyledMiddleControlButton
      aria-label={label}
      iconLeftOffsetPx={iconLeftOffsetPx}
      isHidden={isHidden}
      onClick={onClick}
      onFocus={onFocus}
    >
      {icon}
    </StyledMiddleControlButton>
  )
}
MiddleControlButton.propTypes = {
  icon: PropTypes.node.isRequired,
  iconLeftOffsetPx: PropTypes.number,
  isHidden: PropTypes.bool,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  label: PropTypes.string,
}

MiddleControlButton.defaultProps = {
  iconLeftOffsetPx: undefined,
  isHidden: false,
  onClick: undefined,
  onFocus: undefined,
  label: undefined,
}

export default MiddleControlButton
