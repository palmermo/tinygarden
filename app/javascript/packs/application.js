// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)


import ReactOnRails from 'react-on-rails';
    
    import Cart from '../bundles/Cart/components/Cart';
    import Plants from '../bundles/Plants/components'
    
    // This is how react_on_rails can see the HelloWorld in the browser.
    ReactOnRails.register({
      Cart, Plants
    });



