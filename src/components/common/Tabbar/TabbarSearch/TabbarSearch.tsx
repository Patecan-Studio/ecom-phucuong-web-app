import React from 'react'
import TabbarSearchInput from './TabbarSearchInput'
import TabbarSearchButton from './TabbarSearchButton'

const TabbarSearch = () => {
  return (
    <form className="tabbar__search">
      <TabbarSearchInput />
      <TabbarSearchButton />
    </form>
  )
}

export default TabbarSearch