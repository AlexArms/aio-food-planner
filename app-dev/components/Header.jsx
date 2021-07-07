import React from 'react';
import SiteSearch from './SiteSearch.jsx';
import { HeadContainer, AppTitle, Slogan } from '../styled-components.js';

const Header = () => {

  return (
    <HeadContainer>
      <Slogan>Meal planning simplified</Slogan>
      <AppTitle>All-In-One Food Planner</AppTitle>
      <SiteSearch />
    </HeadContainer>
  );

};

export default Header;