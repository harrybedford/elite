import React from 'react'
import Link from 'next/link'
import MenuStyle, { MenuItem } from './style'

const Menu = () => (
  <MenuStyle>
    <Link href="/products">
      <MenuItem>
        Products
      </MenuItem>
    </Link>
    <Link href="/gallery">
      <MenuItem>
        Gallery
      </MenuItem>
    </Link>
    <Link href="/blog">
      <MenuItem>
        Blog
      </MenuItem>
    </Link>
    <Link href="/contact">
      <MenuItem>
        Contact Us
      </MenuItem>
    </Link>
    <MenuItem href="tel:" cta>
      Get a Quote
    </MenuItem>
  </MenuStyle>
)

export default Menu
