# Fruit Picker v1.1.3

This app shows current availability for certain products at Apple stores in the United States. A live environment for this app can be accessed at https://fruitinventory.herokuapp.com/

# A node.js/React web application

1. Download the project zip file and unpack it.
2. Using a command line tool, from inside the project directory run `npm install` to load this project's dependencies.
3. Run `npm start` to start the web server.
4. Navigate your browser to http://localhost:3000/
5. Type in a store name (e.g. "Downtown Brooklyn") and select the store.
6. Select a product category to view current availability of products. The five closest Apple stores are also shown for easy navigation.

If the Google Maps view does not load completely for you, edit Line 18 of `./src/index.js` to include a valid key from https://cloud.google.com/maps-platform/ and enable the Maps Javascript API.

An older stable version of this app running Express with Pug templating is in the `legacy-express` directory.
