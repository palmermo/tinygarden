import ReactOnRails from 'react-on-rails';

import Cart from '../bundles/Cart/components/Cart';
import PlantList from '../bundles/Plants/components/PlantList'
import Products from '../bundles/Products/components/Products'

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Cart,
  PlantList,
  Products
});