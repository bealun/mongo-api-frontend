import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { FirstPage } from './componets/FirstPage'
import { Salty } from './componets/Salty'
import { Sweet } from 'componets/Sweet';

export const App = () => {
  return (
    // <main>
    //   <FirstPage />
    // </main>
    <BrowserRouter>
      <Switch>

        <Route path="/" exact>
          <FirstPage />
        </Route>


        <Route path="/salty">
          <Salty />
        </Route>

        <Route path="/sweet">
          <Sweet />
        </Route>


      </Switch>
    </BrowserRouter>
  )
}

    // <BrowserRouter>
    //   <Switch>

    //     <Route path="/" exact>
    //       <FirstPage />
    //     </Route>

    //     // The salty
    //     <Route path="/salty">
    //       <DetailsInfo />
    //     </Route>

    //     <Route path="/salty/:id">
    //       <FoodItem />
    //     </Route>


    //     // The sweet
    //     <Route path="/sweet">
    //       <Sweet />
    //     </Route>

    //     <Route path="/sweet/:id">
    //       <DessertItem />
    //     </Route>

    //   </Switch>
    // </BrowserRouter>

