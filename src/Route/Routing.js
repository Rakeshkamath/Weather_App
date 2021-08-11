import { Switch,Route } from "react-router";
import React from "react";
import Home from "../components/Menu_bar/Home/home";
import Favourite from "../components/Menu_bar/Favourite/favourite";
import Recent_Search from "../components/Menu_bar/RecentSearch/recentSearch";

const Routing=()=>{
    return(
<Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/favourite" component={Favourite} />
        <Route  path="/recent-search" component={Recent_Search} />
        </Switch>
    );
}
export default Routing;