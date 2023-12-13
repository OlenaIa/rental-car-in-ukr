## App for a car rental company

## Description.

The application consists of 3 pages:

- home page with a general description of the services provided by the company.
- a page containing a catalogue of cars of various configurations, which the
  user can filter by brand, price per hour of car rental and number of
  kilometres, travelled by the car during its operation (mileage).
- a page with ads that have been added to the user's favourites.

All pages have a header with a page menu, a viewing area for the main
information, and a footer with the contact details of the app owner.

## Home page.

1. It has a hero section with a general description of the service and a link to
   the catalogue page car catalogue page.
2. If necessary, sections with information about the company, detailed
   description of services and car rental conditions.

## Car catalogue page

### Section with car cards

1. When you open the page, the first 12 car rental ads from the database are
   rendered.
2. Each next 12 ads from the database can be loaded on the page by clicking on
   the `Load more` button. It is located under the ads.
3. When all the ads from the database are loaded, the `Load more` button
   disappears.
4. When you click on the heart button on the ad card, it is added to the list of
   favourites to the list of favourites, and the colour of the button changes to
   blue.
5. When the page refreshes, the end result of the user's actions is recorded
   (favourites cars remain in the list of favourites). Implemented using local
   storage.
6. If you click on the "heart" button again, the advert is removed from the the
   list of favourites, and the colour of the button changes to its original
   state.
7. Clicking on the Learn more button opens a modal window with detailed
   information about the car and its rental conditions.

### Modal window with detailed information about the car

1. The modal window is closed by clicking on the button in the form of a
   "cross", by clicking on the `backdrop` button or by pressing the `Esc` key.
2. The `Rental car` button allows the user to contact the company by phone
   number +380730000000.

   ### Vehicle card filtering section

3. The first car search field by brand is implemented using `dropdown` with car
   brands. The list of car brands consists of all brands, that are already in
   the database.
4. The second search field for cars in the price range up to the specified
   amount per hour of rent the car is implemented with the help of `dropdown`.
   The step is $10.
5. The third group of `input` allows you to choose a car in the selected
   interval of its mileage. The user enters an integer into the field, and it is
   displayed separated by commas, after thousands (for example, the user enters
   4500 and sees 4,500).
6. The car mileage fields can be reset by pressing the 'delete' button (with a
   cross). It appears as soon as the field is no longer empty.
7. All selected filters can be reset simultaneously by pressing the `Reset`
   button that appears button that appears if at least one filter is selected.
8. The car search is performed by pressing the `Search` button.

## Page of selected cars

1. Renders the cars that have been added to the list of favourites.
2. If there are no selected cars, a blank page is displayed with a blank page
   with an offer to visit the car catalogue and a link to the catalogue.

## Test task

## Description.

Create an application for a company that provides car rental services in
Ukraine. for rent in Ukraine. The application consists of 3 pages:

- home page with a general description of the services provided by the company.
  Styling and design is at your discretion.
- a page containing a catalogue of cars of various configurations, which the
  user can filter by brand, price per hour of car rental, and number of
  kilometres, travelled by the car during its operation (mileage).
- a page with ads that have been added to the user's favourites The external The
  appearance of the application should consist of a sidebar and a viewing area.

## Terms of reference

1. According to.
   [layout](https://www.figma.com/file/XhC8FSCfAkraEF5l7Hx4fL/Test?type=design&node-id=0-1&mode=design&t=Ed3b0heFOmE2LSXU-0)
   implement a car rental ad card.
2. On the first page of the catalogue, 8 ads should be rendered, and the rest
   should be by clicking on the `Load more` button.
3. When you click on the "heart" button on the ad card, it should should be
   added to the list of favourites and the colour of the button should change.
4. When the page is refreshed, the end result of the user's actions should be
   recorded. That is, if you add an ad to your favourites and refresh the page,
   the button still still remains in the "favourite ad" state with the
   corresponding colour.
5. If you click on the heart button again, the ad should be removed from the
   list of favourites, and the colour of the button should change to its
   original state.
6. When you click on the Learn more button, a modal window should open with
   detailed information about the car and its rental conditions.
7. The modal window should be closed by clicking on the "cross" button, by
   clicking on the `backdrop` button or by pressing the `Esc` key.
8. In the code, the mileage of the car must be written in one value (for
   example, 4500). В UI - it is displayed separated by commas (4,500).
9. The `Rental car` button should be implemented as a link that will allow the
   user to contact the company by phone number +380730000000.

Create a routing using React Router. The application should have the following
routes:

- `"/"` - the home page with a general description of the services provided by
  the company
- `"/catalogue"` - a page containing a catalogue of cars of different
  configurations
- `"/favourites"` - a page with ads that have been added by the user to
  favourites If the user has followed a route that does not exist, he must be
  redirect to the home page. To work with the list of ads, create your personal
  backend for development using the UI service https://mockapi.io/. Create the
  adverts resource. Use the resource builder and describe the advert object as
  described below.

Advert

1. Create an `advert` in **Mockapi** with the following fields: `id`, `year`,
   `make`, `model`, `type`, `img`, `description`, `fuelConsumption`,
   `engineSize`, `accessories`, `functionalities`, `rentalPrice`,
   `rentalCompany`, `address`, `rentalConditions`, `mileage` (see the screenshot
   below). To fill the collection you can take
   [adverts.json](https://drive.google.com/file/d/1sDtZQX4awbRiqa5mSagngqKBZeMMRUMO/view)
2. You can choose the car image yourself.
3. The database should contain at least 32 ads with different values (at your
   discretion). Pagination is implemented, where one pagination page should
   contain 8 ads.

## Additional task

Add filtering:

1. `dropdown` with car brands
   [makes.json](https://drive.google.com/file/d/1ywi6jdoqq0llsd2yDcRKwuLhuL3ds_5z/view) -
   show ads with cars of the corresponding brand
2. `dropdown` with prices per hour of car rental ($10 increments) - show ads
   with cars whose rental price is within the price range selected by the by the
   user
3. group `input` to determine the range of mileage within which the user will
   search for ads

## Execution criteria

- The layout is fixed in `rx`, semantic and valid.
- There are no errors in the browser console.
- Interactivity works according to the terms of reference.
- The code is formatted and without comments.
- The **README.md** should be described in the repository.
- The project is deployed on **github pages** or **netlify.com**.
