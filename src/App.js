import "./App.css";
import Form from "./Form";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Form />
        <Weather />
        <Footer />
      </div>
    </div>
  );
}
