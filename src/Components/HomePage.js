import React from "react";
import Cards_HomePage from "./Cards_HomePage";

function HomePage() {
  return (
    <div className="container mt-5">
      <div className="row  my-2">
        <Cards_HomePage
          title="Staffs"
          imageURL="https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_1280.jpg"
        />
        <Cards_HomePage
          title="Project"
          imageURL="https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg"
        />
      </div>
      <div className="row d-flex flex-wrap my-2">
        <Cards_HomePage
          title="Profit"
          imageURL="https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649__340.jpg"
        />
        <Cards_HomePage
          title="Asset "
          imageURL="https://cdn.pixabay.com/photo/2018/05/23/04/33/cryptocurrency-3423267__340.jpg"
        />
      </div>
      <div className="row d-flex flex-wrap my-2">
        <Cards_HomePage
          title="Analyse Business"
          imageURL="https://cdn.pixabay.com/photo/2015/02/05/08/12/stock-624712__340.jpg"
        />
        <Cards_HomePage
          title="Recruitmemnt"
          imageURL="https://cdn.pixabay.com/photo/2018/03/03/20/02/laptop-3196481__340.jpg"
        />
      </div>
      <div className="row d-flex flex-wrap">
        <Cards_HomePage
          title="News Feed"
          imageURL="https://cdn.pixabay.com/photo/2019/03/27/09/42/finance-4084632__340.jpg"
          link="/newsFeed"
        />
        <Cards_HomePage
          title="Mail"
          imageURL="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=918&q=80"
        />
      </div>
    </div>
  );
}

export default HomePage;
