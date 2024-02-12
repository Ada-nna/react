import { Button as CButton } from "./components/button";

function App() {
  return (
    <section>
      <div className="container">
        <form>
          <input type="text" placeholder="Enter your content" />
          <CButton>Submit</CButton>
        </form>
        <ul>
          <li>Todos</li>
          <li>
            <p>helo world</p>
            <CButton>Delete</CButton>
          </li>
          <li>
            <p>helo world</p>
            <CButton>Delete</CButton>
          </li>
          <li>
            <p>helo world</p>
            <CButton>Delete</CButton>
          </li>
          <li>
            <p>helo world</p>
            <CButton>Delete</CButton>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default App;
