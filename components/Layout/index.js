import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import GlobalStyle from '../../css/GlobalStyle'
import Header from './Header'

import { bulletList, HOME, ABOUT, SKILL, WORK_EXAMPLE, FOOTER } from '../../constants/header'

const Layout = ({ children, title }) => {

  const [activeSection, setActiveSection] = useState(null)

  const handleActiveBullet = async type => {
    const section = document.querySelector(bulletList[type])

    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      })
    }
  }

  const handleWindowScroll = () => {

    const homeSection = document.querySelector(HOME)
    if (homeSection && window.scrollY <= homeSection.offsetTop) {
      setActiveSection(HOME)
      return
    }

    const aboutSection = document.querySelector(ABOUT)
    if (aboutSection && window.scrollY <= aboutSection.offsetTop) {
      setActiveSection(ABOUT)
      return
    }

    const skillSection = document.querySelector(SKILL)
    if (skillSection && window.scrollY <= skillSection.offsetTop) {
      setActiveSection(SKILL)
      return
    }
    
    const workExampleSection = document.querySelector(WORK_EXAMPLE)
    if (workExampleSection && window.scrollY <= workExampleSection.offsetTop) {
      setActiveSection(WORK_EXAMPLE)
      return
    }

    const footerSection = document.querySelector(FOOTER)
    if (footerSection && window.scrollY <= footerSection.offsetTop) {
      setActiveSection(FOOTER)
      return
    }

  }

  useEffect(() => { // componentDidMount
    
    handleWindowScroll()

    document.addEventListener('scroll', handleWindowScroll, true)

    return () => { // componentWillUnmount

      document.removeEventListener('scroll', handleWindowScroll, true)

    }
  })

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>{title}</title>
      </Head>
      <Header
        activeSection={activeSection}
        onSelectBullet={handleActiveBullet}
      />
      {children}
    </>
  )
}

export default Layout
