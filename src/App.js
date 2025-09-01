

import Hero from "./Components/Hero";
// import Navbar from "./Components/Navbar";
// import { getTickets, getUsers } from "./services/api";

function App() {
 
    

  
    // const handleGroupChange = (group) => {
    //     setGroupBy(group);
    // };

    // const handleSortChange = (sort) => {
    //     setSortBy(sort);
    // };

    return (
        <div className="App">
            {/* <Navbar
                onGroupChange={handleGroupChange}
                onSortChange={handleSortChange}
            /> */}
            <Hero />
                {/* // tickets={tickets}
                // users={users}
                // groupBy={groupBy}
                // sortBy={sortBy} */}
           
        </div>
    );
}

export default App;
