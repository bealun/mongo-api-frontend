import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { FirstPage } from './componets/FirstPage'
import { Salty } from './componets/Salty'
import { Sweet } from 'componets/Sweet';
import { SweetItem } from './componets/SweetItem'
import { ItemSalty } from './componets/ItemSalty'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact>
          <FirstPage />
        </Route>


        <Route path="/salty" exact>
          <Salty />
        </Route>

        <Route path="/salty/:id" exact>
          <ItemSalty />
        </Route>

        <Route path="/sweet" exact>
          <Sweet />
        </Route>

        <Route path="/sweet/:id" exact>
          <SweetItem />
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

