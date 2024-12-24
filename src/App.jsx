import "./App.css";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import img1 from "./assets/image/image1.jpeg";
import img2 from "./assets/image/image2.jpeg";
import img3 from "./assets/image/image3.jpeg";
import img4 from "./assets/image/image4.jpeg";
import img5 from "./assets/image/image5.jpeg";
import img6 from "./assets/image/image6.jpeg";


function App() {
  return (
    <div className="h-screen w-screen">
      <div className="bg-image"></div>
      <div className="overlay"></div>
      <div>
        <NavBar />
      </div>
      <div className="flex flex-col gap-4 items-center mt-8">
        <div className="flex gap-2">
          <Card
            imageUrl={img1}
            name={"Boiled Eggs"}
            description={
              "Perfectly cooked eggs with a tender yolk, ideal for a healthy and protein-packed meal"
            }
            price={"$10.00"}
          />
          <Card
            imageUrl={img2}
            name={"RAMEN"}
            description={
              "A bowl of flavorful broth, tender noodles, and fresh toppings for a comforting delight"
            }
            price={"$25.00"}
          />
          <Card
            imageUrl={img3}
            name={"GRILLED CHICKEN"}
            description={
              "Juicy, smoky, and perfectly seasoned chicken for a wholesome and savory experience"
            }
            price={"$45.00"}
          />
        </div>
        <div className="flex gap-2">
          <Card
            imageUrl={img4}
            name={"CAKE"}
            description={
              "Soft, moist, and sweet, a treat perfect for celebrations or satisfying your dessert cravings"
            }
            price={"$18.00"}
          />
          <Card
            imageUrl={img5}
            name={"BURGER"}
            description={
              "A classic combination of a juicy patty, fresh veggies, and rich sauces in a soft bun"
            }
            price={"$23.00"}
          />
          <Card
            imageUrl={img6}
            name={"PANCAKE"}
            description={
              "Fluffy, golden delights, served with syrup, fruits, or a sprinkle of powdered sugar"
            }
            price={"$25.00"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
